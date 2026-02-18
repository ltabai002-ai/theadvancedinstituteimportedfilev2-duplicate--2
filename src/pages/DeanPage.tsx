import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import Layout from '../components/Layout';
import ProfileHero from '../components/leadership/ProfileHero';
import BiographySection from '../components/leadership/BiographySection';
import QualificationsSection from '../components/leadership/QualificationsSection';
import AchievementsList from '../components/leadership/AchievementsList';
import ExpertiseSection from '../components/leadership/ExpertiseSection';
import Breadcrumbs from '../components/leadership/Breadcrumbs';

interface LeadershipProfile {
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

export default function DeanPage() {
  const [profile, setProfile] = useState<LeadershipProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data, error } = await supabase
          .from('leadership_profiles')
          .select('*')
          .eq('role', 'dean')
          .eq('is_active', true)
          .maybeSingle();

        if (error) throw error;
        if (data) setProfile(data);
      } catch (error) {
        console.error('Error fetching dean profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
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

  if (!profile) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-600">Profile not found</p>
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
          { label: 'Academic Dean' }
        ]}
      />

      <ProfileHero
        name={profile.name}
        designation={profile.designation}
        imageUrl={profile.image_url}
        quote={profile.inspirational_message}
        email={profile.email}
        phone={profile.phone}
        linkedinUrl={profile.linkedin_url}
      />

      <BiographySection content={profile.bio} />

      <QualificationsSection
        qualifications={profile.qualifications}
        experience={profile.experience}
      />

      <AchievementsList achievements={profile.achievements} />

      <ExpertiseSection expertise={profile.areas_of_expertise} />

      {profile.inspirational_message && (
        <section className="py-12 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Message from the Dean</h2>
            <blockquote className="text-xl text-gray-700 italic leading-relaxed">
              "{profile.inspirational_message}"
            </blockquote>
          </div>
        </section>
      )}
    </Layout>
  );
}
