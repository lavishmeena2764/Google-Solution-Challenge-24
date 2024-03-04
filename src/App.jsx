import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Diabetes from "./pages/Diabetes";
import Heart from "./pages/Heart";
import Skin from "./pages/Skin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/diabetes' element={<Diabetes />} />
        <Route path='/heart' element={<Heart />} />
        <Route path='/skin' element={<Skin />} />
      </Routes>
    </Router>
  );
}

export default App;
