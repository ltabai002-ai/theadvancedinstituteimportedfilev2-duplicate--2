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
  X,
  Monitor,
  Smartphone
} from 'lucide-react';
import LeadForm from '../components/LeadForm';
import ShaderBackground from '../components/ui/shader-background';
import TabbedCourseSection from '../components/TabbedCourseSection';
import HeroSlider from '../components/HeroSlider';
import InfrastructureSection from '../components/InfrastructureSection';
import MobileAppSection from '../components/MobileAppSection';
import TestimonialsSection from '../components/TestimonialsSection';
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
    { icon: GraduationCap, text: 'Expert Guest Lectures by Industry Leaders' },
    { icon: Target, text: 'Exam-Focused Structured Approach' },
    { icon: ClipboardCheck, text: 'Weekend Test Series' },
    { icon: TrendingUp, text: 'All India & Local Ranking' },
    { icon: BookOpen, text: 'Remedial Classes After Tests' },
    { icon: CheckCircle2, text: 'Previous Year Paper Practice' },
    { icon: Smartphone, text: '24/7 Mobile App with Instant Doubt Clearing & Faculty Chat', isNew: true }
  ];

  const programSteps = [
    'Concept Classes (3 Days per Week) - Available Online & Offline',
    'Weekly Practice Tests',
    'Full Length Mock Exams',
    'Performance Analysis',
    'Remedial & Doubt Clearing Sessions - Online Support Available'
  ];

  const faqs = [
    {
      question: 'Do you provide study materials?',
      answer: 'Yes, we provide both printed and PDF study materials covering the complete syllabus with practice questions and mock tests.'
    },
    {
      question: 'Are online classes available?',
      answer: 'Yes! We offer comprehensive online classes for all exams with live interactive sessions, recorded lectures for revision, online doubt clearing, and digital study materials accessible from anywhere.'
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
      question: 'How do online classes work?',
      answer: 'Our online classes feature live interactive sessions with faculty, access to recorded lectures for revision, online test portal, digital study materials, and dedicated doubt clearing sessions.'
    },
    {
      question: 'Is fast track available?',
      answer: 'Yes, we offer intensive fast-track batches for students who need to prepare in a shorter timeframe. Contact us for details.'
    },
    {
      question: 'When will The Advanced Learning Academy mobile app be available?',
      answer: 'We\'re finalizing our mobile app and it will be available soon on both iOS and Android. Students who enroll now will get priority early access with exclusive features.'
    },
    {
      question: 'Will the mobile app be free for enrolled students?',
      answer: 'Yes! The mobile app is completely free for all enrolled students. You\'ll get full access to all features including live classes, recorded lectures, and direct faculty messaging.'
    },
    {
      question: 'What are the main features of the mobile app?',
      answer: 'The app offers 24/7 access to recorded classes, instant doubt clearing, direct messaging with faculty, live class integration, offline lecture downloads, performance analytics, smart notifications, and your complete digital study library.'
    },
    {
      question: 'Can I download lectures for offline viewing?',
      answer: 'Absolutely! You can download any lecture or study material for offline access, perfect for studying during commutes or in areas with limited internet connectivity.'
    },
    {
      question: 'How does the instant doubt clearing feature work?',
      answer: 'Simply snap a photo of your question or type it in the app, and our faculty will respond within minutes. You can also schedule doubt clearing sessions and get personalized help.'
    },
    {
      question: 'Will I be able to message my teachers directly through the app?',
      answer: 'Yes! The app includes a direct messaging feature where you can communicate with your faculty, ask questions, seek guidance, and get personalized study advice anytime.'
    }
  ];

  return (
    <div>
      <HeroSlider />

      <section className="py-12 bg-gradient-to-br from-primary-50 via-white to-ocean-50 border-b border-primary-100 overflow-hidden relative">
        <div className="absolute inset-0 bg-blue-radial opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Desktop: Normal Grid */}
          <div className="hidden md:grid md:grid-cols-6 gap-6">
            <div className="flex flex-col items-center justify-center text-center p-6 rounded-2xl card-hover-lift bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200 shadow-blue-md group">
              <div className="bg-white p-4 rounded-full shadow-blue-md mb-4 group-hover:animate-float">
                <Users className="w-7 h-7 text-primary-600" />
              </div>
              <span className="text-base font-bold text-gray-900 mb-1">Small Batches</span>
              <span className="text-sm text-gray-600 font-medium">Max 20 Students</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-6 rounded-2xl card-hover-lift bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-200 shadow-md group">
              <div className="bg-white p-4 rounded-full shadow-md mb-4 group-hover:animate-float">
                <Monitor className="w-7 h-7 text-teal-600" />
              </div>
              <span className="text-base font-bold text-gray-900 mb-1">Online Classes</span>
              <span className="text-sm text-gray-600 font-medium">Available Now</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-6 rounded-2xl card-hover-lift bg-gradient-to-br from-sky-50 to-sky-100 border-2 border-sky-200 shadow-ocean-md group">
              <div className="bg-white p-4 rounded-full shadow-ocean-md mb-4 group-hover:animate-float">
                <BookOpen className="w-7 h-7 text-sky-600" />
              </div>
              <span className="text-base font-bold text-gray-900 mb-1">Study Material</span>
              <span className="text-sm text-gray-600 font-medium">Print + Digital</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-6 rounded-2xl card-hover-lift bg-gradient-to-br from-ocean-50 to-ocean-100 border-2 border-ocean-200 shadow-blue-md group">
              <div className="bg-white p-4 rounded-full shadow-blue-md mb-4 group-hover:animate-float">
                <ClipboardCheck className="w-7 h-7 text-ocean-600" />
              </div>
              <span className="text-base font-bold text-gray-900 mb-1">Mock Tests</span>
              <span className="text-sm text-gray-600 font-medium">Full Length</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-6 rounded-2xl card-hover-lift bg-gradient-to-br from-primary-100 to-primary-200 border-2 border-primary-300 shadow-blue-md group">
              <div className="bg-white p-4 rounded-full shadow-blue-md mb-4 group-hover:animate-float">
                <UserCheck className="w-7 h-7 text-primary-700" />
              </div>
              <span className="text-base font-bold text-gray-900 mb-1">Mentoring</span>
              <span className="text-sm text-gray-600 font-medium">Personalized</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-6 rounded-2xl card-hover-lift bg-gradient-to-br from-sky-100 to-ocean-100 border-2 border-sky-300 shadow-ocean-md group">
              <div className="bg-white p-4 rounded-full shadow-ocean-md mb-4 group-hover:animate-float">
                <MapPin className="w-7 h-7 text-ocean-600" />
              </div>
              <span className="text-base font-bold text-gray-900 mb-1">Guwahati</span>
              <span className="text-sm text-gray-600 font-medium">Prime Location</span>
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
              <div className="flex flex-col items-center justify-center text-center p-4 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-200 shadow-md min-w-[140px]">
                <div className="bg-white p-2.5 rounded-full shadow mb-2">
                  <Monitor className="w-5 h-5" style={{ color: '#14B8A6' }} />
                </div>
                <span className="text-sm font-semibold text-gray-900">Online Classes</span>
                <span className="text-xs text-gray-600">Available Now</span>
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
              <div className="flex flex-col items-center justify-center text-center p-4 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-200 shadow-md min-w-[140px]">
                <div className="bg-white p-2.5 rounded-full shadow mb-2">
                  <Monitor className="w-5 h-5" style={{ color: '#14B8A6' }} />
                </div>
                <span className="text-sm font-semibold text-gray-900">Online Classes</span>
                <span className="text-xs text-gray-600">Available Now</span>
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

      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float hidden"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-ocean-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float hidden" style={{animationDelay: '1s'}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div ref={testimonialsAnimation.ref} style={testimonialsAnimation.style} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gradient-blue mb-6 tracking-tight">
              Why Choose The Advanced Learning Academy
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-ocean-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
              Discover what makes us the preferred choice for government exam preparation
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-blue-xl overflow-hidden border-2 border-primary-100 glow-border">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative bg-gradient-to-br from-primary-100 via-ocean-100 to-primary-200 aspect-video lg:aspect-auto flex items-center justify-center group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-ocean/30"></div>
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNCODJGNiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
                <div className="relative z-10 bg-gradient-to-br from-white to-primary-50 rounded-full p-10 shadow-blue-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-pulse">
                  <Play className="w-20 h-20 text-primary-600 fill-primary-600" />
                </div>
              </div>

              <div className="p-10 md:p-14 flex flex-col justify-center bg-gradient-to-br from-white to-primary-50/30">
                <h3 className="text-3xl md:text-4xl font-black text-gradient-ocean mb-8 tracking-tight">
                  Hear from Our Founder
                </h3>

                <blockquote className="text-xl md:text-2xl font-bold text-gray-800 mb-6 leading-relaxed relative pl-6 border-l-4 border-primary-500">
                  "Welcome to The Advanced Learning Academy - where we transform your government job dreams into reality through expert guidance and proven strategies."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-white via-primary-50 to-ocean-50 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-ocean-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gradient-blue mb-4 tracking-tight leading-tight pb-2">
              How Our Program Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-ocean-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
              A structured approach to ensure your success
            </p>
          </div>

          <div ref={programAnimation.ref} style={programAnimation.style} className="max-w-3xl mx-auto">
            {programSteps.map((step, index) => (
              <div key={index} className="flex items-start mb-6 last:mb-0 relative group">
                {index < programSteps.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-1 bg-gradient-to-b from-primary-400 via-ocean-400 to-primary-600 rounded-full"></div>
                )}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-ocean-600 text-white rounded-full flex items-center justify-center font-black text-lg shadow-blue-lg z-10 mr-5 group-hover:scale-110 group-hover:animate-pulse transition-all duration-300">
                  {index + 1}
                </div>
                <div className="flex-grow bg-white p-5 md:p-6 rounded-2xl shadow-blue-md hover:shadow-blue-lg card-hover-lift border-2 border-primary-100 group-hover:border-primary-300 transition-all">
                  <p className="text-gray-900 font-bold text-base md:text-lg">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InfrastructureSection />

      <MobileAppSection />

      <TestimonialsSection />

      <section className="py-24 md:py-32 bg-gradient-to-br from-primary-50 via-white to-ocean-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gradient-ocean mb-6 tracking-tight">
              Our Expert Faculty
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ocean-500 to-primary-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
              Learn from experienced professionals who are dedicated to your success
            </p>
          </div>

          <div ref={successStoriesAnimation.ref} style={successStoriesAnimation.style} className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Dr. Raman Bora",
                qualification: "Head of Department",
                experience: "15+ Years",
                specialization: "GK/GA/CA - General Awareness/Current Affairs",
                image: "https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=800",
                fullQualifications: "Head of Department",
                university: "Expert in General Knowledge and Current Affairs",
                subjects: ["General Knowledge", "General Awareness", "Current Affairs"],
                exams: ["SSC CGL", "SSC CHSL", "RRB NTPC", "Banking"],
                achievement: "15+ years of expertise in General Knowledge and Current Affairs teaching",
                teachingApproach: "Comprehensive approach to General Awareness with focus on current events and static GK",
                quote: "Knowledge is power, and awareness opens doors to success"
              },
              {
                name: "D.R. Sir",
                qualification: "Post Graduate",
                experience: "15+ Years",
                specialization: "English Language",
                image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800",
                fullQualifications: "Post Graduate - HOD English",
                university: "Teaching for Professional Examinations",
                subjects: ["English Language"],
                exams: ["SSC CGL", "SSC CHSL", "Banking (PO/Clerk)", "Railway Exams (RRB NTPC/Group D)", "Other Government Exams"],
                achievement: "Application based teaching style with 2000+ students mentored",
                teachingApproach: "Application based approach focusing on practical English usage for competitive exams",
                quote: "Master English with practical application to excel in all government exams"
              },
              {
                name: "N. Bhuyan",
                qualification: "Post Graduate - HOD",
                experience: "15+ Years",
                specialization: "Quantitative Aptitude",
                image: "https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=800",
                fullQualifications: "Post Graduate - Head of Department (Quant)",
                university: "Teaching for top level competitive examinations",
                subjects: ["Quantitative Aptitude"],
                exams: ["Banking (PO/Clerk)", "Railway Exams (RRB NTPC/Group D)", "Other Government Exams"],
                achievement: "Concept + Shortcut based teaching with 1500+ students mentored",
                teachingApproach: "Combines strong conceptual foundation with time-saving shortcuts for competitive exams",
                quote: "Master mathematics through concepts and smart shortcuts"
              }
            ].map((faculty, i) => {
              return (
                <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-blue-lg hover:shadow-blue-xl card-hover-lift border-2 border-primary-100 cursor-pointer group tilt-3d flex flex-col" onClick={() => setSelectedFaculty(i)}>
                  <div className="h-64 bg-gradient-to-br from-primary-100 to-ocean-200 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-500 to-ocean-500 text-white px-4 py-2 rounded-full text-sm font-bold z-10 shadow-blue-md">
                      {faculty.experience}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="font-black text-2xl text-gray-900 mb-2">{faculty.name}</h3>
                    <p className="text-primary-600 font-bold mb-3 text-lg">{faculty.qualification}</p>
                    <p className="text-sm text-gray-500 font-semibold mb-2 uppercase tracking-wide">Specialization</p>
                    <p className="text-gray-800 text-base leading-relaxed mb-6 font-medium flex-grow">
                      {faculty.specialization}
                    </p>
                    <button className="w-full bg-gradient-to-r from-primary-500 to-ocean-500 text-white py-3 rounded-xl font-bold hover:from-primary-600 hover:to-ocean-600 transition-all text-base shadow-blue-md hover:shadow-blue-lg btn-pulse mt-auto">
                      View Full Profile
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/about"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary-500 to-ocean-500 text-white font-bold text-lg px-8 py-4 rounded-xl hover:from-primary-600 hover:to-ocean-600 transition-all shadow-blue-lg hover:shadow-blue-xl btn-pulse group"
            >
              <span>Meet All Our Faculty</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-ocean-50 via-primary-50 to-sky-50 relative overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div ref={ctaBannerAnimation.ref} style={ctaBannerAnimation.style} className="bg-gradient-to-br from-white to-primary-50 rounded-3xl shadow-blue-xl overflow-hidden border-2 border-primary-200 glow-border">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 md:p-10 lg:p-14 flex flex-col justify-center bg-gradient-to-br from-white to-primary-50/50">
                <div className="mb-6 animate-fadeInScale">
                  <img src="/image.png" alt="The Advanced Learning Academy" className="h-10 w-auto" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gradient-blue mb-6 leading-tight tracking-tight">
                  Level Up Your Skills with Expert-Led, Exam-Focused Courses.
                </h2>
                <Link
                  to="/courses"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-ocean-600 text-white px-8 py-4 rounded-xl font-bold hover:from-primary-700 hover:to-ocean-700 transition-all shadow-blue-lg hover:shadow-blue-xl w-fit text-lg btn-pulse group"
                >
                  <span>Explore Our Programs</span>
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="relative min-h-[250px] lg:min-h-[350px] bg-gradient-to-br from-primary-100 via-ocean-100 to-primary-200 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjIiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
                <div className="relative z-10 p-8 text-center">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-blue-xl max-w-sm mx-auto border-2 border-primary-200 tilt-3d float-animation">
                    <div className="bg-gradient-to-br from-primary-100 to-ocean-100 p-4 rounded-full inline-block mb-4">
                      <Award className="w-14 h-14 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">Expert Faculty</h3>
                    <p className="text-base text-gray-700 font-medium">Industry professionals with 15+ years experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gradient-to-br from-white via-ocean-50 to-primary-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-ocean-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gradient-ocean mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ocean-500 to-primary-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
              Everything you need to know about our programs
            </p>
          </div>

          <div ref={faqAnimation.ref} style={faqAnimation.style} className="space-y-5">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border-2 border-primary-100 rounded-2xl overflow-hidden shadow-blue-md hover:shadow-blue-lg transition-all group">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left hover:bg-primary-50 transition-all flex justify-between items-center group"
                >
                  <span className="font-bold text-gray-900 text-xl group-hover:text-primary-600 transition-colors">{faq.question}</span>
                  <ChevronRight
                    className={`w-6 h-6 text-primary-500 transition-transform flex-shrink-0 ml-6 ${
                      openFaq === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-8 py-6 bg-gradient-to-br from-primary-50 to-ocean-50 border-t-2 border-primary-100 animate-fadeInUp">
                    <p className="text-gray-800 leading-relaxed text-lg font-medium">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gradient-to-br from-primary-600 via-ocean-600 to-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-ocean-300 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div ref={leadFormAnimation.ref} style={leadFormAnimation.style} className="bg-white rounded-3xl shadow-blue-xl p-10 md:p-14 border-4 border-primary-300">
            <h2 className="text-4xl md:text-5xl font-black text-gradient-blue mb-4 text-center tracking-tight">
              Get Admission Details
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-ocean-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-700 mb-10 text-center text-xl font-medium">
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
                  name: "Dr. Raman Bora",
                  qualification: "Head of Department",
                  experience: "15+ Years",
                  specialization: "GK/GA/CA - General Awareness/Current Affairs",
                  image: "https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=800",
                  fullQualifications: "Head of Department",
                  university: "Expert in General Knowledge and Current Affairs",
                  subjects: ["General Knowledge", "General Awareness", "Current Affairs"],
                  exams: ["SSC CGL", "SSC CHSL", "RRB NTPC", "Banking"],
                  achievement: "15+ years of expertise in General Knowledge and Current Affairs teaching",
                  teachingApproach: "Comprehensive approach to General Awareness with focus on current events and static GK",
                  quote: "Knowledge is power, and awareness opens doors to success"
                },
                {
                  name: "D.R. Sir",
                  qualification: "Post Graduate",
                  experience: "15+ Years",
                  specialization: "English Language",
                  image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800",
                  fullQualifications: "Post Graduate - HOD English",
                  university: "Teaching for Professional Examinations",
                  subjects: ["English Language"],
                  exams: ["SSC CGL", "SSC CHSL", "Banking (PO/Clerk)", "Railway Exams (RRB NTPC/Group D)", "Other Government Exams"],
                  achievement: "Application based teaching style with 2000+ students mentored",
                  teachingApproach: "Application based approach focusing on practical English usage for competitive exams",
                  quote: "Master English with practical application to excel in all government exams"
                },
                {
                  name: "N. Bhuyan",
                  qualification: "Post Graduate - HOD",
                  experience: "15+ Years",
                  specialization: "Quantitative Aptitude",
                  image: "https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=800",
                  fullQualifications: "Post Graduate - Head of Department (Quant)",
                  university: "Teaching for top level competitive examinations",
                  subjects: ["Quantitative Aptitude"],
                  exams: ["Banking (PO/Clerk)", "Railway Exams (RRB NTPC/Group D)", "Other Government Exams"],
                  achievement: "Concept + Shortcut based teaching with 1500+ students mentored",
                  teachingApproach: "Combines strong conceptual foundation with time-saving shortcuts for competitive exams",
                  quote: "Master mathematics through concepts and smart shortcuts"
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
