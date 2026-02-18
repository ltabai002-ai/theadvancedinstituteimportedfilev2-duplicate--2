import { Award } from 'lucide-react';

interface AchievementsListProps {
  achievements: string[];
  title?: string;
}

export default function AchievementsList({ achievements, title = "Key Achievements" }: AchievementsListProps) {
  if (!achievements || achievements.length === 0) return null;

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 mt-1">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-gray-700 flex-1">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
