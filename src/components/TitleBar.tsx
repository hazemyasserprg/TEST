import React, { useState } from 'react';
import { Minus, Square, X, Shield, ShieldAlert } from 'lucide-react';
import { BenaaLogo } from './BenaaLogo';

export const TitleBar: React.FC = () => {
  const [drmEnabled, setDrmEnabled] = useState(true);

  const handleMinimize = () => {
    // @ts-expect-error - electronAPI injected by preload
    if (window.electronAPI?.minimize) window.electronAPI.minimize();
  };

  const handleMaximize = () => {
    // @ts-expect-error - electronAPI injected by preload
    if (window.electronAPI?.maximize) window.electronAPI.maximize();
  };

  const handleClose = () => {
    // @ts-expect-error - electronAPI injected by preload
    if (window.electronAPI?.close) window.electronAPI.close();
  };

  const toggleDrm = () => {
    const nextState = !drmEnabled;
    setDrmEnabled(nextState);
    // @ts-expect-error - electronAPI injected by preload
    if (window.electronAPI?.setContentProtection) {
      // @ts-expect-error - electronAPI injected by preload
      window.electronAPI.setContentProtection(nextState);
    }
  };

  return (
    <header className="h-10 w-full bg-white border-b border-slate-200/80 flex items-center justify-between px-3 select-none app-drag-region z-50">
      {/* Right side (RTL Start): App Logo & Title */}
      <div className="flex items-center gap-2.5 app-no-drag">
        <div className="w-5 h-5 flex items-center justify-center">
          <BenaaLogo size="sm" />
        </div>
        <span className="text-xs font-bold text-slate-700 tracking-wide">
          Benaa Academy
        </span>

        {/* Security / DRM Shield Indicator */}
        <button
          onClick={toggleDrm}
          title={drmEnabled ? 'حماية المحتوى ومنع تسجيل الشاشة مفعّل' : 'حماية المحتوى معطلة'}
          className={`mr-3 px-2 py-0.5 rounded-full text-[11px] font-medium flex items-center gap-1.5 transition ${
            drmEnabled 
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100' 
              : 'bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100'
          }`}
        >
          {drmEnabled ? (
            <>
              <Shield className="w-3 h-3 text-emerald-600" />
              <span>حماية المحتوى مفعّلة (DRM)</span>
            </>
          ) : (
            <>
              <ShieldAlert className="w-3 h-3 text-amber-600" />
              <span>الحماية معطلة</span>
            </>
          )}
        </button>
      </div>

      {/* Left side (RTL End): Windows Style Window Controls */}
      <div className="flex items-center app-no-drag" dir="ltr">
        <button
          onClick={handleMinimize}
          className="w-10 h-10 flex items-center justify-center hover:bg-slate-100 text-slate-600 transition"
          aria-label="Minimize"
        >
          <Minus className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={handleMaximize}
          className="w-10 h-10 flex items-center justify-center hover:bg-slate-100 text-slate-600 transition"
          aria-label="Maximize"
        >
          <Square className="w-3 h-3" />
        </button>
        <button
          onClick={handleClose}
          className="w-10 h-10 flex items-center justify-center hover:bg-red-500 hover:text-white text-slate-600 transition"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};

