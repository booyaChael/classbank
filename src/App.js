import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Reset } from "styled-reset";
import {
  SelectTypePage,
  LoginPage,
  TeacherJoinPage,
  EnterClassCodePage,
  StudentJoinPage,
  MakeClassPage,
} from "./pages";

function App() {
  return (
    <>
      <Router>
        <Reset />
        <Routes>
          <Route path="student-join" element={<StudentJoinPage />} />
          <Route path="class-code" element={<EnterClassCodePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="select-type" element={<SelectTypePage />} />
          <Route path="teacher-join" element={<TeacherJoinPage />} />
          <Route path="make-class" element={<MakeClassPage />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
