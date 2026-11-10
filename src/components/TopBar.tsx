import React, { useState } from 'react';
import { Edit3, Check, BookOpen, Trophy, User } from 'lucide-react';
import { playClickSound } from '../utils/audio';

interface TopBarProps {
  studentName: string;
  onUpdateName: (name: string) => void;
  stars: number;
  totalPos: number;
  selectedAvatar: 'boy' | 'girl';
  onToggleAvatar: () => void;
  onOpenDoaCollection: () => void;
  onOpenLeaderboard: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  studentName,
  onUpdateName,
  stars,
  totalPos,
  selectedAvatar,
  onToggleAvatar,
  onOpenDoaCollection,
  onOpenLeaderboard
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(studentName);

  const handleSaveName = () => {
    if (tempName.trim()) {
      onUpdateName(tempName.trim());
    } else {
      setTempName(studentName);
    }
    setIsEditing(false);
    playClickSound();
  };

  const progressPercentage = Math.min(100, Math.round((stars / totalPos) * 100));

  return (
    <div className="w-full bg-emerald-50 border-b-2 border-emerald-200/80 shadow-sm py-2.5 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-3">
        {/* Left: Nama Santri & Avatar Selector */}
        <div className="flex items-center gap-2 sm:gap-3 w-full lg:w-auto justify-between lg:justify-start">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                playClickSound();
                onToggleAvatar();
              }}
              title="Klik untuk ganti Avatar (Santri Putra / Putri)"
              className="relative p-1 rounded-xl bg-white border-2 border-emerald-300 shadow-xs hover:border-amber-400 hover:scale-105 transition-all group flex items-center gap-1.5"
            >
              <span className="text-xl sm:text-2xl" role="img" aria-label="avatar">
                {selectedAvatar === 'boy' ? '👦' : '🧕'}
              </span>
              <span className="text-[11px] font-bold text-emerald-800 hidden sm:inline pr-1">
                {selectedAvatar === 'boy' ? 'Putra' : 'Putri'}
              </span>
              <span className="text-[10px] text-amber-600 font-bold bg-amber-100 rounded-full px-1.5">
                Ganti
              </span>
            </button>

            {/* Nama Santri Editor */}
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border-2 border-emerald-200 shadow-xs">
              <span className="text-xs font-semibold text-emerald-600 hidden sm:inline">Santri:</span>
              {isEditing ? (
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    value={tempName}
                    maxLength={25}
                    onChange={(e) => setTempName(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                    autoFocus
                    className="text-xs sm:text-sm font-bold text-emerald-950 px-2 py-0.5 border border-emerald-400 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 w-32 sm:w-40"
                  />
                  <button
                    onClick={handleSaveName}
                    className="p-1 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
                  >
                    <Check className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-extrabold text-emerald-950 truncate max-w-[130px] sm:max-w-[180px]">
                    {studentName || 'Santri Hebat'}
                  </span>
                  <button
                    onClick={() => {
                      setTempName(studentName);
                      setIsEditing(true);
                      playClickSound();
                    }}
                    title="Ganti nama santri"
                    className="p-1 rounded-md text-emerald-600 hover:text-emerald-900 hover:bg-emerald-50 transition-colors"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Quick Buttons on Mobile */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              onClick={() => {
                playClickSound();
                onOpenDoaCollection();
              }}
              className="p-1.5 rounded-xl bg-amber-400 text-amber-950 font-bold text-xs shadow-xs border border-amber-500 flex items-center gap-1"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Doa</span>
            </button>
            <button
              onClick={() => {
                playClickSound();
                onOpenLeaderboard();
              }}
              className="p-1.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-xs border border-emerald-700 flex items-center gap-1"
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>Top 5</span>
            </button>
          </div>
        </div>

        {/* Center/Right: Bintang & Progress Menuju Masjid Al Hidayah */}
        <div className="flex items-center gap-3 sm:gap-6 w-full lg:w-auto justify-between lg:justify-end">
          {/* Total Bintang */}
          <div className="flex items-center gap-2 bg-gradient-to-r from-amber-100 to-yellow-200 border-2 border-amber-300 px-3.5 py-1.5 rounded-2xl shadow-xs">
            <span className="text-xl animate-bounce">⭐</span>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-amber-800 leading-none">Bintang Terkumpul</span>
              <span className="text-sm sm:text-base font-black text-amber-950">
                {stars} <span className="text-xs font-semibold text-amber-700">/ {totalPos}</span>
              </span>
            </div>
          </div>

          {/* Progress Masjid Al Hidayah (0 - 100%) */}
          <div className="flex items-center gap-2.5 flex-1 lg:w-60 max-w-xs">
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-bold text-emerald-800 flex items-center gap-1">
                  <span>🕌</span> Menuju Masjid Al Hidayah
                </span>
                <span className="text-[11px] font-extrabold text-emerald-950">{progressPercentage}%</span>
              </div>
              <div className="w-full h-3 bg-emerald-200 rounded-full overflow-hidden p-0.5 border border-emerald-400 shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 via-green-400 to-amber-400 rounded-full transition-all duration-700 ease-out shadow-sm"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Desktop Nav Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => {
                playClickSound();
                onOpenDoaCollection();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold text-xs shadow-xs border-2 border-amber-500 transition-all active:scale-95"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Koleksi Doa</span>
            </button>
            <button
              onClick={() => {
                playClickSound();
                onOpenLeaderboard();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs shadow-xs border-2 border-emerald-800 transition-all active:scale-95"
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>Peringkat Kelas</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
