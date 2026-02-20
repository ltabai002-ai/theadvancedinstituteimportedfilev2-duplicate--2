import { Link } from 'react-router-dom';
import { Clock, Users, BookOpen, Award, CheckCircle2, ChevronRight, Monitor, Wifi } from 'lucide-react';

export default function CoursesPage() {
  const courses = [
    {
      name: 'RRB NTPC',
      slug: 'rrb-ntpc',
      duration: '6 Months',
      mode: 'Online + Offline Classes',
      batchSize: '20 Students',
      hasOnlineSupport: true,
      description: 'Comprehensive preparation program for Railway Recruitment Board Non-Technical Popular Categories exam covering all sections with focused practice.',
      highlights: [
        'Complete syllabus coverage',
        'Daily practice sessions',
        'Mock tests with AI ranking',
        'Previous year paper analysis'
      ]
    },
    {
      name: 'SSC CGL',
      slug: 'ssc-cgl',
      duration: '6 + 3 Months',
      mode: 'Online + Offline Classes',
      batchSize: '20 Students',
      hasOnlineSupport: true,
      description: 'Intensive coaching for Staff Selection Commission Combined Graduate Level examination with dedicated modules for Tier 1, Tier 2, and Tier 3.',
      highlights: [
        'Tier-wise preparation strategy',
        'Quantitative aptitude mastery',
        'English language enhancement',
        'Descriptive paper guidance'
      ]
    },
    {
      name: 'SSC CHSL',
      slug: 'ssc-chsl',
      duration: '6 Months',
      mode: 'Online + Offline Classes',
      batchSize: '20 Students',
      hasOnlineSupport: true,
      description: 'Structured program for Staff Selection Commission Combined Higher Secondary Level exam focusing on fundamentals and speed building.',
      highlights: [
        'Foundation to advanced concepts',
        'Speed and accuracy training',
        'Weekly assessment tests',
        'Typing test preparation'
      ]
    },
    {
      name: 'SBI PO & IBPS PO',
      slug: 'sbi-po-ibps-po',
      duration: '6-8 Months',
      mode: 'Online + Offline Classes',
      batchSize: '20 Students',
      hasOnlineSupport: true,
      description: 'Comprehensive preparation for SBI PO and IBPS PO exams in one batch. Expert-led training covering all phases including prelims, mains, and interview preparation with specialized banking knowledge.',
      highlights: [
        'Combined SBI PO & IBPS PO syllabus',
        'Interview & GD preparation',
        'Banking & financial awareness',
        'Online test series included'
      ]
    },
    {
      name: 'SBI Clerk & IBPS Clerk',
      slug: 'sbi-clerk-ibps-clerk',
      duration: '6 Months',
      mode: 'Online + Offline Classes',
      batchSize: '25 Students',
      hasOnlineSupport: true,
      description: 'Comprehensive coaching for SBI Clerk and IBPS Clerk examinations with focus on speed, accuracy, and time management for clerical positions.',
      highlights: [
        'Focus on speed and accuracy',
        'Banking awareness modules',
        'Computer knowledge training',
        'Online test portal access'
      ]
    },
    {
      name: 'ADRE (Assam Direct Recruitment)',
      slug: 'adre',
      duration: '6 Months',
      mode: 'Online + Offline Classes',
      batchSize: '20 Students',
      hasOnlineSupport: true,
      description: 'Complete preparation for Assam Direct Recruitment Examination with special focus on Assam-specific topics, culture, and current affairs.',
      highlights: [
        'Assam-specific GK coverage',
        'Expert faculty for regional topics',
        'Study materials in English & Assamese',
        'Complete exam pattern practice'
      ]
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Government Exam Programs
            </h1>
            <p className="text-xl text-blue-50">
              Expert-led coaching programs designed to help you crack competitive government exams with comprehensive study materials and personalized mentoring.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {courses.map((course) => (
              <div
                key={course.slug}
                className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-primary hover:shadow-2xl transition-all relative"
              >
                {course.hasOnlineSupport && (
                  <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center space-x-2">
                    <Wifi className="w-4 h-4" />
                    <span>Online Available</span>
                  </div>
                )}
                <div className="md:flex">
                  <div className="md:w-1/3 p-8 flex flex-col justify-center items-center text-white relative overflow-hidden bg-gray-900">
                    {course.slug === 'rrb-ntpc' && (
                      <>
                        <div className="absolute inset-0 opacity-50">
                          <img
                            src="https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Train background"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="relative z-10 flex flex-col items-center">
                          <img
                            src="https://images.pexels.com/photos/3824771/pexels-photo-3824771.jpeg?auto=compress&cs=tinysrgb&w=200"
                            alt="Indian Railways"
                            className="w-20 h-20 mb-4 object-contain bg-white rounded-full p-2"
                          />
                          <h2 className="text-3xl font-bold text-center">{course.name}</h2>
                        </div>
                      </>
                    )}
                    {course.slug === 'ssc-cgl' && (
                      <>
                        <div className="absolute inset-0 opacity-40">
                          <img
                            src="https://images.pexels.com/photos/7944080/pexels-photo-7944080.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="SSC Headquarters"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="relative z-10 flex flex-col items-center">
                          <img
                            src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=200"
                            alt="SSC Logo"
                            className="w-20 h-20 mb-4 object-contain bg-white rounded-full p-2"
                          />
                          <h2 className="text-3xl font-bold text-center">{course.name}</h2>
                        </div>
                      </>
                    )}
                    {course.slug === 'ssc-chsl' && (
                      <>
                        <div className="absolute inset-0 opacity-40">
                          <img
                            src="https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="SSC CHSL Background"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="relative z-10 flex flex-col items-center">
                          <img
                            src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=200"
                            alt="SSC Logo"
                            className="w-20 h-20 mb-4 object-contain bg-white rounded-full p-2"
                          />
                          <h2 className="text-3xl font-bold text-center">{course.name}</h2>
                        </div>
                      </>
                    )}
                    {course.slug === 'sbi-po-ibps-po' && (
                      <>
                        <div className="absolute inset-0 opacity-40">
                          <img
                            src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Banking Background"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="relative z-10 flex flex-col items-center">
                          <img
                            src="https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=200"
                            alt="Banking Logo"
                            className="w-20 h-20 mb-4 object-contain bg-white rounded-full p-2"
                          />
                          <h2 className="text-3xl font-bold text-center">{course.name}</h2>
                        </div>
                      </>
                    )}
                    {course.slug === 'sbi-clerk-ibps-clerk' && (
                      <>
                        <div className="absolute inset-0 opacity-40">
                          <img
                            src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Banking Background"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="relative z-10 flex flex-col items-center">
                          <img
                            src="https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=200"
                            alt="Banking Logo"
                            className="w-20 h-20 mb-4 object-contain bg-white rounded-full p-2"
                          />
                          <h2 className="text-3xl font-bold text-center">{course.name}</h2>
                        </div>
                      </>
                    )}
                    {course.slug === 'adre' && (
                      <>
                        <div className="absolute inset-0 opacity-40">
                          <img
                            src="https://images.pexels.com/photos/7944080/pexels-photo-7944080.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="ADRE Background"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="relative z-10 flex flex-col items-center">
                          <img
                            src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=200"
                            alt="ADRE Logo"
                            className="w-20 h-20 mb-4 object-contain bg-white rounded-full p-2"
                          />
                          <h2 className="text-3xl font-bold text-center">{course.name}</h2>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="md:w-2/3 p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-gray-700">
                        <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="text-xs text-gray-500">Duration</p>
                          <p className="font-semibold">{course.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-700">
                        <Users className="w-5 h-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="text-xs text-gray-500">Batch Size</p>
                          <p className="font-semibold">{course.batchSize}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-700">
                        {course.hasOnlineSupport ? (
                          <Monitor className="w-5 h-5 text-teal-600 flex-shrink-0" />
                        ) : (
                          <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
                        )}
                        <div>
                          <p className="text-xs text-gray-500">Mode</p>
                          <p className={`font-semibold ${course.hasOnlineSupport ? 'text-teal-700' : ''}`}>
                            {course.mode}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">
                        <span className="text-gray-900">Course </span>
                        <span className="text-[#004BB8]">Highlights:</span>
                      </h3>
                      <div className="grid md:grid-cols-2 gap-2">
                        {course.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-5 h-5 text-[#004BB8] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={`/courses/${course.slug}`}
                      className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#004BB8] transition-colors"
                    >
                      <span>View Full Details</span>
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Not Sure Which Course to Choose?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Talk to our academic counselors to find the perfect program for your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#004BB8] transition-colors"
            >
              Contact Us
            </Link>
            <button className="bg-[#0066FF] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#004BB8] transition-colors shadow-lg">
              Book Free Demo Class
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
