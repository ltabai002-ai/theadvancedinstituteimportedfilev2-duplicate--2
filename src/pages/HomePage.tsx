import { Link } from 'react-router-dom';
import {
  Users,
  BookOpen,
  ClipboardCheck,
  UserCheck,
  MapPin,
  Target,
  TrendingUp,
  Award,
  ChevronRight,
  CheckCircle2,
  Play,
  GraduationCap
} from 'lucide-react';
import LeadForm from '../components/LeadForm';
import ShaderBackground from '../components/ui/shader-background';
import TabbedCourseSection from '../components/TabbedCourseSection';
import HeroSlider from '../components/HeroSlider';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const statsAnimation = useScrollAnimation({ direction: 'left', delay: 100 });
  const testimonialsAnimation = useScrollAnimation({ direction: 'right', delay: 100 });
  const whyChooseUsAnimation = useScrollAnimation({ direction: 'left', delay: 100 });
  const programAnimation = useScrollAnimation({ direction: 'right', delay: 100 });
  const successStoriesAnimation = useScrollAnimation({ direction: 'left', delay: 100 });
  const ctaBannerAnimation = useScrollAnimation({ direction: 'right', delay: 100 });
  const faqAnimation = useScrollAnimation({ direction: 'left', delay: 100 });
  const leadFormAnimation = useScrollAnimation({ direction: 'up', delay: 100 });

  const whyChooseUs = [
    { icon: Award, text: 'Industry Professionals as Faculty' },
    { icon: Target, text: 'Exam-Focused Structured Approach' },
    { icon: ClipboardCheck, text: 'Weekend Test Series' },
    { icon: TrendingUp, text: 'All India & Local Ranking' },
    { icon: BookOpen, text: 'Remedial Classes After Tests' },
    { icon: CheckCircle2, text: 'Previous Year Paper Practice' }
  ];

  const programSteps = [
    'Concept Classes (3 Days per Week)',
    'Weekly Practice Tests',
    'Full Length Mock Exams',
    'Performance Analysis',
    'Remedial & Doubt Clearing Sessions'
  ];

  const faqs = [
    {
      question: 'Do you provide study materials?',
      answer: 'Yes, we provide both printed and PDF study materials covering the complete syllabus with practice questions and mock tests.'
    },
    {
      question: 'Are classes available offline?',
      answer: 'Yes, we conduct classroom programs at our Guwahati center. Some courses also include online support for revision.'
    },
    {
      question: 'What is batch size?',
      answer: 'We maintain small batch sizes with a maximum of 20 students to ensure personalized attention and effective learning.'
    },
    {
      question: 'Do you conduct mock tests?',
      answer: 'Yes, we conduct weekly practice tests and full-length mock exams with All India and local rankings to track your progress.'
    },
    {
      question: 'Is fast track available?',
      answer: 'Yes, we offer intensive fast-track batches for students who need to prepare in a shorter timeframe. Contact us for details.'
    }
  ];

  return (
    <div>
      <HeroSlider />

      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            <div className="flex flex-col items-center justify-center text-center p-4 rounded-xl transition-colors">
              <Users className="w-6 h-6 text-primary mb-2" />
              <span className="text-sm md:text-base font-semibold text-gray-900">Small Batches</span>
              <span className="text-xs text-gray-600">Max 20 Students</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 rounded-xl transition-colors">
              <BookOpen className="w-6 h-6 text-primary mb-2" />
              <span className="text-sm md:text-base font-semibold text-gray-900">Study Material</span>
              <span className="text-xs text-gray-600">Print + Digital</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 rounded-xl transition-colors">
              <ClipboardCheck className="w-6 h-6 text-primary mb-2" />
              <span className="text-sm md:text-base font-semibold text-gray-900">Mock Tests</span>
              <span className="text-xs text-gray-600">Full Length</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 rounded-xl transition-colors">
              <UserCheck className="w-6 h-6 text-primary mb-2" />
              <span className="text-sm md:text-base font-semibold text-gray-900">Mentoring</span>
              <span className="text-xs text-gray-600">Personalized</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 rounded-xl transition-colors col-span-2 md:col-span-1">
              <MapPin className="w-6 h-6 text-primary mb-2" />
              <span className="text-sm md:text-base font-semibold text-gray-900">Guwahati</span>
              <span className="text-xs text-gray-600">Prime Location</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Success in Numbers
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of successful students
            </p>
          </div>
          <div ref={statsAnimation.ref} style={statsAnimation.style} className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2000+</div>
              <div className="text-gray-600 font-medium">Students Trained</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600 font-medium">Government Jobs</div>
            </div>
          </div>
        </div>
      </section>

      <TabbedCourseSection />

      <section className="py-20 md:py-24" style={{ backgroundColor: '#ECFFFA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={testimonialsAnimation.ref} style={testimonialsAnimation.style} className="text-left mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Real Stories,
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12">
              Incredible Journeys
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-left">
              <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-2">
                85%
              </div>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-teal-400 mb-4"></div>
              <p className="text-lg text-gray-700 font-medium">Selection rate</p>
            </div>

            <div className="text-left">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-6xl md:text-7xl font-bold text-gray-900">4.7</span>
                <span className="text-3xl text-gray-600 font-medium">/5</span>
              </div>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-teal-400 mb-4"></div>
              <p className="text-lg text-gray-700 font-medium">Rated by students</p>
            </div>

            <div className="text-left">
              <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-2">
                60%+
              </div>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-teal-400 mb-4"></div>
              <p className="text-lg text-gray-700 font-medium">Job placement success</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 aspect-video lg:aspect-auto flex items-center justify-center group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                <div className="relative z-10 bg-white rounded-full p-8 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-16 h-16 text-primary fill-primary" />
                </div>
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Ananya Borah
                </h3>

                <blockquote className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 leading-relaxed">
                  "The structured approach and weekly tests helped me qualify RRB NTPC on my first attempt with AIR 247."
                </blockquote>

                <p className="text-gray-700 leading-relaxed">
                  After graduation, I was struggling to crack government exams on my own. The personalized mentoring and doubt-clearing sessions here made all the difference. The faculty's experience in exam patterns and time management techniques were invaluable. Within 8 months of joining, I cleared RRB NTPC with an All India Rank of 247 and secured my dream job with Indian Railways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What makes us the best choice for your government exam preparation
            </p>
          </div>

          <div ref={whyChooseUsAnimation.ref} style={whyChooseUsAnimation.style} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-primary/10 rounded-2xl transform group-hover:scale-105 transition-transform"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                    <div className="bg-gradient-to-br from-primary to-primary-dark p-4 rounded-xl inline-block mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-gray-800 font-semibold text-lg leading-relaxed">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Our Program Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured approach to ensure your success
            </p>
          </div>

          <div ref={programAnimation.ref} style={programAnimation.style} className="max-w-4xl mx-auto">
            {programSteps.map((step, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0 relative">
                {index < programSteps.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
                )}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary-dark text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10 mr-6">
                  {index + 1}
                </div>
                <div className="flex-grow bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <p className="text-gray-900 font-semibold text-lg">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expert Faculty
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn from experienced professionals who are dedicated to your success
            </p>
          </div>

          <div ref={successStoriesAnimation.ref} style={successStoriesAnimation.style} className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Dr. Rajesh Kumar", 
                qualification: "Ph.D. in Mathematics", 
                experience: "15+ Years", 
                specialization: "Quantitative Aptitude & Reasoning",
                image: "/faculty-1.jpg"
              },
              { 
                name: "Prof. Anita Sharma", 
                qualification: "M.A. English Literature", 
                experience: "12+ Years", 
                specialization: "English & General Awareness",
                image: "/faculty-2.jpg"
              },
              { 
                name: "Mr. Vikram Singh", 
                qualification: "Ex-Railway Officer", 
                experience: "10+ Years", 
                specialization: "RRB & Technical Subjects",
                image: "/faculty-3.jpg"
              }
            ].map((faculty, i) => {
              return (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100">
                  <div className="h-56 bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative overflow-hidden">
                    <img 
                      src={faculty.image} 
                      alt={faculty.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                      {faculty.experience}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-1">{faculty.name}</h3>
                    <p className="text-primary font-semibold mb-2">{faculty.qualification}</p>
                    <p className="text-sm text-gray-600 font-medium mb-4">Specialization:</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {faculty.specialization}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 text-primary font-semibold text-lg hover:text-[#004BB8] transition-colors"
            >
              <span>Meet All Our Faculty</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ctaBannerAnimation.ref} style={ctaBannerAnimation.style} className="bg-gradient-to-br from-cyan-100/80 to-blue-100/80 rounded-2xl shadow-lg overflow-hidden border border-cyan-200/50">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <img src="/image.png" alt="The Advanced Learning Academy" className="h-8 w-auto" />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Level Up Your Skills with Expert-Led, Exam-Focused Courses.
                </h2>
                <Link
                  to="/courses"
                  className="inline-block bg-[#0066FF] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0052CC] transition-all shadow-lg hover:shadow-xl w-fit"
                >
                  Explore Our Programs
                </Link>
              </div>

              <div className="relative min-h-[200px] lg:min-h-[280px] bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
                <div className="relative z-10 p-6 text-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl max-w-xs mx-auto">
                    <Award className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Expert Faculty</h3>
                    <p className="text-sm text-gray-700">Industry professionals with 15+ years experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our programs
            </p>
          </div>

          <div ref={faqAnimation.ref} style={faqAnimation.style} className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left hover:bg-[#004BB8]/5 transition-colors flex justify-between items-center"
                >
                  <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ml-4 ${
                      openFaq === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-5 bg-primary/5 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div ref={leadFormAnimation.ref} style={leadFormAnimation.style} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
              Get Admission Details
            </h2>
            <p className="text-gray-600 mb-8 text-center text-lg">
              Fill out the form and our team will contact you within 24 hours
            </p>
            <LeadForm
              sourcePage="home-footer"
              buttonText="Request Callback"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
