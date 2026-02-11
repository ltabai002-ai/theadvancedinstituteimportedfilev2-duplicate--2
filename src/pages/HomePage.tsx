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
  Clock,
  ChevronRight,
  Download,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import LeadForm from '../components/LeadForm';
import ShaderBackground from '../components/ui/shader-background';
import { useState } from 'react';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const courses = [
    {
      name: 'RRB NTPC',
      duration: '6 Months',
      mode: 'Classroom + Online Support',
      slug: 'rrb-ntpc'
    },
    {
      name: 'SSC CGL',
      duration: '6 + 3 Months',
      mode: 'Classroom Only',
      slug: 'ssc-cgl'
    },
    {
      name: 'Banking Clerical',
      duration: '6 Months',
      mode: 'Classroom Only',
      slug: 'banking'
    },
    {
      name: 'SSC CHSL',
      duration: '6 Months',
      mode: 'Classroom Only',
      slug: 'ssc-chsl'
    }
  ];

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
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-blue-900 text-white py-12 md:py-20 overflow-hidden">
        <ShaderBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Crack Govt Exams in Guwahati with Expert-Led Coaching
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-medium">
                RRB NTPC | SSC CGL | SSC CHSL | Banking Exams
              </p>
              <p className="text-lg text-blue-50">
                Structured classroom programs with small batch size, weekly tests and personalized mentoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary-dark transition-all hover:shadow-lg flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download Brochure</span>
                </button>
                <Link to="/contact" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:shadow-lg flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book Free Demo Class</span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
              <LeadForm
                sourcePage="home-hero"
                buttonText="Request Callback"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
            <div className="flex items-center justify-center space-x-2 text-center">
              <Users className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm md:text-base font-medium text-gray-700">Small Batch (Max 20)</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-center">
              <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm md:text-base font-medium text-gray-700">Printed + PDF Material</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-center">
              <ClipboardCheck className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm md:text-base font-medium text-gray-700">Full Length Mocks</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-center">
              <UserCheck className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm md:text-base font-medium text-gray-700">Personal Mentoring</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-center col-span-2 md:col-span-1">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm md:text-base font-medium text-gray-700">Located in Guwahati</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Government Exam Programs
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive coaching programs designed for success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div
                key={course.slug}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{course.name}</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    <span className="text-sm">{course.mode}</span>
                  </div>
                </div>
                <Link
                  to={`/courses/${course.slug}`}
                  className="block w-full text-center bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/courses"
              className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-primary-dark"
            >
              <span>View All Courses</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600">
              What makes us the best choice for your government exam preparation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-gray-700 font-medium pt-2">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Our Program Works
            </h2>
            <p className="text-lg text-gray-600">
              A structured approach to ensure your success
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {programSteps.map((step, index) => (
              <div key={index} className="flex items-start mb-6 last:mb-0">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                  {index + 1}
                </div>
                <div className="flex-grow bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-800 font-medium">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Student Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Join hundreds of successful students who cracked their exams with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                  <Award className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Student Name</h3>
                  <p className="text-primary font-semibold mb-2">SSC CGL 2023 - Selected</p>
                  <p className="text-gray-600 text-sm">
                    "The faculty and study material provided here helped me crack SSC CGL in my first attempt."
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/results"
              className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-primary-dark"
            >
              <span>View All Success Stories</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Preparation the Right Way
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Attend a Free Demo Class This Week
          </p>
          <button className="bg-secondary text-white px-10 py-4 rounded-lg font-semibold hover:bg-secondary-dark transition-all hover:shadow-lg text-lg">
            Register Now
          </button>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about our programs
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              Get Admission Details
            </h2>
            <p className="text-gray-600 mb-8 text-center">
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
