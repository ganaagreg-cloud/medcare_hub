import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-card rounded-xl border border-border p-6 md:p-8 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-primary">
            <Image
              src={testimonial?.patientImage}
              alt={testimonial?.patientImageAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
            <Icon name="Check" size={16} className="text-secondary-foreground" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-base md:text-lg font-semibold text-foreground mb-1">
            {testimonial?.patientName}
          </h4>
          <p className="text-sm text-muted-foreground">{testimonial?.service}</p>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)]?.map((_, index) => (
              <Icon
                key={index}
                name="Star"
                size={14}
                className={index < testimonial?.rating ? "text-warning fill-warning" : "text-muted"}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm md:text-base text-foreground leading-relaxed mb-4">
        "{testimonial?.testimonial}"
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="text-xs text-muted-foreground">{testimonial?.date}</span>
        <div className="flex items-center gap-2">
          <Icon name="MapPin" size={14} className="text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{testimonial?.location}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;