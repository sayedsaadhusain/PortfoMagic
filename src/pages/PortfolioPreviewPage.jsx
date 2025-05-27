import React, { useEffect, useState, useRef } from 'react';
    import { Helmet } from 'react-helmet-async';
    import { usePortfolio } from '@/contexts/PortfolioContext';
    import DeveloperTemplate from '@/components/templates/DeveloperTemplate';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { useNavigate } from 'react-router-dom';
    import { Edit, DownloadCloud, Loader2 } from 'lucide-react';
    import html2pdf from 'html2pdf.js';
    import { toast } from "@/components/ui/use-toast";

    const PortfolioPreviewPage = () => {
      const [data, setData] = useState(null);
      const [isDownloading, setIsDownloading] = useState(false);
      const { portfolioData: contextData } = usePortfolio();
      const navigate = useNavigate();
      const portfolioRef = useRef(null);

      useEffect(() => {
        const storedData = localStorage.getItem('generatedPortfolioData');
        if (storedData) {
          setData(JSON.parse(storedData));
        } else {
          setData(contextData); 
        }
      }, [contextData]);

      const handleDownloadPDF = () => {
        if (!portfolioRef.current || !data) return;
        setIsDownloading(true);
        toast({
          title: "Generating PDF...",
          description: "Your portfolio PDF is being prepared for download.",
        });

        const element = portfolioRef.current;
        const opt = {
          margin:       0.5,
          filename:     `${data.fullName.toLowerCase().replace(/\s+/g, '-')}-portfolio.pdf`,
          image:        { type: 'jpeg', quality: 0.98 },
          html2canvas:  { scale: 2, useCORS: true, logging: false },
          jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().from(element).set(opt).save()
          .then(() => {
            setIsDownloading(false);
            toast({
              title: "PDF Downloaded!",
              description: "Your portfolio has been successfully downloaded as a PDF.",
              className: "bg-green-500 text-white",
            });
          })
          .catch((error) => {
            setIsDownloading(false);
            console.error("Error generating PDF:", error);
            toast({
              title: "PDF Generation Failed",
              description: "Something went wrong while generating the PDF. Please try again.",
              variant: "destructive",
            });
          });
      };

      if (!data || !data.fullName) {
        return (
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center p-8"
            >
              <h1 className="text-3xl font-bold text-primary mb-4">Loading Portfolio...</h1>
              <p className="text-muted-foreground mb-6">If you're seeing this for a while, there might be no data to display.</p>
              <Button onClick={() => navigate('/create')}>Create a New Portfolio</Button>
            </motion.div>
          </div>
        );
      }

      const { templateStyle, fullName, professionalTitle, shortBio, skills } = data;

      const renderTemplate = () => {
        // The ref is attached to the direct child of this function's return
        // which will be the main container of the chosen template.
        switch (templateStyle) {
          case 'developer':
            return <div ref={portfolioRef}><DeveloperTemplate data={data} /></div>;
          default:
            return <div ref={portfolioRef}><DeveloperTemplate data={data} /></div>;
        }
      };
      
      const pageTitle = `${fullName} - ${professionalTitle} | PortfoMagic`;
      const pageDescription = shortBio || `Portfolio of ${fullName}, a ${professionalTitle}.`;
      const pageKeywords = skills ? skills.split(',').map(s => s.trim()).join(', ') : 'portfolio, personal website';

      return (
        <>
          <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta name="keywords" content={pageKeywords} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
          </Helmet>
          
          <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2">
            <Button onClick={() => navigate('/create')} className="shadow-lg">
              <Edit className="mr-2 h-4 w-4" /> Edit Portfolio
            </Button>
            <Button 
              variant="outline" 
              className="shadow-lg bg-background hover:bg-muted"
              onClick={handleDownloadPDF}
              disabled={isDownloading}
            >
              {isDownloading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <DownloadCloud className="mr-2 h-4 w-4" />
              )}
              {isDownloading ? 'Downloading...' : 'Download PDF'}
            </Button>
          </div>

          {renderTemplate()}
        </>
      );
    };

    export default PortfolioPreviewPage;