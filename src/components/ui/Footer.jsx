import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date()?.getFullYear();

  const quickLinks = [
    { path: '/homepage', label: 'Нүүр' },
    { path: '/about', label: 'Бидний тухай' },
    { path: '/services', label: 'Үйлчилгээ' },
    { path: '/contact', label: 'Холбоо барих' }
  ];

  const services = [
    { label: 'Яаралтай тусламж', icon: 'AlertCircle' },
    { label: 'Үндсэн эмчилгээ', icon: 'Stethoscope' },
    { label: 'Мэргэжлийн эмчилгээ', icon: 'UserCheck' },
    { label: 'Эрүүл мэндийн хөтөлбөр', icon: 'Heart' }
  ];

  const contactInfo = [
    { icon: 'Phone', label: 'Яаралтай', value: '77072455' },
    { icon: 'Phone', label: 'Үндсэн утас', value: '99022455' },
    { icon: 'Mail', label: 'Имэйл', value: 'taihar2455@gmail.com' },
    { icon: 'MapPin', label: 'Хаяг', value: 'Эрдэнэт, 5-р микрийн төв зам дагуу' }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleEmergencyCall = () => {
    window.location.href = 'tel:911';
  };

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="header-logo-icon">
                <Icon name="Heart" size={24} color="#FFFFFF" />
              </div>
              <span className="text-xl font-bold text-foreground font-heading">
                Тайхар
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Манай эмнэлэг нь орчин үеийн болон уламжлалт эмчилгээний аргуудыг хослуулан таны эрүүл мэндийг бүрэн сэргээхэд тусална.
            </p>
            <div className="flex items-center gap-4">
              <button 
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Icon name="Facebook" size={20} />
              </button>
              <button 
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label="Twitter"
              >
                <Icon name="Twitter" size={20} />
              </button>
              <button 
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Icon name="Instagram" size={20} />
              </button>
              <button 
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Icon name="Linkedin" size={20} />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-foreground font-semibold font-heading mb-4">Холбоосууд</h3>
            <ul className="space-y-3">
              {quickLinks?.map((link) => (
                <li key={link?.path}>
                  <button
                    onClick={() => handleNavigation(link?.path)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link?.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold font-heading mb-4">Манай үйлчилгээ</h3>
            <ul className="space-y-3">
              {services?.map((service) => (
                <li key={service?.label} className="flex items-center gap-2">
                  <Icon name={service?.icon} size={16} className="text-secondary" />
                  <span className="text-muted-foreground text-sm">{service?.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold font-heading mb-4">Холбоо барих</h3>
            <ul className="space-y-4">
              {contactInfo?.map((info) => (
                <li key={info?.label} className="flex items-start gap-3">
                  <Icon name={info?.icon} size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">{info?.label}</p>
                    <p className="text-sm text-foreground font-medium">{info?.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Тайхар эмнэлэг. Бүх эрх хуулиар хамгаалагдсан. | Таны эрүүл мэндийн итгэлт түнш.
            </p>
            <div className="flex items-center gap-6">
              <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Нууцлалын бодлого
              </button>
              <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Үйлчилгээний нөхцөл
              </button>
              <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Хүртээмж
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-emergency/10 border border-emergency/20 rounded-lg">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Icon name="AlertCircle" size={24} className="text-emergency" />
              <div>
                <p className="text-sm font-semibold text-foreground">24/7 Яаралтай үйлчилгээ</p>
                <p className="text-xs text-muted-foreground">Танд хэрэгтэй үед шуурхай тусламж</p>
              </div>
            </div>
            <button
              onClick={handleEmergencyCall}
              className="px-6 py-2 bg-emergency text-emergency-foreground rounded-lg font-semibold text-sm hover:shadow-emergency transition-all"
            >
              77072455 дуудах
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;