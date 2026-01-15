import React from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import Footer from '../../components/ui/Footer';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import DepartmentDirectory from './components/DepartmentDirectory';
import LocationMap from './components/LocationMap';
import InsuranceInfo from './components/InsuranceInfo';
import AccessibilityServices from './components/AccessibilityServices';
import FAQSection from './components/FAQSection';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Breadcrumb />
        </div>
        
        <ContactHero />
        <ContactForm />
        <DepartmentDirectory />
        <LocationMap />
        <InsuranceInfo />
        <AccessibilityServices />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;