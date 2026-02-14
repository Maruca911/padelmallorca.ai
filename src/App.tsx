import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const CourtsClubs = lazy(() => import('./pages/CourtsClubs'));
const LessonsCoaching = lazy(() => import('./pages/LessonsCoaching'));
const CampsHolidays = lazy(() => import('./pages/CampsHolidays'));
const TournamentsEvents = lazy(() => import('./pages/TournamentsEvents'));
const Faq = lazy(() => import('./pages/Faq'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Signup = lazy(() => import('./pages/Signup'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const ClubDetail = lazy(() => import('./pages/ClubDetail'));
const LessonDetail = lazy(() => import('./pages/LessonDetail'));
const CampDetail = lazy(() => import('./pages/CampDetail'));
const EventDetail = lazy(() => import('./pages/EventDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-forest-200 border-t-forest-500 rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="courts-clubs" element={<CourtsClubs />} />
            <Route path="courts-clubs/:slug" element={<ClubDetail />} />
            <Route path="lessons-coaching" element={<LessonsCoaching />} />
            <Route path="lessons-coaching/:slug" element={<LessonDetail />} />
            <Route path="camps-holidays" element={<CampsHolidays />} />
            <Route path="camps-holidays/:slug" element={<CampDetail />} />
            <Route path="tournaments-events" element={<TournamentsEvents />} />
            <Route path="tournaments-events/:slug" element={<EventDetail />} />
            <Route path="faq" element={<Faq />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="signup" element={<Signup />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
