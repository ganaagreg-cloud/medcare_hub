import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const DepartmentDirectory = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const departments = [
    {
      id: 1,
      name: "Яаралтай тусламж",
      icon: "AlertCircle",
      phone: "77072455",
      email: "taihar2455@gmail.com",
      hours: "24/7 - Өдөр бүр нээлтэтэй",
      responseTime: "Шуурхай",
      description: "Амь насынд аюул занал учруулсан үед шуурхай эмнэлзүйн тусламж",
      color: "emergency"
    },
    {
      id: 2,
      name: "Цаг захиалга",
      icon: "Calendar",
      phone: "77072455",
      email: "taihar2455@gmail.com",
      hours: "Даваа-Баасан: 9:00 - 18:00",
      responseTime: "2 цагийн дотор",
      description: "Цаг захиалах, цаг шилжүүлэх, цагийн төлөв шалгах",
      color: "primary"
    },
    {
      id: 3,
      name: "Зүрхний эмчийн хэлтэс",
      icon: "Heart",
      phone: "99022455",
      email: "taihar2455@gmail.com",
      hours: "Даваа-Баасан: 9:00 - 18:00",
      responseTime: "4 цагийн дотор",
      description: "Зүрх судасны өвчлөлийн оношилгоо, эмчилгээ",
      color: "secondary"
    },
    {
      id: 4,
      name: "Мэдрэлийн эмчийн хэлтэс",
      icon: "Activity",
      phone: "77072455",
      email: "taihar2455@gmail.com",
      hours: "Даваа-Баасан: 9:00 - 18:00",
      responseTime: "4 цагийн дотор",
      description: "Мэдрэлийн эмгэг, цус харвалтын эмчилгээ",
      color: "accent"
    },
    {
      id: 5,
      name: "Уламжлалт эмчилгээний хэлтэс",
      icon: "Baby",
      phone: "99022455",
      email: "taihar2455@gmail.com",
      hours: "Даваа-Баасан: 9:00 - 18:00",
      responseTime: "3 цагийн дотор",
      description: "Бариа засал, зүү төөнүүр, сүүн бариа зэрэг уламжлалт эмчилгээ",
      color: "trust-builder"
    },
    {
      id: 6,
      name: "Рентген оношилгоо",
      icon: "Scan",
      phone: "77072455",
      email: "taihar2455@gmail.com",
      hours: "Даваа-Баасан: 9:00 - 18:00",
      responseTime: "24 цагийн дотор",
      description: "Рентген зураг, дижитал оношилгооны үйлчилгээ",
      color: "secondary"
    },
    {
      id: 7,
      name: "Лабораторийн шинжилгээ",
      icon: "CreditCard",
      phone: "99022455",
      email: "taihar2455@gmail.com",
      hours: "Даваа-Баасан: 9:00 - 18:00",
      responseTime: "24 цагийн дотор",
      description: "Цус, шээс, биохимийн бүх төрлийн шинжилгээ",
      color: "conversion"
    },
    {
      id: 8,
      name: "Эмнэлзүйн бичиг баримт",
      icon: "FileText",
      phone: "77072455",
      email: "taihar2455@gmail.com",
      hours: "Даваа-Баасан: 9:00 - 17:00",
      responseTime: "48 цагийн дотор",
      description: "Эмнэлзүйн бичиг баримт, шинжилгээний үр дүн хүсэх",
      color: "primary"
    }
  ];

  const filteredDepartments = departments?.filter(dept =>
    dept?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
    dept?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase())
  );

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Хэлтсүүдийн лавлах
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
              Эрүүл мэндийн хэрэгцээд тохирсон хэлтсийг олоорой
            </p>
            
            <div className="max-w-xl mx-auto">
              <Input
                type="search"
                placeholder="Хэлтэс хайх..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e?.target?.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {filteredDepartments?.map((dept) => (
              <div
                key={dept?.id}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-${dept?.color}/10 flex items-center justify-center flex-shrink-0`}>
                    <Icon name={dept?.icon} size={24} className={`text-${dept?.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-1">{dept?.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{dept?.description}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={16} className="text-primary flex-shrink-0" />
                    <a href={`tel:${dept?.phone?.replace(/[^0-9]/g, '')}`} className="text-sm font-medium text-primary hover:underline">
                      {dept?.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={16} className="text-secondary flex-shrink-0" />
                    <a href={`mailto:${dept?.email}`} className="text-sm text-muted-foreground hover:text-secondary transition-colors break-all">
                      {dept?.email}
                    </a>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={16} className="text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{dept?.hours}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Хариу өгөх хугацаа:</span>
                    <span className="text-xs font-medium text-foreground">{dept?.responseTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDepartments?.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Хэлтэс олдсонгүй</h3>
              <p className="text-sm text-muted-foreground">Хайлтын нөхцлийг өөрчлөнө үү</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DepartmentDirectory;