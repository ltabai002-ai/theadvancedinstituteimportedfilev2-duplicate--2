import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Eye, ArrowRight, Search, BookOpen } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
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

interface Category {
  id: string;
  name: string;
  slug: string;
  display_order: number;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
    fetchPosts();
  }, []);

  useEffect(() => {
    filterPosts();
  }, [selectedCategory, searchQuery, posts]);

  const fetchCategories = async () => {
    const { data } = await supabase
      .from('blog_categories')
      .select('*')
      .order('display_order');

    if (data) setCategories(data);
  };

  const fetchPosts = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('blog_posts')
      .select(`
        *,
        category:blog_categories(name, slug)
      `)
      .eq('is_published', true)
      .order('created_at', { ascending: false });

    if (data) {
      setPosts(data as unknown as BlogPost[]);
      setFilteredPosts(data as unknown as BlogPost[]);
    }
    setLoading(false);
  };

  const filterPosts = () => {
    let filtered = [...posts];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category?.slug === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const estimateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="w-12 h-12 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Blog & Exam Tips
              </h1>
            </div>
            <p className="text-xl text-blue-50">
              Expert insights, preparation strategies, and study tips to help you crack government exams
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category.slug
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-primary"></div>
              <p className="mt-4 text-gray-600">Loading articles...</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-xl text-gray-600">No articles found</p>
            </div>
          ) : (
            <>
              {featuredPost && (
                <div className="mb-12">
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="group block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/2">
                        <div className="h-64 md:h-full relative overflow-hidden">
                          <img
                            src={featuredPost.featured_image || '/student-image.png'}
                            alt={featuredPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                              Featured
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/2 p-8">
                        {featuredPost.category && (
                          <span className="inline-block bg-blue-50 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                            {featuredPost.category.name}
                          </span>
                        )}
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                          {featuredPost.title}
                        </h2>
                        <p className="text-gray-600 mb-6 line-clamp-3">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              {featuredPost.author_name}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {formatDate(featuredPost.created_at)}
                            </div>
                            <div className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {featuredPost.view_count} views
                            </div>
                          </div>
                          <span className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                            Read More <ArrowRight className="w-4 h-4 ml-1" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={post.featured_image || '/student-image.png'}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      {post.category && (
                        <span className="inline-block bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
                          {post.category.name}
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          {post.author_name}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(post.created_at)}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Preparation?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our expert-led coaching programs and get personalized guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              View All Courses
            </Link>
            <Link
              to="/contact"
              className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
