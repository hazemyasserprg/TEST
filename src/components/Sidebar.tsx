import React from 'react';
import { 
  Home, 
  BookOpen, 
  HelpCircle, 
  GraduationCap, 
  Award, 
  ShoppingCart, 
  Bell, 
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { BenaaLogo } from './BenaaLogo';
import { CURRENT_USER } from '../data/coursesData';

export type NavTab = 'home' | 'my-courses' | 'questions' | 'courses' | 'bundles' | 'cart' | 'notifications';

interface SidebarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
  onOpenProfile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentTab,
  onSelectTab,
  collapsed,
  onToggleCollapse,
  onOpenProfile,
}) => {
  return (
    <aside 
      className={`relative h-full flex flex-col justify-between transition-all duration-300 select-none border-l border-slate-200/80 bg-gradient-to-b from-[#fbf4f6]/60 via-white to-white z-20 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Collapse / Expand Toggle Button */}
      <button
        onClick={onToggleCollapse}
        title={collapsed ? 'توسيع القائمة' : 'طي القائمة'}
        className="absolute -left-3.5 top-9 w-7 h-7 bg-white border border-slate-200 text-slate-500 hover:text-blue-600 rounded-full flex items-center justify-center shadow-xs transition hover:scale-105 z-30"
      >
        {collapsed ? (
          <ChevronLeft className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
      </button>

      {/* Top Part: Brand Logo & Main Navigation */}
      <div className="p-4 pt-6 flex flex-col">
        {/* Brand Logo */}
        <div className="flex justify-center items-center pb-6 border-b border-slate-100">
          <BenaaLogo size={collapsed ? 'sm' : 'md'} />
        </div>

        {/* Primary Navigation Menu */}
        <nav className="mt-6 flex flex-col gap-1.5 font-medium">
          {/* 1. الرئيسية / Home */}
          <button
            onClick={() => onSelectTab('home')}
            className={`w-full flex items-center gap-3.5 px-4 py-2.5 rounded-xl transition-all text-right ${
              currentTab === 'home'
                ? 'bg-[#eaf1ff] text-[#1062fe] font-semibold'
                : 'text-slate-700 hover:bg-slate-100/70 hover:text-slate-900'
            }`}
          >
            <Home className="w-5 h-5 shrink-0" />
            {!collapsed && <span className="text-[15px]">الرئيسية</span>}
          </button>

          {/* 2. كورساتي / My Courses */}
          <button
            onClick={() => onSelectTab('my-courses')}
            className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl transition-all text-right ${
              currentTab === 'my-courses'
                ? 'bg-[#eaf1ff] text-[#1062fe] font-semibold'
                : 'text-slate-700 hover:bg-slate-100/70 hover:text-slate-900'
            }`}
          >
            <div className="flex items-center gap-3.5">
              <BookOpen className="w-5 h-5 shrink-0" />
              {!collapsed && <span className="text-[15px]">كورساتي</span>}
            </div>
            {!collapsed && (
              <span className="text-xs font-bold text-[#1062fe] px-1.5 py-0.5 rounded-md bg-[#eaf1ff]">
                {CURRENT_USER.activeCoursesCount}
              </span>
            )}
          </button>

          {/* 3. أسئلتي / My Questions */}
          <button
            onClick={() => onSelectTab('questions')}
            className={`w-full flex items-center gap-3.5 px-4 py-2.5 rounded-xl transition-all text-right ${
              currentTab === 'questions'
                ? 'bg-[#eaf1ff] text-[#1062fe] font-semibold'
                : 'text-slate-700 hover:bg-slate-100/70 hover:text-slate-900'
            }`}
          >
            <HelpCircle className="w-5 h-5 shrink-0" />
            {!collapsed && <span className="text-[15px]">أسئلتي</span>}
          </button>

          {/* 4. الكورسات / Courses */}
          <button
            onClick={() => onSelectTab('courses')}
            className={`w-full flex items-center gap-3.5 px-4 py-2.5 rounded-xl transition-all text-right ${
              currentTab === 'courses'
                ? 'bg-[#eaf1ff] text-[#1062fe] font-semibold'
                : 'text-slate-700 hover:bg-slate-100/70 hover:text-slate-900'
            }`}
          >
            <GraduationCap className="w-5 h-5 shrink-0" />
            {!collapsed && <span className="text-[15px]">الكورسات</span>}
          </button>

          {/* 5. الباقات المخفضة / Bundles */}
          <button
            onClick={() => onSelectTab('bundles')}
            className={`w-full flex items-center gap-3.5 px-4 py-2.5 rounded-xl transition-all text-right ${
              currentTab === 'bundles'
                ? 'bg-[#eaf1ff] text-[#1062fe] font-semibold'
                : 'text-slate-700 hover:bg-slate-100/70 hover:text-slate-900'
            }`}
          >
            <Award className="w-5 h-5 shrink-0" />
            {!collapsed && <span className="text-[15px]">الباقات المخفضة</span>}
          </button>
        </nav>
      </div>

      {/* Bottom Part: Cart, Notifications & User Profile */}
      <div className="p-4 flex flex-col gap-2 border-t border-slate-100">
        {/* السلة / Cart */}
        <button
          onClick={() => onSelectTab('cart')}
          className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl transition-all text-right ${
            currentTab === 'cart'
              ? 'bg-[#eaf1ff] text-[#1062fe] font-semibold'
              : 'text-slate-700 hover:bg-slate-100/70 hover:text-slate-900'
          }`}
        >
          <div className="flex items-center gap-3.5">
            <ShoppingCart className="w-5 h-5 shrink-0" />
            {!collapsed && <span className="text-[15px]">السلة</span>}
          </div>
          {!collapsed && (
            <span className="w-5 h-5 rounded-md bg-[#ff2d60] text-white text-xs font-bold flex items-center justify-center">
              {CURRENT_USER.cartItemsCount}
            </span>
          )}
        </button>

        {/* الإشعارات / Notifications */}
        <button
          onClick={() => onSelectTab('notifications')}
          className={`w-full flex items-center gap-3.5 px-4 py-2.5 rounded-xl transition-all text-right ${
            currentTab === 'notifications'
              ? 'bg-[#eaf1ff] text-[#1062fe] font-semibold'
              : 'text-slate-700 hover:bg-slate-100/70 hover:text-slate-900'
          }`}
        >
          <Bell className="w-5 h-5 shrink-0" />
          {!collapsed && <span className="text-[15px]">الإشعارات</span>}
        </button>

        {/* User Profile Bar */}
        <div
          onClick={onOpenProfile}
          className="mt-2 pt-2 border-t border-slate-100 flex items-center gap-3 p-2 rounded-xl hover:bg-slate-100/80 cursor-pointer transition text-right"
        >
          {/* Avatar with initial M */}
          <div className="w-9 h-9 rounded-full bg-[#1062fe] text-white font-bold flex items-center justify-center shrink-0 shadow-xs">
            {CURRENT_USER.avatarInitial}
          </div>
          {!collapsed && (
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-bold text-slate-800 truncate">
                {CURRENT_USER.name}
              </span>
              <span className="text-[11px] text-slate-400 truncate" dir="ltr">
                ...{CURRENT_USER.email.slice(0, 15)}@g
              </span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

