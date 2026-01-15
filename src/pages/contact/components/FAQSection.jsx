import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      category: "Цаг захиалга",
      question: "Цаг захиалах яаж болох?",
      answer: "77072455 эсвэл 99022455 дугаар руу дуудаж цаг захиалах боломжтой. Яаралтай тохиолдлын хувьд өдөр дотор цаг авах боломжтой."
    },
    {
      id: 2,
      category: "Цаг захиалга",
      question: "Анхны үзлэгт юу авчрах вэ?",
      answer: "Иргэний үнэмлэх, эрүүл мэндийн даатгал байвал даатгалын карт, одоо хэрэглэж байгаа эмийн жагсаалт, өмнөх эмнэлзүйн бичиг баримт авчрана уу. Цагаасаа 15 минутын өмнө ирснээр танд илүү сайн үйлчилгээ үзүүлэх боломжтой."
    },
    {
      id: 3,
      category: "Үйлчилгээ",
      question: "Ямар үйлчилгээ үзүүлдэг вэ?",
      answer: "Мэдрэлийн эмчийн үзлэг, уламжлалтын эмчийн үзлэг, зүрхний эмчийн үзлэг, сэргээн засах эмчийн үзлэг, амбулаторын үзлэг, рентген оношилгоо, лабораторийн шинжилгээ, зүрхний ЭХО, ЭКГ, холтер бичлэг, бариа засал, зүү төөнүүр, физик эмчилгээ зэрэг иж бүрэн үйлчилгээ үзүүлдэг."
    },
    {
      id: 4,
      category: "Үнэ төлбөр",
      question: "Үнэ төлбөр яаж байдаг вэ?",
      answer: "Амбулаторын үзлэг үнэгүй. Бусад үйлчилгээний үнэ төлбөрийн талаар 77072455 эсвэл 99022455 дугаар руу холбогдож лавлагаарай. Бид уян хуваарилалтын төлөвлөгөө зохион байгуулдаг."
    },
    {
      id: 5,
      category: "Яаралтай",
      question: "Яаралтай тохиолдолд яах вэ?",
      answer: "Амь насынд аюул учруулсан тохиолдолд 77072455 дугаар руу шуурхай холбогдоно уу. Цээжний өвдөлт, амьсгалын бэрхшээл, хүнд цус алдалт, ухаан алдалт, цус харвалтын шинж, хүнд гэмтэл зэрэг тохиолдолд шуурхай эмнэлэгт хандана уу."
    },
    {
      id: 6,
      category: "Яаралтай",
      question: "Яаралтай үйлчилгээ хэдэн ажилладаг вэ?",
      answer: "Бид 24/7 яаралтай үйлчилгээ үзүүлдэг. Амь насынд аюул учруулсан тохиолдолд шуурхай тусламж үзүүлдэг. Өдөр бүр 77072455 эсвэл 99022455 дугаар руу холбогдож болно."
    },
    {
      id: 7,
      category: "Эмнэлзүйн бичиг",
      question: "Эмнэлзүйн бичиг баримтаа яаж авах вэ?",
      answer: "Эмнэлзүйн бичиг баримтыг 77072455 дугаар руу холбогдож хүсэх боломжтой. Шинжилгээний үр дүн, эмчилгээний түүх зэргийг хүсвэл бидний албаны хүмүүс танд туслах болно."
    },
    {
      id: 8,
      category: "Эмнэлзүйн бичиг",
      question: "Бичиг баримтаа бусад эмнэлэгт илгээж болох уу?",
      answer: "Тийм, та өөрийн эмнэлзүйн бичиг баримтаа бусад эмнэлэгт илгээж болно. Зөвшөөрлийн маягтыг бөглөж бидэнд хүргүүлнэ үү. Бид таны бичиг баримтыг имэйл эсвэл шуудангаар илгээх боломжтой."
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Түгээмэл асуултууд
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Манай үйлчилгээний талаар түгээмэл асуултын хариулт
            </p>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories?.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {faqs?.map((faq, index) => (
              <div
                key={faq?.id}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary mb-2">
                      {faq?.category}
                    </span>
                    <h3 className="text-base md:text-lg font-semibold text-foreground">
                      {faq?.question}
                    </h3>
                  </div>
                  <Icon
                    name={openIndex === index ? "ChevronUp" : "ChevronDown"}
                    size={20}
                    className="text-muted-foreground flex-shrink-0 transition-transform"
                  />
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4 pt-2">
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {faq?.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12 bg-secondary/10 border border-secondary/20 rounded-xl p-6 md:p-8 text-center">
            <Icon name="HelpCircle" size={48} className="text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Асуулт байна уу?
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Манай баг танд туслахад бэлэн байна. Дээрх аргаар бидэнтэй холбогдоно уу.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:77072455"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                <Icon name="Phone" size={18} />
                Одоо дуудах
              </a>
              <a
                href="mailto:taihar2455@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                <Icon name="Mail" size={18} />
                Имэйл илгээх
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;