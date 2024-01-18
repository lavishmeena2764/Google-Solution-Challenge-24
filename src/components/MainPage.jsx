import VerifiedIcon from "@mui/icons-material/Verified";
function MainPage() {
  return (
    <div>
      <main className="flex justify-between bg-medBlue h-[400px] lg:h-[400px] xl:h-[360px]">
        <section className="h-full py-6  text-white xl:px-[70px] lg:px-[50px] px-[30px] flex flex-col justify-around">
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
    </div>
  );
}

export default MainPage;
