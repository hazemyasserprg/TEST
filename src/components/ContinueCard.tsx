import React from 'react';
import { Play } from 'lucide-react';
import { type Course } from '../data/coursesData';

interface ContinueCardProps {
  course: Course;
  onContinue: (course: Course) => void;
}

export const ContinueCard: React.FC<ContinueCardProps> = ({ course, onContinue }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 my-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md transition">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Course Info + Thumbnail (Right in RTL) */}
        <div className="flex items-center gap-4 w-full sm:w-auto">
          {/* Custom Stylized Course Banner */}
          <div className="w-24 h-20 rounded-xl bg-gradient-to-br from-[#1062fe] to-[#1e40af] p-2 text-white flex flex-col justify-between shrink-0 shadow-sm relative overflow-hidden">
            <div className="text-[10px] font-bold leading-tight opacity-90">
              كورس
              <br />
              {course.title}
            </div>
            {/* Realistic stylized instructor badge */}
            <div className="flex items-center justify-between mt-auto">
              <span className="text-[8px] bg-white/20 px-1 py-0.5 rounded">بناء</span>
              <div className="w-6 h-6 rounded-full border border-white/40 overflow-hidden bg-slate-200">
                <img 
                  src={course.instructorImage} 
                  alt={course.instructor}
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>

          {/* Titles & Percentage */}
          <div className="flex flex-col text-right">
            <h2 className="text-lg md:text-xl font-extrabold text-slate-900">
              {course.title}
            </h2>
            <span className="text-xs md:text-sm font-semibold text-slate-400 mt-1">
              مكتمل بنسبة {course.progress}%
            </span>
          </div>
        </div>

        {/* Action Button: متابعة / Continue (Left in RTL) */}
        <button
          onClick={() => onContinue(course)}
          className="w-full sm:w-auto px-7 py-2.5 rounded-xl border border-[#1062fe] text-[#1062fe] hover:bg-[#edf5ff] active:scale-95 font-bold text-sm flex items-center justify-center gap-2 transition"
        >
          <span>متابعة</span>
          <Play className="w-4 h-4 fill-transparent" />
        </button>
      </div>

      {/* Progress Bar Line */}
      <div className="w-full bg-slate-100 h-1.5 rounded-full mt-4 overflow-hidden">
        <div 
          className="bg-[#1062fe] h-full rounded-full transition-all duration-500"
          style={{ width: `${Math.max(course.progress, 2)}%` }}
        />
      </div>
    </div>
  );
};
