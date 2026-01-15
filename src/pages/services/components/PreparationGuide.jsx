import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PreparationGuide = ({ guide }) => {
  const [expandedStep, setExpandedStep] = useState(null);

  const toggleStep = (index) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  const handleDownload = () => {
    console.log(`Downloading preparation guide for ${guide?.serviceName}`);
  };

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="bg-primary/5 p-6 md:p-8 border-b border-border">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
            <Icon name="FileText" size={24} className="text-primary-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
              {guide?.serviceName} Preparation Guide
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              {guide?.description}
            </p>
          </div>
        </div>
      </div>
      <div className="p-6 md:p-8">
        <div className="space-y-4">
          {guide?.steps?.map((step, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleStep(index)}
                className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-primary">{index + 1}</span>
                  </div>
                  <span className="text-sm md:text-base font-medium text-foreground text-left">
                    {step?.title}
                  </span>
                </div>
                <Icon
                  name={expandedStep === index ? "ChevronUp" : "ChevronDown"}
                  size={20}
                  className="text-muted-foreground flex-shrink-0"
                />
              </button>
              
              {expandedStep === index && (
                <div className="px-4 pb-4 pt-2 bg-muted/30">
                  <p className="text-sm text-foreground leading-relaxed mb-3">
                    {step?.description}
                  </p>
                  {step?.tips && step?.tips?.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-muted-foreground uppercase">
                        Important Tips:
                      </p>
                      {step?.tips?.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-start gap-2">
                          <Icon name="AlertCircle" size={14} className="text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-foreground">{tip}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <Button
            variant="default"
            size="lg"
            fullWidth
            iconName="Download"
            iconPosition="left"
            onClick={handleDownload}
          >
            Download Complete Guide (PDF)
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PreparationGuide;