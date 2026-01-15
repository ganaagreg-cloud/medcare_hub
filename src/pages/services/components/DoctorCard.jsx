import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DoctorCard = ({ doctor }) => {
  const handleBookAppointment = () => {
    console.log(`Booking appointment with Dr. ${doctor?.name}`);
  };

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative h-64 md:h-72 overflow-hidden">
        <Image
          src={doctor?.image}
          alt={doctor?.imageAlt}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute top-4 right-4">
          <div className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold flex items-center gap-1">
            <Icon name="Star" size={14} fill="currentColor" />
            <span>{doctor?.rating}</span>
          </div>
        </div>
      </div>
      <div className="p-4 md:p-5 lg:p-6">
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">
          Dr. {doctor?.name}
        </h3>
        <p className="text-sm text-primary font-medium mb-3">{doctor?.specialty}</p>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {doctor?.bio}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" size={16} className="text-muted-foreground" />
            <span className="text-xs text-foreground">{doctor?.education}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Briefcase" size={16} className="text-muted-foreground" />
            <span className="text-xs text-foreground">{doctor?.experience} years experience</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Languages" size={16} className="text-muted-foreground" />
            <span className="text-xs text-foreground">{doctor?.languages?.join(', ')}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          {doctor?.certifications?.map((cert, index) => (
            <div key={index} className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium">
              {cert}
            </div>
          ))}
        </div>

        <Button
          variant="default"
          size="default"
          fullWidth
          iconName="Calendar"
          iconPosition="left"
          onClick={handleBookAppointment}
        >
          Цаг захиалах
        </Button>
      </div>
    </div>
  );
};

export default DoctorCard;