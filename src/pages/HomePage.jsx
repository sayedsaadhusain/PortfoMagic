import React from 'react';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { CheckCircle, Zap, Palette, Code, Edit3, GitBranch, Link2, FileText, Settings, Download, Rocket, Sparkles } from 'lucide-react';
    import { motion } from 'framer-motion';
    import { useNavigate } from 'react-router-dom';

    const featureVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.1,
          duration: 0.5,
          ease: "easeOut"
        }
      })
    };
    
    const HomePage = () => {
      const navigate = useNavigate();
      const features = [
        { icon: <Edit3 className="h-8 w-8 text-primary" />, title: "User-Friendly Interface", description: "Step-by-step wizard to enter personal details effortlessly." },
        { icon: <Palette className="h-8 w-8 text-accent" />, title: "Customizable Templates", description: "Themes for Developers, Designers, Writers, and more." },
        { icon: <Zap className="h-8 w-8 text-primary" />, title: "AI Content Generation", description: "AI-powered bio & project description generator." },
        { icon: <GitBranch className="h-8 w-8 text-accent" />, title: "Tech Integrations", description: "Sync with GitHub, Dribbble, Behance, LinkedIn & Medium." },
        { icon: <Rocket className="h-8 w-8 text-primary" />, title: "Live Hosting", description: "Free subdomain & custom domain options. One-click deploy." },
        { icon: <Download className="h-8 w-8 text-accent" />, title: "Download as PDF", description: "Export your stunning portfolio as a professional PDF document." },
        { icon: <Settings className="h-8 w-8 text-primary" />, title: "SEO Settings", description: "Optimize meta tags and titles for better visibility." },
        { icon: <Code className="h-8 w-8 text-accent" />, title: "Responsive Previews", description: "See how your portfolio looks on any device instantly." },
      ];

      const handleGetStarted = () => {
        navigate('/create');
      };

      return (
        <div className="space-y-16">
          <motion.section 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center py-20 rounded-xl bg-hero-gradient bg-400% animate-gradient-shift"
          >
            <div className="container mx-auto px-4">
              <motion.h1 
                className="text-5xl md:text-7xl font-extrabold mb-6 text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Portfo<span className="text-primary-foreground opacity-80">Magic</span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-primary-foreground opacity-90 mb-10 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Create a personalized, stunning portfolio in minutes.
                <br />
                Showcase your skills and projects like never before.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-lg transform hover:scale-105 transition-transform duration-300" onClick={handleGetStarted}>
                  Start Building Your Portfolio <Rocket className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <div className="mt-12 flex justify-center space-x-4">
                <div className="flex items-center text-sm text-primary-foreground opacity-80">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-300" /> No coding required
                </div>
                <div className="flex items-center text-sm text-primary-foreground opacity-80">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-300" /> AI-assisted content
                </div>
                <div className="flex items-center text-sm text-primary-foreground opacity-80">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-300" /> Beautiful templates
                </div>
              </div>
            </div>
          </motion.section>

          <section className="py-16" id="features">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary"
                initial={{ opacity: 0, y:20 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Why PortfoMagic?
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y:20 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                PortfoMagic empowers you to create a portfolio that truly represents your talent and hard work, with powerful tools and seamless integrations.
              </motion.p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.custom
                  key={index}
                  custom={index}
                  variants={featureVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="w-full"
                  elementType={Card} // This prop is for Framer Motion when using custom component
                >
                  <Card className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 glassmorphism dark:glassmorphism">
                    <CardHeader className="items-center text-center">
                      <div className="p-4 bg-primary/10 dark:bg-primary/20 rounded-full mb-4 inline-block">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center flex-grow">
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.custom>
              ))}
            </div>
          </section>

          <motion.section 
            className="py-20 my-16 rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Shine?</h2>
              <p className="text-xl mb-10 max-w-xl mx-auto">
                Join thousands of creatives and professionals who trust PortfoMagic to build their online presence.
              </p>
              <Button size="lg" variant="secondary" className="text-lg px-10 py-6 shadow-lg transform hover:scale-105 transition-transform duration-300 bg-white text-primary hover:bg-white/90" onClick={handleGetStarted}>
                Create Your Portfolio Now
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.section>

           <section className="py-16">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0, y:20 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                See What's Possible
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y:20 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Explore example portfolios created with PortfoMagic.
              </motion.p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <img  className="w-full h-60 object-cover" alt="Developer portfolio example" src="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4" />
                  <CardContent className="p-6">
                    <CardTitle className="text-lg mb-2">Developer Showcase</CardTitle>
                    <CardDescription>Modern design for showcasing coding projects and skills.</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <img  className="w-full h-60 object-cover" alt="Designer portfolio example" src="https://images.unsplash.com/photo-1696885867935-80493d744a91" />
                  <CardContent className="p-6">
                    <CardTitle className="text-lg mb-2">Designer's Vision</CardTitle>
                    <CardDescription>Visually rich template perfect for creative designers.</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <img  className="w-full h-60 object-cover" alt="Writer portfolio example" src="https://images.unsplash.com/photo-1504983875-d3b163aba9e6" />
                  <CardContent className="p-6">
                    <CardTitle className="text-lg mb-2">Writer's Hub</CardTitle>
                    <CardDescription>Elegant layout for writers to display articles and publications.</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>
        </div>
      );
    };

    export default HomePage;