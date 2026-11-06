import React, { useState } from 'react';
import { Play, Search, Clock, BookOpen, CheckCircle } from 'lucide-react';
import { type Course, MY_COURSES } from '../data/coursesData';

interface MyCoursesViewProps {
  onPlayCourse: (course: Course) => void;
}

export const MyCoursesView: React.FC<MyCoursesViewProps> = ({ onPlayCourse }) => {
  const [filter, setFilter] = useState<'all' | 'in-progress' | 'completed'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = MY_COURSES.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    if (filter === 'in-progress') return matchesSearch && course.progress < 100;
    if (filter === 'completed') return matchesSearch && course.progress === 100;
    return matchesSearch;
  });

  return (
    <div className="flex flex-col gap-6 select-none">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">كورساتي التعليمية</h1>
          <p className="text-sm text-slate-500 mt-1">
            لديك {MY_COURSES.length} كورسات مسجلة في حسابك
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 bg-slate-100/80 p-1 rounded-xl text-xs font-bold text-slate-600">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg transition ${
              filter === 'all' ? 'bg-white text-blue-600 shadow-xs' : 'hover:text-slate-900'
            }`}
          >
            الكل ({MY_COURSES.length})
          </button>
          <button
            onClick={() => setFilter('in-progress')}
            className={`px-3 py-1.5 rounded-lg transition ${
              filter === 'in-progress' ? 'bg-white text-blue-600 shadow-xs' : 'hover:text-slate-900'
            }`}
          >
            قيد التقدم
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-3 py-1.5 rounded-lg transition ${
              filter === 'completed' ? 'bg-white text-blue-600 shadow-xs' : 'hover:text-slate-900'
            }`}
          >
            المكتملة
          </button>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-5 h-5 absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="ابحث بين كورساتك المسجلة..."
          className="w-full pr-11 pl-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 shadow-2xs"
        />
      </div>

      {/* Grid of Courses */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl border border-slate-100 p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-lg transition flex flex-col justify-between group"
          >
            <div>
              {/* Cover Graphic */}
              <div className={`h-36 rounded-xl bg-gradient-to-br ${course.coverGradient} p-3 text-white flex flex-col justify-between relative overflow-hidden`}>
                <div className="flex justify-between items-center text-[10px]">
                  <span className="bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded">
                    {course.category}
                  </span>
                  {course.progress === 100 && (
                    <span className="bg-emerald-500 px-2 py-0.5 rounded font-bold flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> مكتمل
                    </span>
                  )}
                </div>

                <div className="font-bold text-sm leading-snug">
                  {course.title}
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <img
                    src={course.instructorImage}
                    alt={course.instructor}
                    className="w-5 h-5 rounded-full object-cover border border-white/50"
                  />
                  <span className="text-[11px] opacity-90">{course.instructor}</span>
                </div>
              </div>

              {/* Progress & Stats */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-1.5">
                  <span>نسبة الإنجاز</span>
                  <span className="text-blue-600 font-bold">{course.progress}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      course.progress === 100 ? 'bg-emerald-500' : 'bg-blue-600'
                    }`}
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mt-3 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  {course.lessonsCount} درس
                </span>
              </div>
            </div>

            {/* Action button */}
            <button
              onClick={() => onPlayCourse(course)}
              className="mt-4 w-full py-2.5 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold text-xs flex items-center justify-center gap-2 transition"
            >
              <Play className="w-4 h-4 fill-transparent" />
              <span>{course.progress > 0 ? 'متابعة المشاهدة' : 'بدء الكورس'}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
