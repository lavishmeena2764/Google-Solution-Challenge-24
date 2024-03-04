import CopyrightIcon from "@mui/icons-material/Copyright";
function Footer() {
  return (
    <div className="h-48 lg:h-[350px] bg-stone-900 w-full flex flex-col justify-between">
      <div className="h-3/5 my-3 flex text-white">
        <div className="border-2 border-white w-1/2">content 1</div>
        <div className="border-2 border-white w-1/2">content 2</div>
      </div>
      <div className="flex items-center justify-center my-2">
        <img src="../logo.png" height={50} width={50} className="mx-2" />
        <p className="text-medBlue-200 text-xl font-serif">Medify.ai</p>
      </div>
      <div className="text-gray-400 text-center py-2">
        Copyright <CopyrightIcon /> 2024, Medify.ai. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
