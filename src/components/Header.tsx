import Image from "next/image";
import Link from "next/link";
import DarkModeToggleButton from "./DarkModeToggleButton";
import rhino from "../../public/Rhino.jpg";

export default function Header() {
  return (
    <header className="text-gray-600 body-font md:sticky md:top-0 md:z-50 bg-primary">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer"
        >
          <Image
            src={rhino}
            alt="Rhino"
            className="w-10 h-10 rounded-full flex-shrink-0 object-cover object-center hover:brightness-75"
          />
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900 cursor-pointer">
            Home
          </Link>
          <Link href="/selfIntroduction" className="mr-5 hover:text-gray-900 cursor-pointer">
            Self-Introduction
          </Link>
          <Link href="/projects" className="mr-5 hover:text-gray-900 cursor-pointer">
            Projects
          </Link>
          <a
            href="https://rhino-ty.notion.site/bf42f94b655b4f70a50abda612f58f40"
            target="_blank"
            rel="noreferrer"
            className="mr-5 hover:text-gray-900 cursor-pointer"
          >
            Resume
          </a>
          <Link href="/about" className="mr-0 md:mr-5 hover:text-gray-900 cursor-pointer">
            About
          </Link>
        </nav>
        <DarkModeToggleButton />
      </div>
    </header>
  );
}
