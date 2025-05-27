import React from 'react';
    import { usePortfolio } from '@/contexts/PortfolioContext';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Button } from '@/components/ui/button';
    import { Card, CardTitle } from '@/components/ui/card';
    import { Trash2, PlusCircle } from 'lucide-react';
    import { motion } from 'framer-motion';

    const StepProjects = () => {
      const { portfolioData, addProject, removeProject, updateProject } = usePortfolio();
      const commonInputClass = "bg-background/80 backdrop-blur-sm";

      return (
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="space-y-6">
          {portfolioData.projects.map((project, index) => (
            <Card key={index} className="p-4 space-y-3 relative glassmorphism">
               <CardTitle className="text-lg">Project #{index + 1}</CardTitle>
               {portfolioData.projects.length > 1 && (
                  <Button variant="ghost" size="icon" className="absolute top-2 right-2 text-destructive hover:text-destructive/80" onClick={() => removeProject(index)}>
                      <Trash2 className="h-4 w-4" />
                  </Button>
              )}
              <Input placeholder="Project Title" value={project.title} onChange={(e) => updateProject(index, 'title', e.target.value)} className={commonInputClass} />
              <Textarea placeholder="Description" value={project.description} onChange={(e) => updateProject(index, 'description', e.target.value)} className={commonInputClass} rows={3}/>
              <Input placeholder="Tech Used (comma-separated)" value={project.techUsed} onChange={(e) => updateProject(index, 'techUsed', e.target.value)} className={commonInputClass} />
              <Input placeholder="Live Link (optional)" value={project.liveLink} onChange={(e) => updateProject(index, 'liveLink', e.target.value)} className={commonInputClass} />
              <Input placeholder="Repo Link (optional)" value={project.repoLink} onChange={(e) => updateProject(index, 'repoLink', e.target.value)} className={commonInputClass} />
            </Card>
          ))}
          <Button onClick={addProject} variant="outline" className="w-full"><PlusCircle className="mr-2 h-4 w-4" /> Add Project</Button>
        </motion.div>
      );
    };

    export default StepProjects;