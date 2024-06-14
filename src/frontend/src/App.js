import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CourseEditingPage from './pages/CourseEditingPage';
import NewCourseRegistrationPage from './pages/NewCourseRegistrationPage';
import RegisteredCoursesPage from './pages/RegisteredCoursesPage';
import ViewPage from './pages/ViewPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit-course" element={<CourseEditingPage />} />
        <Route path="/new-course" element={<NewCourseRegistrationPage />} />
        <Route path="/courses" element={<RegisteredCoursesPage />} />
        <Route path="/view-course" element={<ViewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
