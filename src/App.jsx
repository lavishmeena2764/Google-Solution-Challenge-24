import Carousels from "./components/Carousel";
import HorizontalNonLinearStepper from "./components/Stepper";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
function App() {
  
  return (
    <>
      <NavBar />
      <MainPage />
      <Carousels />
      <main className="my-5 mb-10 mx-2">
        <div className="flex flex-col justify-center items-center">
          <p className="text-4xl my-5 font-serif font-600 text-center">
            How It Works
          </p>
          <div className="w-full">
            <HorizontalNonLinearStepper/>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default App

/* sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px @media (min-width: 1536px) { ... }  */