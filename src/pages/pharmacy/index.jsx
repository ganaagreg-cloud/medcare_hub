import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import CategoryGrid from './components/CategoryGrid';
import MedicineGrid from './components/MedicineGrid';

const Pharmacy = () => {
  const [selectedCategory, setSelectedCategory] = useState('Бүгд');

  return (
    <>
      <Helmet>
        <title>Эмийн сан - Тайхар</title>
        <meta name="description" content="Тайхар эмнэлгийн эмийн сан - эм, амин дэм, ээж хүүхдийн бүтээгдэхүүн, хүнс" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <Breadcrumb />
          </div>

          <section className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 md:mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-4">
                  <Icon name="Pill" size={16} />
                  <span>Эмийн сан</span>
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
                  Эм, эмнэлгийн хэрэгсэл
                </h1>
                <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                  Тайхар эмнэлгийн эмийн санд эм, амин дэм, ээж хүүхдийн бүтээгдэхүүн, эрүүл хүнс зэрэг олон төрлийн бүтээгдэхүүн байдаг
                </p>
              </div>

              <CategoryGrid
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />

              <MedicineGrid selectedCategory={selectedCategory} />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Pharmacy;