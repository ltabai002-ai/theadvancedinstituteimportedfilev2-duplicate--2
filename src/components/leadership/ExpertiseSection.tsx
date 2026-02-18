import { Lightbulb } from 'lucide-react';

interface ExpertiseSectionProps {
  expertise: string[];
  title?: string;
}

export default function ExpertiseSection({ expertise, title = "Areas of Expertise" }: ExpertiseSectionProps) {
  if (!expertise || expertise.length === 0) return null;

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
        <div className="flex flex-wrap gap-3">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full border border-blue-200"
            >
              <Lightbulb className="w-4 h-4" />
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
