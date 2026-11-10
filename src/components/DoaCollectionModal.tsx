import React, { useState } from 'react';
import { X, BookOpen, Lock, CheckCircle2 } from 'lucide-react';
import { PosItem } from '../types';
import { DoaCard } from './DoaCard';
import { PosIcon } from './PosIcons';
import { playClickSound, stopSpeech } from '../utils/audio';

interface DoaCollectionModalProps {
  posList: PosItem[];
  completedPos: number[];
  soundEnabled: boolean;
  onClose: () => void;
}

export const DoaCollectionModal: React.FC<DoaCollectionModalProps> = ({
  posList,
  completedPos,
  soundEnabled,
  onClose
}) => {
  const [selectedPosId, setSelectedPosId] = useState<number>(completedPos[0] || 1);

  const selectedPos = posList.find((p) => p.id === selectedPosId) || posList[0];
  const isSelectedUnlocked = completedPos.includes(selectedPos.id);

  const handleClose = () => {
    stopSpeech();
    playClickSound();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-emerald-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl border-4 border-amber-400 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-700 via-green-600 to-emerald-800 p-4 sm:p-5 text-white flex items-center justify-between border-b-4 border-amber-400">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-400 p-2 shadow-md flex items-center justify-center text-emerald-950">
              <BookOpen className="w-6 h-6 text-emerald-950" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 bg-emerald-900 px-2 py-0.5 rounded-full">
                KHAZANAH DOA DTA AL HIDAYAH
              </span>
              <h2 className="text-lg sm:text-2xl font-black text-white tracking-wide mt-0.5">
                Buku Koleksi Doa Harian Santri
              </h2>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="w-10 h-10 rounded-full bg-emerald-900/60 hover:bg-emerald-800 text-white flex items-center justify-center border border-emerald-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col lg:flex-row gap-5">
          {/* Left: Pos List Selector */}
          <div className="w-full lg:w-72 flex-shrink-0 space-y-2">
            <div className="flex items-center justify-between px-1 mb-1">
              <span className="text-xs font-black uppercase text-emerald-900">
                Pilih Doa Pos:
              </span>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                {completedPos.length} / {posList.length} Terbuka
              </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 max-h-[220px] lg:max-h-[460px] overflow-y-auto pr-1">
              {posList.map((pos) => {
                const isUnlocked = completedPos.includes(pos.id);
                const isSelected = pos.id === selectedPos.id;

                return (
                  <button
                    key={pos.id}
                    onClick={() => {
                      stopSpeech();
                      playClickSound();
                      setSelectedPosId(pos.id);
                    }}
                    className={`w-full text-left p-2.5 sm:p-3 rounded-2xl flex items-center gap-2.5 border-2 transition-all ${
                      isSelected
                        ? 'bg-amber-100 border-amber-400 text-emerald-950 shadow-sm ring-2 ring-amber-300'
                        : isUnlocked
                        ? 'bg-emerald-50/70 hover:bg-emerald-100 border-emerald-200 text-emerald-900'
                        : 'bg-slate-100 border-slate-200 text-slate-500 hover:bg-slate-200/80'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-xl bg-white shadow-2xs flex items-center justify-center flex-shrink-0 border border-emerald-200">
                      <PosIcon type={pos.iconType} size={20} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold text-slate-500 block leading-tight">
                        Pos {pos.id}
                      </span>
                      <span className="text-xs font-extrabold truncate block">
                        {pos.shortTitle}
                      </span>
                    </div>

                    {isUnlocked ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    ) : (
                      <Lock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Selected Doa Card View */}
          <div className="flex-1 min-w-0">
            {isSelectedUnlocked ? (
              <div className="space-y-4">
                <div className="bg-emerald-100/70 rounded-2xl p-3 border border-emerald-300 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">⭐</span>
                    <span className="text-xs font-bold text-emerald-900">
                      Doa ini telah berhasil kamu buka di <strong>{selectedPos.name}</strong>!
                    </span>
                  </div>
                </div>

                {/* Doa Card Component */}
                <DoaCard
                  doa={selectedPos.doa}
                  bonusDoa={selectedPos.bonusDoa}
                  soundEnabled={soundEnabled}
                  isUnlocked={true}
                />
              </div>
            ) : (
              <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-6 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-300 space-y-3">
                <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                  <Lock className="w-8 h-8" />
                </div>
                <h3 className="text-base font-black text-slate-700">
                  Doa Pos Ini Masih Terkunci
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-sm">
                  Selesaikan tantangan di <strong>{selectedPos.name}</strong> pada Peta Petualangan untuk membuka doa ini beserta pelafalan audionya!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t-2 border-slate-200 flex justify-end">
          <button
            onClick={handleClose}
            className="px-5 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-xs"
          >
            Tutup Buku Doa
          </button>
        </div>
      </div>
    </div>
  );
};
