import React from 'react';

interface PosIconProps {
  type: string;
  className?: string;
  size?: number;
}

export const PosIcon: React.FC<PosIconProps> = ({ type, className = '', size = 32 }) => {
  switch (type) {
    case 'bed': // Pos 1: Kasur & jam weker
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="6" y="24" width="36" height="12" rx="4" fill="#60a5fa" />
          <path d="M6 32 H42 V38 C42 40 40 42 38 42 H10 C8 42 6 40 6 38 V32 Z" fill="#3b82f6" />
          <rect x="9" y="16" width="12" height="9" rx="3" fill="#ffffff" />
          <path d="M12 28 H36" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" />
          {/* Jam Weker */}
          <circle cx="34" cy="15" r="9" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
          <path d="M34 11 V15 L37 17" stroke="#854d0e" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M28 8 L31 10" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" />
          <path d="M40 8 L37 10" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" />
          <circle cx="34" cy="15" r="1.5" fill="#ca8a04" />
        </svg>
      );

    case 'tap': // Pos 2: Keran air
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          {/* Keran pipa */}
          <path d="M8 20 H22 V28 H16 V32 H14 V28 H8 V20 Z" fill="#94a3b8" />
          <path d="M16 14 H28 C33 14 36 17 36 22 V26 H30 V22 C30 20 28 18 26 18 H16 V14 Z" fill="#0284c7" />
          {/* Putaran keran */}
          <rect x="28" y="8" width="12" height="6" rx="2" fill="#ef4444" />
          <rect x="33" y="14" width="2" height="4" fill="#94a3b8" />
          {/* Tetesan air jernih wudhu */}
          <path d="M33 30 C33 30 28 36 28 39 C28 41.7 30.2 44 33 44 C35.8 44 38 41.7 38 39 C38 36 33 30 33 30 Z" fill="#38bdf8" />
          <circle cx="31.5" cy="38" r="1.2" fill="#ffffff" />
          <path d="M22 36 C22 36 20 38.5 20 40 C20 41.1 20.9 42 22 42 C23.1 42 24 41.1 24 40 C24 38.5 22 36 22 36 Z" fill="#7dd3fc" />
        </svg>
      );

    case 'lunchbox': // Pos 3: Kotak bekal
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          {/* Kotak bekal utama */}
          <rect x="8" y="16" width="32" height="24" rx="6" fill="#f97316" />
          {/* Tutup kotak */}
          <path d="M6 18 C6 15 8 13 11 13 H37 C40 13 42 15 42 18 V20 H6 V18 Z" fill="#fb923c" />
          {/* Pegangan */}
          <path d="M18 13 V9 C18 7.5 19.5 6 21 6 H27 C28.5 6 30 7.5 30 9 V13" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" />
          {/* Kancing pengunci */}
          <rect x="21" y="18" width="6" height="5" rx="1.5" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
          {/* Sendok kecil di luar */}
          <ellipse cx="14" cy="28" rx="3" ry="5" fill="#ffffff" />
          <path d="M14 33 V38" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'moon': // Pos 4: Bantal bulan
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          {/* Bantal empuk */}
          <rect x="8" y="20" width="32" height="20" rx="8" fill="#818cf8" />
          <path d="M12 24 Q24 28 36 24" stroke="#c7d2fe" strokeWidth="2" strokeLinecap="round" />
          {/* Bulan Sabit Kuning */}
          <path d="M28 8 C23 8 19 12 19 17 C19 22 23 26 28 26 C29.5 26 31 25.5 32.2 24.8 C28.5 24 25.5 20.8 25.5 17 C25.5 13.2 28.5 10 32.2 9.2 C31 8.5 29.5 8 28 8 Z" fill="#facc15" />
          {/* Bintang kecil */}
          <polygon points="37,8 38,10.5 40.5,11.5 38,12.5 37,15 36,12.5 33.5,11.5 36,10.5" fill="#fef08a" />
        </svg>
      );

    case 'friends': // Pos 5: 2 anak pegangan tangan
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          {/* Anak kiri */}
          <circle cx="16" cy="14" r="7" fill="#fed7aa" />
          <path d="M12 9 C12 7 14 5 16 5 C18 5 20 7 20 9 Z" fill="#15803d" />
          <path d="M9 25 C9 22 12 20 16 20 C20 20 23 22 23 25 V38 H9 V25 Z" fill="#22c55e" />
          {/* Anak kanan */}
          <circle cx="32" cy="14" r="7" fill="#fed7aa" />
          <path d="M26 12 C26 7 38 7 38 12 C39 16 38 19 32 19 C26 19 25 16 26 12 Z" fill="#facc15" />
          <path d="M25 25 C25 22 28 20 32 20 C36 20 39 22 39 25 V38 H25 V25 Z" fill="#14b8a6" />
          {/* Tangan bergandengan di tengah */}
          <path d="M19 27 Q24 30 29 27" stroke="#fed7aa" strokeWidth="4" strokeLinecap="round" />
          {/* Hati kecil cinta persaudaraan */}
          <path d="M24 16 C23 15 21.5 15 21.5 16.5 C21.5 18 24 20 24 20 C24 20 26.5 18 26.5 16.5 C26.5 15 25 15 24 16 Z" fill="#ef4444" />
        </svg>
      );

    case 'star': // Pos 6: Bintang & sajadah
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          {/* Sajadah sholat */}
          <path d="M10 16 L24 8 L38 16 V40 H10 V16 Z" fill="#047857" stroke="#10b981" strokeWidth="1.5" />
          <path d="M15 20 L24 14 L33 20 V36 H15 V20 Z" fill="#065f46" />
          {/* Kubah kecil pada sajadah */}
          <path d="M20 28 C20 25 24 23 24 23 C24 23 28 25 28 28 V36 H20 V28 Z" fill="#facc15" />
          {/* Bintang bersinar */}
          <polygon points="24,2 26.5,7 32,8 28,12 29,17 24,14.5 19,17 20,12 16,8 21.5,7" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
        </svg>
      );

    case 'house': // Pos 7: Rumah
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          {/* Atap Rumah */}
          <polygon points="24,6 6,20 10,20 10,40 38,40 38,20 42,20" fill="#f87171" stroke="#dc2626" strokeWidth="1.5" />
          {/* Badan Rumah */}
          <rect x="12" y="20" width="24" height="20" fill="#fef08a" />
          {/* Pintu cokelat */}
          <rect x="20" y="28" width="8" height="12" rx="2" fill="#b45309" />
          <circle cx="26" cy="34" r="1" fill="#fef08a" />
          {/* Jendela cinta */}
          <circle cx="24" cy="15" r="3.5" fill="#ffffff" />
          {/* Hati kasih sayang di atas atap */}
          <path d="M24 11 C22.5 9 20 9 20 11.5 C20 14 24 16.5 24 16.5 C24 16.5 28 14 28 11.5 C28 9 25.5 9 24 11 Z" fill="#ef4444" />
        </svg>
      );

    case 'book': // Pos 8: Buku & tas santri
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          {/* Tas ransel */}
          <rect x="12" y="16" width="24" height="24" rx="6" fill="#3b82f6" />
          <path d="M18 16 V11 C18 9 20 7 24 7 C28 7 30 9 30 11 V16" stroke="#1d4ed8" strokeWidth="3" strokeLinecap="round" />
          <rect x="16" y="26" width="16" height="10" rx="3" fill="#60a5fa" />
          {/* Buku mengaji di depan */}
          <path d="M6 34 Q14 31 22 34 L22 43 Q14 40 6 43 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
          <path d="M22 34 Q30 31 38 34 L38 43 Q30 40 22 43 Z" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
        </svg>
      );

    case 'mosque': // Pos 9: Masjid kecil
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          {/* Bangunan utama */}
          <rect x="10" y="24" width="28" height="18" fill="#10b981" rx="2" />
          {/* Kubah utama hijau emas */}
          <path d="M16 24 C16 14 24 10 24 10 C24 10 32 14 32 24 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5" />
          <path d="M24 6 V10" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" />
          <circle cx="24" cy="5" r="1.5" fill="#facc15" />
          {/* Pintu gerbang melengkung */}
          <path d="M20 42 V32 C20 30 22 28 24 28 C26 28 28 30 28 32 V42 Z" fill="#064e3b" />
          {/* Menara kecil kiri */}
          <rect x="6" y="18" width="4" height="24" fill="#059669" />
          <polygon points="8,12 6,18 10,18" fill="#facc15" />
          {/* Menara kecil kanan */}
          <rect x="38" y="18" width="4" height="24" fill="#059669" />
          <polygon points="40,12 38,18 42,18" fill="#facc15" />
        </svg>
      );

    case 'trophy': // Pos 10: Piala emas
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          {/* Piala cawan */}
          <path d="M14 10 H34 V22 C34 28 29.5 32 24 32 C18.5 32 14 28 14 22 V10 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
          {/* Gagang kiri & kanan */}
          <path d="M14 14 H9 C7 14 6 16 6 18 C6 22 9 25 14 25" stroke="#ca8a04" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M34 14 H39 C41 14 42 16 42 18 C42 22 39 25 34 25" stroke="#ca8a04" strokeWidth="2.5" strokeLinecap="round" />
          {/* Bintang dalam piala */}
          <polygon points="24,15 25.5,18.5 29,19 26.5,21.5 27,25 24,23 21,25 21.5,21.5 19,19 22.5,18.5" fill="#ffffff" />
          {/* Tangkai piala & dudukan */}
          <rect x="22" y="32" width="4" height="6" fill="#ca8a04" />
          <path d="M12 42 H36 L34 38 H14 L12 42 Z" fill="#a16207" />
          <circle cx="24" cy="4" r="2" fill="#facc15" />
        </svg>
      );

    default:
      return null;
  }
};
