import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, onLearnMore }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    // Call the parent handler to open modal with service details
    if (onLearnMore) {
      onLearnMore(service);
    }
  };

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <Image
          src={service?.image}
          alt={service?.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute top-4 right-4">
          <div className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
            {service?.category}
          </div>
        </div>
      </div>
      <div className="p-4 md:p-5 lg:p-6">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon name={service?.icon} size={20} className="text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1 line-clamp-1">
              {service?.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {service?.description}
            </p>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {service?.features?.slice(0, 3)?.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Icon name="Check" size={16} className="text-secondary flex-shrink-0" />
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <Icon name="Clock" size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{service?.duration}</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={handleLearnMore}
          >
            Дэлгэрэнгүй
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;