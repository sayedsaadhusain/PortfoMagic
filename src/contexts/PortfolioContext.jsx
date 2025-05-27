import React, { createContext, useContext, useState, useEffect } from 'react';

    const PortfolioContext = createContext();

    export const usePortfolio = () => useContext(PortfolioContext);

    const initialPortfolioData = {
      fullName: '',
      professionalTitle: '',
      shortBio: '',
      skills: '',
      workExperience: [{ company: '', role: '', duration: '', description: '' }],
      projects: [{ title: '', description: '', techUsed: '', liveLink: '', repoLink: '' }],
      education: [{ institution: '', degree: '', duration: '', description: '' }],
      socialLinks: { github: '', linkedin: '', twitter: '', dribbble: '', behance: '', medium: '', other: '' },
      themePreference: 'light',
      templateStyle: 'developer',
    };

    export const PortfolioProvider = ({ children }) => {
      const [portfolioData, setPortfolioData] = useState(() => {
        const savedData = localStorage.getItem('portfolioData');
        return savedData ? JSON.parse(savedData) : initialPortfolioData;
      });

      useEffect(() => {
        localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
      }, [portfolioData]);

      const updatePortfolioData = (newData) => {
        setPortfolioData((prevData) => ({ ...prevData, ...newData }));
      };
      
      const resetPortfolioData = () => {
        setPortfolioData(initialPortfolioData);
        localStorage.removeItem('portfolioData');
      }

      const addWorkExperience = () => {
        setPortfolioData(prev => ({
          ...prev,
          workExperience: [...prev.workExperience, { company: '', role: '', duration: '', description: '' }]
        }));
      };
      const removeWorkExperience = (index) => {
        setPortfolioData(prev => ({
          ...prev,
          workExperience: prev.workExperience.filter((_, i) => i !== index)
        }));
      };
      const updateWorkExperience = (index, field, value) => {
        setPortfolioData(prev => {
          const newWorkExperience = [...prev.workExperience];
          newWorkExperience[index][field] = value;
          return { ...prev, workExperience: newWorkExperience };
        });
      };

      const addProject = () => {
        setPortfolioData(prev => ({
          ...prev,
          projects: [...prev.projects, { title: '', description: '', techUsed: '', liveLink: '', repoLink: '' }]
        }));
      };
      const removeProject = (index) => {
        setPortfolioData(prev => ({
          ...prev,
          projects: prev.projects.filter((_, i) => i !== index)
        }));
      };
      const updateProject = (index, field, value) => {
        setPortfolioData(prev => {
          const newProjects = [...prev.projects];
          newProjects[index][field] = value;
          return { ...prev, projects: newProjects };
        });
      };
      
      const addEducation = () => {
        setPortfolioData(prev => ({
          ...prev,
          education: [...prev.education, { institution: '', degree: '', duration: '', description: '' }]
        }));
      };
      const removeEducation = (index) => {
        setPortfolioData(prev => ({
          ...prev,
          education: prev.education.filter((_, i) => i !== index)
        }));
      };
      const updateEducation = (index, field, value) => {
        setPortfolioData(prev => {
          const newEducation = [...prev.education];
          newEducation[index][field] = value;
          return { ...prev, education: newEducation };
        });
      };


      return (
        <PortfolioContext.Provider value={{ 
            portfolioData, 
            updatePortfolioData,
            resetPortfolioData,
            addWorkExperience, removeWorkExperience, updateWorkExperience,
            addProject, removeProject, updateProject,
            addEducation, removeEducation, updateEducation 
            }}>
          {children}
        </PortfolioContext.Provider>
      );
    };