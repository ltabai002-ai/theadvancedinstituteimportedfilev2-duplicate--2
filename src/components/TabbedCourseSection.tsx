import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ChevronRight, ChevronLeft, ChevronUp, ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Course {
  name: string;
  duration: string;
  cohortStart: string;
  slug: string;
  category: string;
  logo?: string;
  backgroundImage?: string;
}

const courses: Course[] = [
  {
    name: 'RRB NTPC',
    duration: '6 Months',
    cohortStart: '1st March 2026',
    slug: 'rrb-ntpc',
    category: 'RRB',
    logo: '/indian-railways-logo.webp',
    backgroundImage: '/train-background.webp'
  },
  {
    name: 'SSC CGL',
    duration: '6 + 3 Months',
    cohortStart: '15th March 2026',
    slug: 'ssc-cgl',
    category: 'SSC',
    logo: '/ssc-logo.webp',
    backgroundImage: '/ssc-headquarters.webp'
  },
  {
    name: 'SSC CHSL',
    duration: '6 Months',
    cohortStart: '15th March 2026',
    slug: 'ssc-chsl',
    category: 'SSC',
    logo: '/ssc-logo.webp',
    backgroundImage: '/ssc-chsl-background.webp'
  },
  {
    name: 'Banking Clerical',
    duration: '6 Months',
    cohortStart: '10th March 2026',
    slug: 'banking',
    category: 'Banking',
    logo: '/banking-logo.webp',
    backgroundImage: '/banking-background.webp'
  }
];

const categories = ['RRB', 'SSC', 'Banking'];

export default function TabbedCourseSection() {
  const [selectedCategory, setSelectedCategory] = useState('Most Popular');
  const [isCarouselExpanded, setIsCarouselExpanded] = useState(true);
  const coursesAnimation = useScrollAnimation({ direction: 'up', delay: 100 });
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredCourses = selectedCategory === 'Most Popular'
    ? courses
    : courses.filter((course) => course.category === selectedCategory);

  const allCategories = ['Most Popular', ...categories];
  const selectedIndex = allCategories.indexOf(selectedCategory);
  const categoriesBeforeSelected = allCategories.slice(0, selectedIndex);
  const categoriesAfterSelected = allCategories.slice(selectedIndex + 1);

  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
      setCurrentSlide(index);
    }
  };

  const handleNext = () => {
    if (currentSlide < filteredCourses.length - 1) {
      scrollToSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      scrollToSlide(currentSlide - 1);
    }
  };

  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: '#EEF6FF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={coursesAnimation.ref} style={coursesAnimation.style} className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Government Exam Programs
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive coaching programs designed for success
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Category Buttons - Vertical on Desktop, Horizontal on Mobile */}
          <div className="lg:w-80 flex-shrink-0">
            {/* Desktop: Vertical Stack */}
            <div className="hidden lg:block bg-white rounded-2xl shadow-lg overflow-hidden p-2">
              <button
                onClick={() => setSelectedCategory('Most Popular')}
                className={`w-full text-left px-6 py-4 rounded-xl transition-all font-satoshi font-normal text-base leading-[26px] ${
                  selectedCategory === 'Most Popular'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-[#004BB8] hover:text-white'
                }`}
              >
                Most Popular
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-6 py-4 rounded-xl transition-all font-satoshi font-normal text-base leading-[26px] ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-[#004BB8] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Mobile: Interleaved Layout */}
            <div className="lg:hidden space-y-6">
              {/* Categories Before Selected */}
              {categoriesBeforeSelected.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-2">
                  {categoriesBeforeSelected.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setCurrentSlide(0);
                        setIsCarouselExpanded(true);
                      }}
                      className="w-full text-left px-6 py-4 rounded-xl transition-all font-satoshi font-normal text-base leading-[26px] text-gray-700 hover:bg-[#004BB8] hover:text-white"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}

              {/* Selected Category + Carousel */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-2">
                  <button
                    onClick={() => setIsCarouselExpanded(!isCarouselExpanded)}
                    className="w-full flex items-center justify-between px-6 py-4 rounded-xl transition-all font-satoshi font-normal text-base leading-[26px] bg-white text-blue-600 border-2 border-blue-600 shadow-md"
                  >
                    <span>{selectedCategory}</span>
                    {isCarouselExpanded ? (
                      <ChevronUp className="w-5 h-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-blue-600" />
                    )}
                  </button>
                </div>

                {/* Mobile Carousel View */}
                {isCarouselExpanded && (
                <div className="relative">
                  <div
                    ref={carouselRef}
                    className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4"
                    style={{ scrollSnapType: 'x mandatory' }}
                  >
                    {filteredCourses.map((course) => (
                      <div
                        key={course.slug}
                        className="flex-shrink-0 w-full snap-center"
                      >
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                          <div
                            className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center relative overflow-hidden"
                            style={course.backgroundImage ? {
                              backgroundImage: `url('${course.backgroundImage}')`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center'
                            } : undefined}
                          >
                            <div className="absolute inset-0 bg-black/40"></div>
                            <div className="relative text-center px-6 z-10">
                              {course.logo ? (
                                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 p-2 overflow-hidden">
                                  <img
                                    src={course.logo}
                                    alt={`${course.name} logo`}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              ) : (
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                                  <span className="text-2xl font-bold text-blue-600">
                                    {course.category.charAt(0)}
                                  </span>
                                </div>
                              )}
                              <h3 className="text-2xl font-bold text-white">
                                {course.name}
                              </h3>
                            </div>
                          </div>

                          <div className="p-6">
                            <div className="space-y-4 mb-6">
                              <div className="flex items-center text-gray-700">
                                <Clock className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0" />
                                <span className="text-sm font-medium">
                                  Duration: {course.duration}
                                </span>
                              </div>
                              <div className="flex items-center text-gray-700">
                                <Calendar className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0" />
                                <span className="text-sm font-medium">
                                  Cohort Starts: {course.cohortStart}
                                </span>
                              </div>
                            </div>

                            <Link
                              to={`/courses/${course.slug}`}
                              className="block w-full text-center bg-blue-600 hover:bg-[#004BB8] text-white py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
                            >
                              View Program
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows for Mobile */}
                  {filteredCourses.length > 1 && (
                    <>
                      <button
                        onClick={handlePrev}
                        disabled={currentSlide === 0}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all ${
                          currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        aria-label="Previous course"
                      >
                        <ChevronLeft className="w-5 h-5 text-gray-900" />
                      </button>
                      <button
                        onClick={handleNext}
                        disabled={currentSlide === filteredCourses.length - 1}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all ${
                          currentSlide === filteredCourses.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        aria-label="Next course"
                      >
                        <ChevronRight className="w-5 h-5 text-gray-900" />
                      </button>
                    </>
                  )}

                  {/* Dots Indicator for Mobile */}
                  {filteredCourses.length > 1 && (
                    <div className="flex justify-center gap-2 mt-4">
                      {filteredCourses.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => scrollToSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentSlide ? 'bg-blue-600 w-6' : 'bg-gray-300'
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
                )}
              </div>

              {/* Categories After Selected */}
              {categoriesAfterSelected.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-2">
                  {categoriesAfterSelected.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setCurrentSlide(0);
                        setIsCarouselExpanded(true);
                      }}
                      className="w-full text-left px-6 py-4 rounded-xl transition-all font-satoshi font-normal text-base leading-[26px] text-gray-700 hover:bg-[#004BB8] hover:text-white"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:block flex-1">
            {/* Desktop Grid View */}
            <div className="md:grid md:grid-cols-2 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.slug}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
                >
                  <div
                    className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center relative overflow-hidden"
                    style={course.backgroundImage ? {
                      backgroundImage: `url('${course.backgroundImage}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    } : undefined}
                  >
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="relative text-center px-6 z-10">
                      {course.logo ? (
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 p-2 overflow-hidden">
                          <img
                            src={course.logo}
                            alt={`${course.name} logo`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-blue-600">
                            {course.category.charAt(0)}
                          </span>
                        </div>
                      )}
                      <h3 className="text-2xl font-bold text-white">
                        {course.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center text-gray-700">
                        <Clock className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0" />
                        <span className="text-sm font-medium">
                          Duration: {course.duration}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Calendar className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0" />
                        <span className="text-sm font-medium">
                          Cohort Starts: {course.cohortStart}
                        </span>
                      </div>
                    </div>

                    <Link
                      to={`/courses/${course.slug}`}
                      className="block w-full text-center bg-blue-600 hover:bg-[#004BB8] text-white py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
                    >
                      View Program
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg">No courses available in this category yet.</p>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/courses"
            className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-[#004BB8] transition-colors"
          >
            <span>View All Courses</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
