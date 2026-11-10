import React from 'react';
import { X, Trophy, Medal, Star, Crown } from 'lucide-react';
import { LeaderboardEntry } from '../types';
import { playClickSound } from '../utils/audio';

interface LeaderboardModalProps {
  leaderboard: LeaderboardEntry[];
  studentName: string;
  onClose: () => void;
}

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({
  leaderboard,
  studentName,
  onClose
}) => {
  const getRankBadge = (index: number) => {
    switch (index) {
      case 0:
        return (
          <div className="w-9 h-9 rounded-full bg-amber-400 text-emerald-950 font-black flex items-center justify-center text-lg shadow-md border-2 border-amber-200">
            🥇
          </div>
        );
      case 1:
        return (
          <div className="w-9 h-9 rounded-full bg-slate-200 text-slate-800 font-black flex items-center justify-center text-lg shadow-md border-2 border-white">
            🥈
          </div>
        );
      case 2:
        return (
          <div className="w-9 h-9 rounded-full bg-amber-600 text-white font-black flex items-center justify-center text-lg shadow-md border-2 border-amber-300">
            🥉
          </div>
        );
      default:
        return (
          <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-900 font-black flex items-center justify-center text-sm shadow-xs border border-emerald-300">
            {index + 1}
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-emerald-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-3xl border-4 border-amber-400 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-700 via-green-600 to-emerald-800 p-4 sm:p-5 text-white flex items-center justify-between border-b-4 border-amber-400">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-400 p-2 shadow-md flex items-center justify-center text-emerald-950">
              <Trophy className="w-6 h-6 text-emerald-950 fill-emerald-950" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 bg-emerald-900 px-2 py-0.5 rounded-full">
                DTU AL HIDAYAH
              </span>
              <h2 className="text-lg sm:text-2xl font-black text-white tracking-wide mt-0.5">
                Peringkat Kelas Santri Teladan
              </h2>
            </div>
          </div>

          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="w-10 h-10 rounded-full bg-emerald-900/60 hover:bg-emerald-800 text-white flex items-center justify-center border border-emerald-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-3.5 flex items-center gap-3">
            <Medal className="w-6 h-6 text-amber-600 flex-shrink-0" />
            <p className="text-xs sm:text-sm text-emerald-950 font-bold">
              Top 5 Santri Teladan dengan perolehan Bintang Adab terbanyak di kelas DTA Al Hidayah.
            </p>
          </div>

          {/* Top 5 List */}
          <div className="space-y-2.5">
            {leaderboard.slice(0, 5).map((entry, index) => {
              const isCurrent = entry.isCurrentUser || entry.name.toLowerCase() === studentName.toLowerCase();

              return (
                <div
                  key={entry.id || index}
                  className={`p-3.5 sm:p-4 rounded-2xl border-2 flex items-center justify-between gap-3 transition-all ${
                    isCurrent
                      ? 'bg-amber-100/90 border-amber-400 ring-2 ring-amber-300 shadow-md scale-[1.02]'
                      : 'bg-white hover:bg-emerald-50/50 border-slate-200'
                  }`}
                >
                  {/* Rank Badge & Avatar */}
                  <div className="flex items-center gap-3 min-w-0">
                    {getRankBadge(index)}

                    <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-xl flex-shrink-0">
                      {entry.avatar === 'boy' ? '👦' : '🧕'}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-xs sm:text-sm md:text-base font-black text-emerald-950 truncate">
                          {entry.name}
                        </span>
                        {isCurrent && (
                          <span className="text-[10px] font-black uppercase text-amber-900 bg-amber-300 px-1.5 py-0.2 rounded-md">
                            Kamu
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[11px] text-slate-500 font-semibold">
                          {entry.date}
                        </span>
                        {entry.isSultan && (
                          <span className="inline-flex items-center gap-0.5 text-[10px] font-black text-amber-800 bg-amber-200/80 px-2 py-0.2 rounded-full border border-amber-300">
                            <Crown className="w-3 h-3 text-amber-600" />
                            Sultan Adab
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Stars Count */}
                  <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-amber-300 shadow-xs flex-shrink-0">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span className="text-sm sm:text-base font-black text-emerald-950">
                      {entry.stars}
                    </span>
                    <span className="text-xs text-slate-400 font-bold">/10</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t-2 border-slate-200 flex justify-end">
          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="px-5 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-xs"
          >
            Tutup Peringkat
          </button>
        </div>
      </div>
    </div>
  );
};
