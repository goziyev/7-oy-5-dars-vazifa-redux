import Image from "next/image";
import background from "../../public/getbook.png";
function GetBook() {
  return (
    <div className="pt-9 pb-9" style={{ background: " #1B3764" }}>
      <div className="flex text-white container items-center  justify-around mx-auto gap-9 p-4">
        <div className="flex flex-col gap-7">
          <h3 className="text-5xl font-[400]">Get Book Copy Today!</h3>
          <p className="text-gray-400 text-2xl w-4/6">
            This the first true value generator on the Internet. It uses alphas
            dictionary of over 200 Latin words.
          </p>
          <button
            className="btn btn-outline w-2/6 text-white btn-warning"
            style={{ color: "white", borderRadius: "0px" }}
          >
            Warning
          </button>
        </div>
        <div>
          <Image src={background} alt="Get  Book Copy Today" />
        </div>
      </div>
    </div>
  );
}

export default GetBook;
