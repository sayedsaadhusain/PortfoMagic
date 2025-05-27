import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import HomePage from '@/pages/HomePage';
    import CreatePortfolioPage from '@/pages/CreatePortfolioPage';
    import PortfolioPreviewPage from '@/pages/PortfolioPreviewPage';
    import Layout from '@/components/Layout';
    import { Toaster } from '@/components/ui/toaster';
    import { ThemeProvider } from '@/contexts/ThemeContext';
    import { PortfolioProvider } from '@/contexts/PortfolioContext';

    function App() {
      return (
        <ThemeProvider>
          <PortfolioProvider>
            <Router>
              <Layout>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/create" element={<CreatePortfolioPage />} />
                  <Route path="/portfolio/:id" element={<PortfolioPreviewPage />} />
                </Routes>
                <Toaster />
              </Layout>
            </Router>
          </PortfolioProvider>
        </ThemeProvider>
      );
    }

    export default App;