import { Mail, Phone, Linkedin } from 'lucide-react';

interface ProfileHeroProps {
  name: string;
  designation: string;
  imageUrl?: string;
  quote?: string;
  email?: string;
  phone?: string;
  linkedinUrl?: string;
}

export default function ProfileHero({
  name,
  designation,
  imageUrl,
  quote,
  email,
  phone,
  linkedinUrl
}: ProfileHeroProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 text-blue-800 text-6xl font-bold">
                  {name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{name}</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6">{designation}</p>

            {quote && (
              <blockquote className="text-lg italic text-blue-50 border-l-4 border-white pl-4 my-6">
                "{quote}"
              </blockquote>
            )}

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{email}</span>
                </a>
              )}
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{phone}</span>
                </a>
              )}
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
