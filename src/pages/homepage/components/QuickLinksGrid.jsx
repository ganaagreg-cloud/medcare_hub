import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickLinksGrid = ({ onAppointmentClick }) => {
  const navigate = useNavigate();

  const quickLinks = [
    {
      id: 1,
      icon: "MapPin",
      title: "Байршил & Цагийн хуваарь",
      description: "Манай эмнэлгийн байршил, ажлын цагийг харах",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      action: "locations"
    },
    {
      id: 2,
      icon: "Phone",
      title: "Холбоо барих",
      description: "Манай тусламжийн багтай холбогдох",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      action: "contact"
    },
    {
      id: 3,
      icon: "Calendar",
      title: "Цаг захиалах",
      description: "Онлайнаар эмчид цаг захиалах",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      action: "appointment"
    },
    {
      id: 4,
      icon: "UserSearch",
      title: "Эмч хайх",
      description: "Мэргэжлийн эмч нарын жагсаалт",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      action: "doctors"
    }
  ];

  const handleQuickLinkClick = (action) => {
    if (action === 'appointment') {
      onAppointmentClick();
    } else if (action === 'contact') {
      navigate('/contact');
    } else if (action === 'locations') {
      navigate('/contact');
      setTimeout(() => {
        const element = document.getElementById('location-map');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (action === 'doctors') {
      navigate('/services');
      setTimeout(() => {
        const element = document.getElementById('doctors');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold mb-4">
            <Icon name="Zap" size={16} />
            <span>Хурдан хандалт</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Үйлчилгээнд хялбар хандах
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Хамгийн их хэрэглэгддэг үйлчилгээнд хурдан, хялбар хандах
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {quickLinks?.map((link) => (
            <button
              key={link?.id}
              onClick={() => handleQuickLinkClick(link?.action)}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${link?.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={link?.icon} size={24} className={link?.color} />
              </div>
              <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {link?.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-4">
                {link?.description}
              </p>
              <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                <span>Хандах</span>
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 md:mt-16 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Үйлчилгээний талаар тусламж хэрэгтэй юу?
              </h3>
              <p className="text-sm md:text-base opacity-90">
                Манай тусламжийн баг 24/7 таны асуултад хариулахад бэлэн байна
              </p>
            </div>
            <Button
              variant="default"
              size="lg"
              iconName="Headphones"
              iconPosition="left"
              onClick={() => navigate('/contact')}
              className="bg-white text-primary hover:bg-white/90 flex-shrink-0"
            >
              Холбоо барих
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinksGrid;