import React from 'react';
    import { usePortfolio } from '@/contexts/PortfolioContext';
    import { Label } from '@/components/ui/label';
    import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
    import { Card, CardTitle, CardDescription } from '@/components/ui/card';
    import { motion } from 'framer-motion';

    const StepThemeTemplate = () => {
      const { portfolioData, updatePortfolioData } = usePortfolio();
      const commonInputClass = "bg-background/80 backdrop-blur-sm";

      const handleThemeChange = (value) => {
        updatePortfolioData({ themePreference: value });
      };

      const handleTemplateChange = (value) => {
        updatePortfolioData({ templateStyle: value });
      };

      return (
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="space-y-6">
          <div>
            <Label htmlFor="themePreference">Theme Preference</Label>
            <Select value={portfolioData.themePreference} onValueChange={handleThemeChange}>
              <SelectTrigger id="themePreference" className={commonInputClass}>
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light Mode</SelectItem>
                <SelectItem value="dark">Dark Mode</SelectItem>
                <SelectItem value="system">System Preference</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="templateStyle">Template Style</Label>
            <Select value={portfolioData.templateStyle} onValueChange={handleTemplateChange}>
              <SelectTrigger id="templateStyle" className={commonInputClass}>
                <SelectValue placeholder="Select template" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="developer">Developer</SelectItem>
                <SelectItem value="designer">Designer</SelectItem>
                <SelectItem value="writer">Writer/Marketer</SelectItem>
                <SelectItem value="resume">Resume/CV Style</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Card className="p-4 glassmorphism">
            <CardTitle className="text-lg mb-2">Preview (Coming Soon!)</CardTitle>
            <CardDescription>A live preview of your selected theme and template will appear here.</CardDescription>
            <div className="mt-4 h-40 bg-muted rounded-md flex items-center justify-center">
              <p className="text-sm text-muted-foreground">Theme: {portfolioData.themePreference}, Template: {portfolioData.templateStyle}</p>
            </div>
          </Card>
        </motion.div>
      );
    };

    export default StepThemeTemplate;