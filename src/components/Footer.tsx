import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img
                src="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=200&h=100"
                alt="The Advanced Learning Academy"
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Where learning meets employment. Expert coaching for SSC, Banking, Railway and more government exams. Now with 24/7 mobile app support coming soon!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400  transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400  transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400  transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm  transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm  transition-colors">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm  transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm  transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="/#mobile-app" className="text-sm text-rose-400 hover:text-rose-300 transition-colors font-semibold">
                  Mobile App (Coming Soon)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses/rrb-ntpc" className="text-sm  transition-colors">
                  RRB NTPC
                </Link>
              </li>
              <li>
                <Link to="/courses/ssc-cgl" className="text-sm  transition-colors">
                  SSC CGL
                </Link>
              </li>
              <li>
                <Link to="/courses/ssc-chsl" className="text-sm  transition-colors">
                  SSC CHSL
                </Link>
              </li>
              <li>
                <Link to="/courses/banking" className="text-sm  transition-colors">
                  Banking Exams
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  House no. 15/B, MC Road, Chenikuthi, Opp. St. Mary's HS School, Guwahati 781003, Assam
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+916002346625" className="text-sm  transition-colors">
                  +91 6002346625
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:theadvancedlearning26@gmail.com" className="text-sm  transition-colors">
                  theadvancedlearning26@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} The Advanced Learning Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
