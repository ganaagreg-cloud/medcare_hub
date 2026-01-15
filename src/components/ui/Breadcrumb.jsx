import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumb = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathSegments = location?.pathname?.split('/')?.filter(Boolean);

  const breadcrumbItems = [
    { path: '/homepage', label: 'Home' },
    ...pathSegments?.map((segment, index) => {
      const path = `/${pathSegments?.slice(0, index + 1)?.join('/')}`;
      const label = segment?.charAt(0)?.toUpperCase() + segment?.slice(1)?.replace(/-/g, ' ');
      return { path, label };
    })
  ];

  if (breadcrumbItems?.length <= 1) {
    return null;
  }

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {breadcrumbItems?.map((item, index) => (
        <div key={item?.path} className="breadcrumb-item">
          {index > 0 && (
            <Icon 
              name="ChevronRight" 
              size={16} 
              className="breadcrumb-separator" 
            />
          )}
          {index === breadcrumbItems?.length - 1 ? (
            <span className="text-foreground font-medium">{item?.label}</span>
          ) : (
            <button
              onClick={() => handleNavigation(item?.path)}
              className="breadcrumb-link"
            >
              {item?.label}
            </button>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;