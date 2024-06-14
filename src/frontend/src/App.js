import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisteredCoursesPage from './pages/RegisteredCoursesPage';
import CourseEditingPage from './pages/CourseEditingPage';
import NewCourseRegistrationPage from './pages/NewCourseRegistrationPage';
import ViewPage from './pages/ViewPage';
import TeachersPage from './pages/TeachersPage';
import SubjectsPage from './pages/SubjectsPage';
import RoomsPage from './pages/RoomsPage';
import SchedulePage from './pages/SchedulePage';
import NewTeacherRegistrationPage from './pages/NewTeacherRegistrationPage';
import NewSubjectRegistrationPage from './pages/NewSubjectRegistrationPage';
import NewRoomRegistrationPage from './pages/NewRoomRegistrationPage';
import ViewTeacherPage from './pages/ViewTeacherPage';
import ViewSubjectPage from './pages/ViewSubjectPage';
import ViewRoomPage from './pages/ViewRoomPage';
import EditTeacherPage from './pages/EditTeacherPage';
import EditSubjectPage from './pages/EditSubjectPage';
import EditRoomPage from './pages/EditRoomPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registered-courses" element={<RegisteredCoursesPage />} />
        <Route path="/edit-course" element={<CourseEditingPage />} />
        <Route path="/new-course" element={<NewCourseRegistrationPage />} />
        <Route path="/view-course/:id" element={<ViewPage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/subjects" element={<SubjectsPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/new-teacher" element={<NewTeacherRegistrationPage />} />
        <Route path="/new-subject" element={<NewSubjectRegistrationPage />} />
        <Route path="/new-room" element={<NewRoomRegistrationPage />} />
        <Route path="/view-teacher/:id" element={<ViewTeacherPage />} />
        <Route path="/view-subject/:id" element={<ViewSubjectPage />} />
        <Route path="/view-room/:id" element={<ViewRoomPage />} />
        <Route path="/edit-teacher/:id" element={<EditTeacherPage />} />
        <Route path="/edit-subject/:id" element={<EditSubjectPage />} />
        <Route path="/edit-room/:id" element={<EditRoomPage />} />
      </Routes>
    </Router>
  );
}

export default App;
