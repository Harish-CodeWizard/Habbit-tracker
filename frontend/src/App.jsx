import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import Dashboard from "./pages/Dashboard";
import Habits from "./pages/Habits";
import Analytics from "./pages/Analytics";
import Calendar from "./pages/Calendar";
import Achievements from "./pages/Achievements";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
