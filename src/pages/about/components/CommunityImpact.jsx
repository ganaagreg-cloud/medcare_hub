import React from 'react';
import Icon from '../../../components/AppIcon';


const CommunityImpact = () => {
  const impactStats = [
  {
    icon: "Users",
    value: "250,000+",
    label: "Жилд үйлчилгээ үзүүлсэн өвчтөн",
    color: "text-primary"
  },
  {
    icon: "Heart",
    value: "$12M",
    label: "Олон нийтийн хөтөлбөр",
    color: "text-secondary"
  },
  {
    icon: "GraduationCap",
    value: "500+",
    label: "Эрүүл мэндийн сургалтын арга хэмжээ",
    color: "text-accent"
  },
  {
    icon: "Handshake",
    value: "50+",
    label: "Олон нийттэй хамтран ажиллагсан",
    color: "text-primary"
  }];


  const programs = [
  {
    title: "Үнэгүй эрүүл мэндийн үзлэг",
    description: "Сар бүр олон нийтийн эрүүл мэндийн ярмарканд цусны даралт, сахарын болон холестерины үнэгүй шинжилгээ хийдэг.",
    icon: "Activity",
    participants: "Жилд 15,000+ хүн"
  },
  {
    title: "Залуучуудын эрүүл мэндийн хөтөлбөр",
    description: "Сургуульд дэх эрүүл амьдралын хэвшил, хоолны тэжээл, сэтгэлийн эрүүл мэндийн хөтөлбөрүүд.",
    icon: "Users",
    participants: "30 сургууль"
  },
  {
    title: "Ахмад настануудын асаргаа",
    description: "Уналтаас урьдчилан сэргийлэх, эмийн удирдлага, нийгмийн үйл ажиллагаанд зориулсан хөтөлбөрүүд.",
    icon: "Heart",
    participants: "5,000+ ахмад настан"
  },
  {
    title: "Санхүүгийн тусламж",
    description: "Өрхийн хөнгөлөлтийн төлбөрийн сонголт ба хандивын асаргааны хөтөлбөрүүд.",
    icon: "DollarSign",
    participants: "$8M тусламж"
  }];


  return (
    <section id="community-programs" className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            <Icon name="Globe" size={18} />
            <span>Олон нийтийн үйл ажиллагаа</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Олон нийтийн хөтөлбөр & Арга хэмжээ
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Манай эмнэлгийн хананаас гадна, бид олон нийтийн эрүүл мэндийг дэмжих зорилгоор олон хөтөлбөр, хамтын ажиллагаа явуулж байна.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {impactStats?.map((stat, index) =>
          <div
            key={index}
            className="p-4 md:p-6 bg-card rounded-xl border border-border text-center hover:shadow-lg transition-all duration-300">

              <div className={`w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 rounded-full bg-muted flex items-center justify-center`}>
                <Icon name={stat?.icon} size={20} className={stat?.color} />
              </div>
              <p className="text-xl md:text-3xl font-bold text-foreground mb-1 md:mb-2">
                {stat?.value}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">{stat?.label}</p>
            </div>
          )}
        </div>
        
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8 text-center">
            Олон нийтийн хөтөлбөрүүд
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs?.map((program, index) =>
            <div
              key={index}
              className="p-6 md:p-8 bg-card rounded-xl border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300">

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={program?.icon} size={24} className="text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {program?.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {program?.description}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted rounded-full">
                      <Icon name="Users" size={14} className="text-primary" />
                      <span className="text-xs font-medium text-foreground">
                        {program?.participants}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="p-6 md:p-8 lg:p-10 bg-gradient-to-r from-secondary/10 via-primary/10 to-accent/10 rounded-2xl border border-border">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 flex-1">
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Icon name="Handshake" size={28} className="text-secondary-foreground" />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                  Олон нийтийн эрүүл мэндэд оролцоорой
                </h4>
                <p className="text-sm md:text-base text-muted-foreground">
                  Манай сайн дурын хөтөлбөрүүдэд оролцож, эрүүл мэндийн арга хэмжээнд хамтран ажиллаарай.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:shadow-lg transition-all whitespace-nowrap">
                <Icon name="Calendar" size={20} />
                <span>Арга хэмжээ үзэх</span>
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-card text-foreground border border-border rounded-lg font-semibold hover:bg-muted transition-all whitespace-nowrap">
                <Icon name="Mail" size={20} />
                <span>Холбоо барих</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default CommunityImpact;