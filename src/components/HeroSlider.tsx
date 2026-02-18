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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 600);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused]);

  // Sync carousel with slide changes - reset to center and pause briefly
  useEffect(() => {
    setCarouselIndex(1); // Reset to center image
    setIsPaused(true); // Pause carousel rotation

    // Resume carousel rotation after 2 seconds
    const timer = setTimeout(() => {
      setIsPaused(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 50);
      setIsAutoPlaying(false);
    }, 600);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 50);
      setIsAutoPlaying(false);
    }, 600);
  };

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 50);
      setIsAutoPlaying(false);
    }, 600);
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

  // Auto-rotate mobile carousel
  useEffect(() => {
    if (isPaused) return;

    const carouselInterval = setInterval(() => {
      handleNextCarousel();
    }, 3500); // Rotate every 3.5 seconds

    return () => clearInterval(carouselInterval);
  }, [handleNextCarousel, isPaused]);

  // Touch handlers for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNextCarousel();
    }
    if (isRightSwipe) {
      handlePrevCarousel();
    }

    // Reset touch state and resume auto-rotation after a delay
    setTouchStart(0);
    setTouchEnd(0);
    setTimeout(() => setIsPaused(false), 500);
  };

  const slide = slides[currentSlide];
  const carouselImages = slide.carouselImages || [slide.personImage];

  return (
    <section
      className="relative bg-white overflow-hidden lg:min-h-screen"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Desktop: Split Layout - Text Left, Carousel Right */}
      <div className="hidden lg:block relative w-full h-full">
        <div className="grid grid-cols-2 gap-8 max-w-[1400px] mx-auto px-[5%] items-center min-h-screen">
          {/* Left Column - Text Content (handled below) */}
          <div></div>

          {/* Right Column - 3D Carousel */}
          <div
            key={`desktop-carousel-${slide.id}`}
            className="relative w-full h-[600px] flex items-center justify-center animate-fadeIn"
          >
            {/* 3D Carousel Wrapper */}
            <div
              className="relative w-full h-full flex items-center justify-center [perspective:1200px]"
            >
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
                    key={`${slide.id}-desktop-${index}`}
                    className={cn(
                      'absolute w-80 h-[500px] transition-all duration-500 ease-out',
                      'flex items-center justify-center'
                    )}
                    style={{
                      transform: `
                        translateX(${(pos) * 55}%)
                        scale(${isCenter ? 1 : isAdjacent ? 0.85 : 0.7})
                        rotateY(${(pos) * -12}deg)
                      `,
                      zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                      opacity: isCenter ? 1 : isAdjacent ? 0.5 : 0,
                      filter: isCenter ? 'blur(0px)' : 'blur(4px)',
                      visibility: Math.abs(pos) > 1 ? 'hidden' : 'visible',
                    }}
                  >
                    <img
                      src={image}
                      alt={`${slide.headline} - Image ${index + 1}`}
                      className="object-cover w-full h-full rounded-3xl border-4 border-white/30 shadow-2xl"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Simplilearn Design Pattern with 3D Carousel */}
      <div className="lg:hidden -mt-16">
        {/* Mobile: 3D Carousel Section with White Background */}
        <div 
          key={`mobile-carousel-${slide.id}`}
          className="relative w-full h-[55vh] min-h-[400px] max-h-[500px] overflow-hidden flex items-center justify-center bg-white pt-16"
        >
          {/* 3D Carousel Wrapper */}
          <div
            className="relative w-full h-full flex items-center justify-center [perspective:1000px] px-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
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
                    'absolute w-48 h-80 sm:w-56 sm:h-96 transition-all duration-300 ease-in-out',
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
        </div>

        {/* Mobile: Content Section - Clean White Background */}
        <div className="bg-white px-5 pt-4 pb-4">
          <div
            key={`mobile-content-${slide.id}`}
          >
            {slide.eyebrowText && (
              <p
                className="text-[13px] font-medium leading-[1.4] mb-2"
                style={{
                  color: '#4A5568',
                  letterSpacing: '-0.01em'
                }}
              >
                {slide.eyebrowText}
              </p>
            )}

            <h1
              className="text-[24px] font-bold leading-[1.2] mb-3"
              style={{
                color: '#1A202C',
                letterSpacing: '-0.02em',
                WebkitFontSmoothing: 'antialiased'
              }}
            >
              {slide.headline}
            </h1>

            <p
              className="text-[13px] font-normal leading-[1.5] mb-4"
              style={{
                color: '#718096'
              }}
            >
              {slide.subtext}
            </p>

            <Link
              to={slide.ctaLink}
              className="block w-full text-white h-[44px] rounded-lg text-[14px] font-medium transition-all duration-300 text-center"
              style={{
                background: 'linear-gradient(180deg, #0D6EFD 0%, #0A58CA 100%)',
                letterSpacing: '0.01em',
                lineHeight: '44px',
                boxShadow: '0 2px 8px rgba(13, 110, 253, 0.25)'
              }}
            >
              {slide.ctaText}
            </Link>
          </div>
        </div>

        {/* Mobile Dots Indicator */}
        <div className="flex justify-center gap-2 pb-5 bg-white">
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
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Content Container - Positioned in Left Column */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
        <div className="grid grid-cols-2 gap-8 max-w-[1400px] mx-auto px-[5%] h-full items-center min-h-screen">
          <div className="pointer-events-auto">
            <div
              key={`desktop-content-${slide.id}`}
              className="space-y-0 pr-8 animate-fadeIn"
            >
              {/* Eyebrow Text */}
              {slide.eyebrowText && (
                <p className="text-[22px] font-semibold text-gray-800 leading-[1.4] mb-[14px]">
                  {slide.eyebrowText}
                </p>
              )}

              {/* Main Heading */}
              <h1 className="text-[56px] font-bold text-slate-900 leading-[1.15] mb-[24px]">
                {slide.headline}
              </h1>

              {/* Subtext */}
              <p className="text-[20px] font-normal text-gray-600 leading-[1.6] mb-[96px]">
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
          {/* Right column space for carousel */}
          <div></div>
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

      {/* Dots Indicator - Desktop Only */}
      <div className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 gap-2">
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
