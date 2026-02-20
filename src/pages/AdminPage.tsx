import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: string;
  student_name: string;
  exam_name: string;
  success_story: string;
  ranking_or_score: string;
  image_url: string | null;
  is_featured: boolean;
  display_order: number;
  is_active: boolean;
}

interface FormData {
  studentName: string;
  examName: string;
  successStory: string;
  rankingOrScore: string;
  imageUrl: string;
  isFeatured: boolean;
  displayOrder: number;
}

const initialFormData: FormData = {
  studentName: '',
  examName: '',
  successStory: '',
  rankingOrScore: '',
  imageUrl: '',
  isFeatured: false,
  displayOrder: 0,
};

export default function AdminPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${supabaseUrl}/functions/v1/testimonials`, {
        headers: {
          Authorization: `Bearer ${anonKey}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setTestimonials(data);
      }
    } catch (err) {
      setError('Failed to fetch testimonials');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.studentName || !formData.examName || !formData.successStory || !formData.rankingOrScore) {
      setError('Please fill in all required fields');
      return;
    }

    try {
      setIsSaving(true);
      const method = editingId ? 'PUT' : 'POST';
      const endpoint = editingId
        ? `${supabaseUrl}/functions/v1/testimonials/${editingId}`
        : `${supabaseUrl}/functions/v1/testimonials`;

      const response = await fetch(endpoint, {
        method,
        headers: {
          Authorization: `Bearer ${anonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData(initialFormData);
        setEditingId(null);
        setIsFormOpen(false);
        await fetchTestimonials();
      } else {
        setError('Failed to save testimonial');
      }
    } catch (err) {
      setError('Error saving testimonial');
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleEdit = (testimonial: Testimonial) => {
    setFormData({
      studentName: testimonial.student_name,
      examName: testimonial.exam_name,
      successStory: testimonial.success_story,
      rankingOrScore: testimonial.ranking_or_score,
      imageUrl: testimonial.image_url || '',
      isFeatured: testimonial.is_featured,
      displayOrder: testimonial.display_order,
    });
    setEditingId(testimonial.id);
    setIsFormOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;

    try {
      const response = await fetch(`${supabaseUrl}/functions/v1/testimonials/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${anonKey}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        await fetchTestimonials();
      } else {
        setError('Failed to delete testimonial');
      }
    } catch (err) {
      setError('Error deleting testimonial');
      console.error(err);
    }
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingId(null);
    setFormData(initialFormData);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">Testimonials Management</h1>
            <p className="text-slate-600 mt-2">Manage student testimonials and success stories</p>
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Testimonial
          </button>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {/* Form Modal */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
              <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">
                  {editingId ? 'Edit Testimonial' : 'Add New Testimonial'}
                </h2>
                <button
                  onClick={handleCloseForm}
                  className="text-slate-500 hover:text-slate-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter student name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Exam Name *
                  </label>
                  <select
                    name="examName"
                    value={formData.examName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="">Select exam</option>
                    <option value="RRB NTPC">RRB NTPC</option>
                    <option value="SSC CGL">SSC CGL</option>
                    <option value="SSC CHSL">SSC CHSL</option>
                    <option value="Banking Exams">Banking Exams</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Ranking/Score *
                  </label>
                  <input
                    type="text"
                    name="rankingOrScore"
                    value={formData.rankingOrScore}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="e.g., Rank 5, 92%"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Success Story *
                  </label>
                  <textarea
                    name="successStory"
                    value={formData.successStory}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter the student's success story"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Image URL (optional)
                  </label>
                  <input
                    type="url"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Display Order
                    </label>
                    <input
                      type="number"
                      name="displayOrder"
                      value={formData.displayOrder}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      min="0"
                    />
                  </div>

                  <div className="flex items-end">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="isFeatured"
                        checked={formData.isFeatured}
                        onChange={handleInputChange}
                        className="w-5 h-5 rounded border-slate-300"
                      />
                      <span className="text-sm font-semibold text-slate-900">Featured</span>
                    </label>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={handleCloseForm}
                    className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors disabled:opacity-50"
                  >
                    {isSaving ? 'Saving...' : editingId ? 'Update' : 'Create'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Testimonials Table */}
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-slate-600">Loading testimonials...</p>
          </div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg border border-slate-200">
            <p className="text-slate-600">No testimonials yet. Create your first one!</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Exam</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Achievement</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Featured</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Order</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {testimonials.map((testimonial) => (
                    <tr key={testimonial.id} className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="px-6 py-4 text-sm text-slate-900">{testimonial.student_name}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{testimonial.exam_name}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{testimonial.ranking_or_score}</td>
                      <td className="px-6 py-4 text-sm">
                        {testimonial.is_featured ? (
                          <Check className="w-5 h-5 text-green-600" />
                        ) : (
                          <X className="w-5 h-5 text-slate-400" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">{testimonial.display_order}</td>
                      <td className="px-6 py-4 text-sm space-x-2 flex">
                        <button
                          onClick={() => handleEdit(testimonial)}
                          className="p-2 hover:bg-blue-100 text-blue-600 rounded transition-colors"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(testimonial.id)}
                          className="p-2 hover:bg-red-100 text-red-600 rounded transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
