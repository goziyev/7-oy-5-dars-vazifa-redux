// @useClient
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logoicons.png";
import Basket from "../../public/basket.webp";
import book from "../../public/book.png";
const Header = () => {
  return (
    <header className="w-full bg-blue-900">
      <div className="navbar text-white container items-center  justify-around mx-auto gap-9 p-4">
        <div className="navbar-start">
          <div className="dropdown">
            <Image src={Logo} alt="Logo "></Image>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/books">Books</Link>
            </li>
            <li>
              <details>
                <summary>Pages</summary>
                <ul className="p-2 bg-blue-900">
                  <li className="bg-blue-900">
                    <Link href="/includes">Includes</Link>
                  </li>
                  <li className="bg-blue-900">
                    <Link href="/readers">Readers</Link>
                  </li>
                  <li className="bg-blue-900">
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/learn">Learn</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/trusted">Trusted</Link>
            </li>
            <li>
              <Link href="/getbook">Get book</Link>
            </li>
            <li>
              <Link href="/articles">Articles</Link>
            </li>
            <li>
              <Link href="/free">Free</Link>
            </li>
          </ul>
          <a className="flex items-center gap-1 px-2 py-1 bg-gray-200 rounded-full mr-2">
            <Image src={Basket} width="35" alt="basket"></Image>
          </a>
          <a className="btn btn-warning" style={{ borderRadius: "0px" }}>
            Order Today
          </a>
        </div>
      </div>
      <div className="flex text-white container items-center  justify-around mx-auto gap-9 p-4 ">
        <div className="text-white">
          <p className="text-xl">
            <i>Welcome to Pages</i>
          </p>
          <p className="text-[70px] font-[800] w-5/6 mt-5">
            Books are uniquely portable magic{" "}
          </p>
          <p className="mt-5 mb-10 w-3/6 text-gray-400">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
          <div className="flex items-center gap-6">
            <button className="btn btn-warning" style={{ borderRadius: "0px" }}>
              Order Today
            </button>
            <a className=" underline d-block pb-2">Reed Free Demo</a>
          </div>
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
              <p className="text-gray-400 pl-6">565pages</p>
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
                Ratings:
              </h5>
              <p className="text-gray-400 pl-6">4.5/5(305 ratings)</p>
            </div>
          </div>
        </div>
        <div>
          <Image src={book}></Image>
        </div>
      </div>
    </header>
  );
};

export default Header;
