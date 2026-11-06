import { type Course, IN_PROGRESS_COURSE, RECOMMENDED_COURSES, MY_COURSES, CURRENT_USER } from '../data/coursesData';

// Storage keys
const TOKEN_KEY = 'benaa_auth_token';
const DEVICE_KEY = 'benaa_device_id';
const PROGRESS_KEY = 'benaa_courses_progress';

// Mock Machine UUID Generator for Single-Device Binding
export function getOrCreateDeviceId(): string {
  let deviceId = localStorage.getItem(DEVICE_KEY);
  if (!deviceId) {
    deviceId = 'DEV-' + Math.random().toString(36).substring(2, 9).toUpperCase() + '-' + Date.now().toString(36).toUpperCase();
    localStorage.setItem(DEVICE_KEY, deviceId);
  }
  return deviceId;
}

export interface UserSession {
  name: string;
  email: string;
  token: string;
  deviceId: string;
  deviceRegisteredAt: string;
  isDeviceAuthorized: boolean;
}

export const api = {
  // 1. Auth & Device Binding
  async getSession(): Promise<UserSession | null> {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) return null;
    return {
      name: CURRENT_USER.name,
      email: CURRENT_USER.email,
      token,
      deviceId: getOrCreateDeviceId(),
      deviceRegisteredAt: '2026-10-15',
      isDeviceAuthorized: true,
    };
  },

  async login(email: string, password: string): Promise<UserSession> {
    // Simulate server latency
    await new Promise((r) => setTimeout(r, 600));

    if (!email || !password) {
      throw new Error('يرجى إدخال البريد الإلكتروني وكلمة المرور');
    }

    const token = 'jwt_' + Math.random().toString(36).substring(2);
    localStorage.setItem(TOKEN_KEY, token);

    return {
      name: email.split('@')[0] || CURRENT_USER.name,
      email: email,
      token,
      deviceId: getOrCreateDeviceId(),
      deviceRegisteredAt: new Date().toISOString().split('T')[0],
      isDeviceAuthorized: true,
    };
  },

  async logout(): Promise<void> {
    localStorage.removeItem(TOKEN_KEY);
  },

  // 2. Courses
  async getMyCourses(): Promise<Course[]> {
    const savedProgress = localStorage.getItem(PROGRESS_KEY);
    if (!savedProgress) return MY_COURSES;

    const progressMap: Record<string, number> = JSON.parse(savedProgress);
    return MY_COURSES.map((c) => ({
      ...c,
      progress: progressMap[c.id] ?? c.progress,
    }));
  },

  async getRecommendedCourses(): Promise<Course[]> {
    return RECOMMENDED_COURSES;
  },

  async getInProgressCourse(): Promise<Course> {
    const savedProgress = localStorage.getItem(PROGRESS_KEY);
    if (!savedProgress) return IN_PROGRESS_COURSE;
    const progressMap: Record<string, number> = JSON.parse(savedProgress);
    return {
      ...IN_PROGRESS_COURSE,
      progress: progressMap[IN_PROGRESS_COURSE.id] ?? IN_PROGRESS_COURSE.progress,
    };
  },

  async saveCourseProgress(courseId: string, progress: number): Promise<void> {
    const savedProgress = localStorage.getItem(PROGRESS_KEY);
    const progressMap: Record<string, number> = savedProgress ? JSON.parse(savedProgress) : {};
    progressMap[courseId] = Math.min(100, Math.max(0, progress));
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progressMap));
  },
};
