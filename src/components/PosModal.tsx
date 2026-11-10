import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import { PosItem } from '../types';
import { PosIcon } from './PosIcons';
import { OptionVisual } from './OptionVisual';
import { DoaCard } from './DoaCard';
import { playSuccessChime, playWrongSound, playClickSound, speakText, stopSpeech } from '../utils/audio';

interface PosModalProps {
  pos: PosItem;
  onClose: () => void;
  onCompletePos: (posId: number) => void;
  isAlreadyCompleted: boolean;
  soundEnabled: boolean;
}

export const PosModal: React.FC<PosModalProps> = ({
  pos,
  onClose,
  onCompletePos,
  isAlreadyCompleted,
  soundEnabled
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState<boolean>(isAlreadyCompleted);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Trigger confetti burst
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#facc15', '#22c55e', '#3b82f6', '#ec4899', '#f97316']
      });
    } catch {
      // ignore
    }
  };

  const handleSelectOption = (optionId: string) => {
    setSelectedOptionId(optionId);
    setErrorMessage(null);
    playClickSound();

    const selected = pos.options.find((opt) => opt.id === optionId);
    if (!selected) return;

    if (selected.isCorrect) {
      setIsSubmitting(true);
      setIsAnsweredCorrectly(true);
      triggerConfetti();

      if (soundEnabled) {
        playSuccessChime();
        speakText('Masya Allah, Hebat sekali!', 'id-ID');
      }

      onCompletePos(pos.id);
      setIsSubmitting(false);
    } else {
      if (soundEnabled) {
        playWrongSound();
      }
      setErrorMessage('Coba lagi ya, kamu pasti bisa! Santri shalih pantang menyerah. 😊');
    }
  };

  const handleClose = () => {
    stopSpeech();
    playClickSound();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-emerald-950/70 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border-4 border-amber-300 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 p-4 sm:p-5 text-white flex items-center justify-between border-b-4 border-amber-400">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 p-1.5 shadow-md flex items-center justify-center text-emerald-950 border-2 border-amber-200">
              <PosIcon type={pos.iconType} size={32} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-amber-300 bg-emerald-800/80 px-2 py-0.5 rounded-full border border-emerald-500">
                  Pos {pos.id} dari 10
                </span>
                <span className="text-xs font-semibold text-emerald-200 hidden sm:inline">
                  • {pos.situationTag}
                </span>
              </div>
              <h2 className="text-lg sm:text-2xl font-black text-amber-300 tracking-wide mt-0.5">
                {pos.name}
              </h2>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="w-10 h-10 rounded-full bg-emerald-800/80 hover:bg-emerald-700 text-white flex items-center justify-center border border-emerald-400 transition-colors shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5">
          {/* 3D-styled Situation Illustration Box */}
          <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 rounded-2xl p-4 sm:p-5 border-2 border-emerald-200 shadow-inner flex flex-col sm:flex-row items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-200 p-3 shadow-md flex items-center justify-center flex-shrink-0 border-2 border-white">
              <PosIcon type={pos.iconType} size={48} />
            </div>
            <div className="text-center sm:text-left flex-1">
              <span className="text-[11px] font-black uppercase text-emerald-700 tracking-wider">
                Situasi Santri:
              </span>
              <h3 className="text-sm sm:text-base font-extrabold text-emerald-950 mb-1">
                {pos.situationTitle}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-900/90 leading-relaxed font-medium">
                {pos.situationDesc}
              </p>
            </div>
          </div>

          {/* Question Section */}
          <div className="bg-amber-50 rounded-2xl p-4 sm:p-5 border-2 border-amber-200 shadow-xs">
            <span className="text-[11px] font-extrabold text-amber-900 uppercase tracking-wider bg-amber-200 px-2.5 py-0.5 rounded-full inline-block mb-2">
              Pertanyaan Adab:
            </span>
            <p className="text-sm sm:text-lg font-black text-emerald-950 leading-snug">
              {pos.question}
            </p>
          </div>

          {/* 3 Answer Options with Picture + Text */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Pilih satu jawaban yang paling beradab:
            </span>

            <div className="grid grid-cols-1 gap-3">
              {pos.options.map((option) => {
                const isSelected = selectedOptionId === option.id;
                const isCorrect = option.isCorrect;

                let stateClasses = 'bg-white hover:bg-emerald-50/70 border-2 border-slate-200 text-slate-800';

                if (isAnsweredCorrectly && isCorrect) {
                  stateClasses = 'bg-emerald-50 border-3 border-emerald-500 text-emerald-950 shadow-md ring-2 ring-emerald-300';
                } else if (isSelected && !isCorrect) {
                  stateClasses = 'bg-rose-50 border-2 border-rose-400 text-rose-950';
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectOption(option.id)}
                    disabled={isAnsweredCorrectly || isSubmitting}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-2xl flex items-center gap-3.5 transition-all transform active:scale-98 ${stateClasses}`}
                  >
                    {/* Option Label (A, B, C) */}
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0 shadow-xs ${
                        isAnsweredCorrectly && isCorrect
                          ? 'bg-emerald-500 text-white'
                          : isSelected && !isCorrect
                          ? 'bg-rose-500 text-white'
                          : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                      }`}
                    >
                      {option.label}
                    </div>

                    {/* Option Picture / Icon Illustration */}
                    <OptionVisual iconKey={option.iconKey} />

                    {/* Option Text */}
                    <div className="flex-1">
                      <span className="text-xs sm:text-sm md:text-base font-bold leading-snug block">
                        {option.text}
                      </span>
                    </div>

                    {/* Status check icon */}
                    {isAnsweredCorrectly && isCorrect && (
                      <div className="text-xl animate-bounce">
                        ⭐
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Gentle Error Message when answer is wrong */}
          {errorMessage && (
            <div className="bg-rose-50 border-2 border-rose-300 text-rose-900 rounded-2xl p-3.5 flex items-center gap-3 animate-shake">
              <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
              <p className="text-xs sm:text-sm font-bold">{errorMessage}</p>
            </div>
          )}

          {/* Correct Answer Celebration & KARTU DOA */}
          {isAnsweredCorrectly && (
            <div className="space-y-4 pt-2 border-t-2 border-emerald-200 animate-in fade-in zoom-in-95 duration-300">
              <div className="bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 text-white p-3.5 rounded-2xl flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl animate-spin">🌟</span>
                  <div>
                    <h4 className="font-black text-sm sm:text-base tracking-wide text-amber-300">
                      MASYA ALLAH HEBAT!
                    </h4>
                    <p className="text-[11px] sm:text-xs text-emerald-100 font-semibold">
                      Kamu mendapatkan 1 Bintang Emas ⭐ dan membuka Kartu Doa!
                    </p>
                  </div>
                </div>
                <div className="bg-amber-400 text-emerald-950 font-black text-xs px-2.5 py-1 rounded-xl shadow-xs">
                  +1 Bintang
                </div>
              </div>

              {/* KARTU DOA: Only Arab, Artinya, Perowi (NO latin) */}
              <DoaCard
                doa={pos.doa}
                bonusDoa={pos.bonusDoa}
                soundEnabled={soundEnabled}
              />
            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 bg-slate-50 border-t-2 border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={handleClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 transition-colors shadow-xs"
          >
            Tutup
          </button>

          {isAnsweredCorrectly && (
            <button
              onClick={handleClose}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black text-emerald-950 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 hover:bg-amber-300 border-2 border-amber-500 shadow-md transition-all active:scale-95"
            >
              <span>Lanjut Petualangan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
