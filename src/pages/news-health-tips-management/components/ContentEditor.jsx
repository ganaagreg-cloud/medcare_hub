import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { postService } from '../../../services/postService';
import toast from 'react-hot-toast';

const ContentEditor = ({ content, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    status: 'Ноорог',
    author: '',
    excerpt: '',
    content: '',
    imagePath: '',
    isFeatured: false
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (content) {
      setFormData({
        title: content?.title || '',
        category: content?.category || '',
        status: content?.status || 'Ноорог',
        author: content?.author || '',
        excerpt: content?.excerpt || '',
        content: content?.content || '',
        imagePath: content?.imagePath || '',
        isFeatured: content?.isFeatured || false
      });
      setImagePreview(content?.imagePath || '');
    }
  }, [content]);

  const categoryOptions = [
    { value: '', label: 'Ангилал сонгох' },
    { value: 'Мэдээ', label: 'Мэдээ' },
    { value: 'Эрүүл мэндийн зөвлөгөө', label: 'Эрүүл мэндийн зөвлөгөө' },
    { value: 'Олон нийт', label: 'Олон нийт' }
  ];

  const statusOptions = [
    { value: 'Ноорог', label: 'Ноорог' },
    { value: 'Нийтлэгдсэн', label: 'Нийтлэгдсэн' }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e?.target?.files?.[0];
    if (file) {
      // Validate file type
      const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];
      if (!validTypes?.includes(file?.type)) {
        toast?.error('Зөвхөн JPG, PNG, WEBP форматын зураг оруулна уу');
        return;
      }
      
      // Validate file size (5MB)
      if (file?.size > 5242880) {
        toast?.error('Зургийн хэмжээ 5MB-аас бага байх ёстой');
        return;
      }

      setImageFile(file);
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader?.result);
      };
      reader?.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setUploading(true);

    try {
      let finalImagePath = formData?.imagePath;

      // Upload new image if selected
      if (imageFile) {
        toast?.loading('Зураг байршуулж байна...');
        const { publicUrl } = await postService?.uploadImage(imageFile);
        finalImagePath = publicUrl;
        toast?.dismiss();
        toast?.success('Зураг амжилттай байршлаа');
      }

      // Save post data
      await onSave({
        ...formData,
        imagePath: finalImagePath
      });

      toast?.success(content ? 'Нийтлэл амжилттай шинэчлэгдлээ' : 'Нийтлэл амжилттай хадгалагдлаа');
    } catch (error) {
      console.error('Save error:', error);
      toast?.error('Алдаа гарлаа: ' + error?.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">
          {content ? 'Нийтлэл засах' : 'Шинэ нийтлэл'}
        </h2>
        <button
          onClick={onCancel}
          className="p-2 rounded-lg hover:bg-muted transition-colors"
        >
          <Icon name="X" size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Гарчиг"
          name="title"
          value={formData?.title}
          onChange={handleChange}
          placeholder="Нийтлэлийн гарчиг оруулна уу"
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Ангилал"
            name="category"
            options={categoryOptions}
            value={formData?.category}
            onChange={(value) => handleSelectChange('category', value)}
            required
          />

          <Select
            label="Төлөв"
            name="status"
            options={statusOptions}
            value={formData?.status}
            onChange={(value) => handleSelectChange('status', value)}
            required
          />
        </div>

        <Input
          label="Зохиогч"
          name="author"
          value={formData?.author}
          onChange={handleChange}
          placeholder="Зохиогчийн нэр"
          required
        />

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Зураг оруулах
          </label>
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/jpg"
            onChange={handleImageChange}
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
          />
          {imagePreview && (
            <div className="mt-3">
              <img 
                src={imagePreview} 
                alt="Preview" 
                className="w-full h-48 object-cover rounded-lg border border-border"
              />
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
          <input
            type="checkbox"
            id="isFeatured"
            name="isFeatured"
            checked={formData?.isFeatured}
            onChange={handleChange}
            className="w-4 h-4 rounded border-input bg-background text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
          />
          <label htmlFor="isFeatured" className="text-sm font-medium text-foreground cursor-pointer">
            Онцлох нийтлэл (Нүүр хуудсанд харагдана)
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Товч тайлбар
          </label>
          <textarea
            name="excerpt"
            value={formData?.excerpt}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
            placeholder="Нийтлэлийн товч тайлбар..."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Контент <span className="text-destructive">*</span>
          </label>
          <textarea
            name="content"
            value={formData?.content}
            onChange={handleChange}
            rows={12}
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
            placeholder="Нийтлэлийн бүрэн агуулга..."
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button
            type="submit"
            variant="default"
            size="lg"
            iconName="Save"
            iconPosition="left"
            className="flex-1"
            disabled={uploading}
          >
            {uploading ? 'Хадгалж байна...' : 'Хадгалах'}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={onCancel}
            className="flex-1"
            disabled={uploading}
          >
            Цуцлах
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContentEditor;