import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import MissionValues from './components/MissionValues';
import MedicalTeam from './components/MedicalTeam';
import AwardsAccreditations from './components/AwardsAccreditations';
import CommunityImpact from './components/CommunityImpact';
import Timeline from './components/Timeline';
import DirectorMessage from './components/DirectorMessage';
import Events from './components/Events';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Бидний тухай - Тайхар | Таны эрүүл мэнд, Бидний мэргэжил, Хамтдаа</title>
        <meta 
          name="description" 
          content="Тайхар эмнэлэг 40 жилийн туршлагатай, өвчтөнүүдэд хамгийн сайн эмнэлгийн үйлчилгээ үзүүлдэг. Манай мэргэжилтэн баг, орчин үеийн тоног төхөөрөмж, олон нийтийн үйл ажиллагаатай танилцаарай" 
        />
        <meta name="keywords" content="Тайхар эмнэлэг, эмнэлгийн түүх, эмчийн баг, эмнэлгийн тоног төхөөрөмж, олон нийтийн эрүүл мэнд, өвчтөний асаргаа" />
      </Helmet>

      <Header />
      
      <main className="bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Breadcrumb />
        </div>

        <HeroSection />
        <DirectorMessage />
        <MissionValues />
        <Timeline />
        <MedicalTeam />
        <AwardsAccreditations />
        <Events />
        <CommunityImpact />
      </main>

      <Footer />
    </>
  );
};

export default About;