import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: string;
  student_name: string;
  exam_name: string;
  success_story: string;
  ranking_or_score: string;
  image_url: string | null;
  is_featured: boolean;
  display_order: number;
  created_at: string;
}

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

        const response = await fetch(
          `${supabaseUrl}/functions/v1/testimonials/featured`,
          {
            headers: {
              Authorization: `Bearer ${anonKey}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setTestimonials(data);
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const handleNextCarousel = useCallback(() => {
    if (testimonials.length === 0) return;
    setCarouselIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrevCarousel = () => {
    if (testimonials.length === 0) return;
    setCarouselIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused || testimonials.length === 0) return;

    const carouselInterval = setInterval(() => {
      handleNextCarousel();
    }, 5000);

    return () => clearInterval(carouselInterval);
  }, [handleNextCarousel, isPaused, testimonials.length]);

  if (isLoading || testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[carouselIndex];

  return (
    <section
      className="relative py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1400px] mx-auto px-[5%]">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
            Success Stories
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Student Testimonials
          </h2>
          <p className="text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
            Join thousands of successful students who achieved their government exam dreams with our expert guidance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Testimonial Content */}
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                {currentTestimonial.image_url ? (
                  <img
                    src={currentTestimonial.image_url}
                    alt={currentTestimonial.student_name}
                    className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover border-2 border-blue-200"
                  />
                ) : (
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                    {currentTestimonial.student_name.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-slate-900">
                    {currentTestimonial.student_name}
                  </h3>
                  <p className="text-sm lg:text-base text-blue-600 font-semibold">
                    {currentTestimonial.exam_name}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl lg:text-3xl font-bold text-slate-900">
                    {currentTestimonial.ranking_or_score}
                  </span>
                  <span className="text-sm text-slate-600">Achievement</span>
                </div>
              </div>

              <p className="text-base lg:text-lg text-slate-700 leading-relaxed">
                "{currentTestimonial.success_story}"
              </p>

              <div className="flex gap-2 mt-6">
                {[...Array(Math.min(5, testimonials.length))].map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      'w-2 h-2 rounded-full transition-all duration-300',
                      i === carouselIndex
                        ? 'bg-blue-600 w-8'
                        : 'bg-slate-300'
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation and Stats */}
          <div className="space-y-6">
            {/* Carousel Navigation */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <button
                onClick={handlePrevCarousel}
                className="p-3 lg:p-4 rounded-full bg-white border-2 border-slate-200 hover:border-blue-600 hover:bg-blue-50 transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-slate-600 hover:text-blue-600" />
              </button>

              <div className="text-center min-w-[100px]">
                <p className="text-2xl lg:text-3xl font-bold text-slate-900">
                  {carouselIndex + 1}
                </p>
                <p className="text-sm text-slate-600">
                  of {testimonials.length}
                </p>
              </div>

              <button
                onClick={handleNextCarousel}
                className="p-3 lg:p-4 rounded-full bg-white border-2 border-slate-200 hover:border-blue-600 hover:bg-blue-50 transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-slate-600 hover:text-blue-600" />
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 lg:p-6 text-center">
                <p className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">
                  {testimonials.length}+
                </p>
                <p className="text-xs lg:text-sm text-slate-700 font-medium">
                  Success Stories
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 lg:p-6 text-center">
                <p className="text-2xl lg:text-3xl font-bold text-green-600 mb-1">
                  98%
                </p>
                <p className="text-xs lg:text-sm text-slate-700 font-medium">
                  Success Rate
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-4 lg:p-6 text-center">
                <p className="text-2xl lg:text-3xl font-bold text-amber-600 mb-1">
                  15+
                </p>
                <p className="text-xs lg:text-sm text-slate-700 font-medium">
                  Years Exp.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="/courses"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 lg:py-4 px-6 rounded-lg transition-colors duration-200 text-center"
              >
                Start Your Success Journey
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
