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
  GraduationCap,
  X
} from 'lucide-react';
import LeadForm from '../components/LeadForm';
import ShaderBackground from '../components/ui/shader-background';
import TabbedCourseSection from '../components/TabbedCourseSection';
import HeroSlider from '../components/HeroSlider';
import InfrastructureSection from '../components/InfrastructureSection';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedFaculty, setSelectedFaculty] = useState<number | null>(null);

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

      <section className="py-8 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop: Normal Grid */}
          <div className="hidden md:grid md:grid-cols-5 gap-8">
            <div className="flex flex-col items-center justify-center text-center p-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
              <div className="bg-white p-3 rounded-full shadow-md mb-3">
                <Users className="w-6 h-6" style={{ color: '#0C64E5' }} />
              </div>
              <span className="text-sm md:text-base font-semibold text-gray-900">Small Batches</span>
              <span className="text-xs text-gray-600">Max 20 Students</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-200">
              <div className="bg-white p-3 rounded-full shadow-md mb-3">
                <BookOpen className="w-6 h-6" style={{ color: '#10B981' }} />
              </div>
              <span className="text-sm md:text-base font-semibold text-gray-900">Study Material</span>
              <span className="text-xs text-gray-600">Print + Digital</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200">
              <div className="bg-white p-3 rounded-full shadow-md mb-3">
                <ClipboardCheck className="w-6 h-6" style={{ color: '#F59E0B' }} />
              </div>
              <span className="text-sm md:text-base font-semibold text-gray-900">Mock Tests</span>
              <span className="text-xs text-gray-600">Full Length</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200">
              <div className="bg-white p-3 rounded-full shadow-md mb-3">
                <UserCheck className="w-6 h-6" style={{ color: '#8B5CF6' }} />
              </div>
              <span className="text-sm md:text-base font-semibold text-gray-900">Mentoring</span>
              <span className="text-xs text-gray-600">Personalized</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg bg-gradient-to-br from-cyan-50 to-cyan-100 border-2 border-cyan-200">
              <div className="bg-white p-3 rounded-full shadow-md mb-3">
                <MapPin className="w-6 h-6" style={{ color: '#06B6D4' }} />
              </div>
              <span className="text-sm md:text-base font-semibold text-gray-900">Guwahati</span>
              <span className="text-xs text-gray-600">Prime Location</span>
            </div>
          </div>

          {/* Mobile: Scrolling Animation */}
          <div className="md:hidden relative">
            <div className="flex gap-3 animate-scroll-left">
              <div className="flex flex-col items-center justify-center text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 shadow-md min-w-[140px]">
                <div className="bg-white p-2.5 rounded-full shadow mb-2">
                  <Users className="w-5 h-5" style={{ color: '#0C64E5' }} />
                </div>
                <span className="text-sm font-semibold text-gray-900">Small Batches</span>
                <span className="text-xs text-gray-600">Max 20 Students</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-200 shadow-md min-w-[140px]">
                <div className="bg-white p-2.5 rounded-full shadow mb-2">
                  <BookOpen className="w-5 h-5" style={{ color: '#10B981' }} />
                </div>
                <span className="text-sm font-semibold text-gray-900">Study Material</span>
                <span className="text-xs text-gray-600">Print + Digital</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-4 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200 shadow-md min-w-[140px]">
                <div className="bg-white p-2.5 rounded-full shadow mb-2">
                  <ClipboardCheck className="w-5 h-5" style={{ color: '#F59E0B' }} />
                </div>
                <span className="text-sm font-semibold text-gray-900">Mock Tests</span>
                <span className="text-xs text-gray-600">Full Length</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 shadow-md min-w-[140px]">
                <div className="bg-white p-2.5 rounded-full shadow mb-2">
                  <UserCheck className="w-5 h-5" style={{ color: '#8B5CF6' }} />
                </div>
                <span className="text-sm font-semibold text-gray-900">Mentoring</span>
                <span className="text-xs text-gray-600">Personalized</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100 border-2 border-cyan-200 shadow-md min-w-[140px]">
                <div className="bg-white p-2.5 rounded-full shadow mb-2">
                  <MapPin className="w-5 h-5" style={{ color: '#06B6D4' }} />
                </div>
                <span className="text-sm font-semibold text-gray-900">Guwahati</span>
                <span className="text-xs text-gray-600">Prime Location</span>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex flex-col items-center justify-center text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 shadow-md min-w-[140px]">
                <div className="bg-white p-2.5 rounded-full shadow mb-2">
                  <Users className="w-5 h-5" style={{ color: '#0C64E5' }} />
                </div>
                <span className="text-sm font-semibold text-gray-900">Small Batches</span>
                <span className="text-xs text-gray-600">Max 20 Students</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-200 shadow-md min-w-[140px]">
                <div className="bg-white p-2.5 rounded-full shadow mb-2">
                  <BookOpen className="w-5 h-5" style={{ color: '#10B981' }} />
                </div>
                <span className="text-sm font-semibold text-gray-900">Study Material</span>
                <span className="text-xs text-gray-600">Print + Digital</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-4 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200 shadow-md min-w-[140px]">
                <div className="bg-white p-2.5 rounded-full shadow mb-2">
                  <ClipboardCheck className="w-5 h-5" style={{ color: '#F59E0B' }} />
                </div>
                <span className="text-sm font-semibold text-gray-900">Mock Tests</span>
                <span className="text-xs text-gray-600">Full Length</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 shadow-md min-w-[140px]">
                <div className="bg-white p-2.5 rounded-full shadow mb-2">
                  <UserCheck className="w-5 h-5" style={{ color: '#8B5CF6' }} />
                </div>
                <span className="text-sm font-semibold text-gray-900">Mentoring</span>
                <span className="text-xs text-gray-600">Personalized</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100 border-2 border-cyan-200 shadow-md min-w-[140px]">
                <div className="bg-white p-2.5 rounded-full shadow mb-2">
                  <MapPin className="w-5 h-5" style={{ color: '#06B6D4' }} />
                </div>
                <span className="text-sm font-semibold text-gray-900">Guwahati</span>
                <span className="text-xs text-gray-600">Prime Location</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TabbedCourseSection />

      <section className="py-20 md:py-24" style={{ backgroundColor: '#ECFFFA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={testimonialsAnimation.ref} style={testimonialsAnimation.style} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose The Advanced Learning Academy
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes us the preferred choice for government exam preparation
            </p>
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
                  Hear from Our Founder
                </h3>

                <blockquote className="text-lg md:text-2xl font-semibold text-gray-900 mb-6 leading-relaxed">
                  "Welcome to The Advanced Learning Academy - where we transform your government job dreams into reality through expert guidance and proven strategies."
                </blockquote>
              </div>
            </div>
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

      <InfrastructureSection />

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
                image: "/faculty-1.webp",
                fullQualifications: "Ph.D. in Mathematics, NET Qualified",
                university: "Gauhati University",
                subjects: ["Quantitative Aptitude", "Logical Reasoning", "Data Interpretation"],
                exams: ["SSC CGL", "SSC CHSL", "RRB NTPC", "Banking"],
                achievement: "Trained 500+ students with 200+ selections in SSC & RRB exams",
                teachingApproach: "Focuses on concept clarity and shortcut techniques for complex calculations",
                quote: "Mathematics is not about numbers, it's about understanding patterns and logic"
              },
              { 
                name: "Prof. Anita Sharma", 
                qualification: "M.A. English Literature", 
                experience: "12+ Years", 
                specialization: "English & General Awareness",
                image: "/faculty-2.webp",
                fullQualifications: "M.A. in English Literature, B.Ed.",
                university: "Delhi University",
                subjects: ["English Language", "Comprehension", "General Awareness", "Current Affairs"],
                exams: ["SSC CGL", "SSC CHSL", "Banking", "All Government Exams"],
                achievement: "Expert in English language with 300+ successful students",
                teachingApproach: "Interactive teaching methodology with focus on practical application",
                quote: "Language is power - master it to unlock countless opportunities"
              },
              { 
                name: "Mr. Vikram Singh", 
                qualification: "Ex-Railway Officer", 
                experience: "10+ Years", 
                specialization: "RRB & Technical Subjects",
                image: "/faculty-3.webp",
                fullQualifications: "B.Tech (Mechanical), Ex-Railway Technical Officer",
                university: "IIT Roorkee",
                subjects: ["RRB Technical", "General Science", "Railway Procedures", "Technical Aptitude"],
                exams: ["RRB NTPC", "RRB Group D", "RRB Technician", "RRB ALP"],
                achievement: "Former Railway officer with insider knowledge of railway recruitment",
                teachingApproach: "Practical approach with real railway exam insights and patterns",
                quote: "Success in railway exams comes from understanding the system from within"
              }
            ].map((faculty, i) => {
              return (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 cursor-pointer" onClick={() => setSelectedFaculty(i)}>
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
                    <p className="text-sm text-gray-600 font-medium mb-2">Specialization:</p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      {faculty.specialization}
                    </p>
                    <button className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary-dark transition-all text-sm">
                      View Full Profile
                    </button>
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
                  <img src="/image.webp" alt="The Advanced Learning Academy" className="h-8 w-auto" />
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

      {/* Faculty Modal */}
      {selectedFaculty !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedFaculty(null)}>
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {(() => {
              const facultyData = [
                { 
                  name: "Dr. Rajesh Kumar", 
                  qualification: "Ph.D. in Mathematics", 
                  experience: "15+ Years", 
                  specialization: "Quantitative Aptitude & Reasoning",
                  image: "/faculty-1.webp",
                  fullQualifications: "Ph.D. in Mathematics, NET Qualified",
                  university: "Gauhati University",
                  subjects: ["Quantitative Aptitude", "Logical Reasoning", "Data Interpretation"],
                  exams: ["SSC CGL", "SSC CHSL", "RRB NTPC", "Banking"],
                  achievement: "Trained 500+ students with 200+ selections in SSC & RRB exams",
                  teachingApproach: "Focuses on concept clarity and shortcut techniques for complex calculations",
                  quote: "Mathematics is not about numbers, it's about understanding patterns and logic"
                },
                { 
                  name: "Prof. Anita Sharma", 
                  qualification: "M.A. English Literature", 
                  experience: "12+ Years", 
                  specialization: "English & General Awareness",
                  image: "/faculty-2.webp",
                  fullQualifications: "M.A. in English Literature, B.Ed.",
                  university: "Delhi University",
                  subjects: ["English Language", "Comprehension", "General Awareness", "Current Affairs"],
                  exams: ["SSC CGL", "SSC CHSL", "Banking", "All Government Exams"],
                  achievement: "Expert in English language with 300+ successful students",
                  teachingApproach: "Interactive teaching methodology with focus on practical application",
                  quote: "Language is power - master it to unlock countless opportunities"
                },
                { 
                  name: "Mr. Vikram Singh", 
                  qualification: "Ex-Railway Officer", 
                  experience: "10+ Years", 
                  specialization: "RRB & Technical Subjects",
                  image: "/faculty-3.webp",
                  fullQualifications: "B.Tech (Mechanical), Ex-Railway Technical Officer",
                  university: "IIT Roorkee",
                  subjects: ["RRB Technical", "General Science", "Railway Procedures", "Technical Aptitude"],
                  exams: ["RRB NTPC", "RRB Group D", "RRB Technician", "RRB ALP"],
                  achievement: "Former Railway officer with insider knowledge of railway recruitment",
                  teachingApproach: "Practical approach with real railway exam insights and patterns",
                  quote: "Success in railway exams comes from understanding the system from within"
                }
              ];
              const faculty = facultyData[selectedFaculty];
              
              return (
                <>
                  <button 
                    onClick={() => setSelectedFaculty(null)}
                    className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors z-10"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                  
                  <div className="grid md:grid-cols-5 gap-0">
                    <div className="md:col-span-2 relative">
                      <div className="h-64 md:h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative overflow-hidden">
                        <img 
                          src={faculty.image} 
                          alt={faculty.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          {faculty.experience}
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:col-span-3 p-8 md:p-10">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{faculty.name}</h2>
                      <p className="text-xl text-primary font-semibold mb-6">{faculty.qualification}</p>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                            <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                            Qualifications
                          </h3>
                          <p className="text-gray-700">{faculty.fullQualifications}</p>
                          <p className="text-gray-600 text-sm mt-1">{faculty.university}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2 text-primary" />
                            Subjects Taught
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {faculty.subjects.map((subject: string, idx: number) => (
                              <span key={idx} className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                                {subject}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                            <Target className="w-5 h-5 mr-2 text-primary" />
                            Exams Specialized
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {faculty.exams.map((exam: string, idx: number) => (
                              <span key={idx} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                {exam}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                            <Award className="w-5 h-5 mr-2 text-primary" />
                            Key Achievements
                          </h3>
                          <p className="text-gray-700">{faculty.achievement}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                            <CheckCircle2 className="w-5 h-5 mr-2 text-primary" />
                            Teaching Approach
                          </h3>
                          <p className="text-gray-700">{faculty.teachingApproach}</p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-primary">
                          <p className="text-gray-800 italic">"{faculty.quote}"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}
