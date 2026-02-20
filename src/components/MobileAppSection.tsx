import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function MobileAppSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section id="mobile-app" ref={sectionRef} className="relative py-16 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-ocean-50 border-b border-primary-100">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-5 w-40 h-40 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-5 right-5 w-48 h-48 bg-ocean-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-center">
        <div className={`relative transition-all duration-700 ${sectionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative mx-auto w-56 h-[420px] animate-phone-float">
              <div className="absolute inset-0 bg-black rounded-[2.5rem] shadow-2xl"></div>

              <div className="absolute inset-1.5 bg-black rounded-[2.3rem] overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-5 bg-black rounded-b-2xl z-10"></div>

                <div className="relative h-full bg-white flex flex-col p-0 text-gray-900 overflow-hidden">
                  <div className="flex items-center justify-between bg-gradient-to-r from-primary-500 to-ocean-500 px-4 py-3 text-white">
                    <h3 className="text-sm font-bold">Learning Dashboard</h3>
                    <div className="w-6 h-6 bg-white/30 rounded-full"></div>
                  </div>

                  <div className="flex-1 overflow-y-auto px-3 py-4 space-y-3">
                    <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-lg p-3 border border-primary-200">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-semibold text-primary-900">Progress</span>
                        <span className="text-xs font-bold text-primary-600">75%</span>
                      </div>
                      <div className="w-full h-1.5 bg-primary-200 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-primary-400 to-primary-600"></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-gray-700">Today's Classes</div>
                      <div className="bg-ocean-50 rounded-lg p-2.5 border border-ocean-200">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 bg-ocean-500 rounded-full"></div>
                          <span className="text-xs font-semibold text-gray-800">Mathematics</span>
                        </div>
                        <span className="text-xs text-gray-600 ml-4">10:00 AM - 11:30 AM</span>
                      </div>
                      <div className="bg-green-50 rounded-lg p-2.5 border border-green-200">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs font-semibold text-gray-800">Science</span>
                        </div>
                        <span className="text-xs text-gray-600 ml-4">2:00 PM - 3:30 PM</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-gray-700">Performance</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-purple-50 rounded-lg p-2 border border-purple-200 text-center">
                          <div className="text-xs font-bold text-purple-600">8.5/10</div>
                          <div className="text-xs text-gray-600">Tests</div>
                        </div>
                        <div className="bg-orange-50 rounded-lg p-2 border border-orange-200 text-center">
                          <div className="text-xs font-bold text-orange-600">92%</div>
                          <div className="text-xs text-gray-600">Attendance</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary-500 to-ocean-500 text-white px-3 py-2 text-center">
                    <button className="text-xs font-bold">View All Details</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
