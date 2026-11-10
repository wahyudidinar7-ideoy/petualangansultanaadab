import React from 'react';
import { Volume2, VolumeX, ShieldCheck } from 'lucide-react';
import { playClickSound } from '../utils/audio';

interface HeaderProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenTeacherMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  soundEnabled,
  onToggleSound,
  onOpenTeacherMode
}) => {
  return (
    <header className="relative w-full bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 text-white shadow-xl border-b-4 border-amber-400">
      {/* Decorative Islamic arch patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="islamicPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke="#ffffff" strokeWidth="1" />
              <circle cx="20" cy="20" r="8" fill="none" stroke="#ffffff" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamicPattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-col md:flex-row items-center justify-between gap-3 relative z-10">
        {/* Emblem & Main Title */}
        <div className="flex items-center gap-3 sm:gap-4 text-center md:text-left">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-400 p-1 shadow-lg ring-2 ring-emerald-300 flex-shrink-0 flex items-center justify-center transform rotate-1 hover:rotate-0 transition-transform">
            <div className="w-full h-full rounded-xl bg-emerald-800 flex flex-col items-center justify-center text-amber-300 font-bold">
              <span className="text-[10px] leading-none uppercase tracking-wider text-emerald-200">DTU</span>
              <span className="text-sm font-extrabold leading-tight">🕌</span>
            </div>
          </div>

          <div>
            <div className="inline-block bg-emerald-900/60 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-semibold text-emerald-200 tracking-wider uppercase border border-emerald-400/30 mb-0.5">
              Pendidikan Agama Islam • DTA / SD Kelas 1-4
            </div>
            {/* Header: Judul "PETUALANGAN ADAB SANTRI - DTU Al Hidayah" warna kuning dengan outline hijau */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide uppercase text-header-styled drop-shadow-md">
              PETUALANGAN ADAB SANTRI - DTU Al Hidayah
            </h1>
          </div>
        </div>

        {/* Action Controls: Suara On/Off & Mode Guru */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
          {/* Suara On/Off Button */}
          <button
            onClick={() => {
              playClickSound();
              onToggleSound();
            }}
            title={soundEnabled ? 'Matikan Suara' : 'Nyalakan Suara'}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 border-2 ${
              soundEnabled
                ? 'bg-amber-400 text-emerald-950 border-amber-300 hover:bg-amber-300'
                : 'bg-emerald-900/80 text-emerald-200 border-emerald-700 hover:bg-emerald-800'
            }`}
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-4 h-4 text-emerald-950 animate-pulse" />
                <span>Suara: ON 🔊</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-emerald-300" />
                <span>Suara: OFF 🔇</span>
              </>
            )}
          </button>

          {/* Mode Guru Button */}
          <button
            onClick={() => {
              playClickSound();
              onOpenTeacherMode();
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white text-emerald-800 hover:bg-emerald-50 border-2 border-emerald-300 shadow-md transition-all active:scale-95 hover:shadow-lg"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Mode Guru</span>
          </button>
        </div>
      </div>
    </header>
  );
};
