import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Trophy, CheckCircle, ArrowRight, ArrowLeft, RefreshCw, Award, Sparkles } from 'lucide-react';
import { EXAM_QUESTIONS } from '../data/posData';
import { playSuccessChime, playFanfare, playWrongSound, playClickSound, speakText } from '../utils/audio';

interface ExamModalProps {
  studentName: string;
  onClose: () => void;
  onPassExam: (score: number) => void;
  onOpenCertificate: () => void;
  hasPassedBefore: boolean;
  savedScore: number | null;
  soundEnabled: boolean;
}

export const ExamModal: React.FC<ExamModalProps> = ({
  studentName,
  onClose,
  onPassExam,
  onOpenCertificate,
  hasPassedBefore,
  savedScore,
  soundEnabled
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [isFinished, setIsFinished] = useState(hasPassedBefore);
  const [score, setScore] = useState<number>(savedScore || 0);

  const questions = EXAM_QUESTIONS;
  const currentQ = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(userAnswers).length;

  const handleSelectOption = (questionId: number, optionId: string) => {
    playClickSound();
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const handleNext = () => {
    playClickSound();
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    playClickSound();
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmitExam = () => {
    let correct = 0;
    questions.forEach((q) => {
      const selectedOptId = userAnswers[q.id];
      const correctOpt = q.options.find((opt) => opt.isCorrect);
      if (correctOpt && correctOpt.id === selectedOptId) {
        correct += 1;
      }
    });

    const finalScore = Math.round((correct / totalQuestions) * 100);
    setScore(finalScore);
    setIsFinished(true);

    if (finalScore >= 80) {
      try {
        confetti({
          particleCount: 120,
          spread: 90,
          origin: { y: 0.5 },
          colors: ['#facc15', '#22c55e', '#3b82f6', '#ec4899', '#f97316']
        });
      } catch {
        // ignore
      }

      if (soundEnabled) {
        playFanfare();
        speakText('Alhamdulillah! Selamat, kamu resmi menjadi Sultan Adab DTU Al Hidayah!', 'id-ID');
      }

      onPassExam(finalScore);
    } else {
      if (soundEnabled) {
        playWrongSound();
      }
    }
  };

  const handleRetry = () => {
    playClickSound();
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setIsFinished(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-emerald-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border-4 border-amber-400 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 p-4 sm:p-5 text-emerald-950 flex items-center justify-between border-b-4 border-amber-600 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white p-2 shadow-md flex items-center justify-center text-amber-600 border-2 border-amber-300">
              <Trophy className="w-8 h-8 fill-amber-500 text-amber-600 animate-bounce" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-900 text-amber-300 px-2.5 py-0.5 rounded-full">
                POS 10 • UJIAN PAMUNGKAS
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-emerald-950 tracking-wide mt-0.5">
                Ujian Sultan Adab Al Hidayah
              </h2>
            </div>
          </div>

          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="w-10 h-10 rounded-full bg-emerald-900/10 hover:bg-emerald-900/20 text-emerald-950 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1">
          {!isFinished ? (
            <>
              {/* Progress and Question Counter */}
              <div className="flex items-center justify-between gap-3 bg-emerald-50 p-3 rounded-2xl border border-emerald-200">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-emerald-900">
                    Soal {currentQuestionIndex + 1} dari {totalQuestions}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-600 bg-white px-2 py-0.5 rounded-full border border-emerald-300">
                    {currentQ.posName}
                  </span>
                </div>
                <span className="text-xs font-bold text-emerald-800">
                  Terjawab: {answeredCount}/{totalQuestions}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
                ></div>
              </div>

              {/* Question Box */}
              <div className="bg-amber-50/80 rounded-2xl p-4 sm:p-5 border-2 border-amber-200 shadow-xs">
                <span className="text-[10px] font-extrabold uppercase text-amber-900 bg-amber-200 px-2 py-0.5 rounded-full inline-block mb-2">
                  Pertanyaan #{currentQuestionIndex + 1}
                </span>
                <p className="text-sm sm:text-lg font-black text-emerald-950 leading-relaxed">
                  {currentQ.question}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((opt) => {
                  const isSelected = userAnswers[currentQ.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(currentQ.id, opt.id)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-2xl flex items-center gap-3 transition-all border-2 ${
                        isSelected
                          ? 'bg-amber-100 border-amber-500 text-emerald-950 font-black shadow-md ring-2 ring-amber-300'
                          : 'bg-white hover:bg-emerald-50/60 border-slate-200 text-slate-800 font-bold'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0 ${
                          isSelected ? 'bg-amber-500 text-white' : 'bg-emerald-100 text-emerald-900'
                        }`}
                      >
                        {opt.label}
                      </div>
                      <span className="text-xs sm:text-sm md:text-base leading-snug flex-1">
                        {opt.text}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Question Pills */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
                {questions.map((q, idx) => {
                  const isAns = !!userAnswers[q.id];
                  const isCur = idx === currentQuestionIndex;
                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        playClickSound();
                        setCurrentQuestionIndex(idx);
                      }}
                      className={`w-8 h-8 rounded-xl text-xs font-black transition-all ${
                        isCur
                          ? 'bg-amber-400 text-emerald-950 ring-2 ring-emerald-600'
                          : isAns
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            /* Results Screen */
            <div className="text-center py-6 space-y-5 animate-in fade-in duration-300">
              {score >= 80 ? (
                <>
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-amber-400 to-yellow-200 p-4 border-4 border-amber-500 shadow-xl flex items-center justify-center animate-bounce">
                    <Trophy className="w-14 h-14 text-amber-700 fill-amber-400" />
                  </div>

                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                      LULUS SEMPURNA!
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-stroke-green mt-2">
                      SELAMAT, SULTAN ADAB!
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-800 max-w-md mx-auto mt-1">
                      Alhamdulillah, ananda <strong>{studentName}</strong> berhasil menyelesaikan ujian adab dengan nilai luar biasa!
                    </p>
                  </div>

                  {/* Score Card */}
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-100 to-yellow-100 border-2 border-amber-400 px-6 py-3 rounded-2xl shadow-sm">
                    <Sparkles className="w-6 h-6 text-amber-600" />
                    <div className="text-left">
                      <span className="text-[10px] font-bold uppercase text-amber-800 block">Nilai Ujian Kamu:</span>
                      <span className="text-3xl font-black text-emerald-950">{score} / 100</span>
                    </div>
                  </div>

                  {/* Open Digital Certificate Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        playClickSound();
                        onOpenCertificate();
                      }}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-2xl text-sm sm:text-base font-black text-emerald-950 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 hover:bg-amber-300 border-3 border-amber-500 shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 mx-auto"
                    >
                      <Award className="w-5 h-5 text-emerald-950" />
                      <span>Buka & Cetak Sertifikat Digital Sultan Adab 📜</span>
                    </button>
                  </div>
                </>
              ) : (
                /* Score < 80 */
                <>
                  <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 p-4 border-4 border-amber-300 flex items-center justify-center text-4xl">
                    💪
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-emerald-950">
                      Semangat, Sedikit Lagi!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-1">
                      Kamu meraih nilai <strong>{score}/100</strong>. Syarat menjadi Sultan Adab adalah minimal <strong>80</strong> (8 soal benar). Ayo coba lagi, kamu pasti bisa!
                    </p>
                  </div>

                  <button
                    onClick={handleRetry}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-black text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-all active:scale-95"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Ulangi Ujian Sekarang</span>
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        {!isFinished && (
          <div className="p-4 bg-slate-50 border-t-2 border-slate-200 flex items-center justify-between gap-3">
            <button
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-colors ${
                currentQuestionIndex === 0
                  ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            {currentQuestionIndex < totalQuestions - 1 ? (
              <button
                onClick={handleNext}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black text-emerald-950 bg-amber-400 hover:bg-amber-300 border border-amber-500 shadow-xs transition-all active:scale-95"
              >
                <span>Selanjutnya</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmitExam}
                disabled={answeredCount < totalQuestions}
                className={`flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black border-2 transition-all ${
                  answeredCount < totalQuestions
                    ? 'bg-slate-200 text-slate-400 border-slate-300 cursor-not-allowed'
                    : 'bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white border-emerald-700 shadow-md active:scale-95 animate-pulse'
                }`}
              >
                <CheckCircle className="w-4 h-4" />
                <span>Kumpulkan & Lihat Nilai</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
