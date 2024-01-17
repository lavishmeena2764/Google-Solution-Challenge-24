import Categorycarousel from "./components/Carousel";
import VerifiedIcon from "@mui/icons-material/Verified";
function App() {
  
  return (
    <>
      <nav className="w-full">
        <ul className="flex w-full flex-wrap items-center justify-between px-3 py-7">
          <li className="ml-12">
            <div className="flex items-center">
              <img
                src="../logo.png"
                alt=""
                height={40}
                width={40}
                className="mr-3"
              />
              <p className="text-medBlue text-xl font-">Medify.ai</p>
            </div>
          </li>
          <div className="flex w-[40%] items-center justify-evenly font-serif font-500 text-medBlue text-lg">
            <li>About Us</li>
            <li>Sign Up</li>
            <li className="bg-medBlue text-white px-5 py-2.5 rounded-full">
              Login
            </li>
          </div>
        </ul>
      </nav>
      <main className="flex justify-between bg-medBlue h-[400px] lg:h-[400px] xl:h-[360px]">
        <section className="h-full py-6  text-white px-[70px] flex flex-col justify-around">
          <p className="text-3xl sm:text-5xl font-800 font-serif pt-1">
            Easy, Fast, and Precise Health Analysis
          </p>
          <p className="text-sm lg:text-xl mb-3 xl:mb-7 mt-3 font-serif font-500">
            Unlock your well-being with AI-driven health insights. Predict
            potential risks, connect with experts, and embrace a personalized
            path to a healthier you.
          </p>
          <div className="mb-4">
            <button
              type="button"
              className="font-serif font-500 text-white bg-medGreen-base hover:bg-medGreen-darker text-lg rounded-full sm:px-5 sm:py-2.5 sm:w-[150px] w-[120px] px-0.5 py-0.5"
            >
              Get Started!
            </button>
          </div>
          <p className="font-serif font-500 sm:text-md text-sm">
            <VerifiedIcon /> Connect with trusted local healthcare experts for
            personalized guidance
          </p>
        </section>
        <section className="hidden xl:block min-w-[360px] mx-9 flex-none">
          <img src="https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png" />
        </section>
      </main>
      <main className="flex flex-col mt-10 font-serif text-center">
        <p className="text-4xl mt-6 mb-4 pl-[36px] font-800 ">Services</p>
        <p className="text-2xl my-2 mb-8 pl-[36px] font-400 text-stone-500">
          We offer
        </p>
        <Categorycarousel />
        <br></br>
      </main>

      <main>
        <p className="text-4xl my-5 mb-14 pl-[36px] font-serif font-600 text-center">
          Heading
        </p>
      </main>
    </>
  );
}

export default App

/* sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px @media (min-width: 1536px) { ... }  */