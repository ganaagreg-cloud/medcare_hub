import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    department: '',
    urgency: '',
    message: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const departmentOptions = [
    { value: '', label: 'Хэлтэс сонгох' },
    { value: 'general', label: 'Ерөнхий асуулт' },
    { value: 'appointments', label: 'Цаг захиалга' },
    { value: 'neurology', label: 'Мэдрэлийн эмч' },
    { value: 'cardiology', label: 'Зүрхний эмч' },
    { value: 'traditional', label: 'Уламжлалт эмчилгээ' },
    { value: 'laboratory', label: 'Лаборатори' }
  ];

  const urgencyOptions = [
    { value: '', label: 'Яаралтай байдал сонгох' },
    { value: 'low', label: 'Яаралгүй' },
    { value: 'medium', label: 'Дунд зэрэг' },
    { value: 'high', label: 'Яаралтай' }
  ];

  const handleChange = (e) => {
    // Handle direct value from Select component
    if (typeof e === 'string' || typeof e === 'number') {
      return; // Select will use handleSelectChange instead
    }
    
    // Handle event object from Input/textarea/Checkbox
    const { name, value, type, checked } = e?.target || {};
    if (!name) return;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.fullName?.trim()) newErrors.fullName = 'Нэр оруулна уу';
    if (!formData?.email?.trim()) {
      newErrors.email = 'Имэйл оруулна уу';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Зөв имэйл хаяг оруулна уу';
    }
    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Утасны дугаар оруулна уу';
    }
    if (!formData?.department) newErrors.department = 'Хэлтэс сонгоно уу';
    if (!formData?.message?.trim()) newErrors.message = 'Мессеж оруулна уу';
    if (formData?.message?.trim()?.length < 10) newErrors.message = 'Мессеж хамгийн багадаа 10 тэмдэгт байх';
    if (!formData?.urgency) newErrors.urgency = 'Яаралтай байдал сонгоно уу';
    if (!formData?.agreeToTerms) newErrors.agreeToTerms = 'Нөхцөлтэй зөвшөөрөх хэрэгтэй';

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      department: '',
      urgency: '',
      message: '',
      agreeToTerms: false
    });

    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Бидэнд мессеж илгээх
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Доорх маягтыг бөглөнө үү. Бид таны мессежийг хүлээн авч, удахгүй хариу өгөх болно.
            </p>
          </div>

          {submitSuccess && (
            <div className="mb-6 md:mb-8 p-4 md:p-6 bg-success/10 border border-success/20 rounded-xl flex items-start gap-3">
              <Icon name="CheckCircle" size={24} className="text-success flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base md:text-lg font-semibold text-success mb-1">Амжилттай илгээгдлээ!</h3>
                <p className="text-sm text-muted-foreground">
                  Тайхар эмнэлэгтэй холбогдсонд баярлалаа. Бид таны мессежийг хүлээн авч, удахгүй хариу өгөх болно.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 md:p-8 lg:p-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Input
                label="Таны нэр"
                name="fullName"
                type="text"
                placeholder="Овог нэрээ оруулна уу"
                value={formData?.fullName}
                onChange={handleChange}
                required
                error={errors?.fullName}
              />
              
              <Input
                label="Имэйл хаяг"
                name="email"
                type="email"
                placeholder="example@email.com"
                value={formData?.email}
                onChange={handleChange}
                required
                error={errors?.email}
              />
            </div>

            <Input
              label="Утасны дугаар"
              name="phone"
              type="tel"
              placeholder="99123456"
              value={formData?.phone}
              onChange={handleChange}
              error={errors?.phone}
            />

            <Select
              label="Хэлтэс"
              name="department"
              options={departmentOptions}
              value={formData?.department}
              onChange={(value) => handleSelectChange('department', value)}
              required
              error={errors?.department}
            />

            <Select
              label="Яаралтай байдал"
              name="urgency"
              options={urgencyOptions}
              value={formData?.urgency}
              onChange={(value) => handleSelectChange('urgency', value)}
              required
              error={errors?.urgency}
            />

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Мессеж <span className="text-destructive">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors?.message ? 'border-destructive' : 'border-input'
                } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none`}
                placeholder="Асуулт эсвэл санал хүсэлтээ энд бичнэ уу..."
                value={formData?.message}
                onChange={handleChange}
                required
              />
              {errors?.message && (
                <p className="mt-2 text-sm text-destructive flex items-center gap-1">
                  <Icon name="AlertCircle" size={14} />
                  {errors?.message}
                </p>
              )}
            </div>

            <div className="pt-4 border-t border-border">
              <Checkbox
                label="Би нөхцөлтэй танилцаж зөвшөөрч байна"
                name="agreeToTerms"
                checked={formData?.agreeToTerms}
                onChange={handleChange}
                error={errors?.agreeToTerms}
              />
            </div>

            <Button
              type="submit"
              variant="default"
              size="lg"
              fullWidth
              iconName="Send"
              iconPosition="left"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Илгээж байна...' : 'Мессеж илгээх'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;