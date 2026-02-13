import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface Slide {
  id: number;
  eyebrowText: string;
  headline: string;
  subtext: string;
  personImage: string;
  carouselImages?: string[]; // Optional carousel images for mobile
  ctaText: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    eyebrowText: "",
    headline: "Crack Government Exams with Confidence",
    subtext: "Join India's leading government exam institute with 15+ years of proven success in RRB NTPC, SSC CGL, SSC CHSL, and Banking exams.",
    personImage: "/2bcff076-87b2-405a-b4d1-a4287e6f29c7.webp",
    carouselImages: [
      "/faculty-1.webp",
      "/2bcff076-87b2-405a-b4d1-a4287e6f29c7.webp",
      "/faculty-2.webp",
      "/woman-success-story.webp",
      "/faculty-3.webp",
    ],
    ctaText: "Explore Programs",
    ctaLink: "/courses"
  },
  {
    id: 2,
    eyebrowText: "",
    headline: "SSC & Railway Exam Preparation That Works",
    subtext: "Structured classroom programs with small batch sizes, comprehensive study material, and personalized mentoring from experienced faculty.",
    personImage: "/woman-success-story.webp",
    carouselImages: [
      "/student-girl-success.webp",
      "/woman-success-story.webp",
      "/faculty-1.webp",
      "/faculty-2.webp",
      "/faculty-3.webp",
    ],
    ctaText: "View All Courses",
    ctaLink: "/courses"
  },
  {
    id: 3,
    eyebrowText: "",
    headline: "Your Dream Government Job Starts Here",
    subtext: "Small batches of max 20 students for personal attention, full-length mock exams matching actual exam patterns, and expert guidance every step of the way.",
    personImage: "/student-girl-success.webp",
    carouselImages: [
      "/2bcff076-87b2-405a-b4d1-a4287e6f29c7.webp",
      "/student-girl-success.webp",
      "/woman-success-story.webp",
      "/faculty-1.webp",
      "/faculty-2.webp",
    ],
    ctaText: "Book Free Demo",
    ctaLink: "/contact"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(1); // Start at middle image

  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused]);

  // Auto-rotate carousel images
  useEffect(() => {
    const carouselTimer = setInterval(() => {
      handleNextCarousel();
    }, 4000);
    return () => clearInterval(carouselTimer);
  }, []);

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

  const handleNextCarousel = useCallback(() => {
    const images = slides[currentSlide].carouselImages || [slides[currentSlide].personImage];
    setCarouselIndex((prev) => (prev + 1) % images.length);
  }, [currentSlide]);

  const handlePrevCarousel = () => {
    const images = slides[currentSlide].carouselImages || [slides[currentSlide].personImage];
    setCarouselIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const slide = slides[currentSlide];
  const carouselImages = slide.carouselImages || [slide.personImage];

  return (
    <section
      className="relative bg-white overflow-hidden min-h-[100vh] lg:min-h-screen"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Desktop: Background Image with Gradient Overlay */}
      <div 
        key={`bg-desktop-${slide.id}`}
        className="hidden lg:block absolute inset-0 animate-fadeIn"
      >
        <img
          src={slide.personImage}
          alt="Hero Background"
          className="w-full h-full object-cover object-right"
        />
        {/* Desktop: Left-to-right gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent"
          style={{
            background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,0.85) 55%, rgba(255,255,255,0.2) 75%, rgba(255,255,255,0) 100%)'
          }}
        ></div>
      </div>

      {/* Mobile Layout - Simplilearn Design Pattern with 3D Carousel */}
      <div className="lg:hidden min-h-[100vh] -mt-16">
        {/* Mobile: 3D Carousel Section with White Background */}
        <div 
          key={`mobile-carousel-${slide.id}`}
          className="relative w-full h-[55vh] min-h-[400px] max-h-[500px] overflow-hidden flex items-center justify-center bg-white pt-16"
        >
          {/* 3D Carousel Wrapper */}
          <div className="relative w-full h-full flex items-center justify-center [perspective:1000px] px-4">
            {carouselImages.map((image, index) => {
              const offset = index - carouselIndex;
              const total = carouselImages.length;
              let pos = (offset + total) % total;
              if (pos > Math.floor(total / 2)) {
                pos = pos - total;
              }

              const isCenter = pos === 0;
              const isAdjacent = Math.abs(pos) === 1;

              return (
                <div
                  key={`${slide.id}-${index}`}
                  className={cn(
                    'absolute w-48 h-80 sm:w-56 sm:h-96 transition-all duration-500 ease-in-out',
                    'flex items-center justify-center'
                  )}
                  style={{
                    transform: `
                      translateX(${(pos) * 50}%) 
                      scale(${isCenter ? 1 : isAdjacent ? 0.85 : 0.7})
                      rotateY(${(pos) * -10}deg)
                    `,
                    zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                    opacity: isCenter ? 1 : isAdjacent ? 0.4 : 0,
                    filter: isCenter ? 'blur(0px)' : 'blur(3px)',
                    visibility: Math.abs(pos) > 1 ? 'hidden' : 'visible',
                  }}
                >
                  <img
                    src={image}
                    alt={`${slide.headline} - Image ${index + 1}`}
                    className="object-cover w-full h-full rounded-2xl border-2 border-white/20 shadow-2xl"
                  />
                </div>
              );
            })}
          </div>

          {/* Carousel Navigation Buttons */}
          <button
            onClick={handlePrevCarousel}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-gray-900" />
          </button>
          <button
            onClick={handleNextCarousel}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-gray-900" />
          </button>
        </div>

        {/* Mobile: Content Section - Clean White Background */}
        <div className="bg-white px-5 py-4 pb-24">
          <div
            key={`mobile-content-${slide.id}`}
            className="space-y-0"
          >
            {/* Eyebrow Text - Context Label */}
            <p
              className="text-[13px] font-medium leading-[1.4] mb-3 opacity-0"
              style={{
                color: '#4A5568',
                letterSpacing: '-0.01em',
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards'
              }}
            >
              {slide.eyebrowText}
            </p>

            {/* Main Headline - Primary Message */}
            <h1
              className="text-[24px] font-bold leading-[1.2] mb-8 opacity-0"
              style={{
                color: '#1A202C',
                letterSpacing: '-0.02em',
                WebkitFontSmoothing: 'antialiased',
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards'
              }}
            >
              {slide.headline}
            </h1>

            {/* Subtext - Supporting Description */}
            <p
              className="text-[13px] font-normal leading-[1.5] mb-10 opacity-0"
              style={{
                color: '#718096',
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards'
              }}
            >
              {slide.subtext}
            </p>

            {/* CTA Button */}
            <Link
              to={slide.ctaLink}
              className="block w-full text-white h-[44px] rounded-lg text-[14px] font-medium transition-all duration-300 text-center opacity-0"
              style={{
                background: 'linear-gradient(180deg, #0D6EFD 0%, #0A58CA 100%)',
                letterSpacing: '0.01em',
                lineHeight: '44px',
                boxShadow: '0 2px 8px rgba(13, 110, 253, 0.25)',
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards'
              }}
            >
              {slide.ctaText}
            </Link>
          </div>
        </div>

      </div>

      {/* Desktop Content Container */}
      <div className="hidden lg:block relative z-10 max-w-[1200px] mx-auto px-[5%] py-[80px] min-h-screen">
        <div className="flex items-center h-full min-h-[calc(100vh-160px)]">
          <div className="w-full max-w-[600px]">
            <div 
              key={`desktop-content-${slide.id}`}
              className="animate-fadeIn"
            >
              {/* Eyebrow Text */}
              <p className="text-[22px] font-semibold text-gray-800 leading-[1.4] mb-[14px]">
                {slide.eyebrowText}
              </p>

              {/* Main Heading */}
              <h1 className="text-[56px] font-extrabold text-slate-900 leading-[1.15] mb-[40px] max-w-[600px]">
                {slide.headline}
              </h1>

              {/* Subtext */}
              <p className="text-[20px] font-normal text-gray-600 leading-[1.6] mb-[56px]">
                {slide.subtext}
              </p>

              {/* Primary CTA Button */}
              <Link
                to={slide.ctaLink}
                className="inline-block w-auto bg-blue-600 text-white h-[52px] px-[28px] rounded-lg text-[16px] font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg leading-[52px] text-center"
              >
                {slide.ctaText}
              </Link>
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

      {/* Dots Indicator - Simplilearn Style */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ease-in-out rounded-full cursor-pointer ${
              index === currentSlide
                ? 'w-6 h-2 rounded'
                : 'w-2 h-2'
            }`}
            style={{
              backgroundColor: index === currentSlide ? '#0D6EFD' : '#CBD5E0'
            }}
            onMouseEnter={(e) => {
              if (index !== currentSlide) {
                e.currentTarget.style.backgroundColor = '#A0AEC0';
              }
            }}
            onMouseLeave={(e) => {
              if (index !== currentSlide) {
                e.currentTarget.style.backgroundColor = '#CBD5E0';
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
