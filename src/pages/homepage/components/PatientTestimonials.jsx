import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PatientTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
  {
    id: 1,
    name: "Болд",
    age: 42,
    condition: "Сэргээн засах эмчилгнээий өвчтөн",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d8580d3b-1763294016344.png",
    imageAlt: "Professional headshot of Hispanic woman with shoulder-length brown hair wearing blue blouse smiling warmly at camera",
    rating: 5,
    quote: "Тайхар эмнлэгийн нөхөн сэргээх эмчилгээний баг миний эдгэрэлтийг үнэхээр өөрчилсөн. Эхний үеээс эхлээд эмчилгээний сүүлийн шат хүртэл бүх эмч, ажилтан гайхалтай мэргэжлийн ур чадвар, тэвчээр, чин сэтгэлийн туслалцаа,үйлчилгээ үзүүлсэн. Тэдний туршлага, урам зориг, хувь хүнд тохирсон нөхөн сэргээх төлөвлөгөө нь надад хүч чадал, итгэл найдвараа алхам алхмаар сэргээхэд тусалсан. Би эдгэрэх явцдаа мэдэрсэн энэрэнгүй сэтгэлд гүнээ талархаж байна.",
    date: "2026 оны 1-р сарын 15ны өдөр",
    procedure: "Нөхөн сэргээх эмчилгээ"
  },
  {
    id: 2,
    name: "Батаа",
    age: 58,
    condition: "Зүрх судас",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_130504d21-1763295915180.png",
    imageAlt: "Professional headshot of Caucasian man with gray hair and beard wearing navy suit and tie with confident smile",
    rating: 5,
    quote: "Олон жилийн турш оношлогдоогүй ядаргаа болон үе үе мэдрэгдэх цээжний өвдөлтийн эцэст тайхар эмнлэгийн зүрх судасны баг надад ямар асуудал байсан талаар оношилж өгсөн. Тэдний дэвшилтэт оношилгооны шинжилгээ болон нарийн үнэлгээний ачаар миний өвчнийг эрт үед нь илрүүлсэн. Мэргэжлийн ур чадвар, хүн төвтэй байдал нь надад сэтгэлийн амар амгаланг өгсөн. Тайхар эмнлэгийн нарийн оношилгоонд би үнэхээр талархаж байна.",
    date: "2025 оны 11-р сар",
    procedure: "Оношилгоо"
  }/*,
  {
    id: 3,
    name: "Maria Santos",
    age: 35,
    condition: "Maternity Patient",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d92ac120-1763293804988.png",
    imageAlt: "Professional headshot of Asian woman with long black hair wearing white blouse with gentle smile and warm expression",
    rating: 5,
    quote: "Delivering my first baby at MedCare Hub was an incredible experience. The maternity team made me feel safe, supported, and empowered throughout labor and delivery. The postpartum care and lactation support were exceptional. I couldn't have asked for a better start to motherhood.",
    date: "January 2026",
    procedure: "Natural Childbirth"
  },
  {
    id: 4,
    name: "David Chen",
    age: 67,
    condition: "Cancer Survivor",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bfe01913-1763293830266.png",
    imageAlt: "Professional headshot of elderly Asian man with gray hair wearing glasses and gray sweater with kind smile",
    rating: 5,
    quote: "Fighting cancer was the hardest battle of my life, but the oncology team at MedCare Hub stood by me every step of the way. Their cutting-edge treatment combined with emotional support made all the difference. I'm now cancer-free and living life to the fullest thanks to their dedication.",
    date: "October 2025",
    procedure: "Cancer Treatment"
  }*/];


  const handlePrevious = () => {
    setActiveTestimonial((prev) => prev === 0 ? testimonials?.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setActiveTestimonial((prev) => prev === testimonials?.length - 1 ? 0 : prev + 1);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold mb-4">
            <Icon name="MessageSquare" size={16} />
            <span>Өвчтөний түүх</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Манайд эмчлүүлсэн өвчтийн  сэтгэгдэл
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Бидэнтэй хамт эрүүл мэндийн аяллаа туулсан жинхэнэ өвчтөнүүдийн бодит түүхүүд
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-6 md:p-10 shadow-2xl border border-border">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start mb-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-4 ring-primary/20">
                  <Image
                    src={testimonials?.[activeTestimonial]?.image}
                    alt={testimonials?.[activeTestimonial]?.imageAlt}
                    className="w-full h-full object-cover" />

                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
                  {[...Array(testimonials?.[activeTestimonial]?.rating)]?.map((_, index) =>
                  <Icon key={index} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                  )}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                  {testimonials?.[activeTestimonial]?.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {testimonials?.[activeTestimonial]?.condition} • Age {testimonials?.[activeTestimonial]?.age}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold">
                  <Icon name="CheckCircle2" size={14} />
                  <span>{testimonials?.[activeTestimonial]?.procedure}</span>
                </div>
              </div>
            </div>

            <div className="relative mb-6">
              <Icon name="Quote" size={40} className="text-primary/20 absolute -top-2 -left-2" />
              <p className="text-base md:text-lg text-foreground leading-relaxed pl-8 md:pl-10">
                {testimonials?.[activeTestimonial]?.quote}
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Calendar" size={16} />
                <span>{testimonials?.[activeTestimonial]?.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevious}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                  aria-label="Previous testimonial">

                  <Icon name="ChevronLeft" size={20} />
                </button>
                <div className="flex items-center gap-1.5 px-3">
                  {testimonials?.map((_, index) =>
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                    activeTestimonial === index ?
                    'w-6 bg-primary' : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'}`
                    }
                    aria-label={`Go to testimonial ${index + 1}`} />

                  )}
                </div>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                  aria-label="Next testimonial">

                  <Icon name="ChevronRight" size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              Манай эрүүл мэндийн үйлчилгээнд итгэдэг олон мянган сэтгэл хангалуун өвчтөнүүдтэй нэгдээрэй
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <div className="flex items-center gap-2">
                <Icon name="Users" size={20} className="text-primary" />
                <span className="text-sm font-semibold text-foreground">50,000+ Patients</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Star" size={20} className="text-yellow-500" />
                <span className="text-sm font-semibold text-foreground">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Award" size={20} className="text-secondary" />
                <span className="text-sm font-semibold text-foreground">Award-Winning Care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default PatientTestimonials;