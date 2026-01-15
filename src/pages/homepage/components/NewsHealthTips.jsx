import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import { postService } from '../../../services/postService';

const NewsHealthTips = () => {
  const navigate = useNavigate();
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState('');

  useEffect(() => {
    loadPublishedPosts();
  }, []);

  const loadPublishedPosts = async () => {
    try {
      setLoading(true);
      const data = await postService?.getPublished();
      setNewsArticles(data);
      
      // Get latest update date
      if (data?.length > 0) {
        const latest = data?.[0]?.date;
        setLastUpdate(latest);
      }
    } catch (error) {
      console.error('Load posts error:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Мэдээ':
        return { color: 'text-blue-600', bg: 'bg-blue-50' };
      case 'Эрүүл мэндийн зөвлөгөө':
        return { color: 'text-green-600', bg: 'bg-green-50' };
      case 'Олон нийт':
        return { color: 'text-purple-600', bg: 'bg-purple-50' };
      default:
        return { color: 'text-gray-600', bg: 'bg-gray-50' };
    }
  };

  const healthTips = [
  {
    id: 1,
    icon: "Heart",
    title: "Зүрхний эрүүл мэнд",
    tip: "7 хоногт 150 минут дунд зэргийн дасгал хөдөлгөөн хийх",
    color: "text-red-600",
    bgColor: "bg-red-50"
  },
  {
    id: 2,
    icon: "Apple",
    title: "Хоол тэжээл",
    tip: "Өдөрт 5 удаа жимс, хүнсний ногоо хэрэглэх",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    id: 3,
    icon: "Moon",
    title: "Нойр",
    tip: "Насанд хүрэгчид 7-9 цаг чанартай нойр авах хэрэгтэй",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50"
  },
  {
    id: 4,
    icon: "Droplet",
    title: "Усны хэрэглээ",
    tip: "Өдөрт наад зах нь 8 аяга ус уух",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  }];

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-xs md:text-sm font-semibold mb-4">
            <Icon name="Newspaper" size={16} />
            <span>Сүүлийн мэдээ {lastUpdate && `- ${lastUpdate}`}</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Мэдээ & Эрүүл мэндийн зөвлөгөө
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Эрүүл мэндийн сүүлийн үеийн мэдээ, мэргэжлийн зөвлөгөөтэй танилцаарай
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Ачааллаж байна...</p>
            </div>
          </div>
        ) : newsArticles?.length === 0 ? (
          <div className="text-center py-12">
            <Icon name="FileText" size={48} className="text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Одоогоор нийтлэл байхгүй байна</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {newsArticles?.slice(0, 3)?.map((article) => {
              const categoryColors = getCategoryColor(article?.category);
              return (
                <article
                  key={article?.id}
                  onClick={() => handleArticleClick(article)}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  {article?.imagePath && (
                    <div className="aspect-[16/10] overflow-hidden">
                      <Image
                        src={article?.imagePath}
                        alt={article?.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors?.bg} ${categoryColors?.color}`}>
                        {article?.category}
                      </span>
                      {article?.isFeatured && (
                        <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      )}
                      <span className="text-xs text-muted-foreground">{article?.date}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {article?.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {article?.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <Icon name="User" size={16} className="text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{article?.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Eye" size={16} className="text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{article?.views}</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <Icon name="Lightbulb" size={24} className="text-secondary" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              Хурдан эрүүл мэндийн зөвлөгөө
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {healthTips?.map((tip) =>
            <div
              key={tip?.id}
              className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">

                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${tip?.bgColor} flex items-center justify-center flex-shrink-0`}>
                  <Icon name={tip?.icon} size={20} className={tip?.color} />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">
                    {tip?.title}
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {tip?.tip}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {selectedArticle &&
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm" onClick={handleCloseArticle}>
          <div className="bg-card rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-border" onClick={(e) => e?.stopPropagation()}>
            <div className="sticky top-0 bg-card border-b border-border p-4 md:p-6 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${selectedArticle?.categoryBg} ${selectedArticle?.categoryColor}`}>
                  {selectedArticle?.category}
                </span>
                <span className="text-xs text-muted-foreground">{selectedArticle?.date}</span>
              </div>
              <button
              onClick={handleCloseArticle}
              className="w-8 h-8 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
              aria-label="Close">

                <Icon name="X" size={20} />
              </button>
            </div>
            
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {selectedArticle?.title}
              </h2>
              
              <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="User" size={16} />
                  <span>{selectedArticle?.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  <span>{selectedArticle?.readTime}</span>
                </div>
              </div>

              <div className="aspect-video overflow-hidden rounded-xl mb-6">
                {selectedArticle?.imagePath && (
                  <Image
                    src={selectedArticle?.imagePath}
                    alt={selectedArticle?.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </div>

              <div className="prose prose-lg max-w-none">
                {selectedArticle?.content?.split('\n\n')?.map((paragraph, index) =>
              <p key={index} className="text-base text-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
              )}
              </div>
            </div>
          </div>
        </div>
      }
    </section>
  );


};

export default NewsHealthTips;