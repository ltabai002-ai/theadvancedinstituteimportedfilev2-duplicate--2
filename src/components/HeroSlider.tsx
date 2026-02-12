import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Slide {
  id: number;
  headline: string;
  subheadline: string;
  personImage: string;
  ctaText: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    headline: "Become a Government Job Leader",
    subheadline: "Master RRB, SSC, and Banking Exams with Expert-Led Programs",
    personImage: "/2bcff076-87b2-405a-b4d1-a4287e6f29c7.png",
    ctaText: "Explore Programs",
    ctaLink: "/courses"
  },
  {
    id: 2,
    headline: "Transform Your Career with SSC Excellence",
    subheadline: "All our programs include personalized mentoring and comprehensive study material",
    personImage: "/woman-success-story.jpg",
    ctaText: "Explore Programs",
    ctaLink: "/courses"
  },
  {
    id: 3,
    headline: "Railway Exam Success Starts Here",
    subheadline: "Join hundreds of successful candidates who achieved their dreams with us",
    personImage: "/student-girl-success.jpg",
    ctaText: "Explore Programs",
    ctaLink: "/courses"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused]);

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

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const slide = slides[currentSlide];

  return (
    <section 
      className="relative bg-white overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Mobile-First Layout */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:min-h-[600px]">
          
          {/* Image Section - Top on mobile, Right on desktop */}
          <div className="w-full lg:w-1/2 lg:order-2">
            <div 
              key={`image-${slide.id}`}
              className="relative h-[400px] lg:h-[600px] animate-fadeIn"
            >
              <img
                src={slide.personImage}
                alt="Hero"
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle overlay for better image quality */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20 lg:bg-gradient-to-r lg:from-white/30 lg:to-transparent"></div>
            </div>
          </div>

          {/* Content Section - Bottom on mobile, Left on desktop */}
          <div className="w-full lg:w-1/2 lg:order-1 px-6 py-12 lg:px-12 lg:py-16">
            <div 
              key={`content-${slide.id}`}
              className="animate-fadeIn space-y-6"
            >
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {slide.headline}
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
                {slide.subheadline}
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  to={slide.ctaLink}
                  className="inline-block w-full sm:w-auto bg-primary text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-xl text-center"
                >
                  {slide.ctaText}
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Navigation Arrows - Desktop only */}
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
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all rounded-full ${
              index === currentSlide
                ? 'w-8 h-2 bg-primary'
                : 'w-2 h-2 bg-gray-400 hover:bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
