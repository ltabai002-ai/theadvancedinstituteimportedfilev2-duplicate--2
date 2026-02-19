import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Clock,
  Users,
  BookOpen,
  CheckCircle2,
  Calendar,
  TrendingUp,
  Award,
  Target,
  FileText,
  ChevronDown,
  Play,
  Monitor,
  Wifi,
  Video,
  Laptop,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import LeadForm from '../components/LeadForm';
import CourseRoadmap from '../components/CourseRoadmap';
import { SpecialLectureCard } from '../components/SpecialLectureCard';
import { CallbackModal } from '../components/CallbackModal';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface CourseData {
  name: string;
  slug: string;
  duration: string;
  mode: string;
  batchSize: string;
  description: string;
  overview: string;
  logo?: string;
  backgroundImage?: string;
  highlights: string[];
  syllabus: {
    title: string;
    topics: string[];
  }[];
  examPattern?: {
    stage: string;
    sections: {
      name: string;
      questions: number;
      marks: number;
    }[];
    duration: string;
    total: {
      questions: number;
      marks: number;
    };
  }[];
  batchTimings: {
    day: string;
    time: string;
  }[];
  curriculum: {
    month: number;
    phase: string;
    focusAreas: string[];
    activities: string[];
    milestones: string;
  }[];
}

const coursesData: Record<string, CourseData> = {
  'rrb-ntpc': {
    name: 'RRB NTPC',
    slug: 'rrb-ntpc',
    duration: '6 Months',
    mode: 'Classroom + Online Support',
    batchSize: '20 Students',
    description: 'Comprehensive preparation program for Railway Recruitment Board Non-Technical Popular Categories exam',
    logo: '/indian-railways-logo.webp',
    backgroundImage: '/train-background.webp',
    overview: 'Our RRB NTPC program is designed to provide complete preparation for all stages of the examination. The course covers all sections including General Awareness, Mathematics, and General Intelligence & Reasoning with special focus on time management and accuracy.',
    highlights: [
      'Complete syllabus coverage for all stages',
      'Daily practice sessions with mock tests',
      'Previous 10 years question paper analysis',
      'Weekly full-length mock tests',
      'Personal doubt clearing sessions',
      'Printed study material + PDF access',
      'Online test series portal access',
      'Current affairs monthly updates'
    ],
    syllabus: [
      {
        title: 'General Awareness',
        topics: ['Current Affairs', 'Indian History', 'Geography', 'Indian Polity', 'Economics', 'Science & Technology']
      },
      {
        title: 'Mathematics',
        topics: ['Number System', 'Simplification', 'Percentage', 'Ratio & Proportion', 'Average', 'Time & Work', 'Time & Distance', 'Profit & Loss']
      },
      {
        title: 'General Intelligence & Reasoning',
        topics: ['Analogies', 'Coding-Decoding', 'Blood Relations', 'Series', 'Syllogism', 'Direction Sense', 'Puzzles']
      }
    ],
    examPattern: [
      {
        stage: 'CBT 1 (Expected)',
        sections: [
          { name: 'Mathematics', questions: 30, marks: 30 },
          { name: 'General Intelligence and Reasoning', questions: 30, marks: 30 },
          { name: 'General Awareness', questions: 40, marks: 40 }
        ],
        duration: '90 minutes',
        total: { questions: 100, marks: 100 }
      },
      {
        stage: 'CBT 2 (Expected)',
        sections: [
          { name: 'Mathematics', questions: 35, marks: 35 },
          { name: 'General Intelligence and Reasoning', questions: 35, marks: 35 },
          { name: 'General Awareness', questions: 50, marks: 50 }
        ],
        duration: '90 minutes',
        total: { questions: 120, marks: 120 }
      }
    ],
    batchTimings: [
      { day: 'Monday, Wednesday, Friday', time: '6:00 AM - 8:00 AM' },
      { day: 'Monday, Wednesday, Friday', time: '6:00 PM - 8:00 PM' },
      { day: 'Tuesday, Thursday, Saturday', time: '9:00 AM - 11:00 AM' }
    ],
    curriculum: [
      {
        month: 1,
        phase: 'Foundation Building',
        focusAreas: ['Basic Mathematics concepts', 'Fundamental Reasoning skills', 'General Awareness basics'],
        activities: ['Daily practice sessions', 'Topic-wise tests', 'Concept clarity workshops'],
        milestones: 'Complete foundation topics in all three subjects'
      },
      {
        month: 2,
        phase: 'Foundation Building',
        focusAreas: ['Advanced Number System', 'Analytical Reasoning', 'Indian History & Geography'],
        activities: ['Weekly mock tests', 'Previous year paper analysis', 'Speed building exercises'],
        milestones: 'Achieve 60% accuracy in foundation level tests'
      },
      {
        month: 3,
        phase: 'Intermediate Mastery',
        focusAreas: ['Time & Work problems', 'Complex puzzles', 'Current Affairs integration'],
        activities: ['Full-length mock tests', 'Error analysis sessions', 'Time management training'],
        milestones: 'Complete CBT 1 syllabus coverage and achieve 70% accuracy'
      },
      {
        month: 4,
        phase: 'Intermediate Mastery',
        focusAreas: ['Advanced Mathematics', 'High-level Reasoning', 'Polity & Economics'],
        activities: ['CBT 2 level practice', 'Sectional mock tests', 'Revision of completed topics'],
        milestones: 'Master advanced concepts and reach 75% accuracy'
      },
      {
        month: 5,
        phase: 'Advanced Practice',
        focusAreas: ['Speed accuracy balance', 'Exam pattern familiarization', 'Weak area improvement'],
        activities: ['Daily full-length mocks', 'Performance analysis', 'Strategy refinement'],
        milestones: 'Consistent 80%+ accuracy in mock tests'
      },
      {
        month: 6,
        phase: 'Final Sprint',
        focusAreas: ['Complete revision', 'Last minute tips', 'Exam day strategy'],
        activities: ['Final mock tests', 'Quick revision notes', 'Mental preparation sessions'],
        milestones: 'Exam ready with 85%+ target accuracy'
      }
    ]
  },
  'ssc-cgl': {
    name: 'SSC CGL',
    slug: 'ssc-cgl',
    duration: '6 + 3 Months',
    mode: 'Classroom Only',
    batchSize: '20 Students',
    description: 'Intensive coaching for Staff Selection Commission Combined Graduate Level examination',
    logo: '/ssc-logo.webp',
    backgroundImage: '/ssc-headquarters.webp',
    overview: 'Our SSC CGL program offers comprehensive preparation for all four tiers of the examination. With dedicated modules for each tier and specialized coaching for descriptive paper, we ensure holistic development of all skills required to crack this prestigious exam.',
    highlights: [
      'Tier-wise structured preparation',
      'Quantitative Aptitude mastery program',
      'English Language skill development',
      'Descriptive paper writing practice',
      'Statistical analysis of performance',
      'Interview and personality development',
      'Complete study material for all tiers',
      'Daily vocabulary building sessions'
    ],
    syllabus: [
      {
        title: 'Tier 1 - General Intelligence & Reasoning',
        topics: ['Analogies', 'Similarities', 'Differences', 'Problem Solving', 'Analysis', 'Judgment', 'Decision Making']
      },
      {
        title: 'Tier 1 - General Awareness',
        topics: ['Current Events', 'History', 'Culture', 'Geography', 'Economic Scene', 'General Policy', 'Scientific Research']
      },
      {
        title: 'Tier 1 - Quantitative Aptitude',
        topics: ['Number Systems', 'Computation', 'Percentages', 'Ratio & Proportion', 'Averages', 'Interest', 'Geometry', 'Mensuration']
      },
      {
        title: 'Tier 1 - English Comprehension',
        topics: ['Reading Comprehension', 'Grammar', 'Vocabulary', 'Synonyms & Antonyms', 'Sentence Correction', 'Error Spotting']
      },
      {
        title: 'Tier 2 - Paper I & II',
        topics: ['Advanced Quantitative Aptitude', 'Advanced English Language', 'Statistics (for specific posts)']
      },
      {
        title: 'Tier 3 - Descriptive Paper',
        topics: ['Essay Writing', 'Letter Writing', 'Precis Writing', 'Application Writing']
      }
    ],
    examPattern: [
      {
        stage: 'Tier 1',
        sections: [
          { name: 'General Intelligence and Reasoning', questions: 25, marks: 50 },
          { name: 'General Awareness', questions: 25, marks: 50 },
          { name: 'Quantitative Aptitude', questions: 25, marks: 50 },
          { name: 'English Comprehension', questions: 25, marks: 50 }
        ],
        duration: '60 minutes',
        total: { questions: 100, marks: 200 }
      },
      {
        stage: 'Tier 2 - Paper I (Quantitative Aptitude)',
        sections: [
          { name: 'Quantitative Aptitude', questions: 100, marks: 200 }
        ],
        duration: '120 minutes',
        total: { questions: 100, marks: 200 }
      },
      {
        stage: 'Tier 2 - Paper II (English Language)',
        sections: [
          { name: 'English Language and Comprehension', questions: 200, marks: 200 }
        ],
        duration: '120 minutes',
        total: { questions: 200, marks: 200 }
      },
      {
        stage: 'Tier 3 (Descriptive Paper)',
        sections: [
          { name: 'Essay Writing / Letter Writing / Application Writing', questions: 1, marks: 100 }
        ],
        duration: '60 minutes',
        total: { questions: 1, marks: 100 }
      }
    ],
    batchTimings: [
      { day: 'Monday to Friday', time: '8:00 AM - 10:00 AM' },
      { day: 'Monday to Friday', time: '5:00 PM - 7:00 PM' },
      { day: 'Weekend Batch (Sat-Sun)', time: '10:00 AM - 2:00 PM' }
    ],
    curriculum: [
      {
        month: 1,
        phase: 'Tier 1 Foundation',
        focusAreas: ['Basic Quantitative Aptitude', 'Grammar fundamentals', 'Reasoning basics'],
        activities: ['Daily class sessions', 'Topic-wise assignments', 'Weekly tests'],
        milestones: 'Build strong foundation in all four subjects'
      },
      {
        month: 2,
        phase: 'Tier 1 Foundation',
        focusAreas: ['Number systems mastery', 'Reading comprehension', 'Logical reasoning'],
        activities: ['Practice worksheets', 'Vocabulary building', 'Current affairs updates'],
        milestones: 'Complete 40% of Tier 1 syllabus'
      },
      {
        month: 3,
        phase: 'Tier 1 Foundation',
        focusAreas: ['Geometry & Mensuration', 'Error spotting', 'General awareness'],
        activities: ['Mock test series begins', 'Error analysis', 'Speed enhancement drills'],
        milestones: 'Achieve 65% accuracy in Tier 1 practice tests'
      },
      {
        month: 4,
        phase: 'Tier 1 Advanced',
        focusAreas: ['Advanced QA problems', 'Sentence improvement', 'Static GK coverage'],
        activities: ['Full-length Tier 1 mocks', 'Performance tracking', 'Doubt clearing sessions'],
        milestones: 'Complete Tier 1 syllabus and reach 75% accuracy'
      },
      {
        month: 5,
        phase: 'Tier 1 Advanced',
        focusAreas: ['High-difficulty questions', 'Cloze test mastery', 'Current affairs mastery'],
        activities: ['Daily mock tests', 'Time management training', 'Strategy workshops'],
        milestones: 'Consistent 80%+ scores in Tier 1 mocks'
      },
      {
        month: 6,
        phase: 'Tier 1 Advanced',
        focusAreas: ['Revision and practice', 'Weak area improvement', 'Exam strategy'],
        activities: ['Final Tier 1 mocks', 'Quick revision', 'Mental preparation'],
        milestones: 'Tier 1 exam ready with target 85%+ accuracy'
      },
      {
        month: 7,
        phase: 'Tier 2 Preparation',
        focusAreas: ['Advanced Quantitative Aptitude', 'Advanced English', 'Statistics basics'],
        activities: ['Tier 2 mock tests', 'In-depth concept coverage', 'Previous year analysis'],
        milestones: 'Complete 50% of Tier 2 syllabus'
      },
      {
        month: 8,
        phase: 'Tier 2 Preparation',
        focusAreas: ['Complex QA problems', 'Comprehension mastery', 'Statistics for specific posts'],
        activities: ['Tier 2 full-length mocks', 'Speed and accuracy drills', 'Performance analysis'],
        milestones: 'Tier 2 ready with 75%+ accuracy'
      },
      {
        month: 9,
        phase: 'Tier 3 & Interview',
        focusAreas: ['Essay writing', 'Letter writing', 'Interview skills'],
        activities: ['Descriptive paper practice', 'Mock interviews', 'Personality development'],
        milestones: 'Complete preparation for all tiers'
      }
    ]
  },
  'ssc-chsl': {
    name: 'SSC CHSL',
    slug: 'ssc-chsl',
    duration: '6 Months',
    mode: 'Classroom Only',
    batchSize: '20 Students',
    description: 'Structured program for Staff Selection Commission Combined Higher Secondary Level exam',
    logo: '/ssc-logo.webp',
    backgroundImage: '/ssc-chsl-background.webp',
    overview: 'Our SSC CHSL program focuses on building strong fundamentals and enhancing speed with accuracy. The course is designed for 10+2 level preparation with special emphasis on time management and exam strategy.',
    highlights: [
      'Foundation to advanced level preparation',
      'Speed and accuracy training modules',
      'Weekly assessment tests',
      'Typing test preparation',
      'Previous year papers practice',
      'Tier-wise mock test series',
      'Skill test preparation (LDC/DEO)',
      'Personal performance tracking'
    ],
    syllabus: [
      {
        title: 'English Language',
        topics: ['Reading Comprehension', 'Vocabulary', 'Grammar', 'Verb', 'Tenses', 'Articles', 'Fill in the Blanks', 'Synonyms & Antonyms']
      },
      {
        title: 'General Intelligence',
        topics: ['Analogies', 'Coding-Decoding', 'Series', 'Classification', 'Blood Relations', 'Direction Sense', 'Syllogism', 'Venn Diagrams']
      },
      {
        title: 'Quantitative Aptitude',
        topics: ['Number System', 'Simplification', 'Percentage', 'Ratio & Proportion', 'Average', 'Interest', 'Profit & Loss', 'Time & Work']
      },
      {
        title: 'General Awareness',
        topics: ['Current Affairs', 'Static GK', 'Indian History', 'Geography', 'Economics', 'Polity', 'Science']
      }
    ],
    examPattern: [
      {
        stage: 'Tier 1 (Computer Based Examination)',
        sections: [
          { name: 'English Language', questions: 50, marks: 100 },
          { name: 'General Intelligence', questions: 50, marks: 100 },
          { name: 'Quantitative Aptitude', questions: 50, marks: 100 },
          { name: 'General Awareness', questions: 50, marks: 100 }
        ],
        duration: '60 minutes',
        total: { questions: 200, marks: 400 }
      },
      {
        stage: 'Tier 2 (Descriptive Paper)',
        sections: [
          { name: 'Essay Writing', questions: 1, marks: 50 },
          { name: 'Letter/Application Writing', questions: 1, marks: 50 }
        ],
        duration: '60 minutes',
        total: { questions: 2, marks: 100 }
      },
      {
        stage: 'Tier 3 (Skill Test)',
        sections: [
          { name: 'Typing Test (English) - 35 WPM', questions: 1, marks: 0 },
          { name: 'Typing Test (Hindi) - 30 WPM', questions: 1, marks: 0 }
        ],
        duration: '10 minutes',
        total: { questions: 1, marks: 0 }
      }
    ],
    batchTimings: [
      { day: 'Monday, Wednesday, Friday', time: '7:00 AM - 9:00 AM' },
      { day: 'Tuesday, Thursday, Saturday', time: '5:00 PM - 7:00 PM' },
      { day: 'Weekend Batch (Sat-Sun)', time: '3:00 PM - 6:00 PM' }
    ],
    curriculum: [
      {
        month: 1,
        phase: 'Foundation Building',
        focusAreas: ['Basic English grammar', 'Fundamental Mathematics', 'Basic Reasoning'],
        activities: ['Daily class sessions', 'Practice exercises', 'Weekly assessments'],
        milestones: 'Build strong foundation for 10+2 level preparation'
      },
      {
        month: 2,
        phase: 'Foundation Building',
        focusAreas: ['Vocabulary building', 'Quantitative Aptitude basics', 'General Awareness'],
        activities: ['Reading comprehension practice', 'Speed math drills', 'Current affairs classes'],
        milestones: 'Complete 40% syllabus with 60% accuracy'
      },
      {
        month: 3,
        phase: 'Intermediate Mastery',
        focusAreas: ['Advanced English topics', 'Complex QA problems', 'Analytical reasoning'],
        activities: ['Mock test series begins', 'Error analysis sessions', 'Typing test practice'],
        milestones: 'Achieve 70% accuracy in mock tests'
      },
      {
        month: 4,
        phase: 'Intermediate Mastery',
        focusAreas: ['Speed and accuracy', 'All subjects revision', 'Weak area focus'],
        activities: ['Full-length mock tests', 'Sectional tests', 'Time management training'],
        milestones: 'Complete syllabus and reach 75% accuracy'
      },
      {
        month: 5,
        phase: 'Advanced Practice',
        focusAreas: ['High-difficulty questions', 'Exam pattern mastery', 'Typing speed enhancement'],
        activities: ['Daily full-length mocks', 'Performance analysis', 'Skill test preparation'],
        milestones: 'Consistent 80%+ accuracy in all subjects'
      },
      {
        month: 6,
        phase: 'Final Sprint',
        focusAreas: ['Complete revision', 'Quick tips and tricks', 'Exam strategy'],
        activities: ['Final mock tests', 'Revision sessions', 'Mental preparation'],
        milestones: 'Exam ready with 85%+ target accuracy'
      }
    ]
  },
  'banking': {
    name: 'Banking Exams',
    slug: 'banking',
    duration: '6 Months',
    mode: 'Classroom Only',
    batchSize: '20 Students',
    description: 'Complete banking exam preparation covering IBPS PO, Clerk, SBI, and RBI exams',
    logo: '/banking-logo.webp',
    backgroundImage: '/banking-background.webp',
    overview: 'Our Banking Exams program provides comprehensive preparation for all major banking examinations including IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, and RBI Grade B. The course includes specialized modules for banking awareness, financial awareness, and interview preparation.',
    highlights: [
      'Coverage of IBPS PO, Clerk, SBI, RBI exams',
      'Banking and financial awareness classes',
      'Computer knowledge modules',
      'Interview preparation and mock interviews',
      'Current affairs daily updates',
      'Group discussion practice',
      'Descriptive test preparation',
      'Sector-specific knowledge building'
    ],
    syllabus: [
      {
        title: 'Reasoning Ability',
        topics: ['Puzzles & Seating Arrangement', 'Syllogism', 'Blood Relations', 'Coding-Decoding', 'Inequality', 'Data Sufficiency']
      },
      {
        title: 'Quantitative Aptitude',
        topics: ['Data Interpretation', 'Number Series', 'Simplification', 'Quadratic Equations', 'Data Sufficiency', 'Arithmetic Problems']
      },
      {
        title: 'English Language',
        topics: ['Reading Comprehension', 'Cloze Test', 'Error Spotting', 'Para Jumbles', 'Sentence Improvement', 'Vocabulary']
      },
      {
        title: 'Banking & Financial Awareness',
        topics: ['Banking Terms', 'RBI Functions', 'Banking Regulations', 'Government Schemes', 'Budget', 'Economic Survey', 'International Banking']
      },
      {
        title: 'Computer Knowledge',
        topics: ['Computer Basics', 'MS Office', 'Internet', 'Networking', 'Database', 'Computer Security']
      }
    ],
    examPattern: [
      {
        stage: 'Preliminary Examination',
        sections: [
          { name: 'English Language', questions: 30, marks: 30 },
          { name: 'Quantitative Aptitude', questions: 35, marks: 35 },
          { name: 'Reasoning Ability', questions: 35, marks: 35 }
        ],
        duration: '60 minutes',
        total: { questions: 100, marks: 100 }
      },
      {
        stage: 'Mains Examination',
        sections: [
          { name: 'Reasoning & Computer Aptitude', questions: 45, marks: 60 },
          { name: 'General/Economy/Banking Awareness', questions: 40, marks: 40 },
          { name: 'English Language', questions: 35, marks: 40 },
          { name: 'Data Analysis & Interpretation', questions: 35, marks: 60 }
        ],
        duration: '180 minutes',
        total: { questions: 155, marks: 200 }
      },
      {
        stage: 'Descriptive Test (Mains)',
        sections: [
          { name: 'Essay Writing', questions: 1, marks: 25 },
          { name: 'Letter Writing', questions: 1, marks: 25 }
        ],
        duration: '30 minutes',
        total: { questions: 2, marks: 50 }
      }
    ],
    batchTimings: [
      { day: 'Monday to Friday', time: '6:00 AM - 8:00 AM' },
      { day: 'Monday to Friday', time: '6:00 PM - 8:00 PM' },
      { day: 'Weekend Batch (Sat-Sun)', time: '9:00 AM - 1:00 PM' }
    ],
    curriculum: [
      {
        month: 1,
        phase: 'Preliminary Phase',
        focusAreas: ['Basic Reasoning Ability', 'Quantitative Aptitude foundation', 'English Language basics'],
        activities: ['Daily class sessions', 'Banking terminology', 'Practice worksheets'],
        milestones: 'Build foundation for banking exams'
      },
      {
        month: 2,
        phase: 'Preliminary Phase',
        focusAreas: ['Puzzles & Seating', 'Data Interpretation', 'Reading comprehension'],
        activities: ['Prelims mock tests', 'Banking awareness classes', 'Speed building drills'],
        milestones: 'Complete 50% preliminary syllabus with 65% accuracy'
      },
      {
        month: 3,
        phase: 'Preliminary Phase',
        focusAreas: ['Advanced reasoning', 'Complex DI problems', 'English mastery'],
        activities: ['Full-length prelims mocks', 'Computer knowledge', 'Current affairs updates'],
        milestones: 'Prelims exam ready with 75%+ accuracy'
      },
      {
        month: 4,
        phase: 'Mains Phase',
        focusAreas: ['Advanced Reasoning', 'High-level Quantitative', 'Descriptive English'],
        activities: ['Mains mock tests', 'Banking & Financial Awareness', 'Essay writing practice'],
        milestones: 'Complete 50% mains syllabus'
      },
      {
        month: 5,
        phase: 'Mains Phase',
        focusAreas: ['Complex problem solving', 'Data sufficiency', 'Letter & essay writing'],
        activities: ['Full-length mains mocks', 'Computer knowledge deep dive', 'Performance analysis'],
        milestones: 'Mains ready with 70%+ accuracy'
      },
      {
        month: 6,
        phase: 'Interview Phase',
        focusAreas: ['Interview skills', 'Group discussion', 'Final revision'],
        activities: ['Mock interviews', 'GD practice', 'Personality development'],
        milestones: 'Complete preparation for all stages including interview'
      }
    ]
  },
  'adre': {
    name: 'ADRE (Assam Direct Recruitment Examination)',
    slug: 'adre',
    duration: '6 Months',
    mode: 'Classroom Only',
    batchSize: '20 Students',
    description: 'Complete preparation for Assam Direct Recruitment Examination with focus on Assam-specific topics',
    logo: '/ssc-logo.webp',
    backgroundImage: '/ssc-headquarters.webp',
    overview: 'Our ADRE program provides comprehensive preparation for the Assam Direct Recruitment Examination conducted by the State Level Recruitment Commission (SLRC), Assam. The course covers all aspects of the exam with special emphasis on Assam-specific General Knowledge, History, Culture, Geography, and Current Affairs. We prepare students for various Grade III and Grade IV posts under the Government of Assam.',
    highlights: [
      'Comprehensive coverage of Assam-specific topics',
      'Expert faculty with knowledge of Assam history and culture',
      'Focus on Assamese language and literature',
      'Daily current affairs updates (National & State)',
      'Complete syllabus coverage for all subjects',
      'Regular mock tests based on actual exam pattern',
      'Study materials in English and Assamese',
      'Remedial classes for weak areas'
    ],
    syllabus: [
      {
        title: 'General Knowledge (Assam Focus)',
        topics: ['History of Assam', 'Geography of Assam', 'Culture and Heritage of Assam', 'Economy of Assam', 'Polity and Governance of Assam', 'Important Personalities of Assam', 'Rivers, Wildlife Sanctuaries and National Parks', 'Festivals and Traditions']
      },
      {
        title: 'Indian History & Culture',
        topics: ['Ancient India', 'Medieval India', 'Modern India', 'Freedom Struggle', 'Art and Culture', 'Indian Heritage Sites', 'Social Reform Movements', 'Post-Independence India']
      },
      {
        title: 'Indian Polity & Governance',
        topics: ['Constitution of India', 'Fundamental Rights and Duties', 'Union and State Government', 'Local Self Government', 'Panchayati Raj', 'Electoral System', 'Judiciary', 'Important Constitutional Amendments']
      },
      {
        title: 'Geography (India & Assam)',
        topics: ['Physical Geography of India', 'Climate and Vegetation', 'Natural Resources', 'Geography of Assam', 'Agricultural Patterns', 'Industrial Development', 'Transportation and Communication', 'Environmental Issues']
      },
      {
        title: 'Indian Economy',
        topics: ['Basic Economic Concepts', 'Indian Economic Development', 'Banking and Finance', 'Budget and Planning', 'Economic Reforms', 'Agriculture and Rural Development', 'Industrial Policy', 'Government Schemes']
      },
      {
        title: 'General Science',
        topics: ['Physics Basics', 'Chemistry Fundamentals', 'Biology and Life Sciences', 'Environmental Science', 'Scientific Discoveries', 'Health and Diseases', 'Technology and Innovation', 'Space Science']
      },
      {
        title: 'Current Affairs',
        topics: ['National Current Affairs', 'Assam State Affairs', 'International Events', 'Sports and Awards', 'Government Policies and Schemes', 'Economic Updates', 'Science and Technology News', 'Appointments and Summits']
      },
      {
        title: 'Quantitative Aptitude',
        topics: ['Number System', 'Percentages', 'Ratio and Proportion', 'Time and Work', 'Time and Distance', 'Simple and Compound Interest', 'Profit and Loss', 'Data Interpretation']
      },
      {
        title: 'Reasoning Ability',
        topics: ['Verbal Reasoning', 'Non-Verbal Reasoning', 'Logical Reasoning', 'Analytical Reasoning', 'Blood Relations', 'Coding-Decoding', 'Series Completion', 'Direction Sense']
      }
    ],
    examPattern: [
      {
        stage: 'Written Examination',
        sections: [
          { name: 'General Knowledge (including Assam)', questions: 40, marks: 40 },
          { name: 'General Science', questions: 20, marks: 20 },
          { name: 'Quantitative Aptitude', questions: 20, marks: 20 },
          { name: 'Reasoning Ability', questions: 20, marks: 20 }
        ],
        duration: '120 minutes',
        total: { questions: 100, marks: 100 },
        negativeMarking: '0.25 marks deducted for each wrong answer'
      }
    ],
    batchTimings: [
      { day: 'Monday to Friday', time: '6:00 AM - 8:00 AM' },
      { day: 'Monday to Friday', time: '6:00 PM - 8:00 PM' },
      { day: 'Weekend Batch (Sat-Sun)', time: '9:00 AM - 1:00 PM' }
    ],
    curriculum: [
      {
        month: 1,
        phase: 'Foundation Building',
        focusAreas: ['Assam History and Culture basics', 'Indian Polity fundamentals', 'Basic Quantitative Aptitude'],
        activities: ['Daily class sessions', 'Introduction to Assam GK', 'Weekly practice tests'],
        milestones: 'Build strong foundation in Assam-specific topics with 60% accuracy'
      },
      {
        month: 2,
        phase: 'Foundation Building',
        focusAreas: ['Geography of Assam and India', 'General Science concepts', 'Reasoning Ability basics'],
        activities: ['Topic-wise tests', 'Current affairs updates', 'Study material distribution'],
        milestones: 'Complete 40% syllabus with 65% accuracy in tests'
      },
      {
        month: 3,
        phase: 'Intermediate Mastery',
        focusAreas: ['Indian Economy and Assam Economy', 'Advanced Quantitative problems', 'Indian History in depth'],
        activities: ['Full-length mock tests', 'Assam current affairs special sessions', 'Doubt clearing sessions'],
        milestones: 'Complete 60% syllabus with 70% target accuracy'
      },
      {
        month: 4,
        phase: 'Intermediate Mastery',
        focusAreas: ['Advanced Reasoning', 'Constitutional framework', 'Assam Culture and Heritage deep dive'],
        activities: ['Subject-wise revision tests', 'Previous year paper analysis', 'Performance tracking'],
        milestones: 'Complete 80% syllabus with 75% accuracy'
      },
      {
        month: 5,
        phase: 'Advanced Practice',
        focusAreas: ['Complete current affairs revision', 'Speed and accuracy building', 'Weak area strengthening'],
        activities: ['Daily mock tests', 'Time management workshops', 'Remedial classes'],
        milestones: 'Complete syllabus with 80%+ accuracy in mocks'
      },
      {
        month: 6,
        phase: 'Final Sprint',
        focusAreas: ['Complete revision of all subjects', 'Exam strategy and tips', 'Last-minute preparation'],
        activities: ['Full-length final mocks', 'Quick revision sessions', 'Mental preparation and counseling'],
        milestones: 'Exam ready with 85%+ target accuracy and complete confidence'
      }
    ]
  }
};

export default function CourseDetailPage() {
  const { courseSlug } = useParams<{ courseSlug: string }>();
  const [openSection, setOpenSection] = useState<number | null>(0);
  const [specialLectures, setSpecialLectures] = useState<any[]>([]);
  const [showCallbackModal, setShowCallbackModal] = useState(false);
  const [selectedLecture, setSelectedLecture] = useState<any>(null);

  useEffect(() => {
    fetchSpecialLectures();
  }, []);

  const fetchSpecialLectures = async () => {
    try {
      const { data, error } = await supabase
        .from('special_lectures')
        .select('*')
        .eq('is_upcoming', true)
        .order('lecture_date', { ascending: true })
        .limit(3);

      if (error) throw error;
      setSpecialLectures(data || []);
    } catch (error) {
      console.error('Error fetching special lectures:', error);
    }
  };

  const handleRegisterClick = (lecture: any) => {
    setSelectedLecture(lecture);
    setShowCallbackModal(true);
  };

  if (!courseSlug || !coursesData[courseSlug]) {
    return <Navigate to="/courses" replace />;
  }

  const course = coursesData[courseSlug];

  return (
    <div>
      <section
        className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-20 relative overflow-hidden"
        style={
          course.backgroundImage
            ? {
                backgroundImage: `url(${course.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: courseSlug === 'banking' ? 'left center' : 'center',
                backgroundRepeat: 'no-repeat'
              }
            : undefined
        }
      >
        {course.backgroundImage && (
          <div className="absolute inset-0 bg-black/50 z-0" />
        )}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={course.backgroundImage ? { textShadow: '2px 2px 8px rgba(0,0,0,0.7)' } : undefined}>{course.name}</h1>
            {courseSlug === 'rrb-ntpc' && (
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg mb-4">
                <Wifi className="w-5 h-5" />
                <span>Online Classes Available</span>
              </div>
            )}
            <p className="text-xl text-blue-50 mb-8" style={course.backgroundImage ? { textShadow: '2px 2px 8px rgba(0,0,0,0.7)' } : undefined}>{course.description}</p>
            <div className="flex flex-wrap justify-center gap-6" style={course.backgroundImage ? { textShadow: '2px 2px 8px rgba(0,0,0,0.7)' } : undefined}>
              <div className="flex items-center space-x-2">
                <Clock className="w-6 h-6" style={course.backgroundImage ? { filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.7))' } : undefined} />
                <span className="font-semibold">{course.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6" style={course.backgroundImage ? { filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.7))' } : undefined} />
                <span className="font-semibold">Max {course.batchSize}</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-6 h-6" style={course.backgroundImage ? { filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.7))' } : undefined} />
                <span className="font-semibold">{course.mode}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              {/* Video Section */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">Course Introduction</h2>
                <div
                  className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-gray-300"
                  style={
                    course.backgroundImage
                      ? {
                          backgroundImage: `url(${course.backgroundImage})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat'
                        }
                      : {
                          background: 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)'
                        }
                  }
                >
                  {/* 16:9 Aspect Ratio Container */}
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    {/* Overlay for better contrast */}
                    {course.backgroundImage && (
                      <div className="absolute inset-0 bg-black/50 z-0" />
                    )}

                    {/* YouTube Video Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      {/* Replace the src below with your YouTube embed URL */}
                      {/* <iframe
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                        title="Course Introduction Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe> */}

                      {/* Placeholder Content - Remove when adding actual video */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                        {course.logo ? (
                          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6 shadow-2xl p-4">
                            <img
                              src={course.logo}
                              alt={`${course.name} logo`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ) : (
                          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4 shadow-xl">
                            <Play className="w-10 h-10 text-white ml-1" fill="white" />
                          </div>
                        )}
                        <h3 className={`text-2xl font-bold mb-2 ${course.backgroundImage ? 'text-white' : 'text-gray-800'}`} style={course.backgroundImage ? { textShadow: '2px 2px 8px rgba(0,0,0,0.7)' } : undefined}>Course Introduction Video</h3>
                        <p className={`max-w-md ${course.backgroundImage ? 'text-gray-100' : 'text-gray-600'}`} style={course.backgroundImage ? { textShadow: '1px 1px 4px rgba(0,0,0,0.7)' } : undefined}>
                          Watch this video to learn more about the course structure, benefits, and what you'll achieve
                        </p>
                        <div className="mt-6 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-md">
                          <p className="text-sm text-gray-700 font-mono">
                            Add your YouTube video here
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center md:text-left">Course Overview</h2>
                <p className="text-gray-700 leading-relaxed text-center md:text-left">{course.overview}</p>
              </div>

              {courseSlug === 'rrb-ntpc' && (
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 border-2 border-teal-200">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-teal-600 p-3 rounded-full">
                      <Monitor className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Online Learning Features</h2>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    This course includes comprehensive online support, giving you the flexibility to learn from anywhere while maintaining the quality of classroom instruction.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-5 shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="bg-teal-100 p-3 rounded-lg">
                          <Video className="w-6 h-6 text-teal-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">Live & Recorded Sessions</h3>
                          <p className="text-sm text-gray-600">
                            Attend live classes online and access recorded lectures anytime for revision
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="bg-teal-100 p-3 rounded-lg">
                          <Laptop className="w-6 h-6 text-teal-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">Online Test Portal</h3>
                          <p className="text-sm text-gray-600">
                            Take mock tests online with instant results and performance analysis
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="bg-teal-100 p-3 rounded-lg">
                          <FileText className="w-6 h-6 text-teal-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">Digital Study Materials</h3>
                          <p className="text-sm text-gray-600">
                            Access comprehensive PDF study materials and notes from any device
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="bg-teal-100 p-3 rounded-lg">
                          <Users className="w-6 h-6 text-teal-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">Online Doubt Clearing</h3>
                          <p className="text-sm text-gray-600">
                            Get your questions answered through dedicated online doubt clearing sessions
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
                  <span className="text-gray-900">Course </span>
                  <span className="text-[#004BB8]">Highlights</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#004BB8] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">Detailed Syllabus</h2>
                <div className="space-y-3">
                  {course.syllabus.map((section, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setOpenSection(openSection === index ? null : index)}
                        className={`w-full px-6 py-4 transition-colors flex justify-between items-center text-left ${
                          openSection === index ? 'bg-[#1D4ED8] text-white' : 'bg-white hover:bg-[#004BB8]/5'
                        }`}
                      >
                        <span className={`font-semibold ${openSection === index ? 'text-white' : 'text-gray-900'}`}>{section.title}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            openSection === index ? 'rotate-180 text-white' : 'text-gray-500'
                          }`}
                        />
                      </button>
                      {openSection === index && (
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                          <div className="grid md:grid-cols-2 gap-2">
                            {section.topics.map((topic, topicIndex) => (
                              <div key={topicIndex} className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span className="text-gray-700 text-sm">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {course.examPattern && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">Exam Pattern</h2>
                  {courseSlug === 'rrb-ntpc' && (
                    <p className="text-gray-700 mb-6 text-sm md:text-base text-center md:text-left">
                      The RRB NTPC 2025-26 exam will be conducted in two stages: Stage 1 (Preliminary) and Stage 2 (Main).
                      The RRB NTPC Stage 1 and Stage 2 have the same syllabus, but the exam pattern is different.
                    </p>
                  )}
                  {courseSlug === 'ssc-cgl' && (
                    <p className="text-gray-700 mb-6 text-sm md:text-base text-center md:text-left">
                      The SSC CGL exam is conducted in four tiers. Tier 1 and Tier 2 are computer-based exams,
                      Tier 3 is a descriptive paper (pen and paper mode), and Tier 4 includes skill tests.
                    </p>
                  )}
                  {courseSlug === 'ssc-chsl' && (
                    <p className="text-gray-700 mb-6 text-sm md:text-base text-center md:text-left">
                      The SSC CHSL exam is conducted in three tiers. Tier 1 is a computer-based exam,
                      Tier 2 is a descriptive paper, and Tier 3 is a skill test (typing test).
                    </p>
                  )}
                  {courseSlug === 'banking' && (
                    <p className="text-gray-700 mb-6 text-sm md:text-base text-center md:text-left">
                      Banking exams (IBPS/SBI) are typically conducted in two stages: Preliminary and Mains.
                      The preliminary exam is a qualifying exam, while mains includes both objective and descriptive papers.
                    </p>
                  )}
                  <div className="space-y-6 md:space-y-8">
                    {course.examPattern.map((pattern, index) => (
                      <div key={index} className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-primary text-white px-3 py-2 md:px-6 md:py-3">
                          <h3 className="text-sm md:text-xl font-bold">
                            {course.name} Exam Pattern {pattern.stage}
                          </h3>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-xs md:text-base">
                            <thead>
                              <tr className="bg-orange-400 text-black">
                                <th className="px-2 py-2 md:px-6 md:py-3 text-left font-bold border-r border-orange-500">Sections</th>
                                <th className="px-2 py-2 md:px-6 md:py-3 text-center font-bold border-r border-orange-500">No. of Questions</th>
                                <th className="px-2 py-2 md:px-6 md:py-3 text-center font-bold border-r border-orange-500">Total Marks</th>
                                <th className="px-2 py-2 md:px-6 md:py-3 text-center font-bold">Duration</th>
                              </tr>
                            </thead>
                            <tbody>
                              {pattern.sections.map((section, sectionIndex) => (
                                <tr key={sectionIndex} className="border-b border-gray-200">
                                  <td className="px-2 py-2 md:px-6 md:py-4 border-r border-gray-200">{section.name}</td>
                                  <td className="px-2 py-2 md:px-6 md:py-4 border-r border-gray-200 text-center">{section.questions}</td>
                                  <td className="px-2 py-2 md:px-6 md:py-4 border-r border-gray-200 text-center">{section.marks}</td>
                                  {sectionIndex === 0 && (
                                    <td
                                      className="px-2 py-2 md:px-6 md:py-4 text-center align-middle"
                                      rowSpan={pattern.sections.length}
                                    >
                                      {pattern.duration}
                                    </td>
                                  )}
                                </tr>
                              ))}
                              <tr className="bg-gray-50 font-bold">
                                <td className="px-2 py-2 md:px-6 md:py-4 border-r border-gray-200">Total</td>
                                <td className="px-2 py-2 md:px-6 md:py-4 border-r border-gray-200 text-center">{pattern.total.questions}</td>
                                <td className="px-2 py-2 md:px-6 md:py-4 border-r border-gray-200 text-center">{pattern.total.marks}</td>
                                <td className="px-2 py-2 md:px-6 md:py-4"></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="lg:hidden">
                <CourseRoadmap curriculum={course.curriculum} duration={course.duration} />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">Batch Timings</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.batchTimings.map((timing, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                      <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">{timing.day}</p>
                        <p className="text-gray-600">{timing.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {specialLectures.length > 0 && (
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border-2 border-amber-200">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-full">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">Special Guest Lectures</h2>
                      <p className="text-gray-600 mt-1">Learn from industry leaders and government experts</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-5 h-5 text-amber-600" />
                      <p className="text-gray-700 font-medium">
                        All enrolled students get exclusive access to these expert sessions at no additional cost
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-1 gap-6">
                    {specialLectures.map((lecture) => (
                      <SpecialLectureCard
                        key={lecture.id}
                        lecture={lecture}
                        variant="compact"
                        onRegisterClick={() => handleRegisterClick(lecture)}
                      />
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Link
                      to="/"
                      className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-semibold"
                    >
                      View all upcoming lectures
                      <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Enroll in This Course</h3>
                  <LeadForm
                    sourcePage={`course-${course.slug}`}
                    buttonText="Request Callback"
                  />
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Why Choose This Course?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Expert Faculty</p>
                        <p className="text-sm text-gray-600">Learn from industry professionals</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <GraduationCap className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Special Guest Lectures</p>
                        <p className="text-sm text-gray-600">Exclusive sessions by industry experts</p>
                      </div>
                    </div>
                    {courseSlug === 'rrb-ntpc' && (
                      <div className="flex items-start space-x-3">
                        <Monitor className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">Flexible Online Access</p>
                          <p className="text-sm text-gray-600">Learn from anywhere, anytime</p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Proven Track Record</p>
                        <p className="text-sm text-gray-600">High success rate</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Complete Material</p>
                        <p className="text-sm text-gray-600">Comprehensive study resources</p>
                      </div>
                    </div>
                    {courseSlug === 'rrb-ntpc' && (
                      <div className="flex items-start space-x-3">
                        <Video className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">Recorded Lectures</p>
                          <p className="text-sm text-gray-600">Access recordings for revision</p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-start space-x-3">
                      <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Mock Tests</p>
                        <p className="text-sm text-gray-600">Regular assessment & ranking</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Compact Curriculum Journey - Desktop Only */}
                <div className="hidden lg:block bg-white border-2 border-gray-200 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-1">Curriculum Journey</h3>
                  <p className="text-xs text-gray-600 mb-4">{course.duration} structured learning path</p>

                  <div className="max-h-[800px] overflow-y-auto pr-2">
                    <div className="relative space-y-4">
                      {/* Vertical timeline line - spans full content height */}
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 to-orange-500" style={{ height: '100%' }} />
                      {course.curriculum.map((month, index) => {
                        const phaseColors: Record<string, string> = {
                          'Foundation Building': 'bg-blue-100 border-blue-500 text-blue-700',
                          'Intermediate Mastery': 'bg-green-100 border-green-500 text-green-700',
                          'Advanced Practice': 'bg-purple-100 border-purple-500 text-purple-700',
                          'Final Sprint': 'bg-orange-100 border-orange-500 text-orange-700',
                          'Tier 1 Foundation': 'bg-blue-100 border-blue-500 text-blue-700',
                          'Tier 1 Advanced': 'bg-green-100 border-green-500 text-green-700',
                          'Tier 2 Preparation': 'bg-purple-100 border-purple-500 text-purple-700',
                          'Tier 3 & Interview': 'bg-orange-100 border-orange-500 text-orange-700',
                          'Preliminary Phase': 'bg-blue-100 border-blue-500 text-blue-700',
                          'Mains Phase': 'bg-green-100 border-green-500 text-green-700',
                          'Interview Phase': 'bg-purple-100 border-purple-500 text-purple-700',
                        };
                        const colorClass = phaseColors[month.phase] || 'bg-blue-100 border-blue-500 text-blue-700';

                        return (
                          <div key={index} className="relative pl-10">
                            {/* Timeline dot */}
                            <div className="absolute left-2.5 top-2 w-3 h-3 bg-white border-2 border-primary rounded-full z-10" />

                            <div className="bg-gray-50 rounded-lg p-3 hover:shadow-md transition-shadow">
                              <div className="flex flex-col gap-1 mb-2">
                                <span className="text-xs font-bold text-gray-900">Month {month.month}</span>
                                <span className={`text-[10px] px-2 py-0.5 rounded-full border ${colorClass} w-fit whitespace-nowrap`}>
                                  {month.phase}
                                </span>
                              </div>

                              {/* Focus Areas */}
                              <div className="mb-2">
                                <p className="text-xs font-medium mb-1" style={{ color: '#1D4ED8' }}>Focus Areas:</p>
                                <ul className="text-[11px] text-gray-600 space-y-0.5">
                                  {month.focusAreas.map((area, i) => (
                                    <li key={i} className="flex items-start gap-1.5">
                                      <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                                      <span className="leading-relaxed">{area}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Activities */}
                              <div className="mb-2">
                                <p className="text-xs font-medium mb-1" style={{ color: '#1D4ED8' }}>Activities:</p>
                                <ul className="text-[11px] text-gray-600 space-y-0.5">
                                  {month.activities.map((activity, i) => (
                                    <li key={i} className="flex items-start gap-1.5">
                                      <span className="text-gray-400 mt-0.5 flex-shrink-0">▪</span>
                                      <span className="leading-relaxed">{activity}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Milestone */}
                              <div className={`${colorClass.split(' ')[0]} rounded-lg p-2 mt-2`}>
                                <p className="text-xs text-gray-700 font-medium mb-0.5">Milestone:</p>
                                <p className="text-[11px] text-gray-800 leading-relaxed">{month.milestones}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join hundreds of successful students and begin your preparation today
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#0066FF] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#004BB8] transition-colors shadow-lg"
          >
            Book Free Demo Class
          </Link>
        </div>
      </section>

      {showCallbackModal && (
        <CallbackModal
          isOpen={showCallbackModal}
          onClose={() => {
            setShowCallbackModal(false);
            setSelectedLecture(null);
          }}
          title="Register for Special Lecture"
          message={selectedLecture ? `Express your interest in attending: "${selectedLecture.topic}" by ${selectedLecture.expert_name}. Our team will contact you with registration details.` : ''}
        />
      )}
    </div>
  );
}
