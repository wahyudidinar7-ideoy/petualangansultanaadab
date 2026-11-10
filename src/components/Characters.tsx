import React from 'react';

interface CharacterProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSpeechBubble?: boolean;
  bubbleText?: string;
  isAnimated?: boolean;
}

/**
 * 3D-styled Santri Boy with green peci & Islamic koko uniform
 */
export const SantriBoy3D: React.FC<CharacterProps> = ({
  className = '',
  size = 'md',
  showSpeechBubble = false,
  bubbleText = 'Bismillah!',
  isAnimated = true
}) => {
  const sizeMap = {
    sm: 'w-12 h-14',
    md: 'w-20 h-24',
    lg: 'w-32 h-40',
    xl: 'w-44 h-52'
  };

  return (
    <div className={`relative inline-flex flex-col items-center ${className}`}>
      {showSpeechBubble && (
        <div className="absolute -top-10 bg-white text-emerald-800 text-xs font-bold px-3 py-1 rounded-full shadow-lg border-2 border-emerald-400 animate-bounce whitespace-nowrap z-20">
          {bubbleText}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-r-2 border-b-2 border-emerald-400"></div>
        </div>
      )}

      <svg
        viewBox="0 0 160 200"
        className={`${sizeMap[size]} filter drop-shadow-md transition-transform duration-300 ${isAnimated ? 'hover:scale-105' : ''}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="peciGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#15803d" />
            <stop offset="50%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#166534" />
          </linearGradient>
          <linearGradient id="peciGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="skinGradBoy" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="40%" stopColor="#fed7aa" />
            <stop offset="100%" stopColor="#fdba74" />
          </linearGradient>
          <linearGradient id="bajuBoy" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#f1f5f9" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
          <linearGradient id="rompiBoy" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#16a34a" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
          <radialGradient id="cheekBlushBoy" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f43f5e" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Peci Hijau DTU Al Hidayah */}
        <g id="peci">
          <ellipse cx="80" cy="50" rx="38" ry="12" fill="url(#peciGrad)" />
          <path
            d="M44 50 C44 26 56 16 80 16 C104 16 116 26 116 50 Z"
            fill="url(#peciGrad)"
            stroke="#14532d"
            strokeWidth="2"
          />
          {/* Peci Gold Ribbon / Emblem */}
          <path d="M44 48 Q80 56 116 48 L116 53 Q80 61 44 53 Z" fill="url(#peciGold)" />
          {/* Peci Star Emblem */}
          <circle cx="80" cy="36" r="4.5" fill="#fef08a" />
          <circle cx="80" cy="36" r="2.5" fill="#15803d" />
        </g>

        {/* Head & Face */}
        <ellipse cx="80" cy="78" rx="34" ry="34" fill="url(#skinGradBoy)" stroke="#ea580c" strokeWidth="1" />

        {/* Hair Tufts under peci */}
        <path d="M47 56 Q55 64 62 58 Q72 65 80 57 Q88 65 98 58 Q105 64 113 56" fill="#1f2937" />

        {/* Cute Ears */}
        <ellipse cx="44" cy="78" rx="7" ry="10" fill="#fed7aa" />
        <ellipse cx="116" cy="78" rx="7" ry="10" fill="#fed7aa" />

        {/* Cheeks Blush */}
        <circle cx="60" cy="85" r="9" fill="url(#cheekBlushBoy)" />
        <circle cx="100" cy="85" r="9" fill="url(#cheekBlushBoy)" />

        {/* Big Bright Eyes with highlight */}
        <ellipse cx="64" cy="74" rx="6.5" ry="8.5" fill="#1e293b" />
        <ellipse cx="96" cy="74" rx="6.5" ry="8.5" fill="#1e293b" />
        {/* Eye Sparks */}
        <circle cx="66" cy="71" r="2.8" fill="#ffffff" />
        <circle cx="62" cy="76" r="1.2" fill="#ffffff" />
        <circle cx="98" cy="71" r="2.8" fill="#ffffff" />
        <circle cx="94" cy="76" r="1.2" fill="#ffffff" />

        {/* Friendly Eyebrows */}
        <path d="M57 63 Q64 59 71 63" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M89 63 Q96 59 103 63" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />

        {/* Cute Smile */}
        <path d="M72 86 Q80 94 88 86" stroke="#991b1b" strokeWidth="2.5" strokeLinecap="round" fill="#be123c" />
        <path d="M76 87 Q80 89 84 87" fill="#ffffff" />

        {/* Body & Koko Shirt */}
        <path d="M50 110 Q80 102 110 110 L125 180 Q80 190 35 180 Z" fill="url(#bajuBoy)" />

        {/* Rompi Hijau */}
        <path d="M50 110 L68 180 L35 180 Z" fill="url(#rompiBoy)" />
        <path d="M110 110 L92 180 L125 180 Z" fill="url(#rompiBoy)" />
        {/* Koko Collar */}
        <path d="M72 108 L80 125 L88 108 Z" fill="#22c55e" />
        <circle cx="80" cy="138" r="2" fill="#15803d" />
        <circle cx="80" cy="152" r="2" fill="#15803d" />

        {/* Waving Right Hand */}
        <g id="hand-wave">
          <path d="M120 120 Q142 100 148 85" stroke="#fed7aa" strokeWidth="12" strokeLinecap="round" />
          <circle cx="150" cy="80" r="9" fill="#fed7aa" />
          {/* Thumb */}
          <ellipse cx="143" cy="81" rx="4" ry="3" fill="#fed7aa" />
        </g>
      </svg>
      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full mt-1 border border-emerald-300 shadow-sm">
        Santri Ahmad
      </span>
    </div>
  );
};

/**
 * 3D-styled Santri Girl with bright yellow jilbab & soft turquoise dress
 */
export const SantriGirl3D: React.FC<CharacterProps> = ({
  className = '',
  size = 'md',
  showSpeechBubble = false,
  bubbleText = 'Semangat!',
  isAnimated = true
}) => {
  const sizeMap = {
    sm: 'w-12 h-14',
    md: 'w-20 h-24',
    lg: 'w-32 h-40',
    xl: 'w-44 h-52'
  };

  return (
    <div className={`relative inline-flex flex-col items-center ${className}`}>
      {showSpeechBubble && (
        <div className="absolute -top-10 bg-white text-amber-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg border-2 border-amber-400 animate-bounce whitespace-nowrap z-20">
          {bubbleText}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-r-2 border-b-2 border-amber-400"></div>
        </div>
      )}

      <svg
        viewBox="0 0 160 200"
        className={`${sizeMap[size]} filter drop-shadow-md transition-transform duration-300 ${isAnimated ? 'hover:scale-105' : ''}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="jilbabYellow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="40%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>
          <linearGradient id="jilbabShadow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ca8a04" />
            <stop offset="100%" stopColor="#a16207" />
          </linearGradient>
          <linearGradient id="skinGradGirl" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="35%" stopColor="#fed7aa" />
            <stop offset="100%" stopColor="#fbcfe8" />
          </linearGradient>
          <linearGradient id="bajuGamisGirl" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5eead4" />
            <stop offset="50%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#0f766e" />
          </linearGradient>
          <radialGradient id="cheekBlushGirl" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fb7185" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#fb7185" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer Jilbab drapery back */}
        <path
          d="M32 70 C32 20 128 20 128 70 C138 120 135 160 126 182 C100 190 60 190 34 182 C25 160 22 120 32 70 Z"
          fill="url(#jilbabYellow)"
          stroke="#ca8a04"
          strokeWidth="2"
        />

        {/* Inner Jilbab Bonnet / Ciput border */}
        <ellipse cx="80" cy="74" rx="30" ry="34" fill="#fef9c3" />

        {/* Face */}
        <ellipse cx="80" cy="76" rx="26" ry="30" fill="url(#skinGradGirl)" />

        {/* Flower clip on Jilbab */}
        <g id="flower-clip" transform="translate(42, 38)">
          <circle cx="0" cy="0" r="7" fill="#f43f5e" />
          <circle cx="0" cy="0" r="3" fill="#fef08a" />
        </g>

        {/* Cheeks Blush */}
        <circle cx="65" cy="85" r="8" fill="url(#cheekBlushGirl)" />
        <circle cx="95" cy="85" r="8" fill="url(#cheekBlushGirl)" />

        {/* Sparkly Big Eyes */}
        <ellipse cx="68" cy="75" rx="6" ry="8" fill="#1e293b" />
        <ellipse cx="92" cy="75" rx="6" ry="8" fill="#1e293b" />
        {/* Eye Highlights */}
        <circle cx="70" cy="72" r="2.8" fill="#ffffff" />
        <circle cx="66" cy="77" r="1.3" fill="#ffffff" />
        <circle cx="94" cy="72" r="2.8" fill="#ffffff" />
        <circle cx="90" cy="77" r="1.3" fill="#ffffff" />

        {/* Long eyelashes */}
        <path d="M63 69 L59 66" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M97 69 L101 66" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" />

        {/* Eyebrows */}
        <path d="M62 65 Q68 62 74 65" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
        <path d="M86 65 Q92 62 98 65" stroke="#475569" strokeWidth="2" strokeLinecap="round" />

        {/* Sweet Smile */}
        <path d="M73 87 Q80 94 87 87" stroke="#be123c" strokeWidth="2.5" strokeLinecap="round" fill="#f43f5e" />
        <path d="M76 88 Q80 90 84 88" fill="#ffffff" />

        {/* Front drapery of Jilbab */}
        <path
          d="M52 98 C50 125 58 145 80 152 C102 145 110 125 108 98 C98 106 62 106 52 98 Z"
          fill="url(#jilbabYellow)"
          stroke="#ca8a04"
          strokeWidth="1.5"
        />

        {/* Gamis dress */}
        <path d="M48 150 L34 190 Q80 198 126 190 L112 150 Z" fill="url(#bajuGamisGirl)" />

        {/* Hand waving */}
        <g id="hand-wave-girl">
          <path d="M38 135 Q20 115 15 100" stroke="#fed7aa" strokeWidth="10" strokeLinecap="round" />
          <circle cx="13" cy="95" r="8" fill="#fed7aa" />
        </g>
      </svg>
      <span className="text-[11px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-full mt-1 border border-amber-300 shadow-sm">
        Santri Fatimah
      </span>
    </div>
  );
};
