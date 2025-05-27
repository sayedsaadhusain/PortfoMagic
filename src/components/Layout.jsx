import React from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { Moon, Sun, Sparkles } from 'lucide-react';
    import { useTheme } from '@/contexts/ThemeContext';
    import { motion } from 'framer-motion';
    import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu"


    const Layout = ({ children }) => {
      const { theme, toggleTheme } = useTheme();
      const navigate = useNavigate();

      const handleGetStarted = () => {
        navigate('/create');
      };

      return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          >
            <div className="container flex h-16 items-center justify-between">
              <Link to="/" className="flex items-center space-x-2">
                <Sparkles className="h-8 w-8 text-primary animate-pulse" />
                <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">PortfoMagic</span>
              </Link>
              <nav className="flex items-center space-x-2 md:space-x-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">Templates</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => navigate('/create?template=developer')}>Developer</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/create?template=designer')}>Designer</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/create?template=writer')}>Writer/Marketer</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/create?template=resume')}>Resume/CV</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="ghost" size="sm" onClick={() => navigate('/#features')}>Features</Button>
                {/* <Button variant="ghost" size="sm">Pricing</Button> */}
                <Button onClick={toggleTheme} variant="ghost" size="icon" className="h-9 w-9 md:h-10 md:w-10">
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  <span className="sr-only">Toggle theme</span>
                </Button>
                <Button onClick={handleGetStarted} size="sm" className="px-3 md:px-4">Get Started</Button>
              </nav>
            </div>
          </motion.header>

          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>

          <motion.footer 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="py-8 border-t border-border/40 bg-background/95"
          >
            <div className="container text-center text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} PortfoMagic. All rights reserved.</p>
              <p className="mt-1">Crafted with <Sparkles className="inline-block h-4 w-4 text-primary" /> by Hostinger Horizons</p>
            </div>
          </motion.footer>
        </div>
      );
    };

    export default Layout;