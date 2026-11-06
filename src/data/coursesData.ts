export interface Course {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  instructor: string;
  instructorRole?: string;
  instructorImage: string;
  coverGradient: string;
  duration: string;
  lessonsCount: number;
  progress: number;
  price?: number;
  originalPrice?: number;
  badge?: string;
  description?: string;
  lessons?: {
    id: string;
    title: string;
    duration: string;
    completed: boolean;
    videoUrl?: string;
  }[];
}

export const CURRENT_USER = {
  name: 'Mostafa Yasser',
  email: 'mostafayasser2612@gmail.com',
  avatarInitial: 'M',
  activeCoursesCount: 6,
  completedHours: '0 د',
  discountedPackagesCount: '—',
  cartItemsCount: 2,
  unreadNotifications: 3,
};

export const IN_PROGRESS_COURSE: Course = {
  id: 'arch-finishes',
  title: 'التشطيبات المعمارية',
  subtitle: 'دليلك الشامل من استلام العظم حتى تسليم المفتاح',
  category: 'هندسة معمارية وتنفيذ',
  instructor: 'م. أحمد خالد',
  instructorRole: 'استشاري التشطيبات والديكور',
  instructorImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  coverGradient: 'from-blue-600 to-indigo-800',
  duration: '38 ساعة',
  lessonsCount: 64,
  progress: 0,
  description: 'كورس شامل يغطي جميع بنود التشطيبات المعمارية: أعمال البياض والمحارة، الأرضيات والسيراميك والبورسلين، أعمال الجبس بورد، الدهانات، وتأسيس وتشطيب الكهرباء والسباكة مع نماذج استلام عملية من الموقع.',
  lessons: [
    { id: 'l1', title: '01. مقدمة الكورس ومراحل تسلسل بنود التشطيب', duration: '14:20', completed: false, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
    { id: 'l2', title: '02. استلام المباني وتجهيز الفتحات وتأكيس الحوائط', duration: '28:45', completed: false, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
    { id: 'l3', title: '03. أعمال البياض الداخلي: الطرطشة والبؤج والأوتار', duration: '35:10', completed: false },
    { id: 'l4', title: '04. استلام بياض المحارة بالقدة والميزان والزاوية', duration: '22:15', completed: false },
    { id: 'l5', title: '05. أعمال تمديدات السباكة وتجارب الضغط والعزل', duration: '41:00', completed: false },
    { id: 'l6', title: '06. تأسيسات شبكة الكهرباء وسحب الأسلاك والقواطع', duration: '30:12', completed: false },
    { id: 'l7', title: '07. تركيب السيراميك والبورسلين بالمونة والمادة اللاصقة', duration: '45:30', completed: false },
  ]
};

export const RECOMMENDED_COURSES: Course[] = [
  {
    id: 'structural-bim',
    title: 'Structural BIM Diploma',
    subtitle: 'Revit Structure & Navisworks',
    category: 'النمذجة الإنشائية',
    instructor: 'م. عمر الشريف',
    instructorRole: 'BIM Manager & Structural Expert',
    instructorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    coverGradient: 'from-blue-700 via-blue-800 to-slate-900',
    duration: '52 ساعة',
    lessonsCount: 88,
    progress: 0,
    price: 1850,
    originalPrice: 2400,
    badge: 'دبلومة متكاملة',
  },
  {
    id: 'ai-engineers',
    title: 'AI For Engineers',
    subtitle: 'AI & Automation Course For Engineers',
    category: 'الذكاء الاصطناعي الهندسي',
    instructor: 'د. مصطفى كمال',
    instructorRole: 'AI & Computational Design Lead',
    instructorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    coverGradient: 'from-sky-700 via-blue-700 to-indigo-900',
    duration: '24 ساعة',
    lessonsCount: 36,
    progress: 0,
    price: 1400,
    originalPrice: 1950,
    badge: 'الأكثر طلباً',
  },
  {
    id: 'bridge-construction',
    title: 'كورس تنفيذ أعمال الكباري',
    subtitle: 'Bridge Construction Execution',
    category: 'كباري وطرق',
    instructor: 'م. إبراهيم عبد الله',
    instructorRole: 'مدير مشروعات كباري وأنفاق',
    instructorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    coverGradient: 'from-blue-600 via-blue-700 to-slate-800',
    duration: '32 ساعة',
    lessonsCount: 48,
    progress: 0,
    price: 1650,
    originalPrice: 2100,
    badge: 'عملي موقع',
  },
  {
    id: 'site-engineer-prep',
    title: 'إعداد مهندس موقع',
    subtitle: 'من الحفر حتى الخرسانات',
    category: 'إدارة وتنفيذ مشروعات',
    instructor: 'م. محمد حسان',
    instructorRole: 'استشاري التنفيذ وضبط الجودة',
    instructorImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    coverGradient: 'from-blue-700 via-indigo-700 to-sky-900',
    duration: '45 ساعة',
    lessonsCount: 72,
    progress: 0,
    price: 1500,
    originalPrice: 2000,
    badge: 'أساسي للخريجين',
  },
  {
    id: 'cost-estimation',
    title: 'حصر الكميات والتسعير والمناقصات',
    subtitle: 'Quantity Surveying & Cost Estimation',
    category: 'المكتب الفني',
    instructor: 'م. تامر ممدوح',
    instructorRole: 'Tender & Commercial Manager',
    instructorImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80',
    coverGradient: 'from-slate-700 via-blue-800 to-indigo-900',
    duration: '28 ساعة',
    lessonsCount: 40,
    progress: 0,
    price: 1350,
    originalPrice: 1800,
    badge: 'مكتب فني',
  }
];

export const MY_COURSES: Course[] = [
  IN_PROGRESS_COURSE,
  {
    id: 'site-concrete',
    title: 'تنفيذ المنشآت الخرسانية والأساسات العميقة',
    category: 'هندسة مدنية',
    instructor: 'م. محمد حسان',
    instructorImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    coverGradient: 'from-blue-700 to-indigo-800',
    duration: '35 ساعة',
    lessonsCount: 50,
    progress: 65,
  },
  {
    id: 'revit-arch',
    title: 'دبلومة Revit Architecture المتكاملة',
    category: 'BIM & تصميم',
    instructor: 'م. سارة محمود',
    instructorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    coverGradient: 'from-indigo-600 to-purple-800',
    duration: '40 ساعة',
    lessonsCount: 55,
    progress: 42,
  },
  {
    id: 'surveying-total',
    title: 'المساحة الهندسية وجهاز Total Station',
    category: 'مساحة',
    instructor: 'م. يوسف النجار',
    instructorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    coverGradient: 'from-blue-600 to-cyan-800',
    duration: '20 ساعة',
    lessonsCount: 28,
    progress: 100,
  },
  {
    id: 'primavera-p6',
    title: 'إدارة المشروعات الاحترافية بـ Primavera P6',
    category: 'إدارة مشروعات',
    instructor: 'م. شادي البدري',
    instructorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    coverGradient: 'from-sky-700 to-blue-900',
    duration: '30 ساعة',
    lessonsCount: 44,
    progress: 15,
  },
  {
    id: 'shop-drawing',
    title: 'Shop Drawing إنشائي وتفريد حديد التسليح (BBS)',
    category: 'مكتب فني',
    instructor: 'م. محمود عزت',
    instructorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    coverGradient: 'from-blue-800 to-slate-900',
    duration: '36 ساعة',
    lessonsCount: 52,
    progress: 80,
  }
];

export const CART_ITEMS = [
  {
    course: RECOMMENDED_COURSES[0],
    price: 1850,
  },
  {
    course: RECOMMENDED_COURSES[1],
    price: 1400,
  }
];

