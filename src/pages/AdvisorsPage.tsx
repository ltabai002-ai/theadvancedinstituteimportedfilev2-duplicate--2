import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import Layout from '../components/Layout';
import Breadcrumbs from '../components/leadership/Breadcrumbs';
import { Award, Mail, Phone, Linkedin } from 'lucide-react';

interface AdvisorProfile {
  id: string;
  name: string;
  designation: string;
  bio: string;
  qualifications: string[];
  experience: string;
  achievements: string[];
  areas_of_expertise: string[];
  inspirational_message: string;
  image_url: string;
  linkedin_url: string;
  email: string;
  phone: string;
}

export default function AdvisorsPage() {
  const [advisors, setAdvisors] = useState<AdvisorProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdvisors = async () => {
      try {
        const { data, error } = await supabase
          .from('leadership_profiles')
          .select('*')
          .eq('role', 'advisor')
          .eq('is_active', true)
          .order('display_order');

        if (error) throw error;
        if (data) setAdvisors(data);
      } catch (error) {
        console.error('Error fetching advisors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAdvisors();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Breadcrumbs
        items={[
          { label: 'Home', path: '/' },
          { label: 'About Us', path: '/about' },
          { label: 'Academic Advisors' }
        ]}
      />

      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Academic Advisors</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Meet our distinguished team of academic advisors who bring decades of combined experience
            in competitive exam preparation and student success.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {advisors.length === 0 ? (
            <p className="text-center text-gray-600">No advisors found</p>
          ) : (
            <div className="space-y-16">
              {advisors.map((advisor) => (
                <div key={advisor.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                    <div className="lg:col-span-1">
                      <div className="w-full max-w-xs mx-auto">
                        <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 mb-4">
                          {advisor.image_url ? (
                            <img
                              src={advisor.image_url}
                              alt={advisor.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-blue-800 text-6xl font-bold">
                              {advisor.name.split(' ').map(n => n[0]).join('')}
                            </div>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 text-center">{advisor.name}</h3>
                        <p className="text-lg text-blue-600 text-center mb-4">{advisor.designation}</p>

                        <div className="space-y-2">
                          {advisor.email && (
                            <a
                              href={`mailto:${advisor.email}`}
                              className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            >
                              <Mail className="w-4 h-4" />
                              <span>{advisor.email}</span>
                            </a>
                          )}
                          {advisor.phone && (
                            <a
                              href={`tel:${advisor.phone}`}
                              className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            >
                              <Phone className="w-4 h-4" />
                              <span>{advisor.phone}</span>
                            </a>
                          )}
                          {advisor.linkedin_url && (
                            <a
                              href={advisor.linkedin_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            >
                              <Linkedin className="w-4 h-4" />
                              <span>LinkedIn Profile</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Biography</h4>
                        <p className="text-gray-700 leading-relaxed">{advisor.bio}</p>
                      </div>

                      {advisor.qualifications && advisor.qualifications.length > 0 && (
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-3">Qualifications</h4>
                          <ul className="space-y-2">
                            {advisor.qualifications.map((qual, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-700">
                                <span className="text-blue-600 mt-1">•</span>
                                <span>{qual}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {advisor.achievements && advisor.achievements.length > 0 && (
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-3">Key Achievements</h4>
                          <div className="space-y-2">
                            {advisor.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                                <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {advisor.areas_of_expertise && advisor.areas_of_expertise.length > 0 && (
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-3">Areas of Expertise</h4>
                          <div className="flex flex-wrap gap-2">
                            {advisor.areas_of_expertise.map((expertise, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                              >
                                {expertise}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {advisor.inspirational_message && (
                        <blockquote className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50 italic text-gray-700">
                          "{advisor.inspirational_message}"
                        </blockquote>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
