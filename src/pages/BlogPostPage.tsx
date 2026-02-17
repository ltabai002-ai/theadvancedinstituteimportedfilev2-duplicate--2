import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, Eye, ArrowLeft, Share2, ChevronRight, BookOpen } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category_id: string;
  featured_image: string;
  author_name: string;
  view_count: number;
  created_at: string;
  category: {
    name: string;
    slug: string;
  };
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from('blog_posts')
      .select(`
        *,
        category:blog_categories(name, slug)
      `)
      .eq('slug', slug)
      .eq('is_published', true)
      .maybeSingle();

    if (error || !data) {
      navigate('/blog');
      return;
    }

    setPost(data as unknown as BlogPost);

    await supabase
      .from('blog_posts')
      .update({ view_count: data.view_count + 1 })
      .eq('id', data.id);

    if (data.category_id) {
      const { data: related } = await supabase
        .from('blog_posts')
        .select(`
          *,
          category:blog_categories(name, slug)
        `)
        .eq('category_id', data.category_id)
        .eq('is_published', true)
        .neq('id', data.id)
        .limit(3)
        .order('created_at', { ascending: false });

      if (related) {
        setRelatedPosts(related as unknown as BlogPost[]);
      }
    }

    setLoading(false);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const estimateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  const handleShare = async () => {
    const shareData = {
      title: post?.title || '',
      text: post?.excerpt || '',
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-4xl font-bold text-gray-900 mb-6 mt-8">{line.substring(2)}</h1>;
      } else if (line.startsWith('## ')) {
        return <h2 key={index} className="text-3xl font-bold text-gray-900 mb-4 mt-8">{line.substring(3)}</h2>;
      } else if (line.startsWith('### ')) {
        return <h3 key={index} className="text-2xl font-bold text-gray-900 mb-3 mt-6">{line.substring(4)}</h3>;
      } else if (line.startsWith('#### ')) {
        return <h4 key={index} className="text-xl font-bold text-gray-900 mb-2 mt-4">{line.substring(5)}</h4>;
      } else if (line.startsWith('- ')) {
        return <li key={index} className="ml-6 mb-2 text-gray-700">{line.substring(2)}</li>;
      } else if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={index} className="font-bold text-gray-900 mb-2 mt-4">{line.substring(2, line.length - 2)}</p>;
      } else if (line.trim() === '') {
        return <div key={index} className="h-2"></div>;
      } else {
        return <p key={index} className="text-gray-700 leading-relaxed mb-4">{line}</p>;
      }
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-primary"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <div>
      <div className="bg-gray-50 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/blog" className="hover:text-primary">Blog</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            {post.category && (
              <>
                <span className="hover:text-primary">{post.category.name}</span>
                <ChevronRight className="w-4 h-4 mx-2" />
              </>
            )}
            <span className="text-gray-900 truncate">{post.title}</span>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.category && (
            <span className="inline-block bg-blue-50 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {post.category.name}
            </span>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b">
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              <span className="font-medium">{post.author_name}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{formatDate(post.created_at)}</span>
            </div>
            <div className="flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              <span>{post.view_count + 1} views</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              <span>{estimateReadTime(post.content)}</span>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center text-primary hover:text-primary-dark font-medium ml-auto"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Share
            </button>
          </div>

          {post.featured_image && (
            <div className="mb-12 rounded-2xl overflow-hidden">
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            {renderContent(post.content)}
          </div>

          <div className="mt-12 pt-8 border-t">
            <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Excel in Your Exam?
              </h3>
              <p className="text-blue-50 mb-6">
                Join our expert-led coaching program and get personalized guidance to crack your target exam
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/courses"
                  className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Explore Courses
                </Link>
                <Link
                  to="/contact"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={relatedPost.featured_image || '/student-image.png'}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    {relatedPost.category && (
                      <span className="inline-block bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
                        {relatedPost.category.name}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(relatedPost.created_at)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
