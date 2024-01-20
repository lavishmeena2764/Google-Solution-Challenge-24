function Footer() {
    return (
      <div className="h-48 lg:h-[350px] bg-stone-900 w-full flex flex-col justify-between">
        <div className="h-3/5 my-3 flex text-white">
          <div className="border-2 border-white w-1/2">
            content 1
          </div>
          <div className="border-2 border-white w-1/2">
            content 2
          </div>
        </div>
        <div className="flex items-center justify-center lg:my-8 my-5">
          <img src="../logo.png" height={50} width={50} className="mx-2" />
          <p className="text-medBlue text-xl">Medify.ai</p>
        </div>
      </div>
    );
}

export default Footer
