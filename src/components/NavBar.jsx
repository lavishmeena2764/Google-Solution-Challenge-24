import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About Us" },
    { id: 3, text: "Login" },
    { id: 4, text: "Sign Up" },
  ];

  return (
    <nav className="w-full flex justify-between items-center h-24 mx-auto px-4 text-medBlue-200 bg-white">
      {/* Logo */}

      <div className="flex items-center">
        <img
          src="../logo.png"
          alt=""
          height={60}
          width={60}
          className="ml-1 lg:ml-10 "
        />
        <p className="text-xl mx-2 font-serif">Medify.ai</p>
      </div>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex mr-1">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-blue-600 text-md"
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden mr-2">
        {nav ? (
          <AiOutlineClose
            size={20}
            style={{ borderColor: "black", border: 2 }}
          />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 z-10"
            : "ease-in-out w-[100%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}

        <div className="flex">
          <img
            src="../logo.png"
            alt=""
            height={30}
            width={60}
            className="m-3"
          />
        </div>

        {/* Mobile Navigation Items */}
        <div className="my-5">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="py-3 border-b px-5 rounded-xl duration-300 hover:text-white cursor-pointer border-stone-300 text-medBlue-200"
            >
              {item.text}
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;