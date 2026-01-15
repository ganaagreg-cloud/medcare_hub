import React from 'react';
import Icon from '../../../components/AppIcon';

const Timeline = () => {
  const milestones = [
    {
      year: "2012",
      title: "Үүсгэн байгуулагсдан",
      description: "Тайхар эмнэлэг үүд хаалгаа нээсэн",
      icon: "Building2",
      color: "bg-primary"
    },
    {
      year: "2014",
      title: "Зүрх судасны эмчилгээг нэвтрүүлсэн",
      description: "Зүрх судасны эмчилгээг нэвтрүүлсэн",
      icon: "AlertCircle",
      color: "bg-secondary"
    }/*,
    {
      year: "1998",
      title: "Cancer Center Launch",
      description: "Established comprehensive cancer treatment center offering chemotherapy, radiation therapy, and support services under one roof.",
      icon: "Heart",
      color: "bg-accent"
    },
    {
      year: "2005",
      title: "Cardiac Care Excellence",
      description: "Achieved American Heart Association Gold Plus recognition for advanced cardiac care and became regional leader in heart disease treatment.",
      icon: "Activity",
      color: "bg-primary"
    },
    {
      year: "2012",
      title: "Digital Health Innovation",
      description: "Implemented electronic health records system and launched patient portal, revolutionizing care coordination and patient engagement.",
      icon: "Smartphone",
      color: "bg-secondary"
    },
    {
      year: "2018",
      title: "Robotic Surgery Program",
      description: "Introduced robotic-assisted surgery capabilities across multiple specialties, offering minimally invasive treatment options.",
      icon: "Cpu",
      color: "bg-accent"
    },
    {
      year: "2023",
      title: "Wellness Center Opening",
      description: "Opened integrated wellness facility focusing on preventive care, physical therapy, and community health education programs.",
      icon: "Leaf",
      color: "bg-primary"
    },
    {
      year: "2025",
      title: "Top Hospital Recognition",
      description: "Ranked among nation's best hospitals by U.S. News & World Report, celebrating 40 years of excellence in patient care.",
      icon: "Trophy",
      color: "bg-secondary"
    }*/
  ];

  return (
    <section id="journey" className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Icon name="Clock" size={18} />
            <span>Бидний түүх</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            10 жилийн түүх
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Жижигхэн олон нийтийн эмнэлгээс бүс нутгийн эрүүл мэндийн салбарын манлайлагч хүртэлх бидний замнал нь инноваци, энэрэнгүй сэтгэл, өвчтөнд чиглэсэн онцгой тусламж үйлчилгээнд үнэнч байдгийг маань илтгэн харуулж байна.
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2" />
          
          <div className="space-y-8 md:space-y-12">
            {milestones?.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row gap-6 lg:gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="inline-block lg:block">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full mb-3">
                      <Icon name="Calendar" size={16} className="text-primary" />
                      <span className="text-sm font-bold text-foreground">{milestone?.year}</span>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                      {milestone?.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {milestone?.description}
                    </p>
                  </div>
                </div>
                
                <div className="hidden lg:flex items-center justify-center flex-shrink-0 relative z-10">
                  <div className={`w-14 h-14 rounded-full ${milestone?.color} flex items-center justify-center shadow-lg`}>
                    <Icon name={milestone?.icon} size={24} className="text-white" />
                  </div>
                </div>
                
                <div className="flex-1 lg:hidden" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-block p-6 md:p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl border border-border">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Icon name="TrendingUp" size={32} className="text-primary-foreground" />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                  Ирээдүйг харж
                </h4>
                <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
                 Бид 10 жилийн ойгоо тэмдэглэн өнгөрүүлэхийн сацуу эрүүл мэндийн салбарт шинэчлэл хийх, хүртээмжийг нэмэгдүүлэх, ирээдүй хойч үедээ халамжтай, чадварлаг үйлчилгээ үзүүлэх эрхэм зорилгоо үргэлжлүүлэн биелүүлэхэд тууштай байна.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;