// @useClient
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logoicons.png";
import Basket from "../../public/basket.webp";
const Header = () => {
  return (
    <header className="w-full h-40 bg-blue-900">
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
              <details>
                <summary>Pages</summary>
                <ul className="p-2 bg-blue-900">
                  <li className="bg-blue-900">
                    <Link href="/includes">Includes</Link>
                  </li>
                  <li className="bg-blue-900">
                    <Link href="/readers">Readers</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/articles">Articles</Link>
            </li>
            <li>
              <Link href="/free">Free</Link>
            </li>
            <li>
              <Link href="/getbook">Get book</Link>
            </li>
            <li>
              <Link href="/learn">Learn</Link>
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
      <div className="flex justify-center">

      </div>
    </header>
  );
};

export default Header;
