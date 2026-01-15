import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 mb-6">
            <Icon name="Phone" size={32} className="text-primary" />
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Тайхар эмнэлэгтэй холбогдох
          </h1>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 md:mb-10">
            Бид танд туслахад бэлэн байна. Асуулт, санал хүсэлт, эсвэл цаг захиалах бол бидэнтэй холбогдоно уу.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="flex flex-col items-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">Утас</h3>
              <p className="text-lg font-bold text-foreground">77072455</p>
              <p className="text-lg font-bold text-foreground">99022455</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Icon name="Mail" size={24} className="text-secondary" />
              </div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">Имэйл</h3>
              <p className="text-base font-medium text-foreground">taihar2455@gmail.com</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Icon name="Clock" size={24} className="text-accent" />
              </div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">Ажлын цаг</h3>
              <p className="text-base font-medium text-foreground">Даваа - Баасан: 9:00 - 18:00</p>
              <p className="text-sm text-muted-foreground">24/7 Яаралтай тусламж</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;