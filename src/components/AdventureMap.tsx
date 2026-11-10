import React from 'react';
import { Lock, Star, Sparkles, BookOpenCheck } from 'lucide-react';
import { PosItem } from '../types';
import { PosIcon } from './PosIcons';
import { SantriBoy3D, SantriGirl3D } from './Characters';
import { playClickSound } from '../utils/audio';

interface AdventureMapProps {
  posList: PosItem[];
  completedPos: number[];
  currentActivePos: number;
  homeworkPos: number[];
  selectedAvatar: 'boy' | 'girl';
  onSelectPos: (pos: PosItem) => void;
  starsCount: number;
}

export const AdventureMap: React.FC<AdventureMapProps> = ({
  posList,
  completedPos,
  currentActivePos,
  homeworkPos,
  selectedAvatar,
  onSelectPos,
  starsCount
}) => {
  const isAllCompleted = starsCount >= 10;

  // Curvature coordinates for SVG path connecting 10 nodes (relative to 1000x850 viewport)
  // Pos 1 to 10 map coordinates
  const nodePositions = [
    { id: 1, x: 130, y: 740 },
    { id: 2, x: 330, y: 700 },
    { id: 3, x: 530, y: 740 },
    { id: 4, x: 740, y: 680 },
    { id: 5, x: 840, y: 500 },
    { id: 6, x: 620, y: 440 },
    { id: 7, x: 360, y: 440 },
    { id: 8, x: 180, y: 330 },
    { id: 9, x: 420, y: 220 },
    { id: 10, x: 690, y: 150 },
  ];

  // SVG curved path connecting all nodes in sequence
  const pathD = `
    M 130 740
    C 210 730, 260 710, 330 700
    C 400 690, 460 730, 530 740
    C 620 750, 680 720, 740 680
    C 810 630, 880 570, 840 500
    C 800 430, 710 440, 620 440
    C 520 440, 440 440, 360 440
    C 270 440, 160 390, 180 330
    C 200 270, 330 250, 420 220
    C 510 190, 600 170, 690 150
  `;

  return (
    <div className="relative w-full max-w-6xl mx-auto my-3 sm:my-6 rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-300 bg-gradient-to-b from-sky-300 via-sky-200 to-emerald-200 select-none">
      {/* Sky & Clouds background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Sun in top left */}
        <div className="absolute top-6 left-12 w-28 h-28 rounded-full bg-gradient-to-r from-amber-200 to-yellow-300 opacity-80 blur-xs animate-pulse"></div>
        <div className="absolute top-10 left-16 w-20 h-20 rounded-full bg-amber-100 opacity-90"></div>

        {/* Floating Clouds */}
        <div className="absolute top-8 left-1/4 animate-float opacity-90">
          <div className="w-28 h-10 bg-white rounded-full shadow-sm relative">
            <div className="absolute -top-5 left-4 w-14 h-14 bg-white rounded-full"></div>
            <div className="absolute -top-3 right-4 w-12 h-12 bg-white rounded-full"></div>
          </div>
        </div>

        <div className="absolute top-20 right-1/4 animate-float-delayed opacity-85">
          <div className="w-36 h-12 bg-white rounded-full shadow-sm relative">
            <div className="absolute -top-6 left-6 w-16 h-16 bg-white rounded-full"></div>
            <div className="absolute -top-4 right-6 w-14 h-14 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Rolling Green Hills Background */}
        <div className="absolute bottom-0 inset-x-0 h-4/5 pointer-events-none">
          <svg viewBox="0 0 1000 600" className="w-full h-full object-cover preserve-3d" preserveAspectRatio="none">
            {/* Distant Hills */}
            <path d="M0 250 Q250 150 500 230 T1000 200 L1000 600 L0 600 Z" fill="#86efac" opacity="0.6" />
            {/* Mid Hills */}
            <path d="M0 320 Q200 240 450 310 T1000 280 L1000 600 L0 600 Z" fill="#4ade80" opacity="0.8" />
            {/* Front Lush Grass */}
            <path d="M0 400 Q300 320 600 390 T1000 360 L1000 600 L0 600 Z" fill="#22c55e" />
          </svg>
        </div>

        {/* Decorative Palm Trees & Flowers */}
        <div className="absolute bottom-16 left-6 text-3xl opacity-90 hidden sm:block">🌴</div>
        <div className="absolute bottom-32 left-1/3 text-2xl opacity-80 hidden sm:block">🌸</div>
        <div className="absolute top-1/2 left-8 text-3xl opacity-80 hidden sm:block">🌳</div>
        <div className="absolute bottom-1/2 right-12 text-3xl opacity-85 hidden sm:block">🌴</div>
        <div className="absolute bottom-12 right-1/3 text-2xl opacity-75 hidden sm:block">🌼</div>
      </div>

      {/* Grand Masjid Al Hidayah at the Top Summit */}
      <div className="relative pt-6 pb-2 px-4 flex flex-col items-center z-10">
        <div
          className={`relative group transition-all duration-700 ${
            isAllCompleted
              ? 'scale-105 filter drop-shadow-[0_0_35px_rgba(250,204,21,0.95)]'
              : 'filter drop-shadow-lg'
          }`}
        >
          {/* Glowing Aura if all stars collected */}
          {isAllCompleted && (
            <div className="absolute -inset-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-emerald-400 rounded-full blur-xl opacity-80 animate-pulse pointer-events-none"></div>
          )}

          {/* Masjid Structure Illustration */}
          <div className="relative bg-gradient-to-b from-white via-emerald-50 to-emerald-100 border-4 border-amber-400 rounded-3xl p-3 sm:p-5 shadow-2xl flex flex-col items-center max-w-sm sm:max-w-md">
            {/* Golden Star Banner if completed */}
            {isAllCompleted && (
              <div className="absolute -top-4 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-emerald-950 text-xs sm:text-sm font-black px-4 py-1 rounded-full shadow-lg border-2 border-white flex items-center gap-1.5 animate-bounce">
                <Sparkles className="w-4 h-4 text-emerald-900" />
                MASYA ALLAH! MASJID AL HIDAYAH BERSINAR!
                <Sparkles className="w-4 h-4 text-emerald-900" />
              </div>
            )}

            {/* Masjid Domes & Minarets SVG */}
            <svg viewBox="0 0 240 140" className="w-48 sm:w-60 h-28 sm:h-36" fill="none">
              <defs>
                <linearGradient id="domeGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="40%" stopColor="#facc15" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
                <linearGradient id="domeGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="60%" stopColor="#059669" />
                  <stop offset="100%" stopColor="#065f46" />
                </linearGradient>
                <linearGradient id="wallWhite" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#e2e8f0" />
                </linearGradient>
              </defs>

              {/* Left Minaret */}
              <rect x="24" y="24" width="16" height="110" fill="url(#wallWhite)" stroke="#059669" strokeWidth="1.5" />
              <polygon points="32,4 20,24 44,24" fill="url(#domeGold)" stroke="#ca8a04" strokeWidth="1" />
              <circle cx="32" cy="3" r="2.5" fill="#facc15" />
              <rect x="26" y="44" width="12" height="6" fill="#047857" rx="2" />
              <rect x="26" y="74" width="12" height="6" fill="#047857" rx="2" />

              {/* Right Minaret */}
              <rect x="200" y="24" width="16" height="110" fill="url(#wallWhite)" stroke="#059669" strokeWidth="1.5" />
              <polygon points="208,4 196,24 220,24" fill="url(#domeGold)" stroke="#ca8a04" strokeWidth="1" />
              <circle cx="208" cy="3" r="2.5" fill="#facc15" />
              <rect x="202" y="44" width="12" height="6" fill="#047857" rx="2" />
              <rect x="202" y="74" width="12" height="6" fill="#047857" rx="2" />

              {/* Main Building Body */}
              <rect x="40" y="60" width="160" height="74" fill="url(#wallWhite)" stroke="#059669" strokeWidth="2" />

              {/* Left Side Dome */}
              <path d="M52 60 C52 38 72 32 72 32 C72 32 92 38 92 60 Z" fill="url(#domeGreen)" stroke="#065f46" strokeWidth="1" />
              {/* Right Side Dome */}
              <path d="M148 60 C148 38 168 32 168 32 C168 32 188 38 188 60 Z" fill="url(#domeGreen)" stroke="#065f46" strokeWidth="1" />

              {/* Center Grand Dome (Kubah Emas Megah) */}
              <path
                d="M80 60 C80 20 120 12 120 12 C120 12 160 20 160 60 Z"
                fill="url(#domeGold)"
                stroke="#ca8a04"
                strokeWidth="2"
              />
              {/* Crescent Moon & Star at top */}
              <path d="M120 2 V12" stroke="#ca8a04" strokeWidth="2" />
              <circle cx="120" cy="2" r="3" fill="#facc15" />

              {/* Arched Windows */}
              <path d="M64 85 C64 78 70 74 76 74 C82 74 88 78 88 85 V102 H64 V85 Z" fill="#047857" />
              <path d="M152 85 C152 78 158 74 164 74 C170 74 176 78 176 85 V102 H152 V85 Z" fill="#047857" />

              {/* Grand Arched Door */}
              <path d="M104 78 C104 68 112 62 120 62 C128 62 136 68 136 78 V134 H104 V78 Z" fill="#14532d" />
              <path d="M109 82 C109 74 115 70 120 70 C125 70 131 74 131 82 V134 H109 V82 Z" fill="#bbf7d0" />
            </svg>

            {/* Title Badge of Masjid */}
            <div className="text-center mt-1">
              <h2 className="text-sm sm:text-base font-black text-emerald-900 tracking-wide flex items-center justify-center gap-1.5">
                <span>🕌</span> MASJID AL HIDAYAH <span>✨</span>
              </h2>
              <p className="text-[11px] sm:text-xs font-semibold text-emerald-700">
                Tujuan Mulia Petualangan Adab Santri
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Adventure Winding Map Body */}
      <div className="relative w-full aspect-[10/9] sm:aspect-[10/8] max-h-[820px] px-2 sm:px-6">
        {/* SVG Curved Road Layer */}
        <svg
          viewBox="0 0 1000 850"
          className="absolute inset-0 w-full h-full pointer-events-none"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Shadow of the road */}
          <path
            d={pathD}
            stroke="#15803d"
            strokeWidth="56"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.3"
            transform="translate(0, 10)"
          />

          {/* Outer Road border (Hijau Tua) */}
          <path
            d={pathD}
            stroke="#15803d"
            strokeWidth="52"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Inner Road Surface (Kuning Keemasan cerah) */}
          <path
            d={pathD}
            stroke="#fde047"
            strokeWidth="42"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Stepping Dash Lines in the Middle of Road (Hijau Terang) */}
          <path
            d={pathD}
            stroke="#16a34a"
            strokeWidth="5"
            strokeDasharray="14 16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* 10 Pos Interactive Circles on the Map */}
        {posList.map((pos) => {
          const isCompleted = completedPos.includes(pos.id);
          const isCurrent = pos.id === currentActivePos;
          const isLocked = !isCompleted && !isCurrent && pos.id > (Math.max(0, ...completedPos) + 1);
          const isHomework = homeworkPos.includes(pos.id);

          // Get coordinates for responsive positioning
          const posCoord = nodePositions.find((n) => n.id === pos.id) || { x: 500, y: 500 };
          const leftPercent = (posCoord.x / 1000) * 100;
          const topPercent = (posCoord.y / 850) * 100;

          return (
            <div
              key={pos.id}
              style={{
                left: `${leftPercent}%`,
                top: `${topPercent}%`,
                transform: 'translate(-50%, -50%)',
              }}
              className="absolute z-20"
            >
              {/* Active Character Pin (Avatar Santri Melompat di pos aktif) */}
              {isCurrent && (
                <div className="absolute -top-14 sm:-top-16 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-30 animate-bounce">
                  <div className="bg-amber-400 text-emerald-950 text-[10px] sm:text-xs font-black px-2 sm:px-2.5 py-0.5 rounded-full shadow-lg border-2 border-white whitespace-nowrap mb-0.5">
                    Pos Kamu!
                  </div>
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white p-0.5 shadow-md border-2 border-emerald-500 overflow-hidden flex items-center justify-center">
                    <span className="text-xl sm:text-2xl">
                      {selectedAvatar === 'boy' ? '👦' : '🧕'}
                    </span>
                  </div>
                  <div className="w-2 h-2 bg-emerald-600 rotate-45 -mt-1"></div>
                </div>
              )}

              {/* Homework Badge if marked by Guru */}
              {isHomework && (
                <div className="absolute -top-3 -right-2 z-30 bg-purple-600 text-white text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded-full border-2 border-white shadow-md flex items-center gap-0.5 animate-pulse">
                  <BookOpenCheck className="w-3 h-3" />
                  <span>PR</span>
                </div>
              )}

              {/* Pos Button Node */}
              <button
                onClick={() => {
                  playClickSound();
                  onSelectPos(pos);
                }}
                disabled={isLocked}
                title={`${pos.name} ${isLocked ? '(Terkunci - Selesaikan pos sebelumnya)' : ''}`}
                className={`relative group w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center transition-all duration-300 transform active:scale-90 ${
                  isCompleted
                    ? 'bg-gradient-to-tr from-emerald-600 via-green-500 to-emerald-400 text-white border-4 border-amber-300 shadow-xl hover:scale-110'
                    : isCurrent
                    ? 'bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-200 text-emerald-950 border-4 border-emerald-600 shadow-2xl pos-active-glow scale-105'
                    : isLocked
                    ? 'bg-slate-200 text-slate-400 border-4 border-slate-300 opacity-80 cursor-not-allowed'
                    : 'bg-emerald-100 text-emerald-800 border-4 border-emerald-400 shadow-md hover:scale-105'
                }`}
              >
                {/* Pos Number Badge */}
                <span
                  className={`absolute -bottom-2 px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-black shadow-md border ${
                    isCompleted
                      ? 'bg-amber-400 text-emerald-950 border-amber-500'
                      : isCurrent
                      ? 'bg-emerald-600 text-white border-emerald-700'
                      : isLocked
                      ? 'bg-slate-400 text-white border-slate-500'
                      : 'bg-emerald-700 text-white border-emerald-800'
                  }`}
                >
                  Pos {pos.id}
                </span>

                {/* Main Icon */}
                <div className="flex items-center justify-center -mt-1">
                  {isLocked ? (
                    <Lock className="w-6 h-6 sm:w-7 sm:h-7 text-slate-400" />
                  ) : isCompleted ? (
                    <div className="relative flex items-center justify-center">
                      <PosIcon type={pos.iconType} size={30} className="filter drop-shadow-xs" />
                      <div className="absolute -top-1 -right-2 bg-amber-400 rounded-full p-0.5 border border-amber-600 shadow-xs">
                        <Star className="w-3.5 h-3.5 text-amber-950 fill-amber-950" />
                      </div>
                    </div>
                  ) : (
                    <div className="relative flex items-center justify-center">
                      <PosIcon type={pos.iconType} size={30} className="filter drop-shadow-xs" />
                    </div>
                  )}
                </div>
              </button>

              {/* Pos Title Label below node */}
              <div className="mt-2.5 text-center pointer-events-none">
                <span className="inline-block bg-white/95 backdrop-blur-xs text-emerald-950 font-black text-[10px] sm:text-xs px-2 py-0.5 rounded-lg shadow-sm border border-emerald-300 whitespace-nowrap">
                  {pos.shortTitle}
                </span>
              </div>
            </div>
          );
        })}

        {/* 3D Characters in the Bottom Right Corner (Santri Putra & Santri Putri) */}
        {/* Requirement: "Di kanan bawah ada 2 karakter 3D: anak laki-laki peci hijau dan anak perempuan jilbab kuning" */}
        <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-6 z-25 flex items-end gap-1 sm:gap-3 bg-white/70 backdrop-blur-xs p-2 sm:p-3 rounded-3xl border-2 border-emerald-300 shadow-xl">
          <SantriBoy3D
            size="md"
            showSpeechBubble={true}
            bubbleText="Yuk belajar adab!"
          />
          <SantriGirl3D
            size="md"
            showSpeechBubble={false}
          />
        </div>

        {/* Start Gate Marker at Pos 1 (Kiri Bawah) */}
        <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 z-15 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-2xl border-2 border-emerald-400 shadow-md flex items-center gap-1.5 text-emerald-900 font-extrabold text-xs">
          <span className="text-base">🚩</span>
          <span>Mulai Petualangan</span>
        </div>
      </div>
    </div>
  );
};
