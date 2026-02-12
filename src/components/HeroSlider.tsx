import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, Download, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Slide {
  id: number;
  headline: string;
  subheadline: string;
  personImage: string;
  personName: string;
  personRole: string;
  bullets: string[];
  bgGradient: string;
}

const slides: Slide[] = [
  {
    id: 1,
    headline: "Crack Govt Exams in Guwahati with Expert-Led Coaching",
    subheadline: "Join India's Leading Government Exam Institute",
    personImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    personName: "Expert Faculty",
    personRole: "15+ Years Experience",
    bullets: [
      "RRB NTPC | SSC CGL | SSC CHSL | Banking Exams",
      "Structured classroom programs with small batch size",
      "Weekly tests and personalized mentoring"
    ],
    bgGradient: "from-gray-50 via-gray-100 to-gray-200"
  },
  {
    id: 2,
    headline: "SSC & Railway Exam Preparation That Works",
    subheadline: "95% Success Rate with Proven Methods",
    personImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
    personName: "Success Story",
    personRole: "AIR 247 - RRB NTPC",
    bullets: [
      "Daily doubt clearing sessions with expert mentors",
      "All India ranking in weekly mock tests",
      "Comprehensive study material - Print + Digital"
    ],
    bgGradient: "from-blue-50 via-indigo-50 to-purple-50"
  },
  {
    id: 3,
    headline: "Your Dream Government Job Starts Here",
    subheadline: "500+ Students Selected in Last Year",
    personImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
    personName: "Top Ranker",
    personRole: "SSC CGL Selected",
    bullets: [
      "Small batches of max 20 students for personal attention",
      "Full-length mock exams matching actual exam pattern",
      "Located in prime area of Guwahati"
    ],
    bgGradient: "from-teal-50 via-cyan-50 to-blue-50"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000); // Changed from 5000ms to 2000ms (2 seconds)

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative text-black overflow-hidden min-h-[600px] md:min-h-[700px]">
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} lg:block hidden transition-all duration-700`}></div>

      {/* Mobile Background */}
      <div className="absolute inset-0 lg:hidden">
        <div
          className="absolute inset-0 bg-cover transition-all duration-700"
          style={{
            backgroundImage: `url('${slide.personImage}')`,
            backgroundPosition: "center top"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
      </div>

      {/* Desktop Person Image */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url('${slide.personImage}')`,
            maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 15%, black 30%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 15%, black 30%)"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[600px] md:min-h-[700px]">
        <div className="grid lg:grid-cols-2 gap-8 items-end lg:items-center h-full">
          <div className="flex flex-col justify-end lg:justify-center space-y-6 py-8 lg:py-4 pb-12 lg:pb-4">
            {/* Slide Animation Wrapper */}
            <div 
              key={slide.id}
              className="animate-fadeIn"
            >
              <div className="mb-2">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                  {slide.subheadline}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
                {slide.headline}
              </h1>
              
              <div className="space-y-4">
                {slide.bullets.map((bullet, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg md:text-xl text-gray-800 font-medium">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all hover:shadow-xl flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download Brochure</span>
                </button>
                <Link 
                  to="/contact" 
                  className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Free Demo Class</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110 hidden lg:block"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-900" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110 hidden lg:block"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-900" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-primary'
                : 'w-3 h-3 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
