import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const MedicalTeam = () => {
  const [activeSpecialty, setActiveSpecialty] = useState('all');
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const specialties = [
  { id: 'all', label: 'Бүгд', icon: 'Users' },
  { id: 'Зүрх,судас', label: 'Зүрх,судас', icon: 'Heart' },
  { id: 'Дотор эрхтэн', label: 'Дотор эрхтэн', icon: 'Brain' },
  { id: 'Уламжлалт', label: 'Уламжлалт', icon: 'Baby' }/*,;
  { id: 'orthopedics', label: 'Orthopedics', icon: 'Bone' }*/]


  const teamMembers = [
  {
    id: 1,
    name: "Эмч А.Ундрах",
    specialty: "Зүрх,судас",
    title: "Зүрх судасны их эмч",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_155748a5d-1763296653785.png",
    imageAlt: "Professional female doctor with blonde hair wearing white medical coat and stethoscope, smiling warmly in modern hospital setting",
    credentials: "MD, FACC, Board Certified",
    experience: "Магистер",
    description: "Зүрх судасны өвчний оношилгоо, эмчилгээ болон урьдчилан сэргийлэлтэд 10-аас дээш жилийн туршлагатай. Өвчтөнд чиглэсэн зөвлөгөө, амьдралын хэв маягт суурилсан эмчилгээний аргыг онцлон ажилладаг."
  },
  {
    id: 2,
    name: "Ц.Оюунцэцэг",
    specialty: "Eрөнхий эмч",
    title: "Клиникийн профессор",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f147df5d-1763301649610.png",
    imageAlt: "Hispanic male neurologist with short dark hair in blue scrubs holding medical tablet, standing confidently in hospital corridor",
    credentials: "Доктор",
    experience: "18+ Жил",
    description: "Анхан шатны эмнэлгийн тусламж, нийтлэг өвчний оношилгоо, эмчилгээний чиглэлээр олон жилийн туршлагатай клиникийн профессор."
  },
  {
    id: 3,
    name: "Д.Ролжинсүрэн.",
    specialty: "Дотор эрхтэн",
    title: "Дотор эрхтэн",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16e01c15b-1763295653314.png",
    imageAlt: "Asian female pediatrician with long black hair wearing white coat with colorful stethoscope, smiling gently in child-friendly examination room",
    credentials: "Баклавар",
    experience: "6 + жил",
    description: "Дотоод эрхтний өвчний оношилгоо, эмчилгээ, урьдчилан сэргийлэлтэд мэргэшсэн их эмч."
  },
  {
    id: 4,
    name: "А.Буянзаяа",
    specialty: "Уламжлалтын их эмч",
    title: "Уламжлалтын их эмч",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b32cdbc2-1763296056972.png",
    imageAlt: "African American male orthopedic surgeon with short hair in surgical scrubs examining X-ray images in modern operating room",
    credentials: "Баклавар",
    experience: "5+ жил",
    description: "Монгол уламжлалт анагаах ухааны онол, практикт суурилсан оношилгоо, эмчилгээ хийж, биеийн тэнцвэрийг сэргээхэд чиглэн ажилладаг их эмч."
  } /*,
  {
   id: 5,
   name: "Dr. Lisa Anderson",
   specialty: "cardiology",
   title: "Cardiac Electrophysiologist",
   image: "https://img.rocket.new/generatedImages/rocket_gen_img_13bc8a30a-1763300103319.png",
   imageAlt: "Caucasian female cardiologist with brown hair in professional attire holding medical chart, standing in cardiac care unit",
   credentials: "MD, FHRS, Board Certified",
   experience: "16+ years",
   description: "Expert in heart rhythm disorders, pacemaker implantation, and cardiac ablation procedures with focus on innovative treatments."
  },
  {
   id: 6,
   name: "Dr. David Kim",
   specialty: "neurology",
   title: "Pediatric Neurologist",
   image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e2cb5490-1763295838657.png",
   imageAlt: "Asian male pediatric neurologist with glasses wearing white coat, examining young patient with caring expression in consultation room",
   credentials: "MD, FAAP, Board Certified",
   experience: "14+ years",
   description: "Specializes in childhood neurological conditions, epilepsy management, and developmental disorders with family-centered care approach."
  }*/];



  const filteredTeam = activeSpecialty === 'all' ?
  teamMembers :
  teamMembers?.filter((member) => member?.specialty === activeSpecialty);

  return (
    <section id="experts" className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            <Icon name="Stethoscope" size={18} />
            <span>Манай эмч нар</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Мэрэгжлийн эмч нар
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Манай мэргэжлийн эмч нар олон арван жилийн туршлагатай бөгөөд таны эрүүл мэнд, сайн сайхан байдлын төлөө тууштай зүтгэдэг.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {specialties?.map((specialty) =>
            <button
              key={specialty?.id}
              onClick={() => setActiveSpecialty(specialty?.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeSpecialty === specialty?.id ?
              'bg-primary text-primary-foreground shadow-md' :
              'bg-card text-foreground hover:bg-muted border border-border'}`
              }>

                <Icon name={specialty?.icon} size={16} />
                <span>{specialty?.label}</span>
              </button>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredTeam?.map((member) =>
          <div
            key={member?.id}
            className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300">

              <div className="relative overflow-hidden h-64 md:h-72">
                <Image
                src={member?.image}
                alt={member?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async" />

                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">
                      {member?.name}
                    </h3>
                    <p className="text-sm text-primary font-medium">{member?.title}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={20} className="text-secondary" />
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="GraduationCap" size={16} />
                    <span>{member?.credentials}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span>{member?.experience} Туршлага</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {member?.description}
                </p>
                
                <button 
                  onClick={() => setSelectedDoctor(member)}
                  className="mt-4 flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
                  <span>Дэлгэрэнгүй</span>
                  <Icon name="ArrowRight" size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Цаг захиалах уу ?
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all">
            <Icon name="Calendar" size={20} />
            <span>Цаг авах</span>
          </button>
        </div>
      </div>
      {selectedDoctor && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDoctor(null)}
        >
          <div 
            className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-border shadow-2xl"
            onClick={(e) => e?.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
              >
                <Icon name="X" size={20} className="text-foreground" />
              </button>

              <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
                <Image
                  src={selectedDoctor?.image}
                  alt={selectedDoctor?.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {selectedDoctor?.name}
                    </h2>
                    <p className="text-lg text-primary font-semibold mb-1">{selectedDoctor?.title}</p>
                    <p className="text-sm text-muted-foreground">{selectedDoctor?.specialty}</p>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={28} className="text-secondary" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="GraduationCap" size={20} className="text-primary" />
                      <span className="text-sm font-medium text-muted-foreground">Боловсрол</span>
                    </div>
                    <p className="text-base font-semibold text-foreground">{selectedDoctor?.credentials}</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="Clock" size={20} className="text-primary" />
                      <span className="text-sm font-medium text-muted-foreground">Туршлага</span>
                    </div>
                    <p className="text-base font-semibold text-foreground">{selectedDoctor?.experience}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Icon name="FileText" size={20} className="text-primary" />
                    <span>Дэлгэрэнгүй мэдээлэл</span>
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {selectedDoctor?.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all">
                    <Icon name="Calendar" size={20} />
                    <span>Цаг авах</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:shadow-lg transition-all">
                    <Icon name="Mail" size={20} />
                    <span>Холбоо барих</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );

};

export default MedicalTeam;