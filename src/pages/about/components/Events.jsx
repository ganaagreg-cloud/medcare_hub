import React from 'react';
import Icon from '../../../components/AppIcon';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Эрүүл мэндийн үзлэг',
      date: '2024-02-15',
      description: 'Үнэгүй эрүүл мэндийн үзлэг, зөвлөгөө өгөх арга хэмжээ',
      icon: 'Stethoscope',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Эмнэлгийн нээлттэй өдөр',
      date: '2024-03-01',
      description: 'Олон нийтэд зориулсан эмнэлгийн танилцуулга, аялал',
      icon: 'Building2',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Эрүүл мэндийн сургалт',
      date: '2024-01-20',
      description: 'Өвчнөөс урьдчилан сэргийлэх талаар олон нийтэд сургалт зохион байгуулсан',
      icon: 'GraduationCap',
      status: 'completed'
    },
    {
      id: 4,
      title: 'Сайн дурын үйл ажиллагаа',
      date: '2023-12-15',
      description: 'Хөгжлийн бэрхшээлтэй хүүхдүүдэд туслах сайн дурын арга хэмжээ',
      icon: 'Heart',
      status: 'completed'
    }
  ];

  return (
    <section id="events" className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Арга хэмжээ
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Тайхар эмнэлгийн зохион байгуулж буй болон зохион байгуулсан арга хэмжээнүүд
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events?.map((event) => (
            <div
              key={event?.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${
                  event?.status === 'upcoming' ?'bg-primary/10 text-primary' :'bg-muted text-muted-foreground'
                }`}>
                  <Icon name={event?.icon} size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {event?.title}
                    </h3>
                    {event?.status === 'upcoming' && (
                      <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        Удахгүй
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Icon name="Calendar" size={16} />
                    <span>{event?.date}</span>
                  </div>
                  <p className="text-muted-foreground">
                    {event?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;