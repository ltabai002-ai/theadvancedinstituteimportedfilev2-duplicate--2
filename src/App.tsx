import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import AboutPage from './pages/AboutPage';
import ResultsPage from './pages/ResultsPage';
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
          <Route path="results" element={<ResultsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="carousel-demo" element={<FeatureCarouselDemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
