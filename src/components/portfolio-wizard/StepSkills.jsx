import React from 'react';
    import { usePortfolio } from '@/contexts/PortfolioContext';
    import { Label } from '@/components/ui/label';
    import { Textarea } from '@/components/ui/textarea';
    import { motion } from 'framer-motion';

    const StepSkills = () => {
      const { portfolioData, updatePortfolioData } = usePortfolio();
      const commonInputClass = "bg-background/80 backdrop-blur-sm";

      const handleChange = (e) => {
        const { name, value } = e.target;
        updatePortfolioData({ [name]: value });
      };

      return (
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="space-y-6">
          <div>
            <Label htmlFor="skills">Skills (comma-separated)</Label>
            <Textarea id="skills" name="skills" value={portfolioData.skills} onChange={handleChange} placeholder="e.g., React, Node.js, Figma, Problem Solving" className={commonInputClass} rows={4}/>
            <p className="text-xs text-muted-foreground mt-1">Separate skills with a comma.</p>
          </div>
        </motion.div>
      );
    };

    export default StepSkills;