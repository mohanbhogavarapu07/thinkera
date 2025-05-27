import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail.tsx";
import Hackathons from "./pages/Hackathons";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import Corporate from "./pages/Corporate";
import Leadership from "./pages/Leadership.tsx";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact.tsx";
import Assessments from "./pages/Assessments";

// Import assessment components
import AgilityGrowthCompass from "./pages/assessment/agility-growth-compass/src/pages/Index";
import AgilityGrowthCompassResults from "./pages/assessment/agility-growth-compass/src/components/results/ResultsView";
import TechPathfinderAssessment from "./pages/assessment/tech-pathfinder-assessment/src/pages/Index";

// Import Tech Potential Voyager components
import TechPotentialVoyagerIndex from "./pages/assessment/tech-potential-voyager/src/pages/Index";
import TechPotentialVoyagerOnboarding from "./pages/assessment/tech-potential-voyager/src/pages/Onboarding";
import TechPotentialVoyagerPractice from "./pages/assessment/tech-potential-voyager/src/pages/Practice";
import TechPotentialVoyagerAssessment from "./pages/assessment/tech-potential-voyager/src/pages/Assessment";
import TechPotentialVoyagerResults from "./pages/assessment/tech-potential-voyager/src/pages/Results";
import TechPotentialVoyagerAbout from "./pages/assessment/tech-potential-voyager/src/pages/About";

// Import Tech Scenario Solver Lab components
import TechScenarioSolverLabIndex from "./pages/assessment/tech-scenario-solver-lab/src/pages/Index";
import RoleSelection from "./pages/assessment/tech-scenario-solver-lab/src/components/RoleSelection";
import ScenarioEngine from "./pages/assessment/tech-scenario-solver-lab/src/components/ScenarioEngine";
import FeedbackDashboard from "./pages/assessment/tech-scenario-solver-lab/src/components/FeedbackDashboard";
import { UserProvider } from "./pages/assessment/tech-scenario-solver-lab/src/contexts/UserContext";

// Create a new QueryClient instance with default options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:courseId" element={<CourseDetail />} />
              <Route path="/hackathons" element={<Hackathons />} />
              <Route path="/success-stories" element={<SuccessStoriesPage />} />
              <Route path="/corporate" element={<Corporate />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/assessments" element={<Assessments />} />
              
              {/* Assessment Routes */}
              <Route path="/assessment/agility-growth-compass" element={<AgilityGrowthCompass />} />
              <Route path="/assessment/agility-growth-compass/results" element={<AgilityGrowthCompassResults />} />
              <Route path="/assessment/tech-pathfinder-assessment" element={<TechPathfinderAssessment />} />
              
              {/* Tech Potential Voyager Routes */}
              <Route path="/assessment/tech-potential-voyager" element={<TechPotentialVoyagerIndex />} />
              <Route path="/assessment/tech-potential-voyager/onboarding" element={<TechPotentialVoyagerOnboarding />} />
              <Route path="/assessment/tech-potential-voyager/practice" element={<TechPotentialVoyagerPractice />} />
              <Route path="/assessment/tech-potential-voyager/assessment" element={<TechPotentialVoyagerAssessment />} />
              <Route path="/assessment/tech-potential-voyager/results" element={<TechPotentialVoyagerResults />} />
              <Route path="/assessment/tech-potential-voyager/about" element={<TechPotentialVoyagerAbout />} />
              
              {/* Tech Scenario Solver Lab Routes */}
              <Route 
                path="/assessment/tech-scenario-solver-lab" 
                element={
                  <UserProvider>
                    <TechScenarioSolverLabIndex />
                  </UserProvider>
                } 
              />
              <Route 
                path="/assessment/tech-scenario-solver-lab/assessment" 
                element={
                  <UserProvider>
                    <RoleSelection />
                  </UserProvider>
                } 
              />
              <Route 
                path="/assessment/tech-scenario-solver-lab/scenarios" 
                element={
                  <UserProvider>
                    <ScenarioEngine />
                  </UserProvider>
                } 
              />
              <Route 
                path="/assessment/tech-scenario-solver-lab/feedback" 
                element={
                  <UserProvider>
                    <FeedbackDashboard />
                  </UserProvider>
                } 
              />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
