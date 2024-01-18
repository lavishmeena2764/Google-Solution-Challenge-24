function NavBar() {
    return (
      <div>
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
                <p className="text-medBlue text-xl">Medify.ai</p>
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
      </div>
    );
}

export default NavBar
