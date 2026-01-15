import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              <Icon name="Heart" size={18} />
              <span>-2012 оноос хойш олон нийтэд үйлчилж байна</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Таны эрүүл мэнд, Бидний мэргэжил, <span className="text-primary">Хамтдаа</span>
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Тайхар эмнэлэгийн эрүүл мэндийн үйлчилгээ нь хүний эрүүл мэндийг нэгт тавьж эмчилгээгээ үзүүлдэг. Манай баг орчин үеийн эмнэлгийн тоног төхөөрөмжийг мэрэгжлийн эмчтэй хослуулан таны эмчилгээ хийлгэж байх хугацааны бүх шатанд хамт байдаг.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-3 px-4 py-3 bg-card rounded-lg border border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Users" size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">150+</p>
                  <p className="text-xs text-muted-foreground">Эмч мэргэжилтэн</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-3 bg-card rounded-lg border border-border">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Icon name="Award" size={20} className="text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">40+</p>
                  <p className="text-xs text-muted-foreground">Жилийн туршлага</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-3 bg-card rounded-lg border border-border">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Star" size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">98%</p>
                  <p className="text-xs text-muted-foreground">Өвчтөний сэтгэл</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
              <Image
                src="https://scontent.fuln4-3.fna.fbcdn.net/v/t39.30808-6/555433694_804831135618967_5020451110579690767_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=03kiDW5x_aIQ7kNvwEyy-oY&_nc_oc=Adk8erA05jRLUWmNEj-yiFrMW94FfYP5APJr9x-mEH9FD_mOxL7KfustNDp15rUYMOc&_nc_zt=23&_nc_ht=scontent.fuln4-3.fna&_nc_gid=y_taysEZsIb4zNxAZ87F4g&oh=00_AfpQID_wTqRFgEOgo5-bCmgenNqZ--AXAfQkTcsIFjhOaQ&oe=696E5CA4"
                alt="Тайхар эмнэлэгийн орчин үеийн барилга, мэргэжилтэн эмч нар"
                className="w-full h-full object-cover"
                priority={true}
                loading="eager"
                fetchpriority="high" />

            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card p-4 md:p-6 rounded-xl shadow-lg border border-border max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <Icon name="Shield" size={24} className="text-primary" />
                <p className="font-semibold text-foreground">Өвчтөний нууц хамгаалалт</p>
              </div>
              <p className="text-sm text-muted-foreground">Таны нууц ба аюулгүй байдал бидний хамгийн чухал зүйл</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;