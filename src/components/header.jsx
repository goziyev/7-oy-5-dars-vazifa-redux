import Logo from "../../public/logoicons.png";
import Link from "next/link";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Header = () => {
  let isOpen = false;
  return (
    <header className="w-full h-40 bg-blue-900 text-white">
      <nav>
        <div className="container md:mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <Image src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/">Home</Link>
              
              <Link href="/about">About</Link>
              <Link href="/books">Books</Link>
              <Link href="/getbook">Get book</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
