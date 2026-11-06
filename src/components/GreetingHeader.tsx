import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { CURRENT_USER } from '../data/coursesData';

export const GreetingHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between pt-2 pb-4">
      <div className="flex flex-col text-right">
        <h1 className="text-2xl md:text-[26px] font-extrabold text-slate-900 leading-tight">
          مرحبا بكم مرة أخرى يا !{CURRENT_USER.name}
        </h1>
        <p className="text-sm md:text-[15px] text-slate-500 font-medium mt-1">
          استمر في بناء خبرتك الهندسية
        </p>
      </div>

      {/* Subtle indicator / carousel control */}
      <button 
        className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-800 flex items-center justify-center shadow-xs transition"
        title="التالي"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
    </div>
  );
};

