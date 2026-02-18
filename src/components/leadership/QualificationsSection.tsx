import { GraduationCap } from 'lucide-react';

interface QualificationsSectionProps {
  qualifications: string[];
  experience?: string;
}

export default function QualificationsSection({ qualifications, experience }: QualificationsSectionProps) {
  if ((!qualifications || qualifications.length === 0) && !experience) return null;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {qualifications && qualifications.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <GraduationCap className="w-7 h-7 text-blue-600" />
                Qualifications
              </h2>
              <ul className="space-y-3">
                {qualifications.map((qual, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">{qual}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {experience && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h2>
              <p className="text-gray-700 leading-relaxed">{experience}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
