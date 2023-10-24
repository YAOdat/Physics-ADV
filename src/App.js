import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Grades from './components/Grades';
import Lessons from './components/Lessons';
import NavBar from './components/NavBar';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/grades/:gradeParam" element={<Lessons />} />
          <Route path="/grades/:gradeParam/:lessonNumber" element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
