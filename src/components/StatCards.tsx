import React from 'react';
import { GraduationCap, BookOpen, Layers } from 'lucide-react';
import { CURRENT_USER } from '../data/coursesData';

interface StatCardsProps {
  onCardClick?: (type: string) => void;
}

export const StatCards: React.FC<StatCardsProps> = ({ onCardClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
      {/* 1. الكورسات النشطة (Right in RTL) */}
      <div 
        onClick={() => onCardClick?.('active-courses')}
        className="bg-white rounded-2xl border border-slate-100 p-5 flex items-center justify-between shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md transition cursor-pointer group"
      >
        <div className="flex flex-col text-right">
          <span className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition">
            {CURRENT_USER.activeCoursesCount}
          </span>
          <span className="text-sm font-semibold text-slate-500 mt-1">
            الكورسات النشطة
          </span>
        </div>
        <div className="w-12 h-12 rounded-xl bg-[#edf5ff] text-[#1062fe] flex items-center justify-center shrink-0">
          <GraduationCap className="w-6 h-6" />
        </div>
      </div>

      {/* 2. ساعات كاملة (Center in RTL) */}
      <div 
        onClick={() => onCardClick?.('hours')}
        className="bg-white rounded-2xl border border-slate-100 p-5 flex items-center justify-between shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md transition cursor-pointer group"
      >
        <div className="flex flex-col text-right">
          <span className="text-2xl font-black text-slate-900 group-hover:text-purple-600 transition">
            {CURRENT_USER.completedHours}
          </span>
          <span className="text-sm font-semibold text-slate-500 mt-1">
            ساعات كاملة
          </span>
        </div>
        <div className="w-12 h-12 rounded-xl bg-[#f5edff] text-[#9333ea] flex items-center justify-center shrink-0">
          <BookOpen className="w-6 h-6" />
        </div>
      </div>

      {/* 3. الباقات المخفضة (Left in RTL) */}
      <div 
        onClick={() => onCardClick?.('bundles')}
        className="bg-white rounded-2xl border border-slate-100 p-5 flex items-center justify-between shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md transition cursor-pointer group"
      >
        <div className="flex flex-col text-right">
          <span className="text-2xl font-black text-slate-400 group-hover:text-emerald-600 transition">
            {CURRENT_USER.discountedPackagesCount}
          </span>
          <span className="text-sm font-semibold text-slate-500 mt-1">
            الباقات المخفضة
          </span>
        </div>
        <div className="w-12 h-12 rounded-xl bg-[#eefaf4] text-[#10b981] flex items-center justify-center shrink-0">
          <Layers className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

