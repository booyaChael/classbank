import React from "react";
import GlobalStyles from "./GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  SelectTypePage,
  LoginPage,
  TeacherJoinPage,
  EnterClassCodePage,
  StudentJoinPage,
  MakeClassPage,
  MyClassesPage,
  MyClassPage,
  MyStudentPage,
  StudentBankBookPage,
} from "./pages";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="student-join" element={<StudentJoinPage />} />
          <Route path="class-code" element={<EnterClassCodePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="select-type" element={<SelectTypePage />} />
          <Route path="teacher-join" element={<TeacherJoinPage />} />
          <Route path="make-class" element={<MakeClassPage />} />
          <Route path="my-class" element={<MyClassPage />} />
          <Route path="my-student" element={<MyStudentPage />} />
          <Route path="my-classes-list" element={<MyClassesPage />} />
          <Route path="bank-book" element={<StudentBankBookPage />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
