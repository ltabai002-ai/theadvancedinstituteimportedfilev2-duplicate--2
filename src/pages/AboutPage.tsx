import { Target, Users, Award, BookOpen, TrendingUp, CheckCircle2, ArrowRight, Play, Eye, Heart, Lightbulb, Shield, Sparkles, GraduationCap, Clock, MessageCircle, BarChart, Building2, MapPin, Phone, Mail } from 'lucide-react';
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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

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
      <section className="bg-gradient-to-br from-primary-600 via-ocean-600 to-primary-700 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">About Us</h1>
            <p className="text-xl md:text-2xl text-blue-50 font-medium leading-relaxed">
              Empowering aspirants to achieve their government job dreams since 2015
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-white via-primary-50 to-ocean-50 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gradient-blue mb-6 tracking-tight">
              Welcome to The Advanced Learning Academy
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-ocean-500 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-blue-xl overflow-hidden border-2 border-primary-100">
            <div className="grid lg:grid-cols-2 gap-0">
              <div
                className="relative bg-gradient-to-br from-primary-100 via-ocean-100 to-primary-200 aspect-video lg:aspect-auto flex items-center justify-center group cursor-pointer overflow-hidden min-h-[300px] lg:min-h-[500px]"
                onClick={() => setIsVideoPlaying(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-ocean/20"></div>
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNCODJGNiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>

                {!isVideoPlaying ? (
                  <>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src="/image.webp"
                        alt="The Advanced Learning Academy"
                        className="w-3/4 max-w-xs opacity-50"
                      />
                    </div>
                    <div className="relative z-10 bg-gradient-to-br from-white to-primary-50 rounded-full p-10 shadow-blue-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Play className="w-20 h-20 text-primary-600 fill-primary-600" />
                    </div>
                    <div className="absolute bottom-8 left-8 right-8 text-center">
                      <p className="text-white text-lg font-bold bg-primary-900/60 backdrop-blur-sm px-4 py-2 rounded-xl">
                        Watch Our Introduction Video
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 max-w-md mx-4 text-center">
                      <GraduationCap className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                      <p className="text-gray-800 text-lg font-bold mb-2">Video Coming Soon</p>
                      <p className="text-gray-600">We're preparing an inspiring introduction video showcasing our facilities, faculty, and student success stories.</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-10 md:p-14 flex flex-col justify-center bg-gradient-to-br from-white to-primary-50/30">
                <h3 className="text-3xl md:text-4xl font-black text-gradient-ocean mb-8 tracking-tight">
                  What is The Advanced Learning Academy?
                </h3>

                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p className="font-medium">
                    The Advanced Learning Academy is Guwahati's premier coaching institute dedicated to transforming government job aspirants into successful candidates. Since 2015, we have been the trusted partner for thousands of students pursuing careers in SSC, Banking, Railways, and other government sectors.
                  </p>

                  <div className="bg-gradient-to-br from-primary-50 to-ocean-50 p-6 rounded-2xl border-2 border-primary-100">
                    <h4 className="font-black text-xl text-gray-900 mb-3 flex items-center">
                      <Users className="w-6 h-6 mr-3 text-primary-600" />
                      For Students
                    </h4>
                    <p className="text-gray-700">
                      We provide expert-led courses, comprehensive study materials, regular mock tests, and personalized mentoring. Our small batch sizes ensure individual attention, while our proven teaching methodology focuses on concept clarity and exam strategy.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-ocean-50 to-primary-50 p-6 rounded-2xl border-2 border-ocean-100">
                    <h4 className="font-black text-xl text-gray-900 mb-3 flex items-center">
                      <Shield className="w-6 h-6 mr-3 text-ocean-600" />
                      For Parents
                    </h4>
                    <p className="text-gray-700">
                      We understand parents' concerns about their child's future. Our transparent progress tracking system, regular parent-teacher meetings, detailed performance reports, and safe learning environment ensure peace of mind. Track your child's progress through weekly test scores, attendance records, and faculty feedback.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-gradient-to-br from-primary-500 to-ocean-600 text-white p-4 rounded-xl text-center shadow-blue-md">
                    <div className="text-3xl font-black mb-1">5000+</div>
                    <div className="text-sm font-semibold">Students Trained</div>
                  </div>
                  <div className="bg-gradient-to-br from-ocean-500 to-primary-600 text-white p-4 rounded-xl text-center shadow-blue-md">
                    <div className="text-3xl font-black mb-1">1000+</div>
                    <div className="text-sm font-semibold">Successful Selections</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-ocean-50 via-primary-50 to-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ocean-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gradient-ocean mb-6 tracking-tight">
              Our Vision & Mission
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ocean-500 to-primary-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
              Guiding principles that drive everything we do
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-3xl shadow-blue-xl overflow-hidden border-2 border-primary-200 group hover:border-primary-400 transition-all">
              <div className="bg-gradient-to-br from-primary-500 to-ocean-600 text-white p-8 md:p-10">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl mr-4">
                    <Eye className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black">Our Vision</h3>
                </div>
                <p className="text-xl text-white/90 font-medium leading-relaxed">
                  To become the most trusted and result-oriented government exam coaching institute in Northeast India, empowering every aspirant with the knowledge, skills, and confidence to achieve their dream career in public service.
                </p>
              </div>
              <div className="p-8 md:p-10 bg-gradient-to-br from-white to-primary-50">
                <h4 className="text-2xl font-black text-gray-900 mb-6">How We Achieve This</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 font-medium">Continuously updating curriculum to match latest exam patterns and industry standards</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 font-medium">Investing in state-of-the-art infrastructure and digital learning tools</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 font-medium">Building a community of successful alumni who inspire future aspirants</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-blue-xl overflow-hidden border-2 border-ocean-200 group hover:border-ocean-400 transition-all">
              <div className="bg-gradient-to-br from-ocean-500 to-primary-600 text-white p-8 md:p-10">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl mr-4">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black">Our Mission</h3>
                </div>
                <p className="text-xl text-white/90 font-medium leading-relaxed">
                  To provide exceptional, affordable, and accessible coaching that transforms aspirants into successful government employees through expert guidance, innovative teaching methods, and unwavering support.
                </p>
              </div>
              <div className="p-8 md:p-10 bg-gradient-to-br from-white to-ocean-50">
                <h4 className="text-2xl font-black text-gray-900 mb-6">Mission in Action</h4>
                <div className="grid gap-4">
                  <div className="bg-gradient-to-r from-primary-50 to-ocean-50 p-4 rounded-xl border-2 border-primary-100">
                    <div className="flex items-center mb-2">
                      <Lightbulb className="w-5 h-5 text-primary-600 mr-2" />
                      <h5 className="font-bold text-gray-900">Quality Education</h5>
                    </div>
                    <p className="text-sm text-gray-700">Expert faculty with 10+ years experience deliver concept-focused classes</p>
                  </div>
                  <div className="bg-gradient-to-r from-ocean-50 to-primary-50 p-4 rounded-xl border-2 border-ocean-100">
                    <div className="flex items-center mb-2">
                      <Heart className="w-5 h-5 text-ocean-600 mr-2" />
                      <h5 className="font-bold text-gray-900">Student-Centric Approach</h5>
                    </div>
                    <p className="text-sm text-gray-700">Small batches of 20 students ensure personalized attention and mentoring</p>
                  </div>
                  <div className="bg-gradient-to-r from-primary-50 to-ocean-50 p-4 rounded-xl border-2 border-primary-100">
                    <div className="flex items-center mb-2">
                      <Sparkles className="w-5 h-5 text-primary-600 mr-2" />
                      <h5 className="font-bold text-gray-900">Innovation in Learning</h5>
                    </div>
                    <p className="text-sm text-gray-700">Online and offline classes with mobile app for 24/7 learning access</p>
                  </div>
                  <div className="bg-gradient-to-r from-ocean-50 to-primary-50 p-4 rounded-xl border-2 border-ocean-100">
                    <div className="flex items-center mb-2">
                      <Award className="w-5 h-5 text-ocean-600 mr-2" />
                      <h5 className="font-bold text-gray-900">Proven Results</h5>
                    </div>
                    <p className="text-sm text-gray-700">1000+ selections with 85% success rate in government examinations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-600 via-ocean-600 to-primary-700 text-white rounded-3xl p-8 md:p-12 shadow-blue-xl border-4 border-primary-300">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-black mb-6">Our Core Values</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/20">
                  <Shield className="w-12 h-12 text-white mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Integrity</h4>
                  <p className="text-sm text-white/90">Honest guidance and transparent processes</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/20">
                  <Users className="w-12 h-12 text-white mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Excellence</h4>
                  <p className="text-sm text-white/90">Commitment to highest quality standards</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/20">
                  <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Empathy</h4>
                  <p className="text-sm text-white/90">Understanding every student's unique journey</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/20">
                  <TrendingUp className="w-12 h-12 text-white mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Growth</h4>
                  <p className="text-sm text-white/90">Continuous improvement and innovation</p>
                </div>
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
