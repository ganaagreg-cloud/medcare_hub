import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ServiceSearch = ({ onSearch, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    { value: '', label: 'All Services' },
    { value: 'emergency', label: 'Emergency Care' },
    { value: 'primary', label: 'Primary Care' },
    { value: 'specialist', label: 'Specialist Care' },
    { value: 'diagnostic', label: 'Diagnostic Services' },
    { value: 'surgical', label: 'Surgical Services' },
    { value: 'wellness', label: 'Wellness Programs' }
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
            type="search"
            placeholder="Search services, conditions, or symptoms..."
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
          placeholder="Filter by category"
          options={categories}
          value={selectedCategory}
          onChange={handleCategoryChange}
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors">
          Heart Disease
        </button>
        <button className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors">
          Diabetes Care
        </button>
        <button className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors">
          Cancer Treatment
        </button>
        <button className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors">
          Orthopedics
        </button>
        <button className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors">
          Women's Health
        </button>
      </div>
    </div>
  );
};

export default ServiceSearch;