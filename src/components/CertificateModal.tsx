import React from 'react';
import { X, Award, Printer, CheckCircle2 } from 'lucide-react';
import { type Course, CURRENT_USER } from '../data/coursesData';
import { BenaaLogo } from './BenaaLogo';

interface CertificateModalProps {
  course: Course;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ course, onClose }) => {
  const certificateId = `BENAA-CERT-${Math.floor(100000 + Math.random() * 900000)}`;
  const issueDate = '06 نوفمبر 2026';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 select-none overflow-y-auto">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col my-auto">
        {/* Top Action Bar */}
        <div className="bg-slate-900 text-white px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="font-bold text-sm">شهادة إتمام معتمدة</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold flex items-center gap-1.5 transition text-slate-200 hover:text-white"
            >
              <Printer className="w-4 h-4" />
              <span>طباعة / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Printable Canvas */}
        <div className="p-8 sm:p-12 bg-[#fffdf8] relative flex flex-col items-center text-center border-8 border-double border-amber-600/30 m-4 rounded-2xl shadow-inner">
          {/* Subtle Watermark Logo Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <BenaaLogo size="lg" />
          </div>

          {/* Header */}
          <div className="flex flex-col items-center mb-6 z-10">
            <BenaaLogo size="md" />
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-4 tracking-tight">
              شهادة إتمام دبلومة هندسية
            </h1>
            <p className="text-xs font-semibold text-amber-700 uppercase tracking-widest mt-1">
              Certificate of Completion
            </p>
          </div>

          {/* Body */}
          <div className="space-y-4 max-w-xl z-10">
            <p className="text-xs sm:text-sm text-slate-500">
              تشهد إدارة أكاديمية بناء للتدريب الهندسي بأن المهندس /
            </p>

            <div className="py-2 border-b-2 border-amber-500/60 inline-block px-8">
              <span className="text-xl sm:text-2xl font-black text-slate-900 font-serif">
                {CURRENT_USER.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
              قد أتم بنجاح متطلبات واختبارات الدبلومة التدريبية المتخصصة في:
            </p>

            <h2 className="text-lg sm:text-xl font-black text-blue-700 bg-blue-50/80 py-2.5 px-6 rounded-xl border border-blue-200">
              {course.title}
            </h2>

            <p className="text-xs text-slate-500">
              بإجمالي عدد ساعات تدريبية معتمدة: <strong className="text-slate-800">{course.duration}</strong>
            </p>
          </div>

          {/* Footer with Signatures & Verification */}
          <div className="w-full flex items-end justify-between pt-10 mt-8 border-t border-amber-200/60 text-right z-10">
            <div>
              <p className="text-[11px] font-bold text-slate-700">توقيع المحاضر المعتمد:</p>
              <p className="text-xs font-serif font-black text-slate-900 mt-1">{course.instructor}</p>
              <span className="text-[10px] text-slate-400">استشاري معتمد</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border-2 border-dashed border-amber-600 flex items-center justify-center text-amber-600 text-[10px] font-black rotate-[-12deg] bg-amber-50">
                ختم الأكاديمية
              </div>
              <span className="text-[9px] text-slate-400 mt-1">{issueDate}</span>
            </div>

            <div className="text-left" dir="ltr">
              <p className="text-[10px] font-mono text-slate-400">ID: {certificateId}</p>
              <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-bold mt-0.5">
                <CheckCircle2 className="w-3 h-3" />
                <span>Verified Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

