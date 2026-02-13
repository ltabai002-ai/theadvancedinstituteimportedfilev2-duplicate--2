import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Clock,
  Users,
  BookOpen,
  CheckCircle2,
  Calendar,
  TrendingUp,
  Award,
  Target,
  FileText,
  ChevronDown
} from 'lucide-react';
import LeadForm from '../components/LeadForm';
import { useState } from 'react';

interface CourseData {
  name: string;
  slug: string;
  duration: string;
  mode: string;
  batchSize: string;
  description: string;
  overview: string;
  highlights: string[];
  syllabus: {
    title: string;
    topics: string[];
  }[];
  batchTimings: {
    day: string;
    time: string;
  }[];
  fees: {
    amount: string;
    installments: string;
  };
}

const coursesData: Record<string, CourseData> = {
  'rrb-ntpc': {
    name: 'RRB NTPC',
    slug: 'rrb-ntpc',
    duration: '6 Months',
    mode: 'Classroom + Online Support',
    batchSize: '20 Students',
    description: 'Comprehensive preparation program for Railway Recruitment Board Non-Technical Popular Categories exam',
    overview: 'Our RRB NTPC program is designed to provide complete preparation for all stages of the examination. The course covers all sections including General Awareness, Mathematics, and General Intelligence & Reasoning with special focus on time management and accuracy.',
    highlights: [
      'Complete syllabus coverage for all stages',
      'Daily practice sessions with mock tests',
      'Previous 10 years question paper analysis',
      'Weekly full-length mock tests',
      'Personal doubt clearing sessions',
      'Printed study material + PDF access',
      'Online test series portal access',
      'Current affairs monthly updates'
    ],
    syllabus: [
      {
        title: 'General Awareness',
        topics: ['Current Affairs', 'Indian History', 'Geography', 'Indian Polity', 'Economics', 'Science & Technology']
      },
      {
        title: 'Mathematics',
        topics: ['Number System', 'Simplification', 'Percentage', 'Ratio & Proportion', 'Average', 'Time & Work', 'Time & Distance', 'Profit & Loss']
      },
      {
        title: 'General Intelligence & Reasoning',
        topics: ['Analogies', 'Coding-Decoding', 'Blood Relations', 'Series', 'Syllogism', 'Direction Sense', 'Puzzles']
      }
    ],
    batchTimings: [
      { day: 'Monday, Wednesday, Friday', time: '6:00 AM - 8:00 AM' },
      { day: 'Monday, Wednesday, Friday', time: '6:00 PM - 8:00 PM' },
      { day: 'Tuesday, Thursday, Saturday', time: '9:00 AM - 11:00 AM' }
    ],
    fees: {
      amount: '₹25,000',
      installments: 'Available in 2 installments'
    }
  },
  'ssc-cgl': {
    name: 'SSC CGL',
    slug: 'ssc-cgl',
    duration: '6 + 3 Months',
    mode: 'Classroom Only',
    batchSize: '20 Students',
    description: 'Intensive coaching for Staff Selection Commission Combined Graduate Level examination',
    overview: 'Our SSC CGL program offers comprehensive preparation for all four tiers of the examination. With dedicated modules for each tier and specialized coaching for descriptive paper, we ensure holistic development of all skills required to crack this prestigious exam.',
    highlights: [
      'Tier-wise structured preparation',
      'Quantitative Aptitude mastery program',
      'English Language skill development',
      'Descriptive paper writing practice',
      'Statistical analysis of performance',
      'Interview and personality development',
      'Complete study material for all tiers',
      'Daily vocabulary building sessions'
    ],
    syllabus: [
      {
        title: 'Tier 1 - General Intelligence & Reasoning',
        topics: ['Analogies', 'Similarities', 'Differences', 'Problem Solving', 'Analysis', 'Judgment', 'Decision Making']
      },
      {
        title: 'Tier 1 - General Awareness',
        topics: ['Current Events', 'History', 'Culture', 'Geography', 'Economic Scene', 'General Policy', 'Scientific Research']
      },
      {
        title: 'Tier 1 - Quantitative Aptitude',
        topics: ['Number Systems', 'Computation', 'Percentages', 'Ratio & Proportion', 'Averages', 'Interest', 'Geometry', 'Mensuration']
      },
      {
        title: 'Tier 1 - English Comprehension',
        topics: ['Reading Comprehension', 'Grammar', 'Vocabulary', 'Synonyms & Antonyms', 'Sentence Correction', 'Error Spotting']
      },
      {
        title: 'Tier 2 - Paper I & II',
        topics: ['Advanced Quantitative Aptitude', 'Advanced English Language', 'Statistics (for specific posts)']
      },
      {
        title: 'Tier 3 - Descriptive Paper',
        topics: ['Essay Writing', 'Letter Writing', 'Precis Writing', 'Application Writing']
      }
    ],
    batchTimings: [
      { day: 'Monday to Friday', time: '8:00 AM - 10:00 AM' },
      { day: 'Monday to Friday', time: '5:00 PM - 7:00 PM' },
      { day: 'Weekend Batch (Sat-Sun)', time: '10:00 AM - 2:00 PM' }
    ],
    fees: {
      amount: '₹40,000',
      installments: 'Available in 3 installments'
    }
  },
  'ssc-chsl': {
    name: 'SSC CHSL',
    slug: 'ssc-chsl',
    duration: '6 Months',
    mode: 'Classroom Only',
    batchSize: '20 Students',
    description: 'Structured program for Staff Selection Commission Combined Higher Secondary Level exam',
    overview: 'Our SSC CHSL program focuses on building strong fundamentals and enhancing speed with accuracy. The course is designed for 10+2 level preparation with special emphasis on time management and exam strategy.',
    highlights: [
      'Foundation to advanced level preparation',
      'Speed and accuracy training modules',
      'Weekly assessment tests',
      'Typing test preparation',
      'Previous year papers practice',
      'Tier-wise mock test series',
      'Skill test preparation (LDC/DEO)',
      'Personal performance tracking'
    ],
    syllabus: [
      {
        title: 'English Language',
        topics: ['Reading Comprehension', 'Vocabulary', 'Grammar', 'Verb', 'Tenses', 'Articles', 'Fill in the Blanks', 'Synonyms & Antonyms']
      },
      {
        title: 'General Intelligence',
        topics: ['Analogies', 'Coding-Decoding', 'Series', 'Classification', 'Blood Relations', 'Direction Sense', 'Syllogism', 'Venn Diagrams']
      },
      {
        title: 'Quantitative Aptitude',
        topics: ['Number System', 'Simplification', 'Percentage', 'Ratio & Proportion', 'Average', 'Interest', 'Profit & Loss', 'Time & Work']
      },
      {
        title: 'General Awareness',
        topics: ['Current Affairs', 'Static GK', 'Indian History', 'Geography', 'Economics', 'Polity', 'Science']
      }
    ],
    batchTimings: [
      { day: 'Monday, Wednesday, Friday', time: '7:00 AM - 9:00 AM' },
      { day: 'Tuesday, Thursday, Saturday', time: '5:00 PM - 7:00 PM' },
      { day: 'Weekend Batch (Sat-Sun)', time: '3:00 PM - 6:00 PM' }
    ],
    fees: {
      amount: '₹22,000',
      installments: 'Available in 2 installments'
    }
  },
  'banking': {
    name: 'Banking Exams',
    slug: 'banking',
    duration: '6 Months',
    mode: 'Classroom Only',
    batchSize: '20 Students',
    description: 'Complete banking exam preparation covering IBPS PO, Clerk, SBI, and RBI exams',
    overview: 'Our Banking Exams program provides comprehensive preparation for all major banking examinations including IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, and RBI Grade B. The course includes specialized modules for banking awareness, financial awareness, and interview preparation.',
    highlights: [
      'Coverage of IBPS PO, Clerk, SBI, RBI exams',
      'Banking and financial awareness classes',
      'Computer knowledge modules',
      'Interview preparation and mock interviews',
      'Current affairs daily updates',
      'Group discussion practice',
      'Descriptive test preparation',
      'Sector-specific knowledge building'
    ],
    syllabus: [
      {
        title: 'Reasoning Ability',
        topics: ['Puzzles & Seating Arrangement', 'Syllogism', 'Blood Relations', 'Coding-Decoding', 'Inequality', 'Data Sufficiency']
      },
      {
        title: 'Quantitative Aptitude',
        topics: ['Data Interpretation', 'Number Series', 'Simplification', 'Quadratic Equations', 'Data Sufficiency', 'Arithmetic Problems']
      },
      {
        title: 'English Language',
        topics: ['Reading Comprehension', 'Cloze Test', 'Error Spotting', 'Para Jumbles', 'Sentence Improvement', 'Vocabulary']
      },
      {
        title: 'Banking & Financial Awareness',
        topics: ['Banking Terms', 'RBI Functions', 'Banking Regulations', 'Government Schemes', 'Budget', 'Economic Survey', 'International Banking']
      },
      {
        title: 'Computer Knowledge',
        topics: ['Computer Basics', 'MS Office', 'Internet', 'Networking', 'Database', 'Computer Security']
      }
    ],
    batchTimings: [
      { day: 'Monday to Friday', time: '6:00 AM - 8:00 AM' },
      { day: 'Monday to Friday', time: '6:00 PM - 8:00 PM' },
      { day: 'Weekend Batch (Sat-Sun)', time: '9:00 AM - 1:00 PM' }
    ],
    fees: {
      amount: '₹28,000',
      installments: 'Available in 2 installments'
    }
  }
};

export default function CourseDetailPage() {
  const { courseSlug } = useParams<{ courseSlug: string }>();
  const [openSection, setOpenSection] = useState<number | null>(0);

  if (!courseSlug || !coursesData[courseSlug]) {
    return <Navigate to="/courses" replace />;
  }

  const course = coursesData[courseSlug];

  return (
    <div>
      <section
        className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-20 relative"
        style={
          courseSlug === 'rrb-ntpc'
            ? {
                backgroundImage: 'url(/train-background.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }
            : undefined
        }
      >
        {courseSlug === 'rrb-ntpc' && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-dark/90" />
        )}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{course.name}</h1>
            <p className="text-xl text-blue-50 mb-8">{course.description}</p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-6 h-6" />
                <span className="font-semibold">{course.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6" />
                <span className="font-semibold">Max {course.batchSize}</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-6 h-6" />
                <span className="font-semibold">{course.mode}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Overview</h2>
                <p className="text-gray-700 leading-relaxed">{course.overview}</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Highlights</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Detailed Syllabus</h2>
                <div className="space-y-3">
                  {course.syllabus.map((section, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setOpenSection(openSection === index ? null : index)}
                        className="w-full px-6 py-4 bg-white hover:bg-[#004BB8]/5 transition-colors flex justify-between items-center text-left"
                      >
                        <span className="font-semibold text-gray-900">{section.title}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 transition-transform ${
                            openSection === index ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openSection === index && (
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                          <div className="grid md:grid-cols-2 gap-2">
                            {section.topics.map((topic, topicIndex) => (
                              <div key={topicIndex} className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span className="text-gray-700 text-sm">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Batch Timings</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.batchTimings.map((timing, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                      <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">{timing.day}</p>
                        <p className="text-gray-600">{timing.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Fees</h2>
                <p className="text-4xl font-bold text-primary mb-2">{course.fees.amount}</p>
                <p className="text-gray-600">{course.fees.installments}</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#004BB8] transition-colors">
                    Enroll Now
                  </button>
                  <Link
                    to="/contact"
                    className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg font-semibold hover:bg-[#004BB8] hover:text-white hover:border-[#004BB8] transition-colors text-center"
                  >
                    Contact for Details
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Enroll in This Course</h3>
                  <LeadForm
                    sourcePage={`course-${course.slug}`}
                    buttonText="Request Callback"
                  />
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Why Choose This Course?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Expert Faculty</p>
                        <p className="text-sm text-gray-600">Learn from industry professionals</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Proven Track Record</p>
                        <p className="text-sm text-gray-600">High success rate</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Complete Material</p>
                        <p className="text-sm text-gray-600">Comprehensive study resources</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Mock Tests</p>
                        <p className="text-sm text-gray-600">Regular assessment & ranking</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join hundreds of successful students and begin your preparation today
          </p>
          <Link
            to="/contact"
            className="inline-block bg-secondary text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#004BB8] transition-colors"
          >
            Book Free Demo Class
          </Link>
        </div>
      </section>
    </div>
  );
}
