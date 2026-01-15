import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryGrid = ({ selectedCategory, onSelectCategory }) => {
  const categories = [
    {
      id: 1,
      name: 'Бүгд',
      icon: 'Grid3x3',
      count: 156,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88'
    },
    {
      id: 2,
      name: 'Эм',
      icon: 'Pill',
      count: 89,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae'
    },
    {
      id: 3,
      name: 'Амин дэм',
      icon: 'Sparkles',
      count: 34,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      image: 'https://images.unsplash.com/photo-1550572017-4a6e8c4f8f6c'
    },
    {
      id: 4,
      name: 'Ээж хүүхэд',
      icon: 'Baby',
      count: 21,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4'
    },
    {
      id: 5,
      name: 'Хүнс',
      icon: 'Apple',
      count: 12,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
      {categories?.map((category) => (
        <button
          key={category?.id}
          onClick={() => onSelectCategory(category?.name)}
          className={`group relative overflow-hidden rounded-xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
            selectedCategory === category?.name
              ? 'border-primary shadow-lg'
              : 'border-border hover:border-primary/50'
          }`}
        >
          <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-muted to-muted/50">
            <div className={`absolute inset-0 ${category?.bgColor} opacity-80`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon name={category?.icon} size={48} className={category?.color} />
            </div>
          </div>
          <div className="p-4 bg-card">
            <h3 className="text-base md:text-lg font-bold text-foreground mb-1">
              {category?.name}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              {category?.count} бүтээгдэхүүн
            </p>
          </div>
          {selectedCategory === category?.name && (
            <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <Icon name="Check" size={14} className="text-primary-foreground" />
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

export default CategoryGrid;