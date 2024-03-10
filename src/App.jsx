import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Upload from "./pages/Upload";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
  );
}

export default App;
