import React from 'react';
    import { usePortfolio } from '@/contexts/PortfolioContext';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Button } from '@/components/ui/button';
    import { Card, CardTitle } from '@/components/ui/card';
    import { Trash2, PlusCircle } from 'lucide-react';
    import { motion } from 'framer-motion';

    const StepExperience = () => {
      const { portfolioData, addWorkExperience, removeWorkExperience, updateWorkExperience } = usePortfolio();
      const commonInputClass = "bg-background/80 backdrop-blur-sm";

      return (
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="space-y-6">
          {portfolioData.workExperience.map((exp, index) => (
            <Card key={index} className="p-4 space-y-3 relative glassmorphism">
              <CardTitle className="text-lg">Experience #{index + 1}</CardTitle>
              {portfolioData.workExperience.length > 1 && (
                  <Button variant="ghost" size="icon" className="absolute top-2 right-2 text-destructive hover:text-destructive/80" onClick={() => removeWorkExperience(index)}>
                      <Trash2 className="h-4 w-4" />
                  </Button>
              )}
              <Input placeholder="Company" value={exp.company} onChange={(e) => updateWorkExperience(index, 'company', e.target.value)} className={commonInputClass} />
              <Input placeholder="Role" value={exp.role} onChange={(e) => updateWorkExperience(index, 'role', e.target.value)} className={commonInputClass} />
              <Input placeholder="Duration (e.g., Jan 2020 - Present)" value={exp.duration} onChange={(e) => updateWorkExperience(index, 'duration', e.target.value)} className={commonInputClass} />
              <Textarea placeholder="Description" value={exp.description} onChange={(e) => updateWorkExperience(index, 'description', e.target.value)} className={commonInputClass} rows={3}/>
            </Card>
          ))}
          <Button onClick={addWorkExperience} variant="outline" className="w-full"> <PlusCircle className="mr-2 h-4 w-4" /> Add Experience</Button>
        </motion.div>
      );
    };

    export default StepExperience;