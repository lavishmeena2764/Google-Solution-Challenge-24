function Login() {
    return (
      <div className="flex w-full h-dvh">
        <div className="w-1/2 hidden md:block mt-[150px]">
          <div className="flex flex-col">
            <div className="flex items-center justify-center">
              <img src="../../logo.png" height={80} width={80} />
              <p className="text-medBlue-200 text-2xl font-serif px-2">
                Medify.ai
              </p>
            </div>
            <p className="text-center my-3 text-medBlue-200 font-serif text-xl">
              Easy , Fast and Precise Health Analysis
            </p>
            <p className="text-medBlue-200 px-3 text-center">
              Transforming lives with AI-driven health insights and connections
              to trusted professionals. Your path to proactive well-being starts
              here.
            </p>
          </div>
        </div>
        <div className="bg-white w-1/2 shadow-xl">Login and sign up</div>
      </div>
    );
}

export default Login
