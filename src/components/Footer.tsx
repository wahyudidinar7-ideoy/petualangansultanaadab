import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-emerald-900 text-emerald-100 py-6 px-4 border-t-4 border-amber-400 text-center relative z-10">
      <div className="max-w-4xl mx-auto space-y-2">
        <div className="flex items-center justify-center gap-2 text-amber-300 font-extrabold text-sm sm:text-base">
          <span>🕌</span>
          <span>PETUALANGAN ADAB SANTRI</span>
          <span>⭐</span>
        </div>

        <p className="text-xs sm:text-sm font-semibold text-emerald-200">
          Media Pembelajaran PAI & Adab Terpadu untuk Siswa SD / DTA Kelas 1–4
        </p>

        {/* Required Footer text: "created by DTU Al Hidayah" */}
        <div className="pt-2">
          <span className="inline-block bg-emerald-950/80 text-amber-300 text-xs font-black px-4 py-1.5 rounded-full border border-emerald-600/60 shadow-xs tracking-wide">
            created by DTU Al Hidayah
          </span>
        </div>
      </div>
    </footer>
  );
};
