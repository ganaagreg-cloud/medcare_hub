import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ServiceSearch = ({ onSearch, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    { value: '', label: 'Бүх эмчилгээ' },
    { value: 'emergency', label: 'Яаралтай тусламж' },
    { value: 'primary', label: 'Асаргаа' },
    { value: 'specialist', label: 'Сэргээн засах' },
    { value: 'diagnostic', label: 'Оношилгоо' },
    { value: 'surgical', label: 'Мэс засал' },
    { value: 'wellness', label: 'Уламжлалт эмчилгээ' }
  ];

  const handleSearchChange = (e) => {
    const value = e?.target?.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    onFilterChange(value);
  };

  return (
    <div className="bg-card rounded-xl border border-border p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Input
            type="хайх"
            placeholder="Эмчилгээ хайх"
            value={searchTerm}
            onChange={handleSearchChange}
            className="pl-10"
          />
          <Icon
            name="Search"
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
          />
        </div>

        <Select
          placeholder="Төрлөөр шүүх"
          options={categories}
          value={selectedCategory}
          onChange={handleCategoryChange}
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors">
          Зүрх судас
        </button>
        <button className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors">
          Асаргаа,сувилгаа
        </button>
        <button className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors">
          Сэргээн засах
        </button>
        <button className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors">
          Уламжлалт
        </button>
        <button className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors">
          Мэдрэлийн Оношилгоо
        </button>
      </div>
    </div>
  );
};

export default ServiceSearch;