import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import FeaturedServices from './components/FeaturedServices';
import TrustIndicators from './components/TrustIndicators';
import QuickLinksGrid from './components/QuickLinksGrid';
import NewsHealthTips from './components/NewsHealthTips';
import PatientTestimonials from './components/PatientTestimonials';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';



const Homepage = () => {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  const handleAppointmentClick = () => {
    setShowAppointmentModal(true);
  };

  const handleEmergencyClick = () => {
    window.location.href = 'tel:77072455';
  };

  const handleCloseModal = () => {
    setShowAppointmentModal(false);
  };

  return (
    <>
      <Helmet>
        <title>Тайхар - Эрүүл мэндийн иж бүрэн шийдэл | 24/7 Яаралтай тусламж</title>
        <meta 
          name="description" 
          content="Тайхар эмнэлэг нь орчин үеийн болон уламжлалт эмчилгээний аргуудыг хослуулан таны эрүүл мэндийг бүрэн сэргээхэд тусална" 
        />
        <meta 
          name="keywords" 
          content="эмнэлэг, эрүүл мэнд, эмчилгээ, уламжлалт эм, мэдрэл, зүрх судас, лаборатори, рентген" 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          <Breadcrumb />
          
          <HeroSection 
            onAppointmentClick={handleAppointmentClick}
            onEmergencyClick={handleEmergencyClick}
          />
          
          <FeaturedServices />
          
          <TrustIndicators />
          
          <QuickLinksGrid onAppointmentClick={handleAppointmentClick} />
          
          <PatientTestimonials />
          
          <NewsHealthTips />
        </main>

        <Footer />
      </div>

      {showAppointmentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="bg-card rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 border border-border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Цаг захиалах
              </h3>
              <button
                onClick={handleCloseModal}
                className="w-8 h-8 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Манай эмнэлгийн мэргэжилтнүүдтэй цаг захиалахын тулд доорх утасны дугаар руу залгана уу.
              </p>
              
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="flex items-start gap-3">
                  <Icon name="Info" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-foreground">
                    <p className="font-semibold mb-1">Цаг захиалах</p>
                    <p className="text-muted-foreground">
                      Цаг захиалахын тулд <span className="font-semibold text-primary">77072455</span> эсвэл <span className="font-semibold text-primary">99022455</span> дугаар руу залгана уу. Яаралтай тохиолдлын хувьд өдөр дотор цаг авах боломжтой.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-4">
                <Button
                  variant="default"
                  size="lg"
                  fullWidth
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => window.location.href = 'tel:77072455'}
                >
                  77072455 руу залгах
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  fullWidth
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => window.location.href = 'tel:99022455'}
                >
                  99022455 руу залгах
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  fullWidth
                  onClick={handleCloseModal}
                >
                  Хаах
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;