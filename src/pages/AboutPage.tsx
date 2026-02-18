import { Target, Users, Award, BookOpen, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface LeadershipPreview {
  id: string;
  role: string;
  name: string;
  designation: string;
  bio: string;
  image_url: string;
}

export default function AboutPage() {
  const [leadershipPreviews, setLeadershipPreviews] = useState<LeadershipPreview[]>([]);

  useEffect(() => {
    const fetchLeadership = async () => {
      try {
        const { data, error } = await supabase
          .from('leadership_profiles')
          .select('id, role, name, designation, bio, image_url')
          .eq('is_active', true)
          .order('display_order')
          .limit(3);

        if (error) throw error;
        if (data) setLeadershipPreviews(data);
      } catch (error) {
        console.error('Error fetching leadership previews:', error);
      }
    };

    fetchLeadership();
  }, []);
  const milestones = [
    { year: '2015', event: 'Academy Founded', description: 'Started with a vision to provide quality government exam coaching in Guwahati' },
    { year: '2017', event: '500+ Students Trained', description: 'Reached milestone of training over 500 students' },
    { year: '2019', event: 'Expanded Infrastructure', description: 'Moved to larger facility with modern classrooms and study areas' },
    { year: '2021', event: 'Online Platform Launch', description: 'Launched comprehensive online test series and study materials' },
    { year: '2023', event: '1000+ Selections', description: 'Celebrated achievement of 1000+ student selections in various government exams' },
  ];

  const faculty = [
    {
      name: 'Dr. Rajesh Kumar',
      designation: 'Director & Mathematics Expert',
      experience: '15+ years',
      specialization: 'Quantitative Aptitude, Advanced Mathematics'
    },
    {
      name: 'Prof. Anita Sharma',
      designation: 'English Language Expert',
      experience: '12+ years',
      specialization: 'English Grammar, Comprehension, Writing Skills'
    },
    {
      name: 'Mr. Vikram Singh',
      designation: 'Reasoning Faculty',
      experience: '10+ years',
      specialization: 'Logical Reasoning, Analytical Ability'
    },
    {
      name: 'Ms. Priya Das',
      designation: 'General Studies Expert',
      experience: '8+ years',
      specialization: 'Current Affairs, General Awareness, Static GK'
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-blue-50">
              Empowering aspirants to achieve their government job dreams since 2015
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At The Advanced Learning Academy, we are committed to providing high-quality, result-oriented coaching for various government competitive examinations. Our mission is to bridge the gap between aspiration and achievement by offering comprehensive preparation programs, expert guidance, and a supportive learning environment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that with the right guidance, dedicated effort, and strategic preparation, every student can succeed in their chosen government exam. Our faculty comprises experienced professionals who understand the exam patterns, trends, and requirements thoroughly.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">5000+</h3>
                <p className="text-gray-600">Students Trained</p>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-6 rounded-xl">
                <Award className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">1000+</h3>
                <p className="text-gray-600">Successful Selections</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <BookOpen className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
                <p className="text-gray-600">Courses Offered</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">85%</h3>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600">
              Meet the visionaries guiding our academy towards excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {leadershipPreviews.map((leader) => {
              const getProfileLink = () => {
                if (leader.role === 'director') return '/about/director';
                if (leader.role === 'dean') return '/about/dean';
                return '/about/advisors';
              };

              const shortBio = leader.bio.length > 150
                ? leader.bio.substring(0, 150) + '...'
                : leader.bio;

              return (
                <div
                  key={leader.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                    {leader.image_url ? (
                      <img
                        src={leader.image_url}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-blue-700 text-4xl font-bold shadow-lg">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{leader.designation}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {shortBio}
                    </p>
                    <Link
                      to={getProfileLink()}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                    >
                      View Full Profile
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {leadershipPreviews.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">Leadership profiles coming soon...</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Students Choose Us
            </h2>
            <p className="text-lg text-gray-600">
              What sets us apart from other coaching institutes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Result-Oriented Approach</h3>
              <p className="text-gray-600">
                Our teaching methodology is designed specifically to help students crack government exams with focused preparation strategies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Small Batch Sizes</h3>
              <p className="text-gray-600">
                We maintain a maximum of 20 students per batch to ensure personalized attention and effective doubt clearing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Experienced Faculty</h3>
              <p className="text-gray-600">
                Learn from industry professionals with 10+ years of experience in government exam coaching.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Study Material</h3>
              <p className="text-gray-600">
                Get access to both printed and digital study materials covering the entire syllabus with practice questions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regular Mock Tests</h3>
              <p className="text-gray-600">
                Weekly full-length mock tests with detailed performance analysis and All India rankings.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
              <p className="text-gray-600">
                1000+ students have successfully cleared various government exams with our guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expert Faculty
            </h2>
            <p className="text-lg text-gray-600">
              Learn from the best in the industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculty.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-2">{member.designation}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.experience} Experience</p>
                  <p className="text-gray-700 text-sm">{member.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Milestones that define our growth
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <div className="text-primary font-bold text-2xl mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow"></div>
                  </div>
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
