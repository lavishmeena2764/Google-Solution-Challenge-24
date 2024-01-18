import { InfinitySpin } from "react-loader-spinner"

/* medblue - #1c9bcd 
base: "#94c23f",
medgreen- 
*/

function Loader() {
  return (
    <div className="h-dvh flex justify-center items-center bg-medBlue">
      <InfinitySpin
        visible={true}
        width="200"
        color="white"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
}

export default Loader