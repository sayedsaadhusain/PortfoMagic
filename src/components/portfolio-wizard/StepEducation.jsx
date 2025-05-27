import React from 'react';
    import { usePortfolio } from '@/contexts/PortfolioContext';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Button } from '@/components/ui/button';
    import { Card, CardTitle } from '@/components/ui/card';
    import { Trash2, PlusCircle } from 'lucide-react';
    import { motion } from 'framer-motion';

    const StepEducation = () => {
      const { portfolioData, addEducation, removeEducation, updateEducation } = usePortfolio();
      const commonInputClass = "bg-background/80 backdrop-blur-sm";

      return (
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="space-y-6">
          {portfolioData.education.map((edu, index) => (
            <Card key={index} className="p-4 space-y-3 relative glassmorphism">
              <CardTitle className="text-lg">Education/Certification #{index + 1}</CardTitle>
              {portfolioData.education.length > 1 && (
                  <Button variant="ghost" size="icon" className="absolute top-2 right-2 text-destructive hover:text-destructive/80" onClick={() => removeEducation(index)}>
                      <Trash2 className="h-4 w-4" />
                  </Button>
              )}
              <Input placeholder="Institution/Platform" value={edu.institution} onChange={(e) => updateEducation(index, 'institution', e.target.value)} className={commonInputClass} />
              <Input placeholder="Degree/Certificate" value={edu.degree} onChange={(e) => updateEducation(index, 'degree', e.target.value)} className={commonInputClass} />
              <Input placeholder="Duration (e.g., Aug 2016 - May 2020)" value={edu.duration} onChange={(e) => updateEducation(index, 'duration', e.target.value)} className={commonInputClass} />
              <Textarea placeholder="Description/Key Learnings (optional)" value={edu.description} onChange={(e) => updateEducation(index, 'description', e.target.value)} className={commonInputClass} rows={2}/>
            </Card>
          ))}
          <Button onClick={addEducation} variant="outline" className="w-full"><PlusCircle className="mr-2 h-4 w-4" /> Add Education/Certification</Button>
        </motion.div>
      );
    };

    export default StepEducation;