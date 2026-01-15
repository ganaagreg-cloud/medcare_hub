import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FeaturedServices = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
  {
    id: 1,
    name: "Cardiology",
    icon: "Heart",
    description: "Comprehensive heart care with advanced diagnostic tools and treatment options for all cardiovascular conditions.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16e68031a-1767382239991.png",
    imageAlt: "Cardiologist in white coat examining heart monitor displaying ECG readings in modern medical facility with advanced cardiac equipment",
    features: ["24/7 Emergency Care", "Advanced Diagnostics", "Minimally Invasive Procedures"],
    color: "text-red-600",
    bgColor: "bg-red-50"
  },
  {
    id: 2,
    name: "Orthopedics",
    icon: "Bone",
    description: "Expert treatment for bone, joint, and muscle conditions using the latest surgical and non-surgical techniques.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e7ec1171-1767106697996.png",
    imageAlt: "Orthopedic surgeon in blue scrubs examining patient knee joint with physical therapist in bright rehabilitation room with exercise equipment",
    features: ["Sports Medicine", "Joint Replacement", "Physical Therapy"],
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    id: 3,
    name: "Pediatrics",
    icon: "Baby",
    description: "Compassionate care for children from infancy through adolescence with specialized pediatric expertise.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b8771074-1766904917627.png",
    imageAlt: "Friendly female pediatrician in colorful scrubs with stethoscope examining smiling young child while parent watches in cheerful examination room",
    features: ["Well-Child Visits", "Immunizations", "Developmental Screening"],
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    id: 4,
    name: "Women\'s Health",
    icon: "Heart",
    description: "Comprehensive healthcare services for women at every stage of life, from adolescence through menopause.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e4d15f29-1766091505458.png",
    imageAlt: "Female gynecologist in white coat consulting with pregnant woman patient in comfortable modern clinic room with ultrasound equipment",
    features: ["Obstetrics", "Gynecology", "Prenatal Care"],
    color: "text-pink-600",
    bgColor: "bg-pink-50"
  },
  {
    id: 5,
    name: "Neurology",
    icon: "Brain",
    description: "Advanced diagnosis and treatment of neurological disorders with cutting-edge technology and expert care.",
    image: "https://images.unsplash.com/photo-1666214273506-c2984f1d3301",
    imageAlt: "Neurologist in white coat analyzing brain scan images on multiple computer monitors in high-tech neurology department with MRI equipment",
    features: ["Stroke Care", "Epilepsy Treatment", "Memory Disorders"],
    color: "text-indigo-600",
    bgColor: "bg-indigo-50"
  },
  {
    id: 6,
    name: "Emergency Medicine",
    icon: "AlertCircle",
    description: "Round-the-clock emergency care with rapid response teams and state-of-the-art trauma facilities.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d6f1d24f-1767988677449.png",
    imageAlt: "Emergency medical team in red trauma uniforms rushing patient on gurney through modern emergency department with medical equipment",
    features: ["Trauma Center", "Critical Care", "Rapid Response"],
    color: "text-red-600",
    bgColor: "bg-red-50"
  }];


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
            <span>Our Medical Specialties</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Featured Healthcare Services
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Comprehensive medical care across multiple specialties with board-certified physicians and advanced treatment options
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
                  decoding="async" />

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
                {services?.[activeService]?.name} Department
              </h3>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {services?.[activeService]?.description}
              </p>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground">Key Services:</p>
                <div className="grid grid-cols-1 gap-2">
                  {services?.[activeService]?.features?.map((feature, index) =>
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <Icon name="CheckCircle2" size={18} className="text-secondary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <button
                  onClick={handlePrevious}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 hover:bg-primary/20 text-primary flex items-center justify-center transition-colors"
                  aria-label="Previous service">

                  <Icon name="ChevronLeft" size={20} />
                </button>
                <div className="flex-1 flex items-center gap-2">
                  {services?.map((_, index) =>
                  <button
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeService === index ?
                    'w-8 bg-primary' : 'w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50'}`
                    }
                    aria-label={`Go to service ${index + 1}`} />

                  )}
                </div>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 hover:bg-primary/20 text-primary flex items-center justify-center transition-colors"
                  aria-label="Next service">

                  <Icon name="ChevronRight" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default FeaturedServices;