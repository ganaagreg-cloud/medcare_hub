import React from 'react';
import Icon from '../../../components/AppIcon';

const ContentStats = ({ contents }) => {
  const published = contents?.filter(c => c?.status === 'Нийтлэгдсэн')?.length || 0;
  const draft = contents?.filter(c => c?.status === 'Ноорог')?.length || 0;
  const featured = contents?.filter(c => c?.isFeatured)?.length || 0;
  const totalViews = contents?.reduce((sum, c) => sum + (c?.views || 0), 0);

  const stats = [
    {
      icon: 'FileText',
      label: 'Нийт нийтлэл',
      value: contents?.length || 0,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: 'CheckCircle',
      label: 'Нийтлэгдсэн',
      value: published,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: 'Star',
      label: 'Онцлох',
      value: featured,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: 'Eye',
      label: 'Нийт үзэлт',
      value: totalViews,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
      {stats?.map((stat, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{stat?.label}</p>
              <p className="text-2xl md:text-3xl font-bold text-foreground">{stat?.value}</p>
            </div>
            <div className={`w-12 h-12 rounded-lg ${stat?.bgColor} flex items-center justify-center`}>
              <Icon name={stat?.icon} size={24} className={stat?.color} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentStats;