import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = ({ onEmergencyClick, onAppointmentClick }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
  {
    id: 1,
    title: "Уламжлалт, физик эмчилгээ,",
    subtitle: "Хөдөлгөөнийг сэргээж, амьдралын чанарыг дээшлүүлнэ",
    description: "Манай физик эмчилгээний тасаг нь мэс заслын дараах сэргэлт, гэмтэл, архаг өвдөлт болон хөдөлгөөний хязгаарлалтыг бууруулахад чиглэсэн орчин үеийн арга, мэргэшсэн эмч, сэргээн засах багтайгаар үйлчилж байна.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15eb85677-1768075520458.png",
    imageAlt: "Modern hospital emergency room with medical equipment and professional healthcare staff in blue scrubs attending to patient",
    cta: "Emergency Services",
    ctaAction: "emergency",
    bgGradient: "from-emergency/20 to-emergency/5"
  },
  {
    id: 2,
    title: "Цагаа онлайнаар захиалаарай",
    subtitle: "Эрүүл мэндийн үйлчилгээний хялбар шийдэл",
    description: "Манай онлайн цаг захиалгын системээр та мэргэжлийн эмчээ сонгон, хүссэн өдөр, цагаа хэдхэн минутын дотор захиалах боломжтой.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12213ec34-1766514189165.png",
    imageAlt: "Friendly female doctor in white coat with stethoscope smiling warmly while reviewing patient records on tablet in bright modern clinic",
    cta: "Цаг захиалах",
    ctaAction: "appointment",
    bgGradient: "from-primary/20 to-primary/5"
  },
  {
    id: 3,
    title: "Дижитал рентген",
    subtitle: "Бүх төрлийн рентген зураг",
    description: "Манай эмнэлэг орчин үеийн дижитал рентген технологиор тоноглогдсон. Бид цээж, яс, үе мөч болон бусад эрхтний өндөр нарийвчлалтай рентген зураг авах үйлчилгээ үзүүлдэг.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b94deaa5-1767104433802.png",
    imageAlt: "Modern digital X-ray machine in hospital radiology department with medical equipment and monitors",
    cta: "Explore Wellness",
    ctaAction: "wellness",
    bgGradient: "from-secondary/20 to-secondary/5"
  }];


  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides?.length]);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  const handleCTAClick = (action) => {
    if (action === 'emergency') {
      onEmergencyClick();
    } else if (action === 'appointment') {
      onAppointmentClick();
    }
  };

  const handleLearnMore = () => {
    const slideId = heroSlides?.[activeSlide]?.id;
    
    if (slideId === 1) {
      // Navigate to Traditional Medicine service on services page
      window.location.href = '/services#traditional-medicine';
    } else if (slideId === 2) {
      // Navigate to contact page
      window.location.href = '/contact';
    } else if (slideId === 3) {
      // Navigate to X-ray service on services page
      window.location.href = '/services#xray-service';
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-background to-muted overflow-hidden">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold">
              <Icon name="Heart" size={16} />
              <span>Trusted Healthcare Since 1985</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {heroSlides?.[activeSlide]?.title}
            </h1>

            <p className="text-lg md:text-xl text-primary font-semibold">
              {heroSlides?.[activeSlide]?.subtitle}
            </p>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {heroSlides?.[activeSlide]?.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              <Button
                variant={heroSlides?.[activeSlide]?.ctaAction === 'emergency' ? 'destructive' : 'default'}
                size="lg"
                iconName={heroSlides?.[activeSlide]?.ctaAction === 'emergency' ? 'Phone' : 'Calendar'}
                iconPosition="left"
                onClick={() => handleCTAClick(heroSlides?.[activeSlide]?.ctaAction)}
                className="w-full sm:w-auto">

                {heroSlides?.[activeSlide]?.cta}
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                onClick={handleLearnMore}
                className="w-full sm:w-auto">

                Дэлгэрэнгүй
              </Button>
            </div>

            <div className="flex items-center gap-3 pt-4 md:pt-6">
              {heroSlides?.map((slide, index) =>
              <button
                key={slide?.id}
                onClick={() => handleSlideChange(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                activeSlide === index ?
                'w-8 bg-primary' : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'}`
                }
                aria-label={`Go to slide ${index + 1}`} />

              )}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${heroSlides?.[activeSlide]?.bgGradient} rounded-2xl blur-3xl opacity-50`} />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={heroSlides?.[activeSlide]?.image}
                  alt={heroSlides?.[activeSlide]?.imageAlt}
                  className="w-full h-full object-cover"
                  priority={true}
                  loading="eager"
                  fetchpriority="high" />

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
    </section>);

};

export default HeroSection;