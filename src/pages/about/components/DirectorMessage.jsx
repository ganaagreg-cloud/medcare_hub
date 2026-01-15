import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const DirectorMessage = () => {
  return (
    <section id="director" className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Icon name="User" size={18} />
            <span>Захирлын мэндчилгээ</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Захирлын мэндчилгээ
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              <div className="lg:col-span-2 relative">
                <div className="aspect-[3/4] lg:aspect-auto lg:h-full overflow-hidden">
                  <Image
                    src="https://scontent.fuln6-1.fna.fbcdn.net/v/t39.30808-6/341117022_925837005208701_6861874126535821585_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=-JXArjrpnfIQ7kNvwF6bNbq&_nc_oc=Admzt-nrUDPYrk3TDm8FR5c15okEwX6Zio0c_26hUY3CMJ7tAfUvkt8JYHcyPuKNGwzxhHIoxlHeI3kSy6j5-4W0&_nc_zt=23&_nc_ht=scontent.fuln6-1.fna&_nc_gid=m3crQC_rYeMN3cAPhocOSw&oh=00_AfpcqDcZroOYkahl24KkT6Of0Vu9Y25V4RhL_6MXylLFNQ&oe=696D6FC6"
                    alt="Тайхар эмнэлгийн захирал албан ёсны хувцастай, эмнэлгийн орчинд"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async" />


                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">Др. Оюунцэцэг</h3>
                  <p className="text-sm text-muted-foreground">Эмнэлгийн захирал</p>
                </div>
              </div>

              <div className="lg:col-span-3 p-6 md:p-8 lg:p-10">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Quote" size={32} className="text-primary flex-shrink-0" />
                    <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                      <p>
                        Сайн байна уу , 


                      </p>
                      <p>
                       Манай эмнэлэг нь Монгол Улсын эрүүл мэндийн салбарт чанартай, хүртээмжтэй тусламж үйлчилгээ үзүүлэх эрхэм зорилготойгоор үйл ажиллагаагаа явуулж байна. 
                      </p>
                      <p>
                        Бидний гол зорилго бол өвчтөн төвтэй, хүнлэг, ёс зүйтэй, мэргэжлийн өндөр түвшний үйлчилгээг үзүүлэх явдал юм.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Award" size={16} className="text-primary" />
                        <span>Эмнэлгийн доктор</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Briefcase" size={16} className="text-primary" />
                        <span>25 жилийн туршлага</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="GraduationCap" size={16} className="text-primary" />
                        <span>Ерөнхий эмч</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default DirectorMessage;