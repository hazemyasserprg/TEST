import React from 'react';
import { X, Bell, BookOpen, Gift, CheckCheck } from 'lucide-react';

interface NotificationsModalProps {
  onClose: () => void;
}

export const NotificationsModal: React.FC<NotificationsModalProps> = ({ onClose }) => {
  const notifications = [
    {
      id: '1',
      title: 'تمت إضافة درس جديد في كورس التشطيبات',
      desc: 'أضاف م. أحمد خالد محاضرة جديدة: "استلام بياض المحارة بالقدة والميزان".',
      time: 'منذ ساعتين',
      unread: true,
      icon: BookOpen,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      id: '2',
      title: 'خصم خاص بمناسبة شهر البناء الهندسي',
      desc: 'استخدم كود BENAA2026 للحصول على خصم 15% على جميع دبلومات BIM والكباري.',
      time: 'منذ 5 ساعات',
      unread: true,
      icon: Gift,
      color: 'bg-pink-50 text-pink-600',
    },
    {
      id: '3',
      title: 'أجاب المهندس المحاضر على سؤالك',
      desc: 'قام م. أحمد خالد بالرد على استفسارك الخاص بمونة الطرطشة.',
      time: 'منذ يوم',
      unread: false,
      icon: Bell,
      color: 'bg-emerald-50 text-emerald-600',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 select-none">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-black text-slate-900">مركز الإشعارات</h2>
            <span className="text-xs bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded-full">
              2 جديدة
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="divide-y divide-slate-100 max-h-[60vh] overflow-y-auto">
          {notifications.map((n) => {
            const Icon = n.icon;
            return (
              <div
                key={n.id}
                className={`p-4 flex items-start gap-3 transition cursor-pointer hover:bg-slate-50 ${
                  n.unread ? 'bg-blue-50/30' : ''
                }`}
              >
                <div className={`w-9 h-9 rounded-xl ${n.color} flex items-center justify-center shrink-0`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 text-right">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-900">{n.title}</h4>
                    <span className="text-[10px] text-slate-400">{n.time}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{n.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <button className="text-blue-600 font-semibold hover:underline flex items-center gap-1">
            <CheckCheck className="w-3.5 h-3.5" /> تحديد الكل كمقروء
          </button>
          <span className="text-[11px] text-slate-400">تطبيق Benaa v1.0.0</span>
        </div>
      </div>
    </div>
  );
};

