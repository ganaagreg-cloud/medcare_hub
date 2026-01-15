import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustIndicators = () => {
  const certifications = [
    {
      id: 1,
      icon: "Award",
      title: "Joint Commission Accredited",
      description: "Gold Seal of Approval for quality and safety",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      id: 2,
      icon: "Shield",
      title: "HIPAA Compliant",
      description: "Your privacy and data security guaranteed",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: 3,
      icon: "Star",
      title: "5-Star Patient Rating",
      description: "Consistently rated excellent by patients",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      id: 4,
      icon: "Users",
      title: "Board-Certified Physicians",
      description: "100% of our doctors are board-certified",
      color: "text-green-600",
      bgColor: "bg-green-50"
    }
  ];

  const statistics = [
    {
      id: 1,
      value: "50,000+",
      label: "Patients Served Annually",
      icon: "Users"
    },
    {
      id: 2,
      value: "98%",
      label: "Patient Satisfaction Rate",
      icon: "ThumbsUp"
    },
    {
      id: 3,
      value: "24/7",
      label: "Emergency Care Available",
      icon: "Clock"
    },
    {
      id: 4,
      value: "150+",
      label: "Medical Specialists",
      icon: "Stethoscope"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-trust-builder/10 text-trust-builder text-xs md:text-sm font-semibold mb-4">
            <Icon name="ShieldCheck" size={16} />
            <span>Trusted Healthcare Provider</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Quality Care You Can Trust
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Recognized for excellence in patient care, safety standards, and medical innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {certifications?.map((cert) => (
            <div
              key={cert?.id}
              className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${cert?.bgColor} flex items-center justify-center mb-4`}>
                <Icon name={cert?.icon} size={24} className={cert?.color} />
              </div>
              <h3 className="text-base md:text-lg font-bold text-foreground mb-2">
                {cert?.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {cert?.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {statistics?.map((stat) => (
            <div
              key={stat?.id}
              className="p-6 md:p-8 rounded-2xl bg-card border border-border text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 mb-4">
                <Icon name={stat?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat?.value}
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">
                {stat?.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Icon name="Award" size={28} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">
                  Award-Winning Healthcare
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Recognized nationally for excellence in patient care and medical innovation
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <Icon name="Trophy" size={32} className="text-yellow-600" />
              <Icon name="Medal" size={32} className="text-blue-600" />
              <Icon name="Star" size={32} className="text-purple-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;