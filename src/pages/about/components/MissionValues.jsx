import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionValues = () => {
  const values = [
    {
      icon: "Heart",
      title: "Халамжтай асаргаа",
      description: "Бид өвчтөн бүрийг өрөөл, хүндэтгэл, нэр төрөөр хандаж, эрүүл мэндийн үйлчилгээ нь хүний хувь хүний явдал гэдгийг ойлгодог."
    },
    {
      icon: "Shield",
      title: "Эмнэлгийн чанар",
      description: "Хамгийн өндөр эмнэлгийн стандартыг баримтлах бидний үргэлжлэл нь танд дэлхийн чанарын асаргаа үзүүлэх баталгаа болно."
    },
    {
      icon: "Users",
      title: "Өвчтөнтэй хамтран ажиллах",
      description: "Бид өвчтөн нь өөрсдийн эрүүл мэндийн аялалын идэвхтэй оролцогч байдаг хамтын эрүүл мэндийн үйлчилгээнд итгэдэг."
    },
    {
      icon: "Lightbulb",
      title: "Шинэтгэл",
      description: "Бид өвчтөний үр дүнг сайжруулахын тулд хамгийн сүүлийн үеийн эмнэлгийн технологи, арга замыг тасралтгүй нэвтрүүлж байдаг."
    },
    {
      icon: "Globe",
      title: "Олон нийтийн анхаарал",
      description: "Олон нийтийн чухал тулгуур хүчин бид бүх иргэдийн эрүүл мэндийг сайжруулахад зориулагдсан."
    },
    {
      icon: "Award",
      title: "Шудрага байдал",
      description: "Ил тод байдал, үнэнч, өвчтөний асаргаанд хийх бүх шийдвэрийг чиглүүлдэг ёс зүй."
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Icon name="Target" size={18} />
            <span>Бидний үнэт зүйл</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Эрхэм зорилго & үнэт үзэмж
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Эрүүл мэндийн салбарт тэргүүлэгч байж, хүн төвтэй тусламж үйлчилгээгээр дамжуулан эрүүл нийгмийг цогцлооно
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values?.map((value, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon name={value?.icon} size={24} className="text-primary" />
              </div>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                {value?.title}
              </h3>
              
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {value?.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-16 p-6 md:p-8 lg:p-10 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl border border-border">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center">
                <Icon name="Quote" size={32} className="text-primary-foreground" />
              </div>
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-3 italic">
                "эрүүл биед саруул ухаан оршино."
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                Др. Оюунцэцэг, Эмнэлгийн захирал
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionValues;