import React, { useState } from 'react';
import { TitleBar } from './components/TitleBar';
import { Sidebar, type NavTab } from './components/Sidebar';
import { GreetingHeader } from './components/GreetingHeader';
import { StatCards } from './components/StatCards';
import { ContinueCard } from './components/ContinueCard';
import { RecommendedSection } from './components/RecommendedSection';
import { CoursePlayerModal } from './components/CoursePlayerModal';
import { MyCoursesView } from './components/MyCoursesView';
import { QuestionsView } from './components/QuestionsView';
import { CatalogView } from './components/CatalogView';
import { CartModal } from './components/CartModal';
import { NotificationsModal } from './components/NotificationsModal';
import { ProfileModal } from './components/ProfileModal';
import { CertificateModal } from './components/CertificateModal';
import { IN_PROGRESS_COURSE, type Course, MY_COURSES } from './data/coursesData';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [activeCoursePlayer, setActiveCoursePlayer] = useState<Course | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [certificateCourse, setCertificateCourse] = useState<Course | null>(null);

  const handleSelectTab = (tab: NavTab) => {
    if (tab === 'cart') {
      setIsCartOpen(true);
    } else if (tab === 'notifications') {
      setIsNotificationsOpen(true);
    } else {
      setCurrentTab(tab);
    }
  };

  const handleOpenCourse = (course: Course) => {
    setActiveCoursePlayer(course);
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-[#f8f9fa] text-slate-800 select-none overflow-hidden font-['Cairo',sans-serif]">
      {/* Windows Title Bar / App Drag Header */}
      <TitleBar />

      {/* Main App Container */}
      <div className="flex-1 flex flex-row overflow-hidden relative">
        {/* Main Scrollable Content Area (Left side in RTL) */}
        <main className="flex-1 overflow-y-auto px-6 md:px-8 py-5">
          <div className="max-w-6xl mx-auto">
            {/* View 1: الرئيسية / Home (Exact Clone of Screenshot) */}
            {currentTab === 'home' && (
              <>
                <GreetingHeader />
                <StatCards 
                  onCardClick={(type) => {
                    if (type === 'active-courses') setCurrentTab('my-courses');
                    if (type === 'bundles') setCurrentTab('bundles');
                  }} 
                />
                <ContinueCard
                  course={IN_PROGRESS_COURSE}
                  onContinue={handleOpenCourse}
                />
                <RecommendedSection
                  onSelectCourse={handleOpenCourse}
                  onViewAll={() => setCurrentTab('courses')}
                />
              </>
            )}

            {/* View 2: كورساتي / My Courses */}
            {currentTab === 'my-courses' && (
              <MyCoursesView onPlayCourse={handleOpenCourse} />
            )}

            {/* View 3: أسئلتي / My Questions */}
            {currentTab === 'questions' && (
              <QuestionsView />
            )}

            {/* View 4: الكورسات / Courses Catalog */}
            {currentTab === 'courses' && (
              <CatalogView
                initialFilter="all"
                onSelectCourse={handleOpenCourse}
                onAddToCart={() => setIsCartOpen(true)}
              />
            )}

            {/* View 5: الباقات المخفضة / Bundles */}
            {currentTab === 'bundles' && (
              <CatalogView
                initialFilter="bundles"
                onSelectCourse={handleOpenCourse}
                onAddToCart={() => setIsCartOpen(true)}
              />
            )}
          </div>
        </main>

        {/* Right Sidebar (Navigation & Profile) */}
        <Sidebar
          currentTab={currentTab}
          onSelectTab={handleSelectTab}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          onOpenProfile={() => setIsProfileOpen(true)}
        />
      </div>

      {/* Interactive Modals */}
      {activeCoursePlayer && (
        <CoursePlayerModal
          course={activeCoursePlayer}
          onClose={() => setActiveCoursePlayer(null)}
        />
      )}

      {isCartOpen && (
        <CartModal
          onClose={() => setIsCartOpen(false)}
          onOpenCourse={handleOpenCourse}
        />
      )}

      {isNotificationsOpen && (
        <NotificationsModal
          onClose={() => setIsNotificationsOpen(false)}
        />
      )}

      {isProfileOpen && (
        <ProfileModal
          onClose={() => setIsProfileOpen(false)}
          onOpenCertificate={() => {
            const completed = MY_COURSES.find((c) => c.progress === 100) || MY_COURSES[0];
            setCertificateCourse(completed);
          }}
        />
      )}

      {certificateCourse && (
        <CertificateModal
          course={certificateCourse}
          onClose={() => setCertificateCourse(null)}
        />
      )}
    </div>
  );
};

export default App;
