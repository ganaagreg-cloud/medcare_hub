import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceDetailModal = ({ service, isOpen, onClose }) => {
  if (!isOpen || !service) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 animate-in fade-in duration-200"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className="bg-card rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
          onClick={(e) => e?.stopPropagation()}
        >
          {/* Header with Image */}
          <div className="relative h-64 overflow-hidden rounded-t-2xl">
            <img
              src={service?.image}
              alt={service?.imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <Icon name="X" size={20} className="text-gray-900" />
            </button>
            <div className="absolute bottom-4 left-6">
              <div className="inline-block px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold mb-2">
                {service?.category}
              </div>
              <h2 className="text-3xl font-bold text-white">{service?.name}</h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Description */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name={service?.icon} size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Үйлчилгээний тайлбар</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span>{service?.duration}</span>
                  </div>
                </div>
              </div>
              <p className="text-foreground leading-relaxed">
                {service?.description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Icon name="CheckCircle" size={20} className="text-secondary" />
                Үйлчилгээний онцлог
              </h3>
              <div className="grid gap-3">
                {service?.features?.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/5 border border-secondary/20">
                    <Icon name="Check" size={18} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Calendar" size={18} className="text-primary" />
                  <h4 className="font-semibold text-foreground">Цаг авах</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Даваа-Баасан: 08:00-18:00<br />
                  Бямба: 09:00-14:00
                </p>
              </div>
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Phone" size={18} className="text-primary" />
                  <h4 className="font-semibold text-foreground">Холбоо барих</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Утас: 7035-2222<br />
                  И-мэйл: info@taikhar.mn
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="default"
                className="flex-1"
                iconName="Calendar"
                iconPosition="left"
                onClick={() => {
                  onClose();
                  // Navigate to contact or booking page
                  window.location.href = '/contact';
                }}
              >
                Цаг авах
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                iconName="Phone"
                iconPosition="left"
                onClick={() => {
                  window.location.href = 'tel:70352222';
                }}
              >
                Залгах
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailModal;