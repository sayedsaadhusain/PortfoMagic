import React from 'react';
    import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { motion } from 'framer-motion';

    const WizardHeader = ({ currentStep, stepsConfig }) => {
      return (
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Create Your PortfoMagic
              </CardTitle>
              <CardDescription>Step {currentStep + 1} of {stepsConfig.length}: {stepsConfig[currentStep].title}</CardDescription>
            </div>
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                {stepsConfig[currentStep].icon}
            </div>
          </div>
           <div className="mt-4 w-full bg-muted rounded-full h-2.5">
            <motion.div 
                className="bg-primary h-2.5 rounded-full"
                initial={{ width: '0%'}}
                animate={{ width: `${((currentStep + 1) / stepsConfig.length) * 100}%`}}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            />
           </div>
        </CardHeader>
      );
    };

    export default WizardHeader;