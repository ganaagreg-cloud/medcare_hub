import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FacilityTour = () => {
  const [activeArea, setActiveArea] = useState(0);

  const facilityAreas = [
  {
    id: 0,
    name: "Emergency Department",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10361b8a6-1765108665316.png",
    imageAlt: "Modern emergency department with advanced medical equipment, bright lighting, and organized treatment stations ready for immediate patient care",
    description: "State-of-the-art emergency care with 24/7 availability, equipped with advanced life-saving technology and staffed by experienced emergency medicine specialists.",
    features: ["24/7 Availability", "Advanced Life Support", "Trauma Center Level II", "Average Wait Time: 15 mins"]
  },
  {
    id: 1,
    name: "Surgical Suites",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14d981296-1764840853144.png",
    imageAlt: "High-tech operating room with modern surgical equipment, sterile environment, and advanced monitoring systems for complex procedures",
    description: "12 cutting-edge operating rooms featuring robotic-assisted surgery capabilities, minimally invasive technology, and comprehensive post-operative care facilities.",
    features: ["Robotic Surgery", "Minimally Invasive", "12 Operating Rooms", "Advanced Anesthesia"]
  },
  {
    id: 2,
    name: "Diagnostic Imaging",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f60d8108-1766083990653.png",
    imageAlt: "Advanced diagnostic imaging center with MRI machine, CT scanner, and modern radiology equipment in clean professional medical environment",
    description: "Comprehensive imaging services including MRI, CT, X-ray, ultrasound, and mammography with same-day results and expert radiologist interpretation.",
    features: ["3T MRI Scanner", "128-Slice CT", "Digital X-Ray", "Same-Day Results"]
  },
  {
    id: 3,
    name: "Patient Rooms",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c85a39de-1767509228887.png",
    imageAlt: "Comfortable private patient room with modern bed, natural lighting, family seating area, and advanced monitoring equipment for optimal recovery",
    description: "Private, comfortable rooms designed for healing with family accommodations, entertainment systems, and nurse call technology for immediate assistance.",
    features: ["100% Private Rooms", "Family Accommodations", "Smart Room Technology", "Healing Environment"]
  },
  {
    id: 4,
    name: "Wellness Center",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17cea4a01-1766936683745.png",
    imageAlt: "Modern wellness center with exercise equipment, physical therapy area, and bright open space promoting health and rehabilitation",
    description: "Integrated wellness facility offering physical therapy, cardiac rehabilitation, nutrition counseling, and preventive health programs.",
    features: ["Physical Therapy", "Cardiac Rehab", "Nutrition Services", "Fitness Programs"]
  }];


  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            <Icon name="Building2" size={18} />
            <span>Virtual Tour</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            State-of-the-Art Facilities
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our modern healthcare facility designed with your comfort and recovery in mind. Every space is thoughtfully created to provide the best possible care experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-4">
            {facilityAreas?.map((area) =>
            <button
              key={area?.id}
              onClick={() => setActiveArea(area?.id)}
              className={`w-full text-left p-4 md:p-6 rounded-xl border transition-all duration-300 ${
              activeArea === area?.id ?
              'bg-primary text-primary-foreground border-primary shadow-lg' :
              'bg-card text-foreground border-border hover:border-primary/50 hover:shadow-md'}`
              }>

                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                activeArea === area?.id ? 'bg-primary-foreground/20' : 'bg-primary/10'}`
                }>
                    <Icon
                    name="MapPin"
                    size={24}
                    className={activeArea === area?.id ? 'text-primary-foreground' : 'text-primary'} />

                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{area?.name}</h3>
                    <p className={`text-sm line-clamp-2 ${
                  activeArea === area?.id ? 'text-primary-foreground/80' : 'text-muted-foreground'}`
                  }>
                      {area?.description}
                    </p>
                  </div>
                  
                  <Icon
                  name="ChevronRight"
                  size={20}
                  className={`flex-shrink-0 transition-transform ${
                  activeArea === area?.id ? 'rotate-90 text-primary-foreground' : 'text-muted-foreground'}`
                  } />

                </div>
              </button>
            )}
          </div>
          
          <div className="lg:sticky lg:top-24">
            <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-xl">
              <div className="relative overflow-hidden h-64 md:h-80 lg:h-96">
                <Image
                  src={facilityAreas?.[activeArea]?.image}
                  alt={facilityAreas?.[activeArea]?.imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async" />

                <div className="absolute top-4 right-4 px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
                  {activeArea + 1} / {facilityAreas?.length}
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  {facilityAreas?.[activeArea]?.name}
                </h3>
                
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                  {facilityAreas?.[activeArea]?.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {facilityAreas?.[activeArea]?.features?.map((feature, index) =>
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">

                      <Icon name="Check" size={16} className="text-secondary flex-shrink-0" />
                      <span className="text-sm text-foreground font-medium">{feature}</span>
                    </div>
                  )}
                </div>
                
                <button className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all">
                  <Icon name="Video" size={20} />
                  <span>Watch Virtual Tour</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default FacilityTour;