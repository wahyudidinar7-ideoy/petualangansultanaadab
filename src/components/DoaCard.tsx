import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, CheckCircle2 } from 'lucide-react';
import { DoaItem } from '../types';
import { speakText, stopSpeech } from '../utils/audio';

interface DoaCardProps {
  doa: DoaItem;
  bonusDoa?: DoaItem;
  soundEnabled: boolean;
  isUnlocked?: boolean;
}

export const DoaCard: React.FC<DoaCardProps> = ({
  doa,
  bonusDoa,
  soundEnabled,
  isUnlocked = true
}) => {
  const [activeTab, setActiveTab] = useState<'main' | 'bonus'>('main');
  const [isPlaying, setIsPlaying] = useState(false);

  const currentDoa = activeTab === 'main' ? doa : (bonusDoa || doa);

  const handlePlayAudio = () => {
    if (isPlaying) {
      stopSpeech();
      setIsPlaying(false);
      return;
    }

    if (!soundEnabled) return;

    setIsPlaying(true);
    // Recite Arabic using Web Speech API with ar-SA
    speakText(currentDoa.arab, 'ar-SA', () => {
      setIsPlaying(false);
    });
  };

  return (
    <div className="w-full bg-gradient-to-br from-amber-50 via-white to-emerald-50 rounded-2xl border-3 border-amber-300 p-4 sm:p-6 shadow-xl relative overflow-hidden">
      {/* Decorative Islamic arch background watermark */}
      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-amber-200/30 blur-xl pointer-events-none"></div>

      {/* Header bar with Bonus Tab if available */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b-2 border-amber-200/80 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-amber-400 flex items-center justify-center text-emerald-950 font-bold shadow-xs">
            <Sparkles className="w-4 h-4 text-emerald-950" />
          </div>
          <div>
            <span className="text-[10px] font-black tracking-wider uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
              KARTU DOA SANTRI
            </span>
            <h3 className="text-base sm:text-lg font-black text-emerald-950 mt-0.5">
              {currentDoa.title}
            </h3>
          </div>
        </div>

        {/* Tab switch if bonus doa is available (e.g. Pos Makan) */}
        {bonusDoa && (
          <div className="flex items-center gap-1 bg-emerald-100 p-1 rounded-xl border border-emerald-300 text-xs font-bold">
            <button
              onClick={() => {
                stopSpeech();
                setIsPlaying(false);
                setActiveTab('main');
              }}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                activeTab === 'main'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-emerald-800 hover:bg-emerald-200'
              }`}
            >
              Sebelum Makan
            </button>
            <button
              onClick={() => {
                stopSpeech();
                setIsPlaying(false);
                setActiveTab('bonus');
              }}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                activeTab === 'bonus'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-emerald-800 hover:bg-emerald-200'
              }`}
            >
              Sesudah Makan (Bonus ⭐)
            </button>
          </div>
        )}
      </div>

      {/* (1) Tulisan Arab font Traditional Arabic besar dan jelas */}
      {/* Strict Requirement: JANGAN tampilkan bacaan latin sama sekali! */}
      <div className="bg-white/95 rounded-2xl p-4 sm:p-6 border-2 border-emerald-200 shadow-inner mb-4 relative">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
            Lafadz Doa (Bahasa Arab)
          </span>

          {/* Tombol Dengar Audio */}
          <button
            onClick={handlePlayAudio}
            disabled={!soundEnabled}
            title={soundEnabled ? 'Dengarkan Pelafalan Doa Bahasa Arab' : 'Nyalakan Suara di Header terlebih dahulu'}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border shadow-xs transition-all active:scale-95 ${
              !soundEnabled
                ? 'bg-slate-100 text-slate-400 border-slate-300 cursor-not-allowed'
                : isPlaying
                ? 'bg-amber-400 text-emerald-950 border-amber-500 animate-pulse'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-700'
            }`}
          >
            {isPlaying ? (
              <>
                <VolumeX className="w-4 h-4 text-emerald-950" />
                <span>Membaca... 🔊</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4" />
                <span>🔊 Dengar</span>
              </>
            )}
          </button>
        </div>

        {/* Large Crisp Traditional Arabic Typography */}
        <p
          dir="rtl"
          lang="ar"
          className="font-arabic text-2xl sm:text-3xl md:text-4xl text-emerald-950 text-right leading-loose tracking-wide py-2 font-medium"
        >
          {currentDoa.arab}
        </p>
      </div>

      {/* (2) Artinya dalam Bahasa Indonesia */}
      <div className="bg-emerald-50/90 rounded-xl p-3.5 sm:p-4 border border-emerald-300 mb-3">
        <div className="text-[11px] font-extrabold uppercase text-emerald-800 tracking-wider mb-1 flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>Artinya:</span>
        </div>
        <p className="text-sm sm:text-base font-semibold text-emerald-950 italic leading-relaxed">
          "{currentDoa.artinya}"
        </p>
      </div>

      {/* (3) Perowi Hadits */}
      <div className="flex items-center justify-between text-xs font-bold text-amber-900 bg-amber-100/80 px-3.5 py-2 rounded-xl border border-amber-300">
        <span className="text-[11px] text-amber-800 uppercase tracking-wider font-extrabold">Sumber Perowi:</span>
        <span className="text-xs sm:text-sm font-black text-amber-950">{currentDoa.perowi}</span>
      </div>
    </div>
  );
};
