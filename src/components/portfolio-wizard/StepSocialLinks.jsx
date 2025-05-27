import React from 'react';
    import { usePortfolio } from '@/contexts/PortfolioContext';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { motion } from 'framer-motion';

    const StepSocialLinks = () => {
      const { portfolioData, updatePortfolioData } = usePortfolio();
      const commonInputClass = "bg-background/80 backdrop-blur-sm";

      const handleSocialChange = (e) => {
        const { name, value } = e.target;
        updatePortfolioData({ socialLinks: { ...portfolioData.socialLinks, [name]: value } });
      };

      return (
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="github">GitHub</Label>
              <Input id="github" name="github" value={portfolioData.socialLinks.github} onChange={handleSocialChange} placeholder="your-github-username" className={commonInputClass}/>
            </div>
            <div>
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input id="linkedin" name="linkedin" value={portfolioData.socialLinks.linkedin} onChange={handleSocialChange} placeholder="your-linkedin-profile-url" className={commonInputClass}/>
            </div>
            <div>
              <Label htmlFor="twitter">Twitter (X)</Label>
              <Input id="twitter" name="twitter" value={portfolioData.socialLinks.twitter} onChange={handleSocialChange} placeholder="your-twitter-handle" className={commonInputClass}/>
            </div>
             <div>
              <Label htmlFor="dribbble">Dribbble</Label>
              <Input id="dribbble" name="dribbble" value={portfolioData.socialLinks.dribbble} onChange={handleSocialChange} placeholder="your-dribbble-username" className={commonInputClass}/>
            </div>
            <div>
              <Label htmlFor="behance">Behance</Label>
              <Input id="behance" name="behance" value={portfolioData.socialLinks.behance} onChange={handleSocialChange} placeholder="your-behance-profile-url" className={commonInputClass}/>
            </div>
            <div>
              <Label htmlFor="medium">Medium</Label>
              <Input id="medium" name="medium" value={portfolioData.socialLinks.medium} onChange={handleSocialChange} placeholder="your-medium-username" className={commonInputClass}/>
            </div>
            <div>
              <Label htmlFor="other">Other Link (e.g., Personal Website)</Label>
              <Input id="other" name="other" value={portfolioData.socialLinks.other} onChange={handleSocialChange} placeholder="https://your.site" className={commonInputClass}/>
            </div>
          </div>
        </motion.div>
      );
    };

    export default StepSocialLinks;