import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InsuranceInfo = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Үнэ төлбөрийн мэдээлэл
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Бид танд шудрага үнэ төлбөртэй үйлчилгээ үзүүлэх боломжтой
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name="DollarSign" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Үнэ төлбөр</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Шудрага үнэ</h4>
                    <p className="text-sm text-muted-foreground">Бүх үйлчилгээнд хүртээмжтэй үнэ төлбөр</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Амбулаторын үзлэг үнэгүй</h4>
                    <p className="text-sm text-muted-foreground">Ерөнхий үзлэг үнэгүй үзүүлэгдэнэ</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Өдрийн эмчилгээ</h4>
                    <p className="text-sm text-muted-foreground">Өдрийн 3 хоолтой, ариун өрөөтэй</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Тодорхой үнэ</h4>
                    <p className="text-sm text-muted-foreground">Эмчилгээний өмнө үнэ төлбөрийг мэдэгдэнэ</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Холбоо барих</h3>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                Үнэ төлбөр, эмчилгээний талаар дэлгэрэнгүй мэдээлэл авахыг хүсвэл бидэнтэй холбогдоно уу:
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">77072455</p>
                    <p className="text-xs text-muted-foreground">99022455</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <p className="text-sm font-medium text-foreground">taihar2455@gmail.com</p>
                </div>

                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Даваа-Баасан: 9:00-18:00</p>
                    <p className="text-xs text-muted-foreground">24/7 Яаралтай тусламж</p>
                  </div>
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
                Одоо дуудах
              </Button>
            </div>
          </div>

          <div className="mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8 text-center">
            <Icon name="Info" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Дэлгэрэнгүй мэдээлэл
            </h3>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Эмчилгээний үнэ төлбөр, шинжилгээний үнэ, өдрийн эмчилгээний талаар дэлгэрэнгүй мэдээлэл авахыг хүсвэл 77072455 эсвэл 99022455 дугаар руу холбогдоно уу.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceInfo;