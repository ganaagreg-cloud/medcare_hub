import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import Footer from '../../components/ui/Footer';
import Button from '../../components/ui/Button';
import ContentList from './components/ContentList';
import ContentEditor from './components/ContentEditor';
import ContentStats from './components/ContentStats';
import { postService } from '../../services/postService';
import toast, { Toaster } from 'react-hot-toast';

const NewsHealthTipsManagement = () => {
  const [activeView, setActiveView] = useState('list');
  const [editingContent, setEditingContent] = useState(null);
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContents();
  }, []);

  const loadContents = async () => {
    try {
      setLoading(true);
      const data = await postService?.getAll();
      setContents(data);
    } catch (error) {
      console.error('Load error:', error);
      toast?.error('Нийтлэл ачаалахад алдаа гарлаа');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateNew = () => {
    setEditingContent(null);
    setActiveView('editor');
  };

  const handleEdit = (content) => {
    setEditingContent(content);
    setActiveView('editor');
  };

  const handleDelete = async (id) => {
    if (window.confirm('Энэ контентыг устгахдаа итгэлтэй байна уу?')) {
      try {
        await postService?.delete(id);
        await loadContents();
        toast?.success('Нийтлэл амжилттай устгагдлаа');
      } catch (error) {
        console.error('Delete error:', error);
        toast?.error('Устгахад алдаа гарлаа');
      }
    }
  };

  const handleSave = async (contentData) => {
    try {
      if (editingContent) {
        await postService?.update(editingContent?.id, contentData);
      } else {
        await postService?.create(contentData);
      }
      await loadContents();
      setActiveView('list');
      setEditingContent(null);
    } catch (error) {
      console.error('Save error:', error);
      throw error;
    }
  };

  const handleCancel = () => {
    setActiveView('list');
    setEditingContent(null);
  };

  return (
    <>
      <Helmet>
        <title>Мэдээ ба Эрүүл Мэндийн Зөвлөгөө Удирдлага - Тайхар</title>
        <meta name="description" content="Мэдээ болон эрүүл мэндийн зөвлөгөө нийтлэх, засварлах, устгах" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Toaster position="top-right" />
        <Header />
        
        <main className="flex-1">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <Breadcrumb />
          </div>

          <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  Контент удирдлага
                </h1>
                <p className="text-sm md:text-base text-muted-foreground">
                  Мэдээ болон эрүүл мэндийн зөвлөгөө нийтлэх, засварлах
                </p>
              </div>
              {activeView === 'list' && (
                <Button
                  variant="default"
                  size="lg"
                  iconName="Plus"
                  iconPosition="left"
                  onClick={handleCreateNew}
                >
                  Шинэ нийтлэл
                </Button>
              )}
            </div>

            {activeView === 'list' && (
              <>
                {loading ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                      <p className="text-muted-foreground">Ачааллаж байна...</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <ContentStats contents={contents} />
                    <ContentList
                      contents={contents}
                      onEdit={handleEdit}
                      onDelete={handleDelete}
                    />
                  </>
                )}
              </>
            )}

            {activeView === 'editor' && (
              <ContentEditor
                content={editingContent}
                onSave={handleSave}
                onCancel={handleCancel}
              />
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NewsHealthTipsManagement;