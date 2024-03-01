import Image from "next/image";
import image from "../../public/background.png";
import Link from "next/link";
function NotFound() {
  return (
    <div className="relative h-screen">
      <Image
        src={image}
        alt="Background"
        style={{ backgroundSize: "cover", width: "100%", height: "720px" }}
        className="absolute"
      />
      <div className="absolute mt-5 mx-auto w-full">
        <div className="p-9 text-center">
          <p className="text-center text-blue-900 text-9xl mt-9">404</p>
          <p className="text-center mt-5 text-3xl mb-4">Page not found!!!</p>
          <p className="text-center mt-5 text-lg text-gray-600 mb-4 w-3/6 mx-auto">
            The page you are looking for doesn't exist. Please try searching for
            some other page, or return to the website's homepage to find what
            you're looking for.!!!
          </p>
          <Link
            href="/"
            className="btn btn-warning p-2"
            style={{ borderRadius: "0px" }}
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
