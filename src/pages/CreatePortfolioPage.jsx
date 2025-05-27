import React, { useState, useEffect } from 'react';
    import { useLocation, useNavigate } from 'react-router-dom';
    import { usePortfolio } from '@/contexts/PortfolioContext';
    import { Card, CardContent } from '@/components/ui/card';
    import { toast } from "@/components/ui/use-toast";
    import { AnimatePresence, motion } from 'framer-motion';

    import StepPersonalDetails from '@/components/portfolio-wizard/StepPersonalDetails';
    import StepSkills from '@/components/portfolio-wizard/StepSkills';
    import StepExperience from '@/components/portfolio-wizard/StepExperience';
    import StepProjects from '@/components/portfolio-wizard/StepProjects';
    import StepEducation from '@/components/portfolio-wizard/StepEducation';
    import StepSocialLinks from '@/components/portfolio-wizard/StepSocialLinks';
    import StepThemeTemplate from '@/components/portfolio-wizard/StepThemeTemplate';
    import StepReview from '@/components/portfolio-wizard/StepReview';
    import WizardNavigation from '@/components/portfolio-wizard/WizardNavigation';
    import WizardHeader from '@/components/portfolio-wizard/WizardHeader';
    
    import { User, Briefcase, Lightbulb, BookOpen, Link as LinkIconLucide, Palette, Columns as ColumnsIcon } from 'lucide-react';

    const stepsConfig = [
      { id: 'personal', title: 'Personal Details', icon: <User className="h-5 w-5" />, component: StepPersonalDetails },
      { id: 'skills', title: 'Skills', icon: <Lightbulb className="h-5 w-5" />, component: StepSkills },
      { id: 'experience', title: 'Work Experience', icon: <Briefcase className="h-5 w-5" />, component: StepExperience },
      { id: 'projects', title: 'Projects', icon: <Lightbulb className="h-5 w-5" />, component: StepProjects },
      { id: 'education', title: 'Education', icon: <BookOpen className="h-5 w-5" />, component: StepEducation },
      { id: 'social', title: 'Social Links', icon: <LinkIconLucide className="h-5 w-5" />, component: StepSocialLinks },
      { id: 'theme', title: 'Theme & Template', icon: <Palette className="h-5 w-5" />, component: StepThemeTemplate },
      { id: 'review', title: 'Review & Generate', icon: <ColumnsIcon className="h-5 w-5" />, component: StepReview },
    ];

    const CreatePortfolioPage = () => {
      const [currentStep, setCurrentStep] = useState(0);
      const { portfolioData, updatePortfolioData, resetPortfolioData } = usePortfolio();
      const location = useLocation();
      const navigate = useNavigate();

      useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const template = queryParams.get('template');
        if (template) {
          updatePortfolioData({ templateStyle: template });
        }
      }, [location.search, updatePortfolioData]);
      
      const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, stepsConfig.length - 1));
      const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

      const handleSubmit = () => {
        console.log("Final Portfolio Data:", portfolioData);
        localStorage.setItem('generatedPortfolioData', JSON.stringify(portfolioData)); // Store for preview
        toast({
          title: "Portfolio Ready for Preview!",
          description: "Redirecting to your generated portfolio...",
          className: "bg-green-500 text-white",
        });
        navigate('/portfolio/preview'); // Navigate to preview page
      };
      
      const CurrentStepComponent = stepsConfig[currentStep].component;

      return (
        <div className="max-w-3xl mx-auto py-8">
          <Card className="shadow-2xl bg-card/70 backdrop-blur-lg">
            <WizardHeader currentStep={currentStep} stepsConfig={stepsConfig} />
            <CardContent className="p-6 md:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CurrentStepComponent />
                </motion.div>
              </AnimatePresence>
            </CardContent>
            <WizardNavigation 
              currentStep={currentStep}
              totalSteps={stepsConfig.length}
              prevStep={prevStep}
              nextStep={nextStep}
              handleSubmit={handleSubmit}
              resetForm={() => { 
                resetPortfolioData(); 
                setCurrentStep(0); 
                toast({title: "Form Reset", description:"Your portfolio data has been cleared."});
              }}
            />
          </Card>
        </div>
      );
    };

    export default CreatePortfolioPage;