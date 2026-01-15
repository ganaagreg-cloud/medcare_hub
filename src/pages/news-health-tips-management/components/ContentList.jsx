import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';


const ContentList = ({ contents, onEdit, onDelete }) => {
  const [filter, setFilter] = useState('all');

  const filteredContents = filter === 'all'
    ? contents
    : contents?.filter(c => c?.status === filter);

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="p-4 md:p-6 border-b border-border">
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'all' ?'bg-primary text-primary-foreground' :'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            Бүгд
          </button>
          <button
            onClick={() => setFilter('Нийтлэгдсэн')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'Нийтлэгдсэн' ?'bg-primary text-primary-foreground' :'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            Нийтлэгдсэн
          </button>
          <button
            onClick={() => setFilter('Ноорог')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'Ноорог' ?'bg-primary text-primary-foreground' :'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            Ноорог
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Гарчиг
              </th>
              <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Ангилал
              </th>
              <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Төлөв
              </th>
              <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Онцлох
              </th>
              <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Зохиогч
              </th>
              <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Үзэлт
              </th>
              <th className="px-4 md:px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Үйлдэл
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredContents?.map((content) => (
              <tr key={content?.id} className="hover:bg-muted/30 transition-colors">
                <td className="px-4 md:px-6 py-4">
                  <p className="text-sm font-medium text-foreground">{content?.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{content?.date}</p>
                </td>
                <td className="px-4 md:px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
                    {content?.category}
                  </span>
                </td>
                <td className="px-4 md:px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      content?.status === 'Нийтлэгдсэн' ?'bg-green-50 text-green-600' :'bg-orange-50 text-orange-600'
                    }`}
                  >
                    {content?.status}
                  </span>
                </td>
                <td className="px-4 md:px-6 py-4">
                  {content?.isFeatured ? (
                    <Icon name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                  ) : (
                    <span className="text-muted-foreground text-xs">-</span>
                  )}
                </td>
                <td className="px-4 md:px-6 py-4 text-sm text-muted-foreground">
                  {content?.author}
                </td>
                <td className="px-4 md:px-6 py-4 text-sm text-muted-foreground">
                  {content?.views}
                </td>
                <td className="px-4 md:px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => onEdit(content)}
                      className="p-2 rounded-lg hover:bg-muted transition-colors"
                      title="Засах"
                    >
                      <Icon name="Edit" size={16} className="text-primary" />
                    </button>
                    <button
                      onClick={() => onDelete(content?.id)}
                      className="p-2 rounded-lg hover:bg-muted transition-colors"
                      title="Устгах"
                    >
                      <Icon name="Trash2" size={16} className="text-destructive" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredContents?.length === 0 && (
        <div className="p-12 text-center">
          <Icon name="FileText" size={48} className="text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">Контент олдсонгүй</p>
        </div>
      )}
    </div>
  );
};

export default ContentList;