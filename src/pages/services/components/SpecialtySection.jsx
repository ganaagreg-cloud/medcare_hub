import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SpecialtySection = ({ specialty }) => {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="relative h-64 md:h-80 lg:h-full min-h-[320px] overflow-hidden">
          <Image
            src={specialty?.image}
            alt={specialty?.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Icon name={specialty?.icon} size={24} className="text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {specialty?.name}
              </h3>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 lg:p-10">
          <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">
            {specialty?.description}
          </p>

          <div className="space-y-4 mb-6">
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Key Services
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {specialty?.services?.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Icon name="Users" size={18} className="text-primary" />
                <span className="text-xs text-muted-foreground">Specialists</span>
              </div>
              <p className="text-lg font-semibold text-foreground">{specialty?.specialists}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Icon name="Award" size={18} className="text-primary" />
                <span className="text-xs text-muted-foreground">Experience</span>
              </div>
              <p className="text-lg font-semibold text-foreground">{specialty?.experience}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialtySection;