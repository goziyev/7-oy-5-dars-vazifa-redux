import Image from "next/image";
import img from "../../public/articules1.png";
import img2 from "../../public/articules2.png";
import img3 from "../../public/articules3.png";
function Articles() {
  return (
    <div className="container items-center  justify-around mx-auto gap-9 p-4">
      <h3 className="text-4xl font-[700] mb-5 text-center">
        Articles & Resources
      </h3>
      <div
        className="flex items-center gap-6 justify-around"
        style={{ borderRadius: "0px" }}
      >
        <div
          className="card w-96 bg-base-100 shadow-xl"
          style={{ borderRadius: "0px" }}
        >
          <figure style={{ borderRadius: "0px" }}>
            <Image src={img} alt="Shoes" style={{ borderRadius: "0px" }} />
          </figure>
          <div className="card-body" style={{ borderRadius: "0px" }}>
            <h2 className="card-title">
              The energy efficiency offers hydrotherapy or swim!
            </h2>
            <p className="text-gray-400">
              The point of using Lorem Ipsum hiter of that using making it look
              like others readable will get end.
            </p>
            <div className="card-actions justify-end flex gap-20 text-md">
              <button className="underline">Buy Now</button>
              <p>Author - 23.05.2022</p>
            </div>
          </div>
        </div>
        <div
          className="card w-96 bg-base-100 shadow-xl"
          style={{ borderRadius: "0px" }}
        >
          <figure style={{ borderRadius: "0px" }}>
            <Image src={img2} alt="Shoes" style={{ borderRadius: "0px" }} />
          </figure>
          <div className="card-body" style={{ borderRadius: "0px" }}>
            <h2 className="card-title">
              The energy efficiency offers hydrotherapy or swim!
            </h2>
            <p className="text-gray-400">
              Release of Letraset sheets tools containing passages
            </p>
            <div className="card-actions justify-end flex gap-20 text-md">
              <button className="underline">Buy Now</button>
              <p>Author - 23.05.2022</p>
            </div>
          </div>
        </div>
        <div
          className="card w-96 bg-base-100 shadow-xl"
          style={{ borderRadius: "0px" }}
        >
          <figure style={{ borderRadius: "0px" }}>
            <Image src={img3} alt="Shoes" style={{ borderRadius: "0px" }} />
          </figure>
          <div className="card-body" style={{ borderRadius: "0px" }}>
            <h2 className="card-title">
              The energy efficiency offers hydrotherapy or swim!
            </h2>
            <p className="text-gray-400">
              The point of using Lorem Ipsum hiter of that using making it look
              like others readable will get end.
            </p>
            <div className="card-actions justify-end flex gap-20 text-md">
              <button className="underline">Buy Now</button>
              <p>Author - 23.05.2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
