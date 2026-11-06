import React, { useState, useEffect } from 'react';
import { 
  X, 
  Play, 
  CheckCircle2, 
  Download, 
  HelpCircle, 
  ShieldCheck, 
  FileText, 
  Clock 
} from 'lucide-react';
import { type Course, CURRENT_USER } from '../data/coursesData';

interface CoursePlayerModalProps {
  course: Course;
  onClose: () => void;
}

export const CoursePlayerModal: React.FC<CoursePlayerModalProps> = ({ course, onClose }) => {
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'content' | 'files' | 'questions'>('content');
  const [watermarkPos, setWatermarkPos] = useState({ top: 20, left: 30 });

  const lessons = course.lessons || [
    { id: '1', title: `01. مقدمة في ${course.title}`, duration: '18:40', completed: true },
    { id: '2', title: '02. أساسيات ومصطلحات هندسية معتمدة', duration: '25:10', completed: false },
    { id: '3', title: '03. التطبيق العملي ونماذج المشاريع الواقعية', duration: '40:00', completed: false },
    { id: '4', title: '04. مراجعة المشاكل الشائعة وطرق تفاديها', duration: '32:15', completed: false },
  ];

  const currentLesson = lessons[activeLessonIndex];

  // Moving Anti-Piracy Watermark Effect
  useEffect(() => {
    const interval = setInterval(() => {
      const top = Math.floor(Math.random() * 70) + 15;
      const left = Math.floor(Math.random() * 70) + 15;
      setWatermarkPos({ top, left });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 select-none">
      <div className="bg-white w-full max-w-6xl h-[92vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200">
        {/* Top Header */}
        <div className="bg-slate-900 text-white px-5 py-3 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="text-xs bg-blue-600 px-2.5 py-1 rounded-md font-bold">
              مشغل الكورسات
            </span>
            <h3 className="font-bold text-sm sm:text-base text-slate-100 truncate max-w-md">
              {course.title} - {currentLesson?.title}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-1 rounded-md">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>حماية البث نشطة</span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition"
              title="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Player Area: Left Video / Right Playlist */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden bg-slate-950">
          {/* Video Player Container */}
          <div className="flex-1 relative bg-black flex flex-col justify-center items-center overflow-hidden">
            {/* The Video Element */}
            <video
              key={currentLesson?.id}
              className="w-full h-full object-contain max-h-[60vh] lg:max-h-full"
              controls
              autoPlay
              src={
                currentLesson?.videoUrl ||
                'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
              }
            >
              متصفحك لا يدعم تشغيل الفيديو.
            </video>

            {/* Dynamic Anti-Piracy Floating Watermark (DRM Simulation) */}
            <div
              className="absolute pointer-events-none transition-all duration-1000 ease-in-out opacity-25 select-none bg-black/40 px-3 py-1 rounded border border-white/20 text-white text-[11px] font-mono tracking-wider"
              style={{
                top: `${watermarkPos.top}%`,
                left: `${watermarkPos.left}%`,
              }}
            >
              {CURRENT_USER.name} • {CURRENT_USER.email}
            </div>
          </div>

          {/* Right Sidebar: Playlist & Notes */}
          <div className="w-full lg:w-96 bg-white border-r border-slate-200 flex flex-col h-72 lg:h-full">
            {/* Tabs */}
            <div className="flex items-center border-b border-slate-200 bg-slate-50 text-xs font-bold text-slate-600">
              <button
                onClick={() => setActiveTab('content')}
                className={`flex-1 py-3 text-center border-b-2 transition ${
                  activeTab === 'content'
                    ? 'border-blue-600 text-blue-600 bg-white'
                    : 'border-transparent hover:text-slate-900'
                }`}
              >
                المحتوى ({lessons.length})
              </button>
              <button
                onClick={() => setActiveTab('files')}
                className={`flex-1 py-3 text-center border-b-2 transition ${
                  activeTab === 'files'
                    ? 'border-blue-600 text-blue-600 bg-white'
                    : 'border-transparent hover:text-slate-900'
                }`}
              >
                الملفات (3)
              </button>
              <button
                onClick={() => setActiveTab('questions')}
                className={`flex-1 py-3 text-center border-b-2 transition ${
                  activeTab === 'questions'
                    ? 'border-blue-600 text-blue-600 bg-white'
                    : 'border-transparent hover:text-slate-900'
                }`}
              >
                الأسئلة
              </button>
            </div>

            {/* Tab 1: Content Playlist */}
            {activeTab === 'content' && (
              <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
                {lessons.map((lesson, idx) => {
                  const isActive = idx === activeLessonIndex;
                  return (
                    <button
                      key={lesson.id}
                      onClick={() => setActiveLessonIndex(idx)}
                      className={`w-full p-3.5 flex items-center justify-between text-right transition ${
                        isActive
                          ? 'bg-blue-50 text-blue-600 font-bold'
                          : 'hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {lesson.completed ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        ) : (
                          <Play className="w-4 h-4 text-blue-500 shrink-0" />
                        )}
                        <span className="text-xs truncate">
                          {lesson.title}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400 shrink-0 mr-2 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {lesson.duration}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Tab 2: Files / Downloads */}
            {activeTab === 'files' && (
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-5 h-5 text-red-500" />
                    <div className="text-right">
                      <p className="text-xs font-bold text-slate-800">مخططات الأوتوكاد التنفيذية</p>
                      <span className="text-[10px] text-slate-400">DWG / PDF • 14 MB</span>
                    </div>
                  </div>
                  <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
                    <Download className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-5 h-5 text-blue-500" />
                    <div className="text-right">
                      <p className="text-xs font-bold text-slate-800">جداول حصر الكميات والمواصفات</p>
                      <span className="text-[10px] text-slate-400">Excel XLSX • 4.2 MB</span>
                    </div>
                  </div>
                  <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Tab 3: Questions */}
            {activeTab === 'questions' && (
              <div className="flex-1 overflow-y-auto p-4 flex flex-col justify-between">
                <div className="text-center py-8 text-slate-400">
                  <HelpCircle className="w-10 h-10 mx-auto text-slate-300 mb-2" />
                  <p className="text-xs">لم تطرح أي أسئلة في هذا الدرس بعد.</p>
                </div>
                <div className="pt-2">
                  <textarea
                    placeholder="اكتب استفسارك للمهندس المحاضر هنا..."
                    rows={3}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 resize-none"
                  />
                  <button className="w-full mt-2 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition">
                    إرسال السؤال
                  </button>
                </div>
              </div>
            )}

            {/* Instructor Footer */}
            <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src={course.instructorImage}
                  alt={course.instructor}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="text-right">
                  <p className="text-xs font-bold text-slate-800">{course.instructor}</p>
                  <p className="text-[10px] text-slate-400">{course.instructorRole || 'محاضر بالأكاديمية'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
