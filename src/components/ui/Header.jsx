import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navigationItems = [
    { path: '/homepage', label: 'Нүүр', icon: 'Home' },
    {
      label: 'Бидний тухай',
      icon: 'Users',
      dropdown: [
        { path: '/about', label: 'Эмнэлгийн танилцуулга' },
        { path: '/about#director', label: 'Захирлын мэндчилгээ' },
        { path: '/about#journey', label: 'Бидний түүх' },
        { path: '/about#experts', label: 'Манай мэрэгжилтэн' },
        { path: '/about#awards', label: 'Шагнал' },
        { path: '/about#events', label: 'Арга хэмжээ' }
      ]
    },
    { path: '/services', label: 'Үйлчилгээ', icon: 'Stethoscope' },
    { path: '/pharmacy', label: 'Эмийн сан', icon: 'Pill' },
    {
      label: 'Зөвлөгөө',
      icon: 'Newspaper',
      dropdown: [
        { path: '/news-health-tips-management', label: 'Мэдээ & Эрүүл мэндийн зөвлөгөө' }
      ]
    },
    { path: '/contact', label: 'Холбоо барих', icon: 'Phone' }
  ];

  const isActive = (path) => location?.pathname === path;

  const handleNavigation = (path) => {
    if (path?.includes('#')) {
      const [route, hash] = path?.split('#');
      navigate(route);
      setTimeout(() => {
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate(path);
    }
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleEmergencyClick = () => {
    window.location.href = 'tel:77072455';
  };

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-logo" onClick={() => handleNavigation('/homepage')} style={{ cursor: 'pointer' }}>
            <div className="header-logo-icon">
              <Icon name="Heart" size={24} color="#FFFFFF" />
            </div>
            <span className="header-logo-text">Тайхар</span>
          </div>

          <nav className="header-nav">
            {navigationItems?.map((item) => (
              item?.dropdown ? (
                <div key={item?.label} className="relative group">
                  <button
                    onClick={() => toggleDropdown(item?.label)}
                    className="header-nav-link flex items-center gap-1"
                  >
                    {item?.label}
                    <Icon name="ChevronDown" size={16} />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item?.dropdown?.map((subItem) => (
                      <button
                        key={subItem?.path}
                        onClick={() => handleNavigation(subItem?.path)}
                        className="w-full text-left px-4 py-3 hover:bg-muted transition-colors text-sm text-foreground"
                      >
                        {subItem?.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  key={item?.path}
                  onClick={() => handleNavigation(item?.path)}
                  className={`header-nav-link ${isActive(item?.path) ? 'active' : ''}`}
                >
                  {item?.label}
                </button>
              )
            ))}
          </nav>

          <div className="header-actions">
            <Button
              variant="outline"
              size="default"
              iconName="Calendar"
              iconPosition="left"
              onClick={() => handleNavigation('/contact')}
              className="hidden sm:flex"
            >
              Цаг захиалах
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="header-mobile-toggle"
              aria-label="Open menu"
            >
              <Icon name="Menu" size={24} color="currentColor" />
            </button>
          </div>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div 
            className="mobile-menu-overlay" 
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <div className="header-logo">
                <div className="header-logo-icon">
                  <Icon name="Heart" size={24} color="#FFFFFF" />
                </div>
                <span className="header-logo-text">Тайхар</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Close menu"
              >
                <Icon name="X" size={24} color="currentColor" />
              </button>
            </div>

            <nav className="mobile-menu-nav">
              {navigationItems?.map((item) => (
                item?.dropdown ? (
                  <div key={item?.label}>
                    <button
                      onClick={() => toggleDropdown(item?.label)}
                      className="mobile-menu-link w-full flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <Icon name={item?.icon} size={20} color="currentColor" />
                        <span>{item?.label}</span>
                      </div>
                      <Icon name="ChevronDown" size={16} className={openDropdown === item?.label ? 'rotate-180' : ''} />
                    </button>
                    {openDropdown === item?.label && (
                      <div className="pl-9 space-y-1 mt-1">
                        {item?.dropdown?.map((subItem) => (
                          <button
                            key={subItem?.path}
                            onClick={() => handleNavigation(subItem?.path)}
                            className="w-full text-left py-2 px-4 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                          >
                            {subItem?.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item?.path}
                    onClick={() => handleNavigation(item?.path)}
                    className={`mobile-menu-link ${isActive(item?.path) ? 'active' : ''}`}
                  >
                    <Icon name={item?.icon} size={20} color="currentColor" />
                    <span>{item?.label}</span>
                  </button>
                )
              ))}
            </nav>

            <div className="mobile-menu-footer">
              <Button
                variant="default"
                size="lg"
                fullWidth
                iconName="Calendar"
                iconPosition="left"
                onClick={() => {
                  handleNavigation('/contact');
                  setIsMobileMenuOpen(false);
                }}
              >
                Цаг захиалах
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;