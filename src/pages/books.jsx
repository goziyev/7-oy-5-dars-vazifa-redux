import atomy from "../../public/atomy.png";
import Image from "next/image";
import light from "../../public/light.png";
function Books() {
  return (
    <div className="container items-center  justify-around mx-auto gap-9 p-4">
      <h3 className="text-blue-900 text-4xl text-center mt-8 mb-4 font-[700]">
        Author's Book Includes
      </h3>
      <div className="flex items-center gap-5">
        <div className="flex items-center mt-6   mb-6">
          <Image src={atomy} alt="atomy" />
          <div>
            <h5 className="text-4xl font-[700] mb-5">Atomic One's</h5>
            <p className="w-4/6 font-[400] text-2xl">
              Many variations of passages of Lorem Ipsum willing araise
              alteration in some form.
            </p>
            <div className="flex mt-9 items-center gap-8">
              <div>
                <h5 className="flex items-center">
                  <span
                    className="d-block bg-warning mr-2"
                    style={{
                      display: "inline-block",
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                    }}
                  ></span>
                  Pages:
                </h5>
                <p className="text-gray-400 pl-6">595pages</p>
              </div>
              <div>
                <h5 className="flex items-center">
                  <span
                    className="d-block bg-warning mr-2"
                    style={{
                      display: "inline-block",
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                    }}
                  ></span>
                  Length:
                </h5>
                <p className="text-gray-400 pl-6">10 hours</p>
              </div>
            </div>
            <button
              className="btn btn-outline btn-warning w-3/6 mt-4"
              style={{ borderRadius: "0px" }}
            >
              Warning
            </button>
          </div>
        </div>
        <div className="flex items-center mt-6   mb-6">
          <Image src={light} alt="atomy" />
          <div>
            <h5 className="text-4xl font-[700] mb-5">The Dark Light </h5>
            <p className="w-4/6 font-[400] text-2xl">
              Many variations of passages of Lorem Ipsum willing araise
              alteration in some form.
            </p>
            <div className="flex mt-9 items-center gap-8">
              <div>
                <h5 className="flex items-center">
                  <span
                    className="d-block bg-warning mr-2"
                    style={{
                      display: "inline-block",
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                    }}
                  ></span>
                  Pages:
                </h5>
                <p className="text-gray-400 pl-6">595pages</p>
              </div>
              <div>
                <h5 className="flex items-center">
                  <span
                    className="d-block bg-warning mr-2"
                    style={{
                      display: "inline-block",
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                    }}
                  ></span>
                  Length:
                </h5>
                <p className="text-gray-400 pl-6">10 hours</p>
              </div>
            </div>
            <button
              className="btn btn-outline btn-warning w-3/6 mt-4"
              style={{ borderRadius: "0px" }}
            >
              Warning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Books;
