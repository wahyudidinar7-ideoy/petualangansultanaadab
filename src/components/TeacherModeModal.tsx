import React, { useState } from 'react';
import { X, Lock, KeyRound, RotateCcw, BookOpenCheck, Printer, CheckCircle2, AlertCircle } from 'lucide-react';
import { PosItem, SantriProfile } from '../types';
import { playClickSound } from '../utils/audio';

interface TeacherModeModalProps {
  posList: PosItem[];
  santriProfile: SantriProfile;
  onResetProgress: () => void;
  onUpdateHomeworkPos: (selectedIds: number[]) => void;
  onClose: () => void;
}

export const TeacherModeModal: React.FC<TeacherModeModalProps> = ({
  posList,
  santriProfile,
  onResetProgress,
  onUpdateHomeworkPos,
  onClose
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<'homework' | 'print' | 'reset'>('homework');
  const [selectedHomework, setSelectedHomework] = useState<number[]>(santriProfile.homeworkPos || [2, 3, 5, 8, 9]);
  const [confirmResetOpen, setConfirmResetOpen] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput.trim() === 'guru123') {
      setIsAuthenticated(true);
      setErrorPassword(false);
      playClickSound();
    } else {
      setErrorPassword(true);
    }
  };

  const handleToggleHomework = (posId: number) => {
    playClickSound();
    if (selectedHomework.includes(posId)) {
      setSelectedHomework(selectedHomework.filter((id) => id !== posId));
    } else {
      if (selectedHomework.length < 5) {
        setSelectedHomework([...selectedHomework, posId]);
      } else {
        // Replace or notify max 5
        alert('Maksimal 5 pos yang dipilih untuk PR santri. Hilangkan satu pos terlebih dahulu.');
      }
    }
  };

  const handleSaveHomework = () => {
    playClickSound();
    onUpdateHomeworkPos(selectedHomework);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handlePrintCard = () => {
    playClickSound();
    window.print();
  };

  const handleReset = () => {
    playClickSound();
    onResetProgress();
    setConfirmResetOpen(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-emerald-950/80 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl border-4 border-amber-400 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="no-print bg-gradient-to-r from-emerald-800 via-green-700 to-emerald-900 p-4 sm:p-5 text-white flex items-center justify-between border-b-4 border-amber-400">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-400 p-2 shadow-md flex items-center justify-center text-emerald-950">
              <Lock className="w-6 h-6 text-emerald-950" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 bg-emerald-950 px-2 py-0.5 rounded-full">
                PANEL USTADZ / USTADZAH
              </span>
              <h2 className="text-lg sm:text-2xl font-black text-white tracking-wide mt-0.5">
                Mode Guru DTU Al Hidayah
              </h2>
            </div>
          </div>

          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="w-10 h-10 rounded-full bg-emerald-900 hover:bg-emerald-800 text-white flex items-center justify-center border border-emerald-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Auth Barrier if not logged in */}
        {!isAuthenticated ? (
          <div className="p-6 sm:p-10 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-emerald-100 border-4 border-emerald-300 flex items-center justify-center text-emerald-800">
              <KeyRound className="w-10 h-10 text-emerald-700" />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-black text-emerald-950">
                Akses Terproteksi Mode Guru
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-sm mt-1">
                Masukkan kata sandi guru untuk mengatur tugas PR santri, reset progres belajar, dan mencetak kartu hasil.
              </p>
            </div>

            <form onSubmit={handleLogin} className="w-full max-w-xs space-y-3">
              <div>
                <input
                  type="password"
                  placeholder="Masukkan Password Guru"
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setErrorPassword(false);
                  }}
                  autoFocus
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-emerald-300 text-sm font-bold text-center outline-none focus:ring-2 focus:ring-emerald-500"
                />
                {errorPassword && (
                  <p className="text-xs font-bold text-rose-600 mt-1.5 flex items-center justify-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Password salah! (Gunakan: guru123)</span>
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 hover:bg-amber-300 text-emerald-950 font-black text-sm shadow-md transition-all active:scale-95"
              >
                Masuk Mode Guru
              </button>
              <p className="text-[11px] text-slate-400 font-medium">
                Password default pengajar: <code className="bg-slate-100 px-1.5 py-0.5 rounded font-bold text-slate-600">guru123</code>
              </p>
            </form>
          </div>
        ) : (
          /* Logged In Teacher Dashboard */
          <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1">
            {/* Tabs (Hidden on Print) */}
            <div className="no-print flex items-center gap-2 border-b-2 border-slate-200 pb-2">
              <button
                onClick={() => {
                  playClickSound();
                  setActiveTab('homework');
                }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
                  activeTab === 'homework'
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <BookOpenCheck className="w-4 h-4" />
                <span>Pilih 5 Pos untuk PR</span>
              </button>

              <button
                onClick={() => {
                  playClickSound();
                  setActiveTab('print');
                }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
                  activeTab === 'print'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Printer className="w-4 h-4" />
                <span>Print Kartu Hasil</span>
              </button>

              <button
                onClick={() => {
                  playClickSound();
                  setActiveTab('reset');
                }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
                  activeTab === 'reset'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset Progres</span>
              </button>
            </div>

            {/* TAB 1: PILIH 5 POS UNTUK PR */}
            {activeTab === 'homework' && (
              <div className="space-y-4">
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-purple-950 flex items-center gap-1.5">
                      <BookOpenCheck className="w-5 h-5 text-purple-600" />
                      <span>Penugasan Rumah (PR Santri)</span>
                    </h3>
                    <p className="text-xs text-purple-800 mt-0.5">
                      Pilih 5 pos yang akan ditandai dengan badge PR di peta petualangan santri.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black bg-purple-200 text-purple-900 px-3 py-1 rounded-full border border-purple-400">
                      {selectedHomework.length} / 5 Pos Dipilih
                    </span>
                  </div>
                </div>

                {/* 10 Pos Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[320px] overflow-y-auto pr-1">
                  {posList.map((pos) => {
                    const isChecked = selectedHomework.includes(pos.id);
                    return (
                      <button
                        key={pos.id}
                        onClick={() => handleToggleHomework(pos.id)}
                        className={`p-3 rounded-2xl border-2 flex items-center justify-between transition-all text-left ${
                          isChecked
                            ? 'bg-purple-100 border-purple-500 text-purple-950 font-black shadow-xs ring-1 ring-purple-300'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-black bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-lg">
                            Pos {pos.id}
                          </span>
                          <span className="text-xs sm:text-sm font-bold truncate">
                            {pos.shortTitle}
                          </span>
                        </div>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          readOnly
                          className="w-4 h-4 text-purple-600 rounded-md focus:ring-0 cursor-pointer pointer-events-none"
                        />
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-2">
                  {savedSuccess ? (
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Berhasil disimpan ke Peta Santri!</span>
                    </span>
                  ) : (
                    <span className="text-xs text-slate-500">
                      Klik simpan untuk menerapkan tugas PR.
                    </span>
                  )}
                  <button
                    onClick={handleSaveHomework}
                    className="px-5 py-2 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
                  >
                    Simpan Pilihan PR ({selectedHomework.length}/5)
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2: PRINT KARTU HASIL (Nama, Bintang, Doa yang Hafal) */}
            {activeTab === 'print' && (
              <div className="space-y-4">
                <div className="no-print bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-3.5 flex items-center justify-between">
                  <p className="text-xs font-bold text-emerald-900">
                    Kartu Laporan Hasil Evaluasi Belajar Adab & Doa Santri DTU Al Hidayah siap cetak.
                  </p>
                  <button
                    onClick={handlePrintCard}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-black text-xs sm:text-sm shadow-md active:scale-95"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Cetak Sekarang (Print)</span>
                  </button>
                </div>

                {/* The Printable Result Card */}
                <div className="print-card bg-white p-6 sm:p-8 rounded-2xl border-4 border-emerald-600 shadow-md text-emerald-950 space-y-4">
                  {/* Header Madrasah */}
                  <div className="text-center border-b-2 border-emerald-600 pb-3">
                    <h2 className="text-base sm:text-lg font-black uppercase text-emerald-900">
                      KARTU LAPORAN HASIL PRESTASI ADAB SANTRI
                    </h2>
                    <h3 className="text-xs sm:text-sm font-bold text-emerald-700">
                      DTU AL HIDAYAH • PENDIDIKAN AGAMA ISLAM
                    </h3>
                    <p className="text-[10px] text-slate-500">
                      Jalan Pendidikan No. 12, Madrasah Diniyah Takmiliyah Ula
                    </p>
                  </div>

                  {/* Student Details */}
                  <div className="grid grid-cols-2 gap-3 bg-emerald-50/70 p-3.5 rounded-xl border border-emerald-200 text-xs sm:text-sm">
                    <div>
                      <span className="text-slate-500 block text-[11px]">Nama Santri:</span>
                      <strong className="text-emerald-950 font-black text-sm sm:text-base">
                        {santriProfile.name || 'Santri Hebat'}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[11px]">Jenjang Kelas:</span>
                      <strong className="text-emerald-950 font-black">
                        DTA / SD Kelas 1-4
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[11px]">Total Bintang Diperoleh:</span>
                      <strong className="text-amber-700 font-black text-sm">
                        ⭐ {santriProfile.stars} / 10 Bintang
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[11px]">Status Gelar:</span>
                      <strong className="text-emerald-800 font-black">
                        {santriProfile.hasSultanCertificate
                          ? '👑 SULTAN ADAB (Lulus Ujian)'
                          : 'Tahap Belajar'}
                      </strong>
                    </div>
                  </div>

                  {/* List of Memorized Prayers */}
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-emerald-900 mb-2">
                      Daftar Doa yang Telah Dihafal & Dituntaskan:
                    </h4>
                    <div className="border border-emerald-300 rounded-xl overflow-hidden text-xs">
                      <table className="w-full text-left">
                        <thead className="bg-emerald-700 text-white font-bold">
                          <tr>
                            <th className="p-2 w-12 text-center">Pos</th>
                            <th className="p-2">Judul Doa Adab</th>
                            <th className="p-2 w-24 text-center">Status</th>
                            <th className="p-2 w-28 text-center">Nilai Ustadz</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-emerald-200">
                          {posList.map((pos) => {
                            const isDone = santriProfile.completedPos.includes(pos.id);
                            return (
                              <tr key={pos.id} className={isDone ? 'bg-emerald-50/60' : 'bg-white'}>
                                <td className="p-2 text-center font-bold">{pos.id}</td>
                                <td className="p-2">
                                  <div className="font-bold text-emerald-950">{pos.doa.title}</div>
                                  <div className="text-[10px] text-slate-500">{pos.doa.perowi}</div>
                                </td>
                                <td className="p-2 text-center">
                                  {isDone ? (
                                    <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full text-[10px]">
                                      ✓ Hafal
                                    </span>
                                  ) : (
                                    <span className="text-slate-400 text-[10px]">Belum</span>
                                  )}
                                </td>
                                <td className="p-2 text-center font-bold text-emerald-900">
                                  {isDone ? 'A (Mumtaz)' : '-'}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Signatures */}
                  <div className="grid grid-cols-2 gap-4 text-center pt-4 border-t border-emerald-200 text-xs">
                    <div>
                      <p className="text-[11px] text-slate-500">Mengetahui,</p>
                      <p className="font-bold text-emerald-900">Orang Tua / Wali Santri</p>
                      <div className="h-14"></div>
                      <p className="text-slate-400">( ............................................ )</p>
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-500">Pembimbing Kelas,</p>
                      <p className="font-bold text-emerald-900">Ustadz / Ustadzah DTA</p>
                      <div className="h-14"></div>
                      <p className="text-emerald-950 font-bold">( Ustadz DTU Al Hidayah )</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: RESET PROGRES */}
            {activeTab === 'reset' && (
              <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-rose-100 border-2 border-rose-300 mx-auto flex items-center justify-center text-rose-600">
                  <RotateCcw className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="text-lg font-black text-rose-950">
                    Reset Progres Belajar Santri
                  </h3>
                  <p className="text-xs sm:text-sm text-rose-800 max-w-md mx-auto mt-1">
                    Tindakan ini akan mengembalikan jumlah bintang menjadi 0 dan mengunci kembali pos-pos di peta untuk latihan santri baru.
                  </p>
                </div>

                {!confirmResetOpen ? (
                  <button
                    onClick={() => setConfirmResetOpen(true)}
                    className="px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs sm:text-sm shadow-md transition-all active:scale-95"
                  >
                    Buka Konfirmasi Reset
                  </button>
                ) : (
                  <div className="p-4 bg-white rounded-xl border border-rose-300 max-w-sm mx-auto space-y-3">
                    <p className="text-xs font-bold text-rose-900">
                      Apakah Ustadz/Ustadzah yakin ingin mereset seluruh progres santri ini?
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => setConfirmResetOpen(false)}
                        className="px-4 py-1.5 rounded-lg bg-slate-200 text-slate-700 text-xs font-bold"
                      >
                        Batal
                      </button>
                      <button
                        onClick={handleReset}
                        className="px-4 py-1.5 rounded-lg bg-rose-600 text-white text-xs font-black shadow-xs"
                      >
                        Ya, Reset Sekarang!
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="no-print p-4 bg-slate-50 border-t-2 border-slate-200 flex justify-end">
          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="px-5 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 transition-colors shadow-xs"
          >
            Tutup Panel Guru
          </button>
        </div>
      </div>
    </div>
  );
};
