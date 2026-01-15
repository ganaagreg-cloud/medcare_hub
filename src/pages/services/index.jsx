import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ServiceCard from './components/ServiceCard';
import SpecialtySection from './components/SpecialtySection';
import DoctorCard from './components/DoctorCard';
import TestimonialCard from './components/TestimonialCard';
import PreparationGuide from './components/PreparationGuide';
import InsuranceChecker from './components/InsuranceChecker';
import ServiceSearch from './components/ServiceSearch';
import ServiceDetailModal from './components/ServiceDetailModal';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [activeTab, setActiveTab] = useState('all-services');
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
  {
    id: 1,
    name: "Мэдрэлийн эмчийн үзлэг",
    category: "Мэргэжлийн",
    icon: "Brain",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13238c809-1768133810608.png",
    imageAlt: "Мэдрэлийн эмч өвчтөнтэй ярилцаж байгаа дүр зураг",
    description: "Мэдрэлийн эмгэг, цус харвалт, толгойн өвчин зэрэг асуудлыг оношлох, эмчлэх үйлчилгээ.",
    features: [
    "Мэргэжлийн оношилгоо",
    "Орчин үеийн эмчилгээ",
    "Сэргээн засах эмчилгээ"],
    duration: "30-45 минут"
  },
  {
    id: 2,
    name: "Уламжлалтын эмчийн үзлэг",
    category: "Уламжлалт",
    icon: "Leaf",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1989af7f9-1768282872616.png",
    imageAlt: "Уламжлалт эмчилгээний өрөө",
    description: "Бариа засал, зүү төөнүүр, сүүн бариа зэрэг уламжлалт эмчилгээний аргууд.",
    features: [
    "Бариа засал",
    "Зүү төөнүүр",
    "Сүүн бариа"],
    duration: "45-60 минут"
  },
  {
    id: 3,
    name: "Зүрхний эмчийн үзлэг",
    category: "Мэргэжлийн",
    icon: "Heart",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c0f02590-1763300608129.png",
    imageAlt: "Зүрхний эмч зүрхний монитор шалгаж байгаа",
    description: "Зүрх судасны өвчлөлийг оношлох, эмчлэх иж бүрэн үйлчилгээ.",
    features: [
    "Зүрхний ЭХО",
    "ЭКГ шинжилгээ",
    "Холтер бичлэг"],
    duration: "30-45 минут"
  },
  {
    id: 4,
    name: "Сэргээн засах эмчийн үзлэг",
    category: "Сэргээн засах",
    icon: "Activity",
    image: "https://images.unsplash.com/photo-1624566329473-1fc35a4da8a3",
    imageAlt: "Сэргээн засах эмчилгээний өрөө",
    description: "Үе мөч, булчин, мэдрэлийн эмгэгийг сэргээх физик эмчилгээ.",
    features: [
    "Физик эмчилгээ",
    "Парафин эмчилгээ",
    "Цахилгаан соронзон ороолт"],
    duration: "45-60 минут"
  },
  {
    id: 5,
    name: "Амбулаторын үзлэг",
    category: "Үндсэн",
    icon: "Stethoscope",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b1bf35aa-1765691113088.png",
    imageAlt: "Эмч өвчтөнтэй ярилцаж байгаа",
    description: "Амбулаторын үзлэг үнэгүй. Ерөнхий эрүүл мэндийн үзлэг, зөвлөгөө.",
    features: [
    "Үнэгүй үзлэг",
    "Ерөнхий оношилгоо",
    "Эмчийн зөвлөгөө"],
    duration: "20-30 минут"
  },
  {
    id: 6,
    name: "Рентген оношилгоо",
    category: "Оношилгоо",
    icon: "Scan",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e8f4b63d-1768282873650.png",
    imageAlt: "Рентген аппарат",
    description: "Дижитал рентген зураг: цээж, нуруу, үе мөч, толгой зэрэг бүх төрлийн зураг.",
    features: [
    "Цээжний зураг",
    "Нурууны зураг",
    "Үе мөчний зураг"],
    duration: "15-30 минут"
  }];

  const specialties = [
  {
    id: 1,
    name: "Зүрхний оношилгооны төв",
    icon: "Heart",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15e68271f-1766513916990.png",
    imageAlt: "Зүрхний оношилгооны орчин үеийн тоног төхөөрөмж",
    description: "Америкийн зүрхний ЭХО-ны хамгийн сүүлийн дэвшилтэт технологиор зүрхний иж бүрэн оношилгоо, эмчилгээ.",
    services: [
    "Зүрхний өнгөт допплер 2D, 4D ЭХО (бүх насныханд, нярай)",
    "12 сувгийн зүрхний цахилгаан бичлэг (бүх насныханд)",
    "24-72 цагийн зүрхний холтер бичлэг",
    "7 хоногийн зүрхний холтер бичлэг",
    "24 цагийн артерийн даралтын бичлэг"],
    specialists: "5+",
    experience: "10+ жил"
  },
  {
    id: 2,
    name: "Клиник биохимийн лаборатори",
    icon: "Activity",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a2af4fac-1767744991536.png",
    imageAlt: "Орчин үеийн лабораторийн тоног төхөөрөмж",
    description: "Бүх төрлийн шинжилгээг түргэн шуурхай, өндөр нарийвчлалтайгаар гүйцэтгэнэ.",
    services: [
    "Цусны ерөнхий шинжилгээ",
    "Биохимийн бүх төрлийн шинжилгээ",
    "Бөөрний багц, Элэгний багц",
    "HBA1c – сахарын 3 сарын дундаж",
    "Хеликобактер (амьсгалаар)"],
    specialists: "8+",
    experience: "15+ жил"
  }];

  const doctors = [
  {
    id: 1,
    name: "Д-р Б.Сарангэрэл",
    specialty: "Зүрхний эмч",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12398b80a-1766770501136.png",
    imageAlt: "Зүрхний эмч Д-р Сарангэрэл",
    bio: "Зүрх судасны өвчлөлийн оношилгоо, эмчилгээний мэргэжлээр мэргэшсэн.",
    education: "Анагаахын их сургууль",
    experience: 15,
    languages: ["Монгол", "Англи"],
    certifications: ["Мэргэшсэн эмч"],
    rating: 4.9
  },
  {
    id: 2,
    name: "Д-р Г.Болдбаатар",
    specialty: "Мэдрэлийн эмч",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14ed39e6a-1765122859411.png",
    imageAlt: "Мэдрэлийн эмч Д-р Болдбаатар",
    bio: "Мэдрэлийн эмгэг, цус харвалтын эмчилгээний мэргэжилтэн.",
    education: "МУИС, Анагаахын сургууль",
    experience: 18,
    languages: ["Монгол", "Орос"],
    certifications: ["Мэргэшсэн эмч"],
    rating: 4.8
  },
  {
    id: 3,
    name: "Д-р Ц.Оюунцэцэг",
    specialty: "Уламжлалт эмч",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a0856994-1763301317988.png",
    imageAlt: "Уламжлалт эмч Д-р Оюунцэцэг",
    bio: "Уламжлалт эмчилгээний арга, бариа засал, зүү төөнүүрийн мэргэшилтэн.",
    education: "Монгол уламжлалт анагаахын их сургууль",
    experience: 12,
    languages: ["Монгол"],
    certifications: ["Мэргэшсэн эмч"],
    rating: 5.0
  }];

  const testimonials = [
  {
    id: 1,
    patientName: "Б.Цэцэгмаа",
    patientImage: "https://img.rocket.new/generatedImages/rocket_gen_img_175f4ac0f-1765049409997.png",
    patientImageAlt: "Өвчтөн Б.Цэцэгмаа",
    service: "Зүрхний эмчилгээ",
    testimonial: "Тайхар эмнэлгийн зүрхний эмчийн баг миний амийг аварсан. Тэдний шуурхай оношилгоо, мэргэшсэн эмчилгээ надад хоёр дахь амьдралыг өгсөн. Эмч нар болон ажилтнууд маш анхааралтай, эелдэг байсан.",
    rating: 5,
    date: "2025 оны 12 сар",
    location: "Эрдэнэт"
  },
  {
    id: 2,
    patientName: "Д.Баярсайхан",
    patientImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1d01f3f70-1763299335689.png",
    patientImageAlt: "Өвчтөн Д.Баярсайхан",
    service: "Сэргээн засах эмчилгээ",
    testimonial: "Нурууны өвчний дараа Тайхар эмнэлгийн сэргээн засах эмчилгээ авсан. Парафин, бариа засал, физик эмчилгээ маш үр дүнтэй байлаа. Одоо эрүүл, хөдөлгөөн сайжирсан.",
    rating: 5,
    date: "2025 оны 11 сар",
    location: "Эрдэнэт"
  },
  {
    id: 3,
    patientName: "С.Ариунаа",
    patientImage: "https://img.rocket.new/generatedImages/rocket_gen_img_14703f6e7-1763298592723.png",
    patientImageAlt: "Өвчтөн С.Ариунаа",
    service: "Уламжлалт эмчилгээ",
    testimonial: "Уламжлалт эмчилгээний үйлчилгээ маш сайн байлаа. Зүү төөнүүр, бариа засал хийлгэсэн. Эмч нар туршлагатай, үр дүн нь гайхалтай. Бүх хүнд зөвлөж байна.",
    rating: 5,
    date: "2026 оны 1 сар",
    location: "Эрдэнэт"
  }];

  const preparationGuide = {
    serviceName: "Эмчилгээнд бэлтгэх",
    description: "Эмчилгээнд бэлтгэхдээ дараах зөвлөмжийг дагана уу.",
    steps: [
    {
      title: "Эмчтэй зөвлөлдөх (1-2 долоо хоногийн өмнө)",
      description: "Эмчтэй уулзаж, эмчилгээний талаар ярилцаж, эрүүл мэндийн түүхээ хэлнэ. Одоо хэрэглэж байгаа бүх эмийн жагсаалтыг авчрах.",
      tips: [
      "Эмчилгээний дараа гэртээ хүргэх хүнийг урьдчилан тохирох",
      "Харшлын талаар эмчид хэлэх",
      "Сэргэх хугацаа, эмчилгээний дараах арчилгааны талаар асуух"]
    },
    {
      title: "Шинжилгээ хийлгэх (1 долоо хоногийн өмнө)",
      description: "Шаардлагатай бүх шинжилгээг хийлгэх: цусны шинжилгээ, ЭКГ, зураг гэх мэт.",
      tips: [
      "Шинжилгээний өмнө мацаг барих",
      "Өмнөх шинжилгээний үр дүнг авчрах",
      "Сүүлийн үеийн өвчний талаар эмчид мэдэгдэх"]
    }
    // ... remaining code omitted for brevity ...
    ]
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredServices = services?.filter((service) => {
    const matchesSearch = service?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
    service?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase());
    const matchesCategory = !selectedCategory || service?.category?.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const tabs = [
  { id: 'all-services', label: 'Бүх Үйлчилгээ', icon: 'Grid' },
  { id: 'specialties', label: 'Мэргэшсэн төвүүд', icon: 'Award' },
  { id: 'doctors', label: 'Эмнэлгийн мэргэжилтнүүд', icon: 'Users' },
  { id: 'preparation', label: 'Эмчилгээнд бэлтгэх удирдамж', icon: 'FileText' },
  { id: 'insurance', label: 'Даатгалын үйлчилгээ', icon: 'Shield' }];

  const handleServiceLearnMore = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 200);
  };

  return (
    <>
      <Helmet>
        <title>Үйлчилгээ | Тайхар эмнэлэг - Иж бүрэн эрүүл мэндийн үйлчилгээ</title>
        <meta name="description" content="Тайхар эмнэлгийн үйлчилгээ: мэдрэлийн эмч, уламжлалт эмчилгээ, зүрхний оношилгоо, сэргээн засах эмчилгээ, лабораторийн шинжилгээ. Мэргэжлийн эмч нар, орчин үеийн тоног төхөөрөмж." />
      </Helmet>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="flex-1">
          <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <Breadcrumb />
              
              <div className="max-w-3xl mt-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Icon name="Stethoscope" size={16} />
                  <span>Орчин үеийнbination удирдамж</span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Мэргэшсэн үйлчилгээ
                </h1>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Манай үйлчилгээ нь орчин үеийн техник, мэргэжлийн эмч нарын чадварлаг хамтын ажиллагааны үр дүнд та бүхэнд өндөр чанарын эрүүл мэндийн үйлчилгээ үзүүлдэг.
                </p>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
            <ServiceSearch onSearch={handleSearch} onFilterChange={handleFilterChange} />

            <div className="mt-8 md:mt-12">
              <div className="border-b border-border mb-8">
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  {tabs?.map((tab) =>
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-t-lg font-medium text-sm whitespace-nowrap transition-all flex-shrink-0 ${
                    activeTab === tab?.id ?
                    'bg-primary text-primary-foreground' :
                    'text-muted-foreground hover:text-foreground hover:bg-muted'}`
                    }>

                      <Icon name={tab?.icon} size={18} />
                      <span>{tab?.label}</span>
                    </button>
                  )}
                </div>
              </div>

              {activeTab === 'all-services' &&
              <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Манай Үйлчилгээ
                    </h2>
                    <span className="text-sm text-muted-foreground">
                      {filteredServices?.length} үйлчилгээ байна
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredServices?.map((service) =>
                  <div key={service?.id} id={service?.id === 2 ? 'traditional-medicine' : service?.id === 6 ? 'xray-service' : undefined}>
                    <ServiceCard service={service} onLearnMore={handleServiceLearnMore} />
                  </div>
                  )}
                  </div>

                  {filteredServices?.length === 0 &&
                <div className="text-center py-12">
                      <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Үйлчилгээ олдохгүй байна
                      </h3>
                      <p className="text-muted-foreground">
                        Та хайлтаа өөрчилж оролдоно уу
                      </p>
                    </div>
                }
                </div>
              }

              {activeTab === 'specialties' &&
              <div>
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      Мэргэшсэн төвүүд
                    </h2>
                    <p className="text-muted-foreground">
                      Ардын эмчилгээний төвүүдээс боловсронгуй тусламж
                    </p>
                  </div>

                  <div className="space-y-8">
                    {specialties?.map((specialty) =>
                  <SpecialtySection key={specialty?.id} specialty={specialty} />
                  )}
                  </div>
                </div>
              }

              {activeTab === 'doctors' &&
              <div>
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      Манай Мэргэшсэн Мэргэжилтнүүд
                    </h2>
                    <p className="text-muted-foreground">
                      Мэргэшсэн эмч нар таны эрүүл мэндийг хамгаалж байна
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
                    {doctors?.map((doctor) =>
                  <DoctorCard key={doctor?.id} doctor={doctor} />
                  )}
                  </div>

                  <div className="bg-primary/5 rounded-xl p-6 md:p-8 border border-primary/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                        <Icon name="Calendar" size={24} className="text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Зөв мэргэжилтэн олохгүй байна уу?
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Манай хүлээн авалтын төвүүд таны тохирох эмчийг олох, уулзахад тусална.
                        </p>
                        <Button variant="default" iconName="Phone" iconPosition="left">
                          Үйлчлүүлэгчтэй холбогдох
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              }

              {activeTab === 'preparation' &&
              <div>
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      Эмчилгээнд бэлтгэх удирдамж
                    </h2>
                    <p className="text-muted-foreground">
                      Шинжилгээ болон эмчилгээний явцад дагах зөвлөмжүүд
                    </p>
                  </div>

                  <div className="max-w-4xl">
                    <PreparationGuide guide={preparationGuide} />
                  </div>

                  <div className="mt-12">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
                      Амжилттай өргөдөл үйл явдлын түүх
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                      {testimonials?.map((testimonial) =>
                    <TestimonialCard key={testimonial?.id} testimonial={testimonial} />
                    )}
                    </div>
                  </div>
                </div>
              }

              {activeTab === 'insurance' &&
              <div>
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      Даатгал ба хэмжүүрийн үйлчилгээ
                    </h2>
                    <p className="text-muted-foreground">
                      Даатгалын дараалал, эрүүл мэндийн үнэ цэнийг ойлгох
                    </p>
                  </div>

                  <div className="max-w-4xl">
                    <InsuranceChecker />

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-card rounded-xl border border-border p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="FileText" size={24} className="text-secondary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                              Хүлээн авсан даатгалын төлөвлөгөө
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              Бид хамгийн том даатгалын төлөвлөгөөг хүлээн авдаг. Багц мэдээллийг харах.
                            </p>
                            <Button variant="outline" size="sm" iconName="ExternalLink" iconPosition="right">
                              Бүх төлөвлөгөөг үзэх
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="bg-card rounded-xl border border-border p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="DollarSign" size={24} className="text-accent" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                              Санхүүгийн тусламж
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              Эрсдэлийн даац тогтоосон хүлээн авсан тусламжийн төлөвлөгөөнүүд.
                            </p>
                            <Button variant="outline" size="sm" iconName="HelpCircle" iconPosition="right">
                              Илүү сурах
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>

            <div className="mt-12 md:mt-16 bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 md:p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                  <Icon name="Calendar" size={32} className="text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  Үйлчлүүлэгчийн уулзалт захиалах уу?
                </h2>
                <p className="text-base md:text-lg text-white/90 mb-8">
                  Манай хүлээн авалтын баг 24/7 хүртэл таныг уулзах, асуултад хариулах, эмчилгээ үйлчилгээ үзүүлэхэд бэлэн байна.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Calendar"
                    iconPosition="left"
                    className="bg-white text-primary hover:bg-white/90">

                    Захиалах
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Phone"
                    iconPosition="left"
                    className="border-white text-white hover:bg-white/10">

                    (555) 123-4567 дугаартаа залгаарай
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
      
      {/* Service Detail Modal */}
      <ServiceDetailModal 
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Services;