import { Link } from 'react-router-dom';
import {
  Clock, MessageCircle, Mail, Monitor, Download, TrendingUp, Bell, BookOpen,
  Apple, PlayCircle, Users, Gift, Rocket, ChevronRight, Home
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  benefits: string[];
}

const features: Feature[] = [
  {
    icon: Clock,
    title: '24/7 Lecture Access',
    description: 'Access recorded classes anytime, anywhere',
    benefits: ['Watch lectures at your own pace', 'Lifetime access to course materials', 'High-quality video streaming']
  },
  {
    icon: MessageCircle,
    title: 'Instant Doubt Clearing',
    description: 'Get your doubts resolved within minutes',
    benefits: ['Quick responses from faculty', 'Text and photo-based queries', 'Real-time assistance']
  },
  {
    icon: Mail,
    title: 'Direct Faculty Messaging',
    description: 'Chat directly with your teachers',
    benefits: ['Personal guidance anytime', 'One-on-one mentoring', 'Study strategy consultation']
  },
  {
    icon: Monitor,
    title: 'Live Class Integration',
    description: 'Attend live classes from your phone',
    benefits: ['Real-time interactive sessions', 'Ask questions during class', 'Live performance tracking']
  },
  {
    icon: Download,
    title: 'Offline Downloads',
    description: 'Download lectures for offline study',
    benefits: ['Study without internet', 'Save on mobile data', 'Learn on the go']
  },
  {
    icon: TrendingUp,
    title: 'Performance Tracking',
    description: 'Track your progress with detailed analytics',
    benefits: ['Detailed performance reports', 'Compare with peers', 'Personalized recommendations']
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Never miss a class or assignment',
    benefits: ['Customizable reminders', 'Important announcements', 'Test scheduling alerts']
  },
  {
    icon: BookOpen,
    title: 'Digital Study Library',
    description: 'Complete study materials in your pocket',
    benefits: ['All course materials included', 'Quick search functionality', 'Organized by topics']
  }
];

const stats = [
  { icon: Rocket, label: 'Launching Soon', value: 'iOS & Android' },
  { icon: Users, label: 'Built for', value: '10,000+ Students' },
  { icon: Gift, label: 'Completely', value: 'Free for Students' },
  { icon: Clock, label: 'Available', value: '24/7 Support' }
];

export default function AppFeaturesPage() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation({ delay: 100 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ delay: 100 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ delay: 100 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-ocean-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="flex items-center gap-1 hover:text-primary-600 transition-colors">
            <Home className="w-4 h-4" />
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span>Mobile App Features</span>
        </div>

        <div ref={headerRef} className={`mb-16 text-center transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-ocean-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-blue-md">
            <Rocket className="w-4 h-4" />
            Coming Soon
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-ocean-600 to-primary-700 bg-clip-text text-transparent">
            Everything You Need to Succeed
          </h1>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            The Advanced Learning Academy App - Your complete learning companion with 24/7 access, instant support, and intelligent tracking.
          </p>
        </div>

        <div ref={featuresRef} className={`mb-20 transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Powerful Features at Your Fingertips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 border border-primary-100 shadow-blue-md hover:shadow-blue-lg transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-ocean-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-blue-md">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>

                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div ref={statsRef} className={`mb-20 transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-primary-50 to-ocean-50 rounded-3xl border border-primary-100 p-12">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Building the Future of Learning
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-ocean-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-blue-md">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
                    <p className="font-bold text-gray-900">{stat.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mb-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Learn on Your Terms
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Whether you're commuting to work, taking a study break, or revising for exams, our app adapts to your schedule.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-ocean-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Flexible Learning</h4>
                  <p className="text-gray-600 text-sm">Access materials whenever you need them</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-ocean-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Personalized Support</h4>
                  <p className="text-gray-600 text-sm">Get help tailored to your learning needs</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-ocean-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Progress Insights</h4>
                  <p className="text-gray-600 text-sm">Track improvement with comprehensive analytics</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-ocean-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Community Connection</h4>
                  <p className="text-gray-600 text-sm">Connect with peers and stay motivated</p>
                </div>
              </li>
            </ul>
          </div>

          <div className={`relative transition-all duration-700 delay-200 ${featuresVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative mx-auto w-64 h-[480px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-ocean-500 to-primary-600 rounded-[3rem] shadow-2xl"></div>

              <div className="absolute inset-3 bg-black rounded-[2.5rem] overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl z-10"></div>

                <div className="relative h-full bg-gradient-to-br from-primary-400 via-ocean-500 to-primary-600 flex flex-col items-center justify-center p-8 text-white">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-2xl mx-auto">
                      <BookOpen className="w-12 h-12 text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 drop-shadow-lg">
                      The Advanced<br />Learning Academy
                    </h3>
                    <p className="text-sm opacity-90 drop-shadow">
                      Your Success, Always With You
                    </p>
                  </div>

                  <div className="absolute top-6 right-6 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-10 left-6 w-6 h-6 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={ctaRef} className={`bg-gradient-to-r from-primary-500 to-ocean-500 rounded-3xl p-12 text-white text-center transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Be the First to Download
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of students who are already set for success. Get notified the moment our app launches.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <div className="flex-1 relative max-w-xs">
              <button className="w-full bg-white hover:bg-gray-100 text-primary-600 rounded-xl px-6 py-4 flex items-center justify-center gap-3 transition-all duration-300 shadow-lg font-bold">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </button>
              <div className="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <span className="text-xs font-bold bg-white text-primary-600 px-3 py-1 rounded-full">Coming Soon</span>
              </div>
            </div>

            <div className="flex-1 relative max-w-xs">
              <button className="w-full bg-white hover:bg-gray-100 text-primary-600 rounded-xl px-6 py-4 flex items-center justify-center gap-3 transition-all duration-300 shadow-lg font-bold">
                <PlayCircle className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </button>
              <div className="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <span className="text-xs font-bold bg-white text-primary-600 px-3 py-1 rounded-full">Coming Soon</span>
              </div>
            </div>
          </div>

          <Link
            to="/"
            className="inline-block bg-white hover:bg-gray-100 text-primary-600 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
