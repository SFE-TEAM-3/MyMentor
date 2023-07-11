import './App.css';
import MentorOpp from './pages/MentorOpp';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mentorOpp" element={<MentorOpp />}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
