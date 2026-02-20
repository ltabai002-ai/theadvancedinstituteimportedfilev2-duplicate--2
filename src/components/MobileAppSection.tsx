import { Link } from 'react-router-dom';
import { Smartphone, Clock, MessageCircle, Download, TrendingUp, Apple, PlayCircle, Rocket } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const keyHighlights = [
  { icon: Clock, text: '24/7 Lecture Access' },
  { icon: MessageCircle, text: 'Instant Doubt Clearing' },
  { icon: Download, text: 'Offline Downloads' },
  { icon: TrendingUp, text: 'Performance Tracking' }
];

export default function MobileAppSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section id="mobile-app" ref={sectionRef} className="relative py-16 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-ocean-50 border-b border-primary-100">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-5 w-40 h-40 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-5 right-5 w-48 h-48 bg-ocean-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-ocean-500 text-white px-4 py-1 rounded-full text-xs font-semibold mb-4 shadow-blue-md">
              <Rocket className="w-3 h-3" />
              Coming Soon
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-ocean-600 bg-clip-text text-transparent">
              Your Success Story Starts Here
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Access everything you need—anytime, anywhere with our powerful mobile app.
            </p>

            <div className="space-y-4 mb-8">
              {keyHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-ocean-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-blue-md">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">{item.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <button className="w-full bg-black hover:bg-gray-900 text-white rounded-lg px-5 py-3 flex items-center justify-center gap-2 transition-all duration-300 shadow-lg text-sm">
                  <Apple className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs">Download on</div>
                    <div className="text-xs font-bold">App Store</div>
                  </div>
                </button>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-ocean-400 opacity-20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <span className="text-xs font-bold text-primary-700 bg-white px-2 py-1 rounded-full">Coming Soon</span>
                </div>
              </div>

              <div className="flex-1 relative">
                <button className="w-full bg-black hover:bg-gray-900 text-white rounded-lg px-5 py-3 flex items-center justify-center gap-2 transition-all duration-300 shadow-lg text-sm">
                  <PlayCircle className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-xs font-bold">Google Play</div>
                  </div>
                </button>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-ocean-400 opacity-20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <span className="text-xs font-bold text-primary-700 bg-white px-2 py-1 rounded-full">Coming Soon</span>
                </div>
              </div>
            </div>

            <Link
              to="/app-features"
              className="inline-block bg-gradient-to-r from-primary-500 to-ocean-500 hover:from-primary-600 hover:to-ocean-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-blue-md hover:shadow-blue-lg transform hover:scale-105"
            >
              Explore All Features
            </Link>
          </div>

          <div className={`relative transition-all duration-700 delay-200 ${sectionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative mx-auto w-56 h-[420px] animate-phone-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-ocean-500 to-primary-600 rounded-[2.5rem] shadow-blue-xl"></div>

              <div className="absolute inset-3 bg-black rounded-[2rem] overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-5 bg-black rounded-b-2xl z-10"></div>

                <div className="relative h-full bg-gradient-to-br from-primary-400 via-ocean-500 to-primary-600 flex flex-col items-center justify-center p-6 text-white">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-xl mx-auto">
                      <Smartphone className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 drop-shadow-lg">
                      The Advanced Learning Academy
                    </h3>
                    <p className="text-xs opacity-90 drop-shadow">
                      Learn Anytime, Anywhere
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
