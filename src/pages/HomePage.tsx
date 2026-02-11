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
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24 overflow-visible">
        <div className="absolute inset-0 overflow-hidden">
          <ShaderBackground />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Crack Govt Exams in Guwahati with Expert-Led Coaching
              </h1>
              <p className="text-xl md:text-2xl text-white/95 font-medium">
                RRB NTPC | SSC CGL | SSC CHSL | Banking Exams
              </p>
              <p className="text-lg text-white/90">
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

            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 relative z-20 overflow-visible backdrop-blur-sm border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Started Today</h3>
              <p className="text-gray-600 mb-6">Fill the form and we'll contact you within 24 hours</p>
              <LeadForm
                sourcePage="home-hero"
                buttonText="Request Callback"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            <div className="flex flex-col items-center justify-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <Users className="w-6 h-6 text-primary mb-2" />
              <span className="text-sm md:text-base font-semibold text-gray-900">Small Batches</span>
              <span className="text-xs text-gray-600">Max 20 Students</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <BookOpen className="w-6 h-6 text-primary mb-2" />
              <span className="text-sm md:text-base font-semibold text-gray-900">Study Material</span>
              <span className="text-xs text-gray-600">Print + Digital</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <ClipboardCheck className="w-6 h-6 text-primary mb-2" />
              <span className="text-sm md:text-base font-semibold text-gray-900">Mock Tests</span>
              <span className="text-xs text-gray-600">Full Length</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <UserCheck className="w-6 h-6 text-primary mb-2" />
              <span className="text-sm md:text-base font-semibold text-gray-900">Mentoring</span>
              <span className="text-xs text-gray-600">Personalized</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors col-span-2 md:col-span-1">
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
          <div className="grid md:grid-cols-4 gap-8">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {courses.map((course, index) => (
              <div
                key={course.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 group"
              >
                <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative overflow-hidden">
                  <BookOpen className="w-20 h-20 text-white/90 group-hover:scale-110 transition-transform" />
                  {index === 0 && (
                    <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{course.name}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-3 text-primary" />
                      <span className="text-sm font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-3 text-primary" />
                      <span className="text-sm font-medium">{course.mode}</span>
                    </div>
                  </div>
                  <Link
                    to={`/courses/${course.slug}`}
                    className="block w-full text-center bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-dark transition-all shadow-md hover:shadow-lg"
                  >
                    View Details
                  </Link>
                </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

          <div className="max-w-4xl mx-auto">
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
              Our Student Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join hundreds of successful students who cracked their exams with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rahul Sharma", exam: "SSC CGL 2023", status: "Selected", score: "Tier 1: 168/200" },
              { name: "Priya Devi", exam: "RRB NTPC 2023", status: "Selected", score: "CBT 1: 96/100" },
              { name: "Amit Kumar", exam: "Banking PO", status: "Selected", score: "Prelims: 82/100" }
            ].map((student, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100">
                <div className="h-56 bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/5"></div>
                  <Award className="w-20 h-20 text-white relative z-10" />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Selected
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-1">{student.name}</h3>
                  <p className="text-primary font-semibold mb-2">{student.exam}</p>
                  <p className="text-sm text-gray-600 font-medium mb-4">{student.score}</p>
                  <p className="text-gray-700 text-sm leading-relaxed italic">
                    "The faculty and study material provided here helped me crack the exam in my first attempt."
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/results"
              className="inline-flex items-center space-x-2 text-primary font-semibold text-lg hover:text-primary-dark transition-colors"
            >
              <span>View All Success Stories</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-primary/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Start Your Preparation the Right Way
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Attend a Free Demo Class This Week and experience our teaching methodology
            </p>
            <button className="bg-gradient-to-r from-primary to-primary-dark text-white px-12 py-5 rounded-xl font-semibold hover:shadow-xl transition-all text-lg transform hover:-translate-y-1">
              Register for Free Demo
            </button>
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

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left hover:bg-gray-50 transition-colors flex justify-between items-center"
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
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 backdrop-blur-sm">
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
