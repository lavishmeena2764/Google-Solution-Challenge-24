import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Upload from "./pages/Upload";
import Contact from "./pages/Contact";
import DiabetesForm from "./pages/Diabetes";
import HeartDiseaseForm from "./pages/Heart";
import KidneyDiseaseForm from "./pages/Kidney";
import PregnancyRiskForm from "./pages/Pregnancy";
import AlzheimerForm from "./pages/Alziemer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/diabetes" element={<DiabetesForm />} />
        <Route path="/heart" element={<HeartDiseaseForm />} />
        <Route path="/kidney" element={<KidneyDiseaseForm />} />
        <Route path="/pregnancy" element={<PregnancyRiskForm />} />
        <Route path="/alziemer" element={<AlzheimerForm />} />
        <Route path="/upload" element={<Upload />} />
        
      </Routes>
    </Router>
  );
}

export default App;
