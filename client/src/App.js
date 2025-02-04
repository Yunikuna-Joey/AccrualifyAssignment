import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import TimesheetPage from "./pages/TimesheetPage/TimesheetPage";
import { UserProvider } from "./context/UserContext";
import EditTimesheetPage from "./pages/EditTimesheetPage/EditTimesheetPage";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/template" element={<TimesheetPage />} />
          <Route path="/timesheet/:timesheetId" element={<EditTimesheetPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
