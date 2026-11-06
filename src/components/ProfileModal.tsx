import React from 'react';
import { X, Laptop, Award, LogOut, Download } from 'lucide-react';
import { CURRENT_USER } from '../data/coursesData';

interface ProfileModalProps {
  onClose: () => void;
  onOpenCertificate?: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ onClose, onOpenCertificate }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 select-none">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200 text-right">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center justify-between relative">
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-full bg-white text-[#1062fe] font-black text-2xl flex items-center justify-center shadow-md">
              {CURRENT_USER.avatarInitial}
            </div>
            <div>
              <h2 className="text-lg font-black">{CURRENT_USER.name}</h2>
              <p className="text-xs text-blue-100 font-mono" dir="ltr">
                {CURRENT_USER.email}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/30 flex items-center justify-center text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Details & Device Info */}
        <div className="p-5 space-y-4 text-xs">
          {/* Security & Device Binding Info (Important for Desktop LMS) */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 space-y-2">
            <div className="flex items-center justify-between text-slate-700 font-bold">
              <span className="flex items-center gap-1.5">
                <Laptop className="w-4 h-4 text-blue-600" /> الجهاز المعتمد
              </span>
              <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                مفعل ونشط
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              حسابك مقترن بجهاز الكمبيوتر الحالي (Windows 11) لحماية المحتوى ومتابعة التقدم.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-xl">
              <span className="text-xl font-black text-blue-700 block">6</span>
              <span className="text-slate-500 font-semibold">كورسات نشطة</span>
            </div>
            <div className="p-3 bg-purple-50/60 border border-purple-100 rounded-xl">
              <span className="text-xl font-black text-purple-700 block">1</span>
              <span className="text-slate-500 font-semibold">شهادات معتمدة</span>
            </div>
          </div>

          {/* Settings List */}
          <div className="space-y-1 pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                onClose();
                onOpenCertificate?.();
              }}
              className="w-full py-2.5 px-3 rounded-xl hover:bg-amber-50 text-slate-700 hover:text-amber-700 font-bold flex items-center justify-between transition cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500" /> شهاداتي وإثباتات الحضور
              </span>
              <span className="text-[11px] text-amber-600 bg-amber-100/70 px-2 py-0.5 rounded-full font-bold">
                عرض الشهادة (1)
              </span>
            </button>

            <button className="w-full py-2.5 px-3 rounded-xl hover:bg-slate-50 text-slate-700 font-bold flex items-center justify-between transition">
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4 text-blue-500" /> الفيديوهات المحملة للمشاهدة بدون إنترنت
              </span>
              <span className="text-[11px] text-slate-400">2.4 GB</span>
            </button>

            <button className="w-full py-2.5 px-3 rounded-xl hover:bg-red-50 text-red-600 font-bold flex items-center justify-between transition">
              <span className="flex items-center gap-2">
                <LogOut className="w-4 h-4" /> تسجيل الخروج من الجهاز
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
