import { BookOpen, Target, TrendingUp, Award, CheckCircle, ChevronDown } from 'lucide-react';

interface CurriculumMonth {
  month: number;
  phase: string;
  focusAreas: string[];
  activities: string[];
  milestones: string;
}

interface CourseRoadmapProps {
  curriculum: CurriculumMonth[];
  duration: string;
}

const phaseColors: Record<string, { bg: string; border: string; icon: string }> = {
  'Foundation Building': { bg: 'bg-blue-50', border: 'border-blue-500', icon: 'text-blue-600' },
  'Intermediate Mastery': { bg: 'bg-green-50', border: 'border-green-500', icon: 'text-green-600' },
  'Advanced Practice': { bg: 'bg-purple-50', border: 'border-purple-500', icon: 'text-purple-600' },
  'Final Sprint': { bg: 'bg-orange-50', border: 'border-orange-500', icon: 'text-orange-600' },
  'Tier 1 Foundation': { bg: 'bg-blue-50', border: 'border-blue-500', icon: 'text-blue-600' },
  'Tier 1 Advanced': { bg: 'bg-green-50', border: 'border-green-500', icon: 'text-green-600' },
  'Tier 2 Preparation': { bg: 'bg-purple-50', border: 'border-purple-500', icon: 'text-purple-600' },
  'Tier 3 & Interview': { bg: 'bg-orange-50', border: 'border-orange-500', icon: 'text-orange-600' },
  'Preliminary Phase': { bg: 'bg-blue-50', border: 'border-blue-500', icon: 'text-blue-600' },
  'Mains Phase': { bg: 'bg-green-50', border: 'border-green-500', icon: 'text-green-600' },
  'Interview Phase': { bg: 'bg-purple-50', border: 'border-purple-500', icon: 'text-purple-600' },
};

const getPhaseIcon = (phase: string) => {
  if (phase.includes('Foundation') || phase.includes('Preliminary')) return BookOpen;
  if (phase.includes('Advanced') || phase.includes('Mains')) return Target;
  if (phase.includes('Sprint') || phase.includes('Interview')) return Award;
  return TrendingUp;
};

export default function CourseRoadmap({ curriculum, duration }: CourseRoadmapProps) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-gray-900">Curriculum </span>
          <span className="text-[#004BB8]">Journey</span>
        </h2>
        <p className="text-gray-600">
          Follow our structured {duration} learning path designed specifically for exam requirements
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 to-orange-500 hidden sm:block" />

        <div className="space-y-8">
          {curriculum.map((month, index) => {
            const isEven = index % 2 === 0;
            const colors = phaseColors[month.phase] || phaseColors['Foundation Building'];
            const PhaseIcon = getPhaseIcon(month.phase);

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-4 md:gap-8`}
              >
                <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                  {isEven && (
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`${colors.bg} ${colors.border} border-2 rounded-full p-2`}>
                          <PhaseIcon className={`w-5 h-5 ${colors.icon}`} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">Month {month.month}</h3>
                          <p className={`text-sm font-semibold ${colors.icon}`}>{month.phase}</p>
                        </div>
                      </div>

                      <div className="space-y-3 text-left">
                        <div>
                          <p className="text-sm font-semibold text-gray-700 mb-1">Focus Areas:</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {month.focusAreas.map((area, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span>{area}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-gray-700 mb-1">Activities:</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {month.activities.map((activity, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className={`${colors.bg} rounded-lg p-3 mt-3`}>
                          <p className="text-xs font-semibold text-gray-700 mb-1">Milestone:</p>
                          <p className="text-sm text-gray-800">{month.milestones}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white border-4 border-primary rounded-full shadow-lg flex-shrink-0">
                  <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>

                <div className={`w-full md:w-5/12 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                  {!isEven && (
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`${colors.bg} ${colors.border} border-2 rounded-full p-2`}>
                          <PhaseIcon className={`w-5 h-5 ${colors.icon}`} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">Month {month.month}</h3>
                          <p className={`text-sm font-semibold ${colors.icon}`}>{month.phase}</p>
                        </div>
                      </div>

                      <div className="space-y-3 text-left">
                        <div>
                          <p className="text-sm font-semibold text-gray-700 mb-1">Focus Areas:</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {month.focusAreas.map((area, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span>{area}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-gray-700 mb-1">Activities:</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {month.activities.map((activity, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className={`${colors.bg} rounded-lg p-3 mt-3`}>
                          <p className="text-xs font-semibold text-gray-700 mb-1">Milestone:</p>
                          <p className="text-sm text-gray-800">{month.milestones}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
