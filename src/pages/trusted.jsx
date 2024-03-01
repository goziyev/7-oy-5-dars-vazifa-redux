import First from "../../public/Logo.png";
import Second from "../../public/Logo-1.png";
import Third from "../../public/Logo-2.png";
import Image from "next/image";

function Trusted() {
  return (
    <div className="container items-center  justify-around mx-auto gap-9 p-4">
      <h5 className="text-5xl font-[700] mb-9  mt-7 text-center">
        Trusted by the Best
      </h5>
      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center justify-center mb-9">
          <Image src={First} alt="logo" className="mb-4"></Image>
          <p className="text-3xl font-[600] mb-3">Amazen Corp</p>
          <p className="text-gray-400 text-xl w-4/6 text-center">
            A long established fact that a who looking at its layout.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mb-9">
          <Image src={Second} alt="logo" className="mb-4"></Image>
          <p className="text-3xl font-[600] mb-3">Megan Books</p>
          <p className="text-gray-400 text-xl w-4/6 text-center">
            A long established fact that a who looking at its layout.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mb-9">
          <Image src={Third} alt="logo" className="mb-4"></Image>
          <p className="text-3xl font-[600] mb-3">Los Books</p>
          <p className="text-gray-400 text-xl w-4/6 text-center">
            A long established fact that a who looking at its layout.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mb-9">
          <Image src={First} alt="logo" className="mb-4"></Image>
          <p className="text-3xl font-[600] mb-3">Urban Lib</p>
          <p className="text-gray-400 text-xl w-4/6 text-center">
            A long established fact that a who looking at its layout.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Trusted;
