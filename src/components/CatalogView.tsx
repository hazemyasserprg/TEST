import React, { useState } from 'react';
import { Search, ShoppingCart, Clock, BookOpen, Check } from 'lucide-react';
import { type Course, RECOMMENDED_COURSES } from '../data/coursesData';

interface CatalogViewProps {
  initialFilter?: 'all' | 'bundles';
  onSelectCourse: (course: Course) => void;
  onAddToCart: (course: Course) => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  initialFilter = 'all',
  onSelectCourse,
  onAddToCart,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [addedIds, setAddedIds] = useState<string[]>([]);

  const categories = [
    { id: 'all', name: 'جميع الكورسات' },
    { id: 'civil', name: 'الهندسة المدنية والإنشائية' },
    { id: 'arch', name: 'التشطيبات والمعمار' },
    { id: 'bim', name: 'تطبيقات BIM' },
    { id: 'mgmt', name: 'إدارة المشروعات والمكتب الفني' },
  ];

  const handleAdd = (e: React.MouseEvent, course: Course) => {
    e.stopPropagation();
    onAddToCart(course);
    setAddedIds((prev) => [...prev, course.id]);
    setTimeout(() => {
      setAddedIds((prev) => prev.filter((id) => id !== course.id));
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-6 select-none">
      {/* Title */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">
            {initialFilter === 'bundles' ? 'الباقات الهندسية المخفضة' : 'دليل الكورسات الهندسية'}
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            {initialFilter === 'bundles'
              ? 'احصل على خصومات تصل إلى 45% عند الاشتراك في الدبلومات المجمعة'
              : 'طوّر مهاراتك الهندسية مع أفضل الخبراء والاستشاريين في الوطن العربي'}
          </p>
        </div>
      </div>

      {/* Category Pills & Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ابحث عن كورس أو محاضر..."
            className="w-full pr-9 pl-3 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-blue-500 shadow-2xs"
          />
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {RECOMMENDED_COURSES.map((course) => {
          const isAdded = addedIds.includes(course.id);
          return (
            <div
              key={course.id}
              onClick={() => onSelectCourse(course)}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1"
            >
              {/* Graphic Banner */}
              <div className={`h-40 bg-gradient-to-br ${course.coverGradient} p-4 text-white flex flex-col justify-between relative`}>
                <div className="flex items-center justify-between z-10">
                  <span className="text-[11px] bg-black/30 backdrop-blur-xs px-2.5 py-0.5 rounded-full font-medium">
                    {course.category}
                  </span>
                  {course.badge && (
                    <span className="text-[10px] bg-amber-400 text-slate-900 font-black px-2 py-0.5 rounded shadow-xs">
                      {course.badge}
                    </span>
                  )}
                </div>

                <div className="z-10 text-center my-auto">
                  <h3 className="font-black text-base drop-shadow-sm">
                    {course.title}
                  </h3>
                  {course.subtitle && (
                    <p className="text-[11px] text-blue-100 mt-0.5">
                      {course.subtitle}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between z-10 pt-2 border-t border-white/20">
                  <span className="text-xs font-semibold">{course.instructor}</span>
                  <img
                    src={course.instructorImage}
                    alt={course.instructor}
                    className="w-8 h-8 rounded-full object-cover border-2 border-white/70 shadow-xs"
                  />
                </div>
              </div>

              {/* Body */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-100">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" /> {course.lessonsCount} محاضرة
                  </span>
                </div>

                <div className="flex items-center justify-between pt-3 mt-auto">
                  <div className="text-right">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-black text-slate-900">
                        {course.price} ج.م
                      </span>
                      {course.originalPrice && (
                        <span className="text-xs text-slate-400 line-through">
                          {course.originalPrice} ج.م
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={(e) => handleAdd(e, course)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                      isAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white active:scale-95'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>تمت الإضافة</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>إضافة للسلة</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
