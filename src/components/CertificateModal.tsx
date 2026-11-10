import React from 'react';
import { X, Printer, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { playClickSound } from '../utils/audio';

interface CertificateModalProps {
  studentName: string;
  score: number;
  date: string;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  studentName,
  score,
  date,
  onClose
}) => {
  const handlePrint = () => {
    playClickSound();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-emerald-950/80 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border-4 border-amber-400 overflow-hidden my-auto">
        {/* Controls Bar (Hidden during print) */}
        <div className="no-print bg-emerald-800 text-white p-3.5 sm:p-4 flex items-center justify-between border-b-2 border-amber-400">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-300" />
            <span className="font-extrabold text-sm sm:text-base text-amber-200">
              Sertifikat Digital Resmi Sultan Adab
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-black text-xs sm:text-sm shadow-md transition-all active:scale-95"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak / Unduh (Print)</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Certificate Canvas */}
        <div className="p-6 sm:p-10 bg-gradient-to-br from-amber-50 via-white to-emerald-50 text-emerald-950 border-8 border-double border-amber-500 m-2 sm:m-4 rounded-2xl relative shadow-inner print:m-0 print:border-4">
          {/* Ornate Corner Accents */}
          <div className="absolute top-2 left-2 text-2xl text-amber-600 select-none">⚜️</div>
          <div className="absolute top-2 right-2 text-2xl text-amber-600 select-none">⚜️</div>
          <div className="absolute bottom-2 left-2 text-2xl text-amber-600 select-none">⚜️</div>
          <div className="absolute bottom-2 right-2 text-2xl text-amber-600 select-none">⚜️</div>

          <div className="text-center space-y-4">
            {/* Institution Header */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-700 border-4 border-amber-400 flex items-center justify-center text-3xl shadow-md mb-2">
                🕌
              </div>
              <h4 className="text-xs sm:text-sm font-black uppercase tracking-widest text-emerald-800">
                DTU AL HIDAYAH • PENDIDIKAN AGAMA ISLAM
              </h4>
              <p className="text-[11px] font-bold text-emerald-600">
                Madrasah Diniyah Takmiliyah Ula & Sekolah Dasar Al Hidayah
              </p>
            </div>

            {/* Certificate Title */}
            <div className="py-2 border-y-2 border-amber-300/80">
              <span className="text-[11px] sm:text-xs font-black tracking-widest uppercase text-amber-800 bg-amber-200 px-3 py-1 rounded-full border border-amber-400">
                PIAGAM PENGHARGAAN RESMI
              </span>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-stroke-green-lg tracking-wider uppercase mt-2">
                SULTAN ADAB
              </h1>
              <p className="text-xs sm:text-sm font-bold text-emerald-700 italic mt-1">
                Gelar Kehormatan Santri Teladan Berakhlak Mulia
              </p>
            </div>

            {/* Awarded to */}
            <div className="py-2 space-y-2">
              <p className="text-xs sm:text-sm text-slate-600 font-semibold">
                Dengan penuh rasa syukur, piagam ini dianugerahkan kepada:
              </p>
              <div className="inline-block relative">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-emerald-900 border-b-4 border-amber-400 px-6 pb-1">
                  {studentName || 'Santri Hebat'}
                </h2>
                <Sparkles className="w-6 h-6 text-amber-500 absolute -top-3 -right-6 animate-spin" />
              </div>
              <p className="text-xs sm:text-sm text-emerald-800 max-w-xl mx-auto font-medium leading-relaxed mt-2">
                Telah berhasil menyelesaikan seluruh 10 Pos Petualangan Adab Santri dan dinyatakan <strong>LULUS MUMTAZ</strong> dalam Ujian Komprehensif Adab & Doa Harian dengan Nilai Istimewa:
              </p>
            </div>

            {/* Score Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-yellow-300 border-2 border-amber-600 px-6 py-2 rounded-2xl shadow-md">
              <CheckCircle2 className="w-6 h-6 text-emerald-950" />
              <div className="text-left">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-950 block leading-none">
                  Nilai Akhir
                </span>
                <span className="text-xl sm:text-2xl font-black text-emerald-950">
                  {score} / 100
                </span>
              </div>
              <span className="text-xs font-black bg-emerald-800 text-amber-300 px-2.5 py-1 rounded-lg ml-2">
                PREDIKAT: MUMTAZ ⭐⭐⭐
              </span>
            </div>

            {/* Signatures & Seal */}
            <div className="pt-8 sm:pt-10 grid grid-cols-2 gap-4 max-w-2xl mx-auto text-center border-t border-amber-200">
              <div className="space-y-1">
                <p className="text-[11px] font-semibold text-slate-500">Tanggal Terbit:</p>
                <p className="text-xs sm:text-sm font-bold text-emerald-950">{date || 'Hari ini'}</p>
                <div className="pt-6 sm:pt-8">
                  <div className="w-32 sm:w-40 h-0.5 bg-slate-400 mx-auto"></div>
                  <p className="text-xs font-bold text-emerald-900 mt-1">Ustadz Pembimbing</p>
                  <p className="text-[10px] text-slate-500">DTU Al Hidayah</p>
                </div>
              </div>

              <div className="relative flex flex-col items-center justify-between">
                {/* Digital Stamp Seal */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-dashed border-emerald-700 flex flex-col items-center justify-center text-emerald-800 font-extrabold transform -rotate-12 bg-white/70 shadow-sm p-1">
                  <span className="text-[9px] uppercase tracking-tighter">DTU AL HIDAYAH</span>
                  <span className="text-xs font-black">★ RESMI ★</span>
                  <span className="text-[8px] uppercase tracking-tighter">TERVERIFIKASI</span>
                </div>

                <div className="pt-2 w-full">
                  <div className="w-32 sm:w-40 h-0.5 bg-slate-400 mx-auto"></div>
                  <p className="text-xs font-bold text-emerald-900 mt-1">Kepala DTU Al Hidayah</p>
                  <p className="text-[10px] text-slate-500">Bandung / Jawa Barat</p>
                </div>
              </div>
            </div>

            {/* Footer note */}
            <p className="text-[10px] text-emerald-700/80 font-bold uppercase tracking-wider pt-2">
              created by DTU Al Hidayah • Petualangan Adab Santri
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
