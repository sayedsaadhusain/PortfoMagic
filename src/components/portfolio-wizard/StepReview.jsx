import React from 'react';
    import { usePortfolio } from '@/contexts/PortfolioContext';
    import { Card } from '@/components/ui/card';
    import { motion } from 'framer-motion';

    const StepReview = () => {
      const { portfolioData } = usePortfolio();

      return (
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="space-y-4">
          <h2 className="text-2xl font-semibold">Review Your Information</h2>
          <p className="text-muted-foreground">Please review all the information you've entered. Click "Generate Portfolio" when you're ready!</p>
          <Card className="max-h-96 overflow-y-auto p-4 glassmorphism">
              <pre className="text-xs whitespace-pre-wrap break-all">{JSON.stringify(portfolioData, null, 2)}</pre>
          </Card>
        </motion.div>
      );
    };

    export default StepReview;