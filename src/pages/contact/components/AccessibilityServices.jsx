import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AccessibilityServices = () => {
  const accessibilityFeatures = [
    {
      id: 1,
      icon: "Accessibility",
      title: "Хүртээмжтэй үйлчилгээ",
      description: "Бүх өрөө хөдөлгөөн хөгжлтэй хүмүүст хүртээмжтэй",
      available: true
    },
    {
      id: 2,
      icon: "Languages",
      title: "Орчуулгын үйлчилгээ",
      description: "Монгол, англи, орос хэлээр үйлчилгээ үзүүлэх боломжтой",
      available: true
    },
    {
      id: 3,
      icon: "Volume2",
      title: "Сонсголын тусламж",
      description: "Сонсголын бэрхшээлтэй өвчтөнд тусламж үзүүлнэ",
      available: true
    },
    {
      id: 4,
      icon: "Eye",
      title: "Харааны тусламж",
      description: "Харааны бэрхшээлтэй өвчтөнд том үсэгтэй материал",
      available: true
    },
    {
      id: 5,
      icon: "Users",
      title: "Хамтрагч асрагч",
      description: "Өвчтөнд хамтрагч асрагчтай ирэх боломжтой",
      available: true
    },
    {
      id: 6,
      icon: "Car",
      title: "Тээврийн үйлчилгээ",
      description: "Хөдөлгөөн хөгжлтэй өвчтөнд тээврийн тусламж",
      available: true
    },
    {
      id: 7,
      icon: "Home",
      title: "Уян өрөө",
      description: "Хувийн өрөө, уян зөвлөлдөх өрөөтэй",
      available: true
    },
    {
      id: 8,
      icon: "FileText",
      title: "Бичиг баримт",
      description: "Эмнэлзүйн бичиг баримт хүртээмжтэй хэлбэртэй",
      available: true
    }
  ];

  const languageServices = [
    "Монгол", "Англи", "Орос", "Хятад", "Солонгос", "Япон"
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              <Icon name="Heart" size={18} />
              <span>Инклюзив хүртээмжийн үйлчилгээ</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Хүртээмжийн үйлчилгээ
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
              Тайхар эмнэлэг бүх өвчтөнд хүртээмжтэй эрүүл мэндийн үйлчилгээ үзүүлэхэд тийм зориулалттай.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            {accessibilityFeatures?.map((feature) => (
              <div
                key={feature?.id}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={feature?.icon} size={24} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{feature?.title}</h3>
                      {feature?.available && (
                        <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{feature?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Icon name="Languages" size={24} className="text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Хэлний үйлчилгээ</h3>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                Бид дараах хэлнүүдээр үйлчилгээ үзүүлдэг:
              </p>

              <div className="grid grid-cols-2 gap-2 mb-6">
                {languageServices?.map((language, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Icon name="Check" size={14} className="text-secondary flex-shrink-0" />
                    <span className="text-sm text-foreground">{language}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  * Дараах хэлнүүдээр үйлчилгээ үзүүлдэг. 24 цагаар холбогдоно уу.
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Icon name="FileText" size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Тусламж хүсэх</h3>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                Таны айлчлал төгс байхын түлд бид энд байна. Дараах тусламж хүсэнэ үү:
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Хөдөлгөөний тусламж</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Хамтрагч асрагчтай ирэх</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Уян өрөө</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Урт хугацааны цаг</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Хүртээмжтэй бичиг баримт</span>
                </div>
              </div>

              <Button
                variant="default"
                size="lg"
                fullWidth
                iconName="Phone"
                iconPosition="left"
                onClick={() => window.location.href = 'tel:77072455'}
              >
                Тусламж хүсэх
              </Button>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Хүртээмжийн бидний амлалт
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Тайхар эмнэлэг бүх өвчтөнд тэгш эрхтэй эрүүл мэндийн үйлчилгээ үзүүлэхэд тийм зориулалттай.
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Хэрэв та хүртээмжийн асуудалтай тулгарвал эсвэл санал бодол байвал бидэнтэй холбогдоно уу.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="default"
                    size="default"
                    iconName="Mail"
                    iconPosition="left"
                    onClick={() => window.location.href = 'mailto:taihar2455@gmail.com'}
                  >
                    Имэйл илгээх
                  </Button>
                  <Button
                    variant="outline"
                    size="default"
                    iconName="Phone"
                    iconPosition="left"
                    onClick={() => window.location.href = 'tel:77072455'}
                  >
                    77072455 дуудах
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={24} className="text-success" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Өндөр чанартай</h4>
              <p className="text-sm text-muted-foreground">Бүх үйлчилгээ чанарын стандарт хангана</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} className="text-success" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Сургамжлагдсан баг</h4>
              <p className="text-sm text-muted-foreground">Бүх ажилтан өвчтөн анхааралтай</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} className="text-success" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">24/7 Тусламж</h4>
              <p className="text-sm text-muted-foreground">Өдөр бүр хүртээмжтэй</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessibilityServices;