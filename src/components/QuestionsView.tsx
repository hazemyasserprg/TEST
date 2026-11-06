import React, { useState } from 'react';
import { MessageSquare, CheckCircle2, Clock, Send, Plus } from 'lucide-react';

interface Question {
  id: string;
  course: string;
  lesson: string;
  question: string;
  date: string;
  status: 'answered' | 'pending';
  answer?: string;
  instructorName?: string;
}

export const QuestionsView: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 'q1',
      course: 'التشطيبات المعمارية',
      lesson: '03. أعمال البياض الداخلي: الطرطشة والبؤج والأوتار',
      question: 'ما هي النسبة النموذجية للأسمنت في مونة الطرطشة العمومية، وهل يفضل إضافة أديبوند؟',
      date: 'منذ يومين',
      status: 'answered',
      instructorName: 'م. أحمد خالد',
      answer: 'أهلاً يا مصطفى. النسبة المعتمدة هي 450 كجم أسمنت لكل 1 م3 رمل حرش متدرج، مع إضافة مادة الأديبوند 65 بنسبة 1:3 مع ماء الخلط لزيادة قوة الالتصاق والتماسك.',
    },
    {
      id: 'q2',
      course: 'Structural BIM Diploma',
      lesson: '07. تسليح البلاطات اللاكمرية Flat Slab',
      question: 'كيف يمكن عمل فواصل الصب الإنشائية (Construction Joints) بدقة على برنامج Revit؟',
      date: 'منذ 4 أيام',
      status: 'pending',
    }
  ]);

  const [newQuestionText, setNewQuestionText] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('التشطيبات المعمارية');

  const handleAddQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestionText.trim()) return;

    const newQ: Question = {
      id: `q-${Date.now()}`,
      course: selectedCourse,
      lesson: 'استفسار عام',
      question: newQuestionText,
      date: 'الآن',
      status: 'pending',
    };

    setQuestions([newQ, ...questions]);
    setNewQuestionText('');
  };

  return (
    <div className="flex flex-col gap-6 select-none max-w-4xl mx-auto">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-900">أسئلتي واستفساراتي الهندسية</h1>
          <p className="text-sm text-slate-500 mt-1">
            تابع إجابات المهندسين المحاضرين على تساؤلاتك في الكورسات
          </p>
        </div>
      </div>

      {/* Ask Question Card */}
      <form onSubmit={handleAddQuestion} className="bg-white rounded-2xl border border-slate-100 p-5 shadow-xs">
        <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
          <Plus className="w-4 h-4 text-blue-600" />
          طرح سؤال جديد على المحاضر
        </h3>

        <div className="mb-3">
          <label className="block text-xs font-semibold text-slate-500 mb-1.5 text-right">
            اختر الكورس:
          </label>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
          >
            <option value="التشطيبات المعمارية">التشطيبات المعمارية</option>
            <option value="Structural BIM Diploma">Structural BIM Diploma</option>
            <option value="AI For Engineers">AI For Engineers</option>
            <option value="إعداد مهندس موقع">إعداد مهندس موقع</option>
          </select>
        </div>

        <textarea
          value={newQuestionText}
          onChange={(e) => setNewQuestionText(e.target.value)}
          placeholder="اكتب استفسارك بالتفصيل وسيقوم المحاضر بالرد عليك..."
          rows={3}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-blue-500 resize-none"
        />

        <div className="flex justify-end mt-3">
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition"
          >
            <span>إرسال السؤال</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>

      {/* Questions List */}
      <div className="flex flex-col gap-4">
        {questions.map((q) => (
          <div
            key={q.id}
            className="bg-white rounded-2xl border border-slate-100 p-5 shadow-xs flex flex-col gap-3 text-right"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                  {q.course}
                </span>
                <span className="text-[11px] text-slate-400">
                  {q.lesson}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                {q.status === 'answered' ? (
                  <span className="text-emerald-600 font-bold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" /> تم الرد
                  </span>
                ) : (
                  <span className="text-amber-600 font-bold flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-full">
                    <Clock className="w-3.5 h-3.5" /> قيد المراجعة
                  </span>
                )}
                <span className="text-slate-400 text-[11px] mr-2">{q.date}</span>
              </div>
            </div>

            {/* Question body */}
            <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
              {q.question}
            </p>

            {/* Answer if available */}
            {q.answer && (
              <div className="mt-2 bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 text-xs text-slate-700">
                <div className="flex items-center gap-2 font-bold text-blue-600 mb-1">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>رد {q.instructorName}:</span>
                </div>
                <p className="leading-relaxed text-slate-600">
                  {q.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
