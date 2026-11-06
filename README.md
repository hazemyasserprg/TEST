# Benaa Clone App (تطبيق أكاديمية بناء لسطح المكتب)

تطبيق سطح مكتب متكامل لـ **أكاديمية بناء (Benaa Academy)** مبني بأحدث التقنيات:
- **Electron.js**: لتشغيل وتغليف التطبيق لسطح المكتب (Windows `.exe`).
- **React 19 + TypeScript + Vite**: سرعة استجابة وأداء فائق.
- **Tailwind CSS v4 (RTL)**: تصميم عصري مطابق تماماً للأصل بالاتجاه من اليمين إلى اليسار.
- **Cairo Google Font**: خط هندسي عربي متطابق.
- **Lucide Icons**: أيقونات عصرية ونقية.
- **LMS Protection (DRM)**: دعم ميزة `setContentProtection(true)` لمنع تصوير الشاشة في برامج التسجيل (OBS / Snipping Tool) مع علامة مائية عشوائية متحركة.

---

## 🚀 تشغيل التطبيق (Getting Started)

### 1. تشغيل التطبيق في وضع سطح المكتب (Electron Dev):
```bash
npm run electron:dev
```
سيقوم هذا الأمر بتشغيل سيرفر Vite المحلي وفتح نافذة تطبيق سطح المكتب الأصلية تلقائياً مع التحديث المباشر (Hot Reload).

### 2. تشغيل التطبيق كـ Web App في المتصفح:
```bash
npm run dev
```
افتح المتصفح على: `http://localhost:5173`

### 3. تجربة نسخة الإنتاج المبنية (Electron Preview):
```bash
npm run electron:preview
```

---

## 📁 هيكلية المشروع (Project Structure)

```
benaa-clone-app/
├── electron/
│   ├── main.cjs            # إعدادات نافذة Electron والـ DRM وحماية الشاشة
│   └── preload.cjs         # جسر IPC الآمن بين التطبيق والنظام
├── src/
│   ├── components/
│   │   ├── BenaaLogo.tsx            # شعار منصة بناء بالرسم المتجهي (SVG)
│   │   ├── TitleBar.tsx             # شريط نافذة الويندوز والتحكم بحماية الشاشة
│   │   ├── Sidebar.tsx              # القائمة الجانبية اليمنى مع الشارات وبيانات الطالب
│   │   ├── GreetingHeader.tsx       # رسالة الترحيب: "مرحبا بكم مرة أخرى يا !Mostafa Yasser"
│   │   ├── StatCards.tsx            # بطاقات الإحصائيات (الكورسات النشطة، ساعات كاملة، الباقات)
│   │   ├── ContinueCard.tsx         # بطاقة متابعة كورس التشطيبات المعمارية
│   │   ├── RecommendedSection.tsx   # سلايدر الكورسات المقترحة (Structural BIM, AI, كباري...)
│   │   ├── CoursePlayerModal.tsx    # مشغل الفيديو التفاعلي مع العلامة المائية المتحركة
│   │   ├── MyCoursesView.tsx        # صفحة كورساتي مع نسب الإنجاز
│   │   ├── QuestionsView.tsx        # صفحة أسئلتي وطرح الأسئلة على المحاضرين
│   │   ├── CatalogView.tsx          # دليل الكورسات والباقات
│   │   ├── CartModal.tsx            # سلة الشراء وتطبيق كوبونات الخصم
│   │   ├── NotificationsModal.tsx   # مركز الإشعارات
│   │   └── ProfileModal.tsx         # الملف الشخصي وتفاصيل الجهاز المعتمد
│   ├── data/
│   │   └── coursesData.ts           # بيانات الكورسات والدروس والمستخدم
│   ├── App.tsx                      # المكون الرئيسي وربط الشاشات
│   ├── main.tsx                     # نقطة دخول React
│   └── index.css                    # تنسيقات Tailwind وخط Cairo والـ RTL
└── package.json
```

---

## 🛡️ ميزات الأمان المدمجة لحماية الكورسات (DRM Protection)

1. **منع التقاط الشاشة وتسجيل الفيديو (`setContentProtection`):**
   - ميزة أصلية من نظام التشغيل Windows عبر Electron تجعل شاشة التطبيق تظهر باللون الأسود بالكامل داخل برامج التسجيل مثل OBS Studio، Camtasia، ديسكورد، وبرنامج لقطات الشاشة Snipping Tool.
2. **العلامة المائية المتحركة (Moving Watermark):**
   - اسم ورقم حساب الطالب يتحرك عشوائياً كل 4 ثوانٍ فوق مشغل الفيديو لردع التصوير بكاميرا خارجية.
