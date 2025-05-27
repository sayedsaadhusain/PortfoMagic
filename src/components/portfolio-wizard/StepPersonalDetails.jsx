import React from 'react';
    import { usePortfolio } from '@/contexts/PortfolioContext';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Textarea } from '@/components/ui/textarea';
    import { motion } from 'framer-motion';

    const StepPersonalDetails = () => {
      const { portfolioData, updatePortfolioData } = usePortfolio();
      const commonInputClass = "bg-background/80 backdrop-blur-sm";

      const handleChange = (e) => {
        const { name, value } = e.target;
        updatePortfolioData({ [name]: value });
      };

      return (
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="space-y-6">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" name="fullName" value={portfolioData.fullName} onChange={handleChange} placeholder="e.g., Ada Lovelace" className={commonInputClass} />
          </div>
          <div>
            <Label htmlFor="professionalTitle">Professional Title</Label>
            <Input id="professionalTitle" name="professionalTitle" value={portfolioData.professionalTitle} onChange={handleChange} placeholder="e.g., Senior Software Engineer" className={commonInputClass}/>
          </div>
          <div>
            <Label htmlFor="shortBio">Short Bio (1-3 sentences)</Label>
            <Textarea id="shortBio" name="shortBio" value={portfolioData.shortBio} onChange={handleChange} placeholder="Tell us a bit about yourself..." className={commonInputClass} rows={3}/>
          </div>
        </motion.div>
      );
    };

    export default StepPersonalDetails;