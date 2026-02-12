import React from 'react';
import { HeroSection } from '@/components/ui/feature-carousel';

const FeatureCarouselDemo: React.FC = () => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=80',
      alt: 'Students collaborating in classroom',
    },
    {
      src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=900&auto=format&fit=crop&q=80',
      alt: 'Student studying with laptop',
    },
    {
      src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&auto=format&fit=crop&q=80',
      alt: 'Student taking notes in class',
    },
    {
      src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&auto=format&fit=crop&q=80',
      alt: 'Group study session',
    },
    {
      src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&auto=format&fit=crop&q=80',
      alt: 'Student reading book',
    },
  ];

  const title = (
    <>
      Transform Your{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
        Learning Journey
      </span>
    </>
  );

  return (
    <div className="w-full">
      <HeroSection
        title={title}
        subtitle="Join thousands of students who have achieved success with our expert-led government exam coaching programs. Explore our comprehensive courses for RRB NTPC, SSC CGL, SSC CHSL, and Banking exams."
        images={images}
      />
    </div>
  );
};

export default FeatureCarouselDemo;
