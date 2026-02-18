import { Wifi, BookOpen, Monitor, Users, MapPin, Car, Coffee, Accessibility } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function InfrastructureSection() {
  const sectionAnimation = useScrollAnimation({ direction: 'up', delay: 100 });
  const facilitiesAnimation = useScrollAnimation({ direction: 'left', delay: 150 });

  const facilities = [
    { icon: Users, title: 'AC Classrooms', description: 'Comfortable learning environment' },
    { icon: Wifi, title: 'High-Speed WiFi', description: 'Seamless connectivity' },
    { icon: BookOpen, title: 'Extensive Library', description: 'An enviable collection of books & resources' },
    { icon: Monitor, title: 'Computer Lab', description: 'Modern systems with latest software' },
    { icon: Car, title: 'Parking Facility', description: 'Secure parking area' },
    { icon: Coffee, title: 'Cafeteria', description: 'Hygienic food & beverages at an easy reach' },
    { icon: Accessibility, title: 'Accessible Design', description: 'Wheelchair friendly campus' },
    { icon: Users, title: 'Study Rooms', description: 'Dedicated group study areas' }
  ];

  const infrastructureImages = [
    {
      url: '/student-girl-success.webp',
      title: 'Modern Classrooms',
      description: 'Air-conditioned classrooms with modern teaching aids'
    },
    {
      url: '/faculty-1.webp',
      title: 'Expert Faculty',
      description: 'Experienced teachers dedicated to student success'
    },
    {
      url: '/faculty-2.webp',
      title: 'Interactive Learning',
      description: 'Engaging teaching methodology for better understanding'
    },
    {
      url: '/woman-success-story.webp',
      title: 'Success Stories',
      description: 'Join hundreds of successful candidates'
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionAnimation.ref} style={sectionAnimation.style} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            World-Class Infrastructure & Learning Environment
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience excellence with our state-of-the-art facilities designed to create the perfect learning atmosphere
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <div ref={facilitiesAnimation.ref} style={facilitiesAnimation.style} className="grid grid-cols-2 gap-3 md:gap-4 lg:order-1 order-2">
            {infrastructureImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
                    <h4 className="font-bold text-sm md:text-lg mb-0.5 md:mb-1">{image.title}</h4>
                    <p className="text-xs md:text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4 md:space-y-6 lg:order-2 order-1">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl border border-blue-100">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Our Campus Facilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {facilities.map((facility, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white p-3 md:p-4 rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0">
                      <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                        <facility.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 text-xs md:text-sm">{facility.title}</h4>
                      <p className="text-xs text-gray-600 mt-0.5">{facility.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl border border-green-100">
              <div className="flex items-start space-x-3 md:space-x-4">
                <MapPin className="w-6 h-6 md:w-8 md:h-8 text-green-600 flex-shrink-0 mt-1" />
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Prime Location</h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Strategically located in the heart of Guwahati with excellent connectivity via public transport.
                    Easy access from all major areas of the city.
                  </p>
                  <div className="mt-4 p-3 md:p-4 bg-white rounded-lg shadow-sm">
                    <p className="font-semibold text-gray-900 mb-1 text-sm md:text-base">The Advanced Learning Academy</p>
                    <p className="text-xs md:text-sm text-gray-600">Guwahati, Assam</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-5 md:p-6 rounded-xl md:rounded-2xl border border-orange-100">
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                <div className="text-center">
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900">200+</h4>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">Seating Capacity</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900">5+</h4>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">Classrooms</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900">50+</h4>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">Computer Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
