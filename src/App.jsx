import Carousels from "./components/Carousel";
import Footer from "./components/Footer";
import HowitWorks from "./components/HowitWorks";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import Login from "./pages/SignIn";
function App() {
  
  return (
    <>
      <NavBar />
      <MainPage />
      <Carousels />
      <HowitWorks/>
      <Footer />
      <Login/>
    </>
  );
}


export default App

/* sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px @media (min-width: 1536px) { ... }  */