import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const InsuranceChecker = () => {
  const [formData, setFormData] = useState({
    insuranceProvider: '',
    policyNumber: '',
    serviceType: ''
  });
  const [checkResult, setCheckResult] = useState(null);
  const [isChecking, setIsChecking] = useState(false);

  const insuranceProviders = [
    { value: 'blue-cross', label: 'Blue Cross Blue Shield' },
    { value: 'aetna', label: 'Aetna' },
    { value: 'united', label: 'UnitedHealthcare' },
    { value: 'cigna', label: 'Cigna' },
    { value: 'humana', label: 'Humana' },
    { value: 'kaiser', label: 'Kaiser Permanente' }
  ];

  const serviceTypes = [
    { value: 'emergency', label: 'Emergency Care' },
    { value: 'primary', label: 'Primary Care' },
    { value: 'specialist', label: 'Specialist Consultation' },
    { value: 'surgery', label: 'Surgical Procedures' },
    { value: 'diagnostic', label: 'Diagnostic Tests' },
    { value: 'therapy', label: 'Physical Therapy' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setCheckResult(null);
  };

  const handleCheckCoverage = () => {
    setIsChecking(true);
    
    // Simulate API call
    setTimeout(() => {
      setCheckResult({
        covered: true,
        copay: '$25',
        deductible: '$500',
        coinsurance: '20%',
        outOfPocketMax: '$3,000',
        notes: 'This service is covered under your current plan. Pre-authorization may be required for certain procedures.'
      });
      setIsChecking(false);
    }, 1500);
  };

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="bg-accent/5 p-6 md:p-8 border-b border-border">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
            <Icon name="Shield" size={24} className="text-accent-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
              Insurance Coverage Checker
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Verify your insurance coverage for our services instantly
            </p>
          </div>
        </div>
      </div>
      <div className="p-6 md:p-8">
        <div className="space-y-4 mb-6">
          <Select
            label="Insurance Provider"
            placeholder="Select your insurance provider"
            options={insuranceProviders}
            value={formData?.insuranceProvider}
            onChange={(value) => handleInputChange('insuranceProvider', value)}
            required
            searchable
          />

          <Input
            label="Policy Number"
            type="text"
            placeholder="Enter your policy number"
            value={formData?.policyNumber}
            onChange={(e) => handleInputChange('policyNumber', e?.target?.value)}
            required
          />

          <Select
            label="Service Type"
            placeholder="Select the service you need"
            options={serviceTypes}
            value={formData?.serviceType}
            onChange={(value) => handleInputChange('serviceType', value)}
            required
          />
        </div>

        <Button
          variant="default"
          size="lg"
          fullWidth
          iconName="Search"
          iconPosition="left"
          onClick={handleCheckCoverage}
          loading={isChecking}
          disabled={!formData?.insuranceProvider || !formData?.policyNumber || !formData?.serviceType}
        >
          Check Coverage
        </Button>

        {checkResult && (
          <div className="mt-6 p-6 bg-success/10 border border-success/20 rounded-lg">
            <div className="flex items-start gap-3 mb-4">
              <Icon name="CheckCircle2" size={24} className="text-success flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-1">
                  Coverage Confirmed
                </h4>
                <p className="text-sm text-muted-foreground">
                  {checkResult?.notes}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-card rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">Copay</p>
                <p className="text-lg font-semibold text-foreground">{checkResult?.copay}</p>
              </div>
              <div className="p-3 bg-card rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">Deductible</p>
                <p className="text-lg font-semibold text-foreground">{checkResult?.deductible}</p>
              </div>
              <div className="p-3 bg-card rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">Coinsurance</p>
                <p className="text-lg font-semibold text-foreground">{checkResult?.coinsurance}</p>
              </div>
              <div className="p-3 bg-card rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">Out-of-Pocket Max</p>
                <p className="text-lg font-semibold text-foreground">{checkResult?.outOfPocketMax}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InsuranceChecker;