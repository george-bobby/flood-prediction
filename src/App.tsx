import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';
import Functions from './pages/Functions';
import Accuracy from './pages/Accuracy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/functions" element={<Functions />} />
          <Route path="/accuracy" element={<Accuracy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;