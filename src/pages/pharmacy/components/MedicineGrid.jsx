import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const MedicineGrid = ({ selectedCategory }) => {
  const [selectedMedicine, setSelectedMedicine] = useState(null);

  const medicines = [
  {
    id: 1,
    name: 'Парацетамол 500мг',
    category: 'Эм',
    price: '2,500₮',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c14986b2-1766760067468.png",
    imageAlt: 'Парацетамол эмийн савлагаа',
    inStock: true,
    description: 'Өвдөлт намдаах, халуун бууруулах',
    detailedInfo: {
      purpose: 'Парацетамол нь халуун бууруулах, өвдөлт намдаах үйлчилгээтэй эм юм. Толгой өвдөх, шүд өвдөх, булчингийн өвдөлт, томуу, ханиад зэрэг өвчний үед хэрэглэнэ.',
      dosage: 'Насанд хүрэгчид: 500-1000мг-ийг 4-6 цаг тутамд, өдөрт 4000мг-аас хэтрүүлэхгүй. Хүүхэд: Жингийн дагуу 10-15мг/кг 4-6 цаг тутамд.',
      instructions: '1. Хоолны дараа уух нь дээр\n2. Ус дутуу уух\n3. Зааврын дагуу тун хэмжээг баримтлах\n4. 3 хоногоос дээш үргэлжлүүлэн хэрэглэхгүй байх',
      warnings: 'Элэгний өвчтэй, архи хэтрүүлэн хэрэглэдэг хүмүүст болгоомжтой хэрэглэх. Жирэмсэн, хөхүүл эхчүүд эмчийн зөвлөгөөгөөр хэрэглэх.'
    }
  },
  {
    id: 2,
    name: 'Витамин C 1000мг',
    category: 'Амин дэм',
    price: '15,000₮',
    image: "https://images.unsplash.com/photo-1729856549197-b327478ca8a2",
    imageAlt: 'Витамин C амин дэмийн савлагаа',
    inStock: true,
    description: 'Дархлаа дэмжих, антиоксидант',
    detailedInfo: {
      purpose: 'Витамин C нь дархлааг бэхжүүлэх, халдвараас хамгаалах, арьсны эрүүл мэндийг дэмжих, шарх эдгээхэд туслах чухал витамин юм. Антиоксидант үйлчилгээтэй.',
      dosage: 'Насанд хүрэгчид: Өдөрт 1000мг (1 шахмал), өглөө эсвэл өдрийн цагаар. Хүүхэд: 250-500мг насны дагуу.',
      instructions: '1. Хоолны үеэр эсвэл дараа нь уух\n2. Их хэмжээний ус дутуу уух\n3. Өдөр бүр тогтмол цагт хэрэглэх\n4. Хуурай, сэрүүн газар хадгалах',
      warnings: 'Өвчин үед тун хэмжээг нэмэгдүүлж болно. Бөөрний чулууны өвчтэй хүмүүст болгоомжтой. Хэт их хэрэглэвэл гэдэс эвгүй байж болно.'
    }
  },
  {
    id: 3,
    name: 'Хүүхдийн сироп',
    category: 'Ээж хүүхэд',
    price: '8,500₮',
    image: "https://images.unsplash.com/photo-1694150001254-446fcec075ef",
    imageAlt: 'Хүүхдийн эмийн сироп',
    inStock: true,
    description: 'Ханиад, халууралтад',
    detailedInfo: {
      purpose: 'Хүүхдийн ханиад, томуу, халууралт, хоолойн өвдөлт зэрэг шинж тэмдгийг намдаах зориулалттай сироп. Амт сайтай, хүүхдэд хэрэглэхэд хялбар.',
      dosage: '2-6 нас: 5мл (1 халбага) өдөрт 3 удаа. 6-12 нас: 10мл (2 халбага) өдөрт 3 удаа. 2 наснаас доош: Эмчийн зөвлөгөөгөөр.',
      instructions: '1. Хэрэглэхийн өмнө сайтар сэгсрэх\n2. Хэмжих халбага ашиглах\n3. Хоолны дараа өгөх\n4. Хөргөгчинд хадгалах (нээсний дараа)',
      warnings: '5 хоногоос дээш үргэлжлүүлэн хэрэглэхгүй. Шинж тэмдэг дордоогүй бол эмчид үзүүлэх. Харшилтай хүүхдэд болгоомжтой.'
    }
  },
  {
    id: 4,
    name: 'Омега-3',
    category: 'Амин дэм',
    price: '25,000₮',
    image: "https://images.unsplash.com/photo-1633171031508-a8f26271e8aa",
    imageAlt: 'Омега-3 амин дэмийн капсул',
    inStock: true,
    description: 'Зүрх судас, тархины үйл ажиллагаа',
    detailedInfo: {
      purpose: 'Омега-3 тосны хүчил нь зүрх судасны эрүүл мэндийг дэмжих, тархины үйл ажиллагааг сайжруулах, үрэвслийг бууруулах, нүдний хараа сайжруулахад тустай.',
      dosage: 'Насанд хүрэгчид: 1-2 капсул өдөрт, хоолны үеэр. Нийт EPA+DHA 1000-2000мг өдөрт.',
      instructions: '1. Хоолны үеэр уух (шингээлт сайжруулах)\n2. Их хэмжээний ус дутуу залгих\n3. Сэрүүн, хуурай газар хадгалах\n4. Хугацаа дууссан эсэхийг шалгах',
      warnings: 'Цус бүлэгнэлтийн эм уудаг хүмүүст болгоомжтой. Загасны харшилтай бол хэрэглэхгүй. Мэс засал хийлгэхийн өмнө эмчид мэдэгдэх.'
    }
  },
  {
    id: 5,
    name: 'Эрүүл хүнсний нэмэлт',
    category: 'Хүнс',
    price: '18,000₮',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1aade90cc-1768282872184.png",
    imageAlt: 'Эрүүл хүнсний нэмэлт бүтээгдэхүүн',
    inStock: true,
    description: 'Органик, байгалийн гаралтай',
    detailedInfo: {
      purpose: 'Байгалийн гаралтай органик хүнсний нэмэлт. Витамин, эрдэс бодис, шим тэжээлээр баялаг. Ерөнхий эрүүл мэндийг дэмжих, эрч хүч өгөх.',
      dosage: 'Өдөрт 1-2 халбага, өглөөний цайны үеэр эсвэл эмчийн зааврын дагуу.',
      instructions: '1. Өглөөний цайтай хамт хэрэглэх\n2. Тогтмол хэрэглэх (сар гаруй)\n3. Хүйтэн, хуурай газар хадгалах\n4. Хүүхдийн гар хүрэхгүй газар байрлуулах',
      warnings: 'Жирэмсэн, хөхүүл эхчүүд эмчтэй зөвлөлдөх. Эмтэй хамт хэрэглэхдээ харилцан үйлчлэлийг анхаарах. Харшил гарвал зогсоох.'
    }
  },
  {
    id: 6,
    name: 'Ибупрофен 400мг',
    category: 'Эм',
    price: '3,500₮',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_186c7dd81-1765119531249.png",
    imageAlt: 'Ибупрофен эмийн савлагаа',
    inStock: true,
    description: 'Үрэвсэл намдаах, өвдөлт намдаах',
    detailedInfo: {
      purpose: 'Ибупрофен нь үрэвслийн эсрэг, өвдөлт намдаах, халуун бууруулах үйлчилгээтэй эм. Үе мөчний өвдөлт, толгой өвдөх, сарын тэмдгийн өвдөлт зэрэгт хэрэглэнэ.',
      dosage: 'Насанд хүрэгчид: 400мг 4-6 цаг тутамд, өдөрт 1200мг-аас хэтрүүлэхгүй. Хүүхэд: Жингийн дагуу 5-10мг/кг.',
      instructions: '1. Заавал хоолны дараа уух\n2. Их хэмжээний ус дутуу уух\n3. Хоосон ходоодоор уухгүй байх\n4. Богино хугацаанд хэрэглэх (3-5 хоног)',
      warnings: 'Ходоод гэдэсний шархлаатай, зүрхний өвчтэй хүмүүст болгоомжтой. Жирэмсний сүүлийн 3 сард хэрэглэхгүй. Архитай хамт уухгүй.'
    }
  },
  {
    id: 7,
    name: 'Жирэмсний витамин',
    category: 'Ээж хүүхэд',
    price: '35,000₮',
    image: "https://images.unsplash.com/photo-1734607404551-b7fe738caf96",
    imageAlt: 'Жирэмсний витамины савлагаа',
    inStock: false,
    description: 'Жирэмсэн эхчүүдэд зориулсан',
    detailedInfo: {
      purpose: 'Жирэмсэн эхчүүдэд зориулсан цогц витамин, эрдэс бодис. Ургийн хөгжилд шаардлагатай фолийн хүчил, төмөр, кальци, витамин D агуулна. Эх, хүүхдийн эрүүл мэндийг хамгаална.',
      dosage: 'Өдөрт 1 шахмал, өглөөний цайны үеэр. Жирэмсний эхний үеэс эхлэн хөхүүл үе хүртэл.',
      instructions: '1. Өглөө хоолны дараа уух\n2. Их хэмжээний ус дутуу уух\n3. Өдөр бүр тогтмол цагт хэрэглэх\n4. Эмчийн үзлэгт тогтмол очих',
      warnings: 'Зөвхөн эмчийн зөвлөмжөөр хэрэглэх. Бусад витамин нэмж уухгүй байх (хэт их тун болохгүй). Гаж нөлөө гарвал эмчид мэдэгдэх.'
    }
  },
  {
    id: 8,
    name: 'Кальци + Витамин D',
    category: 'Амин дэм',
    price: '20,000₮',
    image: "https://images.unsplash.com/photo-1662695088819-bfefbc41ec6d",
    imageAlt: 'Кальци витамин D амин дэмийн савлагаа',
    inStock: true,
    description: 'Яс, шүдний эрүүл мэнд',
    detailedInfo: {
      purpose: 'Кальци ба витамин D-ийн хослол нь ясны нягтыг нэмэгдүүлэх, ясны хугарал урьдчилан сэргийлэх, шүдний эрүүл мэндийг дэмжих, булчингийн үйл ажиллагааг сайжруулахад тустай.',
      dosage: 'Насанд хүрэгчид: 1-2 шахмал өдөрт (кальци 500-1000мг, витамин D 400-800IU). Хоолны үеэр.',
      instructions: '1. Хоолны үеэр уух (шингээлт сайн)\n2. Кофе, цайнаас 2 цагийн зайтай\n3. Өдрийн цагаар уух нь дээр\n4. Урт хугацаанд тогтмол хэрэглэх',
      warnings: 'Бөөрний өвчтэй, бөөрний чулуутай хүмүүст болгоомжтой. Хэт их хэрэглэвэл хордлого үүсч болно. Бусад эмтэй харилцан үйлчлэл шалгах.'
    }
  }];


  const filteredMedicines = selectedCategory === 'Бүгд' ?
  medicines :
  medicines?.filter((m) => m?.category === selectedCategory);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">
          {selectedCategory}
          <span className="text-sm font-normal text-muted-foreground ml-2">
            ({filteredMedicines?.length} бүтээгдэхүүн)
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredMedicines?.map((medicine) =>
        <div
          key={medicine?.id}
          className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

            <div className="aspect-square overflow-hidden bg-muted relative">
              <Image
                src={medicine?.image}
                alt={medicine?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                decoding="async" />

              {!medicine?.inStock &&
            <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                  <span className="px-4 py-2 bg-destructive text-destructive-foreground rounded-lg font-semibold">
                    Дууссан
                  </span>
                </div>
            }
            </div>
            <div className="p-4">
              <div className="mb-2">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  {medicine?.category}
                </span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-foreground mb-2 line-clamp-1">
                {medicine?.name}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-3 line-clamp-2">
                {medicine?.description}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-border mb-3">
                <p className="text-lg font-bold text-primary">{medicine?.price}</p>
                <Button
                variant="outline"
                size="sm"
                iconName="ShoppingCart"
                iconPosition="left"
                disabled={!medicine?.inStock}>

                  Сагслах
                </Button>
              </div>
              <Button
              variant="ghost"
              size="sm"
              className="w-full"
              iconName="Info"
              iconPosition="left"
              onClick={() => setSelectedMedicine(medicine)}>
                Дэлгэрэнгүй
              </Button>
            </div>
          </div>
        )}
      </div>
      {filteredMedicines?.length === 0 &&
      <div className="text-center py-12">
          <Icon name="Package" size={64} className="text-muted-foreground mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">Бүтээгдэхүүн олдсонгүй</p>
        </div>
      }
      {/* Medicine Detail Modal */}
      {selectedMedicine &&
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedMedicine(null)}>
          <div className="bg-card rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e?.stopPropagation()}>
            <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between z-10">
              <h2 className="text-xl md:text-2xl font-bold text-foreground">{selectedMedicine?.name}</h2>
              <button
              onClick={() => setSelectedMedicine(null)}
              className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Icon name="X" size={24} className="text-muted-foreground" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="aspect-square rounded-xl overflow-hidden bg-muted">
                  <Image
                    src={selectedMedicine?.image}
                    alt={selectedMedicine?.imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async" />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-3">
                      {selectedMedicine?.category}
                    </span>
                    <p className="text-2xl font-bold text-primary mb-4">{selectedMedicine?.price}</p>
                    <p className="text-muted-foreground mb-4">{selectedMedicine?.description}</p>
                  </div>
                  <div className="flex gap-3">
                    <Button
                    variant="default"
                    className="flex-1"
                    iconName="ShoppingCart"
                    iconPosition="left"
                    disabled={!selectedMedicine?.inStock}>
                      Сагслах
                    </Button>
                    {!selectedMedicine?.inStock &&
                  <span className="flex items-center px-4 py-2 bg-destructive/10 text-destructive rounded-lg font-semibold text-sm">
                        Дууссан
                      </span>
                  }
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-muted/50 rounded-xl p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon name="FileText" size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Юунд зориулагдсан</h3>
                      <p className="text-muted-foreground leading-relaxed">{selectedMedicine?.detailedInfo?.purpose}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-xl p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon name="Pill" size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Тун хэмжээ</h3>
                      <p className="text-muted-foreground leading-relaxed">{selectedMedicine?.detailedInfo?.dosage}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-xl p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon name="ClipboardList" size={20} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-3">Хэрэглэх заавар</h3>
                      <div className="space-y-2">
                        {selectedMedicine?.detailedInfo?.instructions?.split('\n')?.map((instruction, index) =>
                      <div key={index} className="flex items-start gap-2">
                            <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                            <p className="text-muted-foreground">{instruction}</p>
                          </div>
                      )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                      <Icon name="AlertTriangle" size={20} className="text-amber-600 dark:text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100 mb-2">Анхааруулга</h3>
                      <p className="text-amber-800 dark:text-amber-200 leading-relaxed">{selectedMedicine?.detailedInfo?.warnings}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>);


};

export default MedicineGrid;