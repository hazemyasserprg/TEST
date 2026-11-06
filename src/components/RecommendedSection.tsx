import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { type Course, RECOMMENDED_COURSES } from '../data/coursesData';

interface RecommendedSectionProps {
  onSelectCourse: (course: Course) => void;
  onViewAll: () => void;
}

export const RecommendedSection: React.FC<RecommendedSectionProps> = ({
  onSelectCourse,
  onViewAll,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  return (
    <section className="my-6">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        {/* Title & Subtitle (Right in RTL) */}
        <div className="flex flex-col text-right">
          <h2 className="text-xl font-black text-slate-900">
            مقترح لك
          </h2>
          <p className="text-xs md:text-sm text-slate-400 font-medium mt-0.5">
            كورسات مختارة لك بناء على تقدمك وأهدافك
          </p>
        </div>

        {/* View All Button (Left in RTL) */}
        <button
          onClick={onViewAll}
          className="px-4 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold shadow-xs transition"
        >
          عرض الكل
        </button>
      </div>

      {/* Course Cards Carousel Container */}
      <div className="relative group">
        {/* Navigation Left Arrow Button */}
        <button
          onClick={scrollLeft}
          title="التالي"
          className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-blue-600 flex items-center justify-center shadow-md transition z-10 hover:scale-105"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Navigation Right Arrow Button (optional on scroll) */}
        <button
          onClick={scrollRight}
          title="السابق"
          className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-blue-600 flex items-center justify-center shadow-md transition z-10 hover:scale-105 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Horizontal Scroll Area */}
        <div 
          ref={scrollContainerRef}
          className="flex items-stretch gap-4 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {RECOMMENDED_COURSES.map((course) => (
            <div
              key={course.id}
              onClick={() => onSelectCourse(course)}
              className="w-56 shrink-0 bg-white rounded-2xl border border-slate-100/90 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden flex flex-col group/card hover:-translate-y-1"
            >
              {/* Graphic Banner Matching Screenshot */}
              <div className={`h-40 bg-gradient-to-br ${course.coverGradient} p-3.5 relative flex flex-col justify-between text-white overflow-hidden`}>
                {/* Background decorative glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />

                {/* Top Badge */}
                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] bg-black/30 backdrop-blur-xs px-2 py-0.5 rounded-full font-medium">
                    {course.category}
                  </span>
                  <span className="text-[9px] font-bold tracking-wider opacity-80 font-sans">
                    BENAA
                  </span>
                </div>

                {/* Course Graphic Title (Centered or bottom) */}
                <div className="z-10 text-center my-auto px-1">
                  <span className="text-sm font-black tracking-tight leading-snug drop-shadow-sm block">
                    {course.title}
                  </span>
                  {course.subtitle && (
                    <span className="text-[10px] text-blue-100/90 font-medium mt-0.5 block">
                      {course.subtitle}
                    </span>
                  )}
                </div>

                {/* Instructor Photo Badge */}
                <div className="flex items-center justify-between z-10 pt-1 border-t border-white/15">
                  <span className="text-[10px] font-semibold truncate">
                    {course.instructor}
                  </span>
                  <div className="w-8 h-8 rounded-full border-2 border-white/60 overflow-hidden bg-slate-200 shrink-0 shadow-xs">
                    <img
                      src={course.instructorImage}
                      alt={course.instructor}
                      className="w-full h-full object-cover group-hover/card:scale-110 transition duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Title & Info Below Image */}
              <div className="p-3.5 flex flex-col justify-between flex-1 text-right">
                <span className="text-sm font-bold text-slate-800 line-clamp-1 group-hover/card:text-[#1062fe] transition">
                  {course.title}
                </span>

                <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
                  <span className="font-semibold text-[#1062fe]">
                    {course.price ? `${course.price} ج.م` : 'مشمول بالاشتراك'}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {course.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
