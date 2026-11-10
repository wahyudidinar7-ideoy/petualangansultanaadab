import React from 'react';

interface OptionVisualProps {
  iconKey: string;
}

export const OptionVisual: React.FC<OptionVisualProps> = ({ iconKey }) => {
  switch (iconKey) {
    case 'hands-praying':
      return (
        <div className="w-12 h-12 rounded-xl bg-amber-100 border-2 border-amber-300 flex items-center justify-center text-2xl shadow-xs">
          🤲
        </div>
      );
    case 'gamepad':
      return (
        <div className="w-12 h-12 rounded-xl bg-rose-100 border-2 border-rose-300 flex items-center justify-center text-2xl shadow-xs">
          🎮
        </div>
      );
    case 'frown':
      return (
        <div className="w-12 h-12 rounded-xl bg-slate-100 border-2 border-slate-300 flex items-center justify-center text-2xl shadow-xs">
          😢
        </div>
      );
    case 'droplet':
      return (
        <div className="w-12 h-12 rounded-xl bg-sky-100 border-2 border-sky-300 flex items-center justify-center text-2xl shadow-xs">
          💧
        </div>
      );
    case 'waves':
      return (
        <div className="w-12 h-12 rounded-xl bg-rose-100 border-2 border-rose-300 flex items-center justify-center text-2xl shadow-xs">
          🌊
        </div>
      );
    case 'spray-can':
      return (
        <div className="w-12 h-12 rounded-xl bg-orange-100 border-2 border-orange-300 flex items-center justify-center text-2xl shadow-xs">
          🔫
        </div>
      );
    case 'hand-right':
      return (
        <div className="w-12 h-12 rounded-xl bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center text-2xl shadow-xs">
          👉
        </div>
      );
    case 'hand-left':
      return (
        <div className="w-12 h-12 rounded-xl bg-rose-100 border-2 border-rose-300 flex items-center justify-center text-2xl shadow-xs">
          👈
        </div>
      );
    case 'feet-running':
      return (
        <div className="w-12 h-12 rounded-xl bg-slate-100 border-2 border-slate-300 flex items-center justify-center text-2xl shadow-xs">
          🏃
        </div>
      );
    case 'bed-double':
      return (
        <div className="w-12 h-12 rounded-xl bg-indigo-100 border-2 border-indigo-300 flex items-center justify-center text-2xl shadow-xs">
          🛌
        </div>
      );
    case 'bed-flat':
      return (
        <div className="w-12 h-12 rounded-xl bg-rose-100 border-2 border-rose-300 flex items-center justify-center text-2xl shadow-xs">
          ⚠️
        </div>
      );
    case 'mask':
      return (
        <div className="w-12 h-12 rounded-xl bg-slate-100 border-2 border-slate-300 flex items-center justify-center text-2xl shadow-xs">
          🙈
        </div>
      );
    case 'smile':
      return (
        <div className="w-12 h-12 rounded-xl bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center text-2xl shadow-xs">
          😊
        </div>
      );
    case 'megaphone-off':
      return (
        <div className="w-12 h-12 rounded-xl bg-rose-100 border-2 border-rose-300 flex items-center justify-center text-2xl shadow-xs">
          🚫
        </div>
      );
    case 'shield-alert':
      return (
        <div className="w-12 h-12 rounded-xl bg-slate-100 border-2 border-slate-300 flex items-center justify-center text-2xl shadow-xs">
          ❌
        </div>
      );
    case 'sparkles':
      return (
        <div className="w-12 h-12 rounded-xl bg-amber-100 border-2 border-amber-300 flex items-center justify-center text-2xl shadow-xs">
          ✨
        </div>
      );
    case 'footprints':
      return (
        <div className="w-12 h-12 rounded-xl bg-rose-100 border-2 border-rose-300 flex items-center justify-center text-2xl shadow-xs">
          🏃‍♂️
        </div>
      );
    case 'hand-metal':
      return (
        <div className="w-12 h-12 rounded-xl bg-slate-100 border-2 border-slate-300 flex items-center justify-center text-2xl shadow-xs">
          👏
        </div>
      );
    case 'heart-handshake':
      return (
        <div className="w-12 h-12 rounded-xl bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center text-2xl shadow-xs">
          🤝
        </div>
      );
    case 'ear-off':
      return (
        <div className="w-12 h-12 rounded-xl bg-rose-100 border-2 border-rose-300 flex items-center justify-center text-2xl shadow-xs">
          🙉
        </div>
      );
    case 'angry':
      return (
        <div className="w-12 h-12 rounded-xl bg-slate-100 border-2 border-slate-300 flex items-center justify-center text-2xl shadow-xs">
          😠
        </div>
      );
    case 'footprints-right':
      return (
        <div className="w-12 h-12 rounded-xl bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center text-2xl shadow-xs">
          🦶
        </div>
      );
    case 'footprints-left':
      return (
        <div className="w-12 h-12 rounded-xl bg-rose-100 border-2 border-rose-300 flex items-center justify-center text-2xl shadow-xs">
          👣
        </div>
      );
    case 'jump':
      return (
        <div className="w-12 h-12 rounded-xl bg-slate-100 border-2 border-slate-300 flex items-center justify-center text-2xl shadow-xs">
          🦘
        </div>
      );
    case 'book-open':
      return (
        <div className="w-12 h-12 rounded-xl bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center text-2xl shadow-xs">
          📖
        </div>
      );
    case 'send':
      return (
        <div className="w-12 h-12 rounded-xl bg-rose-100 border-2 border-rose-300 flex items-center justify-center text-2xl shadow-xs">
          ✈️
        </div>
      );
    case 'coffee':
      return (
        <div className="w-12 h-12 rounded-xl bg-slate-100 border-2 border-slate-300 flex items-center justify-center text-2xl shadow-xs">
          😴
        </div>
      );
    default:
      return (
        <div className="w-12 h-12 rounded-xl bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center text-2xl shadow-xs">
          🌟
        </div>
      );
  }
};
