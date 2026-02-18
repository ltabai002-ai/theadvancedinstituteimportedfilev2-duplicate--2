interface BiographySectionProps {
  title?: string;
  content: string;
}

export default function BiographySection({ title = "Biography", content }: BiographySectionProps) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {content}
          </p>
        </div>
      </div>
    </section>
  );
}
