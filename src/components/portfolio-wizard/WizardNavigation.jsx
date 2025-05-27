import React from 'react';
    import { Button } from '@/components/ui/button';

    const WizardNavigation = ({ currentStep, totalSteps, prevStep, nextStep, handleSubmit, resetForm }) => {
      return (
        <div className="p-6 md:p-8 border-t flex justify-between items-center">
          <div>
            {currentStep > 0 && (
              <Button variant="outline" onClick={prevStep}>
                Previous
              </Button>
            )}
          </div>
          <div className="space-x-2">
            {currentStep === totalSteps - 1 ? (
                <Button onClick={handleSubmit} className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white">
                  Generate Portfolio
                </Button>
            ) : (
                <Button onClick={nextStep}>
                  Next
                </Button>
            )}
            {currentStep === totalSteps - 1 && (
                <Button variant="destructive" onClick={resetForm}>
                    Start Over
                </Button>
            )}
          </div>
        </div>
      );
    };

    export default WizardNavigation;