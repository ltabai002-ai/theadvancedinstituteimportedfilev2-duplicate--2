import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import AboutPage from './pages/AboutPage';
import DirectorPage from './pages/DirectorPage';
import DeanPage from './pages/DeanPage';
import AdvisorsPage from './pages/AdvisorsPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';
import FeatureCarouselDemo from './pages/FeatureCarouselDemo';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="courses/:courseSlug" element={<CourseDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about/director" element={<DirectorPage />} />
          <Route path="about/dean" element={<DeanPage />} />
          <Route path="about/advisors" element={<AdvisorsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="carousel-demo" element={<FeatureCarouselDemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
