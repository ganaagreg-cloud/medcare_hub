import React from 'react';
import Icon from '../../../components/AppIcon';

const LocationMap = () => {
  const locations = [
    {
      id: 1,
      name: "Тайхар эмнэлэг",
      address: "5-р микрийн төв зам дагуу",
      city: "Эрдэнэт хот, Орхон аймаг",
      phone: "77072455, 99022455",
      email: "taihar2455@gmail.com",
      hours: "Даваа-Баасан: 9:00-18:00, 24/7 Яаралтай",
      lat: 49.0339,
      lng: 104.0828,
      description: "Номин, Bozolo хувцасны дэлгүүрээс баруун тийш, Оч хүүхдийн хувцасны дэлгүүрийн хажууд"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Манай байршил
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Тайхар эмнэлэг Эрдэнэт хотод байрладаг
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {locations?.map((location) => (
                <div
                  key={location?.id}
                  className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {location?.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {location?.address}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {location?.city}
                      </p>
                      {location?.description && (
                        <p className="text-xs text-muted-foreground mt-2 italic">
                          {location?.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3 pl-16">
                    <div className="flex items-center gap-3">
                      <Icon name="Phone" size={18} className="text-secondary" />
                      <a
                        href={`tel:${location?.phone?.split(',')?.[0]?.trim()}`}
                        className="text-sm text-foreground hover:text-primary transition-colors"
                      >
                        {location?.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Icon name="Mail" size={18} className="text-secondary" />
                      <a
                        href={`mailto:${location?.email}`}
                        className="text-sm text-foreground hover:text-primary transition-colors"
                      >
                        {location?.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Icon name="Clock" size={18} className="text-secondary" />
                      <span className="text-sm text-foreground">
                        {location?.hours}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <a
                      href={`https://www.google.com/maps?q=${location?.lat},${location?.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      <Icon name="Navigation" size={18} />
                      <span>Газрын зураг дээр харах</span>
                    </a>
                  </div>
                </div>
              ))}

              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                <div className="flex items-start gap-4">
                  <Icon name="Info" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base font-semibold text-foreground mb-2">
                      Зааварчилгаа
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Эрдэнэт хотын 5-р микрийн төв замаар явж, Номин болон Bozolo хувцасны дэлгүүрүүдээс баруун тийш, Оч хүүхдийн хувцасны дэлгүүрийн хажууд байрладаг.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <strong>Facebook:</strong> Тайхар эмнэлэг
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[500px] lg:h-full min-h-[400px] rounded-xl overflow-hidden border border-border shadow-lg">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Тайхар эмнэлгийн байршил"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${locations?.[0]?.lat},${locations?.[0]?.lng}&z=15&output=embed`}
                className="border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;