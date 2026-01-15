import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AwardsAccreditations = () => {
  const awards = [
  {
    icon: "Award",
    title: "Шилдэг эмнэлэг",
    organization: "Аймгийн эмнэлэгийн холбоо",
    year: "2025",
    description: "Аймагтаа хамгийн сайн эмнэлгээр тодров"
  },
  {
    icon: "Star",
    title: "5 одтой чанарын үнэлгээ",
    organization: "Эрүүл мэндийн яам",
    year: "2024-2025",
    description: "Эмнэлгийн ерөнхий чанар болон өвчтөний аюулгүй байдлын хамгийн өндөр үнэлгээ"
  },
  {
    icon: "Shield",
    title: "Сувилагчийн шилдэг үйлчилгээ",
    organization: "Сувилагчдын холбоо",
    year: "2023-2027",
    description: "Сувилахуйн үйлчилгээ болон өвчтөний чанартай асаргааны шилдэг байдал"
  },
  {
    icon: "Heart",
    title: "Зүрх судасны тусламжийн шилдэг байдал",
    organization: "Зүрх судасны эмч нарын холбоо",
    year: "2025",
    description: "Зүрхний шигдээс болон цус харвалтын эмчилгээний алтан түвшний үнэлгээ"
  },
  {
    icon: "Baby",
    title: "Хүүхэд найрсаг эмнэлэг",
    organization: "ДЭМБ/НҮБХХ санаачилга",
    year: "2024",
    description: "Хөхүүл эхийн сүүгээр хооллох болон эх хүүхдийн холбоог дэмжих амлалт"
  },
  {
    icon: "Leaf",
    title: "Ногоон эрүүл мэндийн манлайлагч",
    organization: "Байгаль орчны холбоо",
    year: "2025",
    description: "Эрүүл мэндийн тогтвортой байдлын байгаль орчны шилдэг туршлага"
  }];


  const accreditations = [
  {
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_14c11476b-1768398033122.png",
    logoAlt: "Эрүүл мэндийн чанар, аюулгүй байдлын стандартын баталгаажуулалтын алтан одтой тэмдэг",
    name: "Эрүүл мэндийн хороо",
    description: "Алтан тэмдгийн баталгаажуулалт"
  },
  {
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_131046ca8-1768398033168.png",
    logoAlt: "Мэс заслын шилдэг байдлын стандартыг илэрхийлсэн цэнхэр цагаан загвартай мэс засалчдын коллежийн баталгаажуулалтын тэмдэг",
    name: "Мэс засалчдын коллеж",
    description: "Баталгаажсан гэмтлийн төв"
  },
  {
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1858411bb-1768398033126.png",
    logoAlt: "Лабораторийн шилдэг байдлын баталгаажуулалтын улаан загалмайн бэлгэтэй эмнэлгийн шинжээчдийн коллежийн тэмдэг",
    name: "Эмнэлгийн шинжээчдийн коллеж",
    description: "Лабораторийн баталгаажуулалт"
  },
  {
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1b770f120-1768076146116.png",
    logoAlt: "Дүрс оношилгооны чанарын стандартын цэнхэр дугуй загвартай рентген зургийн эмч нарын коллежийн баталгаажуулалтын тэмдэг",
    name: "Рентген зургийн эмч нарын коллеж",
    description: "Дүрс оношилгооны шилдэг байдал"
  }];


  const qualityMetrics = [
  { label: "Өвчтөний сэтгэл ханамж", value: "98%", icon: "ThumbsUp" },
  { label: "Аюулгүй байдлын үнэлгээ", value: "A+", icon: "Shield" },
  { label: "Дахин хэвтэх хувь", value: "8.2%", icon: "TrendingDown" },
  { label: "Халдвар хамгаалалт", value: "99.5%", icon: "CheckCircle" }];


  return (
    <section id="awards" className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Icon name="Trophy" size={18} />
            <span>Хүлээн зөвшөөрөгдсөн байдал ба шилдэг чанар</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Шагнал ба баталгаажуулалт
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Манай шилдэг чанарын амлалтыг эрүүл мэндийн тэргүүлэх байгууллагууд хүлээн зөвшөөрч, өвчтөний гайхалтай үр дүнд тусгагдсан байна.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 md:mb-16">
          {qualityMetrics?.map((metric, index) =>
          <div
            key={index}
            className="p-6 bg-card rounded-xl border border-border text-center hover:shadow-lg transition-all duration-300">

              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                <Icon name={metric?.icon} size={24} className="text-secondary" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {metric?.value}
              </p>
              <p className="text-sm text-muted-foreground">{metric?.label}</p>
            </div>
          )}
        </div>
        
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8 text-center">
            Сүүлийн үеийн шагнал ба хүлээн зөвшөөрөгдсөн байдал
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards?.map((award, index) =>
            <div
              key={index}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={award?.icon} size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {award?.title}
                    </h4>
                    <p className="text-sm text-primary font-medium">{award?.organization}</p>
                  </div>
                  <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-foreground">
                    {award?.year}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {award?.description}
                </p>
              </div>
            )}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8 text-center">
            Баталгаажуулалт ба гэрчилгээ
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {accreditations?.map((accreditation, index) =>
            <div
              key={index}
              className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300 text-center">

                <div className="relative overflow-hidden w-20 h-20 mx-auto mb-4 rounded-lg">
                  <Image
                  src={accreditation?.logo}
                  alt={accreditation?.logoAlt}
                  className="w-full h-full object-cover" />

                </div>
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  {accreditation?.name}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {accreditation?.description}
                </p>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-12 p-6 md:p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Icon name="FileText" size={28} className="text-primary-foreground" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-1">
                  Чанар ба аюулгүй байдлын тайлан
                </h4>
                <p className="text-sm text-muted-foreground">
                  Манай дэлгэрэнгүй чанарын үзүүлэлт болон өвчтөний аюулгүй байдлын өгөгдлийг үзнэ үү
                </p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all whitespace-nowrap">
              <Icon name="Download" size={20} />
              <span>Тайлан татах</span>
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default AwardsAccreditations;