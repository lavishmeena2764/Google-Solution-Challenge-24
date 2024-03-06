/* eslint-disable no-unused-vars */
import HorizontalNonLinearStepper from "./StepperDesktop";
import VerticalLinearStepper from "./StepperMobile";

function HowitWorks() {
  return (
    <div>
      <main className="my-10 mb-10 mx-2">
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl my-5 font-serif font-600 text-center">
            How It Works
          </p>
          <div className="w-full flex justify-center items-center">
            {/* <VerticalLinearStepper /> */}
            <HorizontalNonLinearStepper />
          </div>
        </div>
      </main>
    </div>
  );
}

export default HowitWorks;
