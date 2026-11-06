import React, { useState } from 'react';
import { X, Trash2, ShieldCheck, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { CART_ITEMS, type Course } from '../data/coursesData';

interface CartModalProps {
  onClose: () => void;
  onOpenCourse: (course: Course) => void;
}

export const CartModal: React.FC<CartModalProps> = ({ onClose, onOpenCourse }) => {
  const [items, setItems] = useState(CART_ITEMS);
  const [coupon, setCoupon] = useState('BENAA2026');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const subtotal = items.reduce((acc, curr) => acc + curr.price, 0);
  const discount = discountApplied ? Math.round(subtotal * 0.15) : 0;
  const total = subtotal - discount;

  const handleRemove = (courseId: string) => {
    setItems(items.filter((item) => item.course.id !== courseId));
  };

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === 'BENAA2026') {
      setDiscountApplied(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 select-none">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200">
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-black text-slate-900">سلة المشتريات</h2>
            <span className="text-xs bg-pink-100 text-[#ff2d60] font-bold px-2 py-0.5 rounded-full">
              {items.length} كورسات
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {checkoutSuccess ? (
          <div className="p-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">
              تم إتمام عملية الدفع بنجاح!
            </h3>
            <p className="text-sm text-slate-500 mb-6 max-w-sm">
              تم تفعيل الكورسات على حسابك فوراً ويمكنك البدء في مشاهدة المحاضرات وتحميل الملحقات الآن.
            </p>
            <button
              onClick={() => {
                onClose();
                if (items[0]) onOpenCourse(items[0].course);
              }}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition"
            >
              الانتقال إلى كورساتي
            </button>
          </div>
        ) : (
          <div className="p-5 flex flex-col gap-4 max-h-[75vh] overflow-y-auto">
            {items.length === 0 ? (
              <div className="text-center py-12 text-slate-400 text-sm">
                سلة مشترياتك فارغة حالياً.
              </div>
            ) : (
              <>
                {/* Items List */}
                <div className="divide-y divide-slate-100">
                  {items.map(({ course, price }) => (
                    <div key={course.id} className="py-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-14 h-12 rounded-lg bg-gradient-to-br ${course.coverGradient} p-1 text-white flex items-center justify-center text-[9px] font-bold text-center`}>
                          {course.title.slice(0, 15)}...
                        </div>
                        <div className="text-right">
                          <h4 className="text-sm font-bold text-slate-800">{course.title}</h4>
                          <span className="text-xs text-slate-400">{course.instructor}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="text-sm font-black text-slate-900">
                          {price} ج.م
                        </span>
                        <button
                          onClick={() => handleRemove(course.id)}
                          className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition"
                          title="حذف من السلة"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Coupon Code Input */}
                <form onSubmit={handleApplyCoupon} className="flex gap-2 pt-2">
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="كود الخصم"
                    className="flex-1 px-3 py-2 border border-slate-200 rounded-xl text-xs uppercase focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-slate-800 text-white text-xs font-bold rounded-xl hover:bg-slate-900 transition"
                  >
                    تطبيق
                  </button>
                </form>

                {discountApplied && (
                  <div className="text-xs text-emerald-600 bg-emerald-50 p-2 rounded-lg text-right font-semibold">
                    ✓ تم تطبيق خصم المهندسين بنجاح (15%)!
                  </div>
                )}

                {/* Summary Table */}
                <div className="bg-slate-50 rounded-xl p-4 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>المجموع الفرعي:</span>
                    <span>{subtotal} ج.م</span>
                  </div>
                  {discountApplied && (
                    <div className="flex justify-between text-emerald-600 font-bold">
                      <span>الخصم المطبق:</span>
                      <span>- {discount} ج.م</span>
                    </div>
                  )}
                  <div className="flex justify-between text-base font-black text-slate-900 pt-2 border-t border-slate-200">
                    <span>الإجمالي النهائي:</span>
                    <span>{total} ج.م</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={() => setCheckoutSuccess(true)}
                  className="w-full py-3 bg-[#1062fe] hover:bg-blue-700 active:scale-98 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition"
                >
                  <span>تأكيد الطلب والدفع الفوري</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>دفع آمن ومحمي 100% عبر فوري، ميزة، وفيزا / ماستركارد</span>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
