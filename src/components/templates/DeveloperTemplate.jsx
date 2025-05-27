import React from 'react';
    import { motion } from 'framer-motion';
    import { Github, Linkedin, Twitter, Link as LinkIcon, Briefcase, Lightbulb, BookOpen, Mail, ExternalLink, MapPin, CalendarDays } from 'lucide-react';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { Badge } from '@/components/ui/badge'; // Assuming you'll create this

    const sectionVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const DeveloperTemplate = ({ data }) => {
      const {
        fullName,
        professionalTitle,
        shortBio,
        skills,
        workExperience,
        projects,
        education,
        socialLinks,
      } = data;

      const getSocialIcon = (platform) => {
        if (platform.includes('github')) return <Github className="h-5 w-5" />;
        if (platform.includes('linkedin')) return <Linkedin className="h-5 w-5" />;
        if (platform.includes('twitter')) return <Twitter className="h-5 w-5" />;
        return <LinkIcon className="h-5 w-5" />;
      };
      
      const skillList = skills ? skills.split(',').map(s => s.trim()).filter(s => s) : [];

      return (
        <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-12 text-foreground bg-background">
          {/* Hero Section */}
          <motion.section 
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="text-center py-12 md:py-16 rounded-xl bg-gradient-to-br from-primary/80 to-accent/80 dark:from-primary/50 dark:to-accent/50 shadow-xl"
          >
            <div className="container mx-auto px-4">
              <img  class="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-background shadow-lg" alt={`Profile picture of ${fullName}`} src="https://images.unsplash.com/photo-1603991414220-51b87b89a371" />
              <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-background">{fullName}</h1>
              <p className="text-xl md:text-2xl text-background/90 mb-6">{professionalTitle}</p>
              <div className="flex justify-center space-x-4">
                {socialLinks.github && <a href={`https://github.com/${socialLinks.github}`} target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background"><Github className="h-7 w-7" /></a>}
                {socialLinks.linkedin && <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background"><Linkedin className="h-7 w-7" /></a>}
                {socialLinks.twitter && <a href={`https://twitter.com/${socialLinks.twitter}`} target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background"><Twitter className="h-7 w-7" /></a>}
                {socialLinks.other && <a href={socialLinks.other} target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background"><LinkIcon className="h-7 w-7" /></a>}
              </div>
            </div>
          </motion.section>

          {/* About Section */}
          {shortBio && (
            <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} id="about" className="py-8">
              <h2 className="text-3xl font-bold mb-6 text-center text-primary">About Me</h2>
              <Card className="p-6 md:p-8 glassmorphism">
                <p className="text-lg leading-relaxed text-foreground/90 dark:text-foreground/80">{shortBio}</p>
              </Card>
            </motion.section>
          )}

          {/* Skills Section */}
          {skillList.length > 0 && (
            <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} id="skills" className="py-8">
              <h2 className="text-3xl font-bold mb-8 text-center text-primary">Skills</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {skillList.map((skill, index) => (
                  <motion.custom 
                    key={index} 
                    elementType={Badge} 
                    variant="secondary" 
                    className="text-sm md:text-base px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {skill}
                  </motion.custom>
                ))}
              </div>
            </motion.section>
          )}

          {/* Experience Section */}
          {workExperience && workExperience.filter(exp => exp.company).length > 0 && (
            <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} id="experience" className="py-8">
              <h2 className="text-3xl font-bold mb-8 text-center text-primary">Work Experience</h2>
              <div className="space-y-8">
                {workExperience.filter(exp => exp.company).map((exp, index) => (
                  <Card key={index} className="p-6 glassmorphism hover:shadow-lg transition-shadow">
                    <CardHeader className="p-0 mb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl md:text-2xl text-primary/90">{exp.role}</CardTitle>
                          <CardDescription className="text-md md:text-lg text-accent">{exp.company}</CardDescription>
                        </div>
                        <Badge variant="outline" className="text-xs md:text-sm whitespace-nowrap">{exp.duration}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-foreground/80 dark:text-foreground/70 whitespace-pre-line">{exp.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.section>
          )}

          {/* Projects Section */}
          {projects && projects.filter(proj => proj.title).length > 0 && (
            <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} id="projects" className="py-8">
              <h2 className="text-3xl font-bold mb-8 text-center text-primary">Projects</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {projects.filter(proj => proj.title).map((project, index) => (
                  <Card key={index} className="p-6 flex flex-col glassmorphism hover:shadow-lg transition-shadow">
                    <CardHeader className="p-0 mb-3">
                      <CardTitle className="text-xl md:text-2xl text-primary/90">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                      <p className="text-foreground/80 dark:text-foreground/70 mb-4 whitespace-pre-line">{project.description}</p>
                      {project.techUsed && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-1 text-accent">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techUsed.split(',').map(tech => tech.trim()).filter(t => t).map((tech, i) => (
                              <Badge key={i} variant="secondary" className="bg-secondary/70 text-secondary-foreground/80">{tech}</Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                    <div className="mt-auto pt-4 flex space-x-3">
                      {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:underline"><ExternalLink className="h-4 w-4 mr-1" /> Live Demo</a>}
                      {project.repoLink && <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:underline"><Github className="h-4 w-4 mr-1" /> View Code</a>}
                    </div>
                  </Card>
                ))}
              </div>
            </motion.section>
          )}

          {/* Education Section */}
          {education && education.filter(edu => edu.institution).length > 0 && (
            <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} id="education" className="py-8">
              <h2 className="text-3xl font-bold mb-8 text-center text-primary">Education & Certifications</h2>
              <div className="space-y-6">
                {education.filter(edu => edu.institution).map((edu, index) => (
                  <Card key={index} className="p-6 glassmorphism hover:shadow-lg transition-shadow">
                     <CardHeader className="p-0 mb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg md:text-xl text-primary/90">{edu.degree}</CardTitle>
                          <CardDescription className="text-md text-accent">{edu.institution}</CardDescription>
                        </div>
                        <Badge variant="outline" className="text-xs md:text-sm whitespace-nowrap">{edu.duration}</Badge>
                      </div>
                    </CardHeader>
                    {edu.description && <CardContent className="p-0"><p className="text-sm text-foreground/80 dark:text-foreground/70 whitespace-pre-line">{edu.description}</p></CardContent>}
                  </Card>
                ))}
              </div>
            </motion.section>
          )}

          {/* Contact Section */}
          <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} id="contact" className="py-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary">Get In Touch</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <a href={`mailto:your-email-here@example.com?subject=Inquiry from ${fullName}'s Portfolio`} className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90">
              <Mail className="mr-2 h-5 w-5" /> Say Hello
            </a>
          </motion.section>
        </div>
      );
    };

    export default DeveloperTemplate;