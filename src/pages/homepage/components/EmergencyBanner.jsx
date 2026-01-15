import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmergencyBanner = ({ onEmergencyClick }) => {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-r from-emergency to-emergency/80">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4 text-white">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 animate-pulse">
              <Icon name="AlertCircle" size={28} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                24/7 Emergency Services Available
              </h3>
              <p className="text-sm md:text-base opacity-90 mb-3">
                Our emergency department is always open and ready to provide immediate care for life-threatening conditions
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  <span>Open 24 Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Multiple Locations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Ambulance" size={16} />
                  <span>Rapid Response</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Button
              variant="default"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              onClick={onEmergencyClick}
              className="bg-white text-emergency hover:bg-white/90 w-full sm:w-auto"
            >
              Call 911
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Navigation"
              iconPosition="left"
              className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
            >
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyBanner;