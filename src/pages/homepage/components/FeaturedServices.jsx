import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FeaturedServices = () => {
  const [activeService, setActiveService] = useState(0);

  // Services data pulled from services page
  const services = [
    {
      id: 1,
      name: "Мэдрэлийн эмчийн үзлэг",
      icon: "Brain",
      description: "Мэдрэлийн эмгэг, цус харвалт, толгойн өвчин зэрэг асуудлыг оношлох, эмчлэх үйлчилгээ.",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_13238c809-1768133810608.png",
      imageAlt: "Мэдрэлийн эмч өвчтөнтэй ярилцаж байгаа дүр зураг",
      features: [
        "Мэргэжлийн оношилгоо",
        "Орчин үеийн эмчилгээ",
        "Сэргээн засах эмчилгээ"
      ],
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      id: 2,
      name: "Уламжлалтын эмчийн үзлэг",
      icon: "Leaf",
      description: "Бариа засал, зүү төөнүүр, сүүн бариа зэрэг уламжлалт эмчилгээний аргууд.",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1989af7f9-1768282872616.png",
      imageAlt: "Уламжлалт эмчилгээний өрөө",
      features: [
        "Бариа засал",
        "Зүү төөнүүр",
        "Сүүн бариа"
      ],
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      id: 3,
      name: "Зүрхний эмчийн үзлэг",
      icon: "Heart",
      description: "Зүрх судасны өвчлөлийг оношлох, эмчлэх иж бүрэн үйлчилгээ.",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c0f02590-1763300608129.png",
      imageAlt: "Зүрхний эмч зүрхний монитор шалгаж байгаа",
      features: [
        "Зүрхний ЭХО",
        "ЭКГ шинжилгээ",
        "Холтер бичлэг"
      ],
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      id: 4,
      name: "Сэргээн засах эмчийн үзлэг",
      icon: "Activity",
      description: "Үе мөч, булчин, мэдрэлийн эмгэгийг сэргээх физик эмчилгээ.",
      image: "https://images.unsplash.com/photo-1624566329473-1fc35a4da8a3",
      imageAlt: "Сэргээн засах эмчилгээний өрөө",
      features: [
        "Физик эмчилгээ",
        "Парафин эмчилгээ",
        "Цахилгаан соронзон ороолт"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: 5,
      name: "Амбулаторын үзлэг",
      icon: "Stethoscope",
      description: "Амбулаторын үзлэг үнэгүй. Ерөнхий эрүүл мэндийн үзлэг, зөвлөгөө.",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b1bf35aa-1765691113088.png",
      imageAlt: "Эмч өвчтөнтэй ярилцаж байгаа",
      features: [
        "Үнэгүй үзлэг",
        "Ерөнхий оношилгоо",
        "Эмчийн зөвлөгөө"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      id: 6,
      name: "Рентген оношилгоо",
      icon: "Scan",
      description: "Дижитал рентген зураг: цээж, нуруу, үе мөч, толгой зэрэг бүх төрлийн зураг.",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e8f4b63d-1768282873650.png",
      imageAlt: "Рентген аппарат",
      features: [
        "Цээжний зураг",
        "Нурууны зураг",
        "Үе мөчний зураг"
      ],
      color: "text-cyan-600",
      bgColor: "bg-cyan-50"
    }
  ];

  const handlePrevious = () => {
    setActiveService((prev) => prev === 0 ? services?.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setActiveService((prev) => prev === services?.length - 1 ? 0 : prev + 1);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-xs md:text-sm font-semibold mb-4">
            <Icon name="Stethoscope" size={16} />
            <span>Манай эмнэлгийн үйлчилгээ</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Онцлох эрүүл мэндийн үйлчилгээ
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Мэргэшсэн эмч нар, орчин үеийн эмчилгээний аргуудаар олон төрлийн эмнэлгийн иж бүрэн үйлчилгээ
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={services?.[activeService]?.image}
                  alt={services?.[activeService]?.imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-4 md:space-y-6">
              <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-xl ${services?.[activeService]?.bgColor}`}>
                <Icon name={services?.[activeService]?.icon} size={24} className={services?.[activeService]?.color} />
                <span className={`text-sm md:text-base font-semibold ${services?.[activeService]?.color}`}>
                  {services?.[activeService]?.name}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                {services?.[activeService]?.name}
              </h3>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {services?.[activeService]?.description}
              </p>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground">Үндсэн үйлчилгээ:</p>
                <div className="grid grid-cols-1 gap-2">
                  {services?.[activeService]?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <Icon name="CheckCircle2" size={18} className="text-secondary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <button
                  onClick={handlePrevious}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 hover:bg-primary/20 text-primary flex items-center justify-center transition-colors"
                  aria-label="Өмнөх үйлчилгээ"
                >
                  <Icon name="ChevronLeft" size={20} />
                </button>
                <div className="flex-1 flex items-center gap-2">
                  {services?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveService(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeService === index
                          ? 'w-8 bg-primary' :'w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                      aria-label={`Үйлчилгээ ${index + 1} руу шилжих`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 hover:bg-primary/20 text-primary flex items-center justify-center transition-colors"
                  aria-label="Дараагийн үйлчилгээ"
                >
                  <Icon name="ChevronRight" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;