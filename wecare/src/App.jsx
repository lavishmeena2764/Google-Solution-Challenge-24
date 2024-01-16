import Categorycarousel from "./components/Carousel";

function App() {
  return (
    <>
      <nav className="w-full">
        <ul className="flex w-full flex-wrap items-center justify-between px-3 py-7">
          <li>logo</li>
          <div className="flex w-[30%] items-center justify-evenly text-blue-400">
            <li>About Us</li>
            <li>Sign Up</li>
            <li>Login</li>
          </div>
        </ul>
      </nav>
      <main className="flex justify-between bg-blue-300 h-[360px]">
        <section className=" h-full py-6 text-white px-[70px] flex flex-col justify-around">
          <p className="text-5xl">Heading</p>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic
            possimus accusantium obcaecati assumenda repellendus aut, accusamus
            reprehenderit
          </p>
          <button
            type="button"
            className="focus:outline-none text-white bg-green-600 hover:bg-green-800 text-lg rounded-full px-5 py-2.5 w-[150px]"
          >
            Button
          </button>
        </section>
        <section className="hidden sm:block min-w-[360px] mx-9">
          <img src="https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png" />
        </section>
      </main>
      <main className="flex flex-col">
        <p className="text-4xl mb-9">Heading</p>
        <Categorycarousel />
      </main>
    </>
  );
}

export default App
