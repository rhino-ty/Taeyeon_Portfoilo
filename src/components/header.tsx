import Link from "next/link";

export default function Header() {
  return (
    <header className="text-gray-600 body-font md:sticky md:top-0 md:z-50 md:bg-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Taeyeon-Portfoilo</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900 cursor-pointer">
            Home
          </Link>
          <Link href="/projects" className="mr-5 hover:text-gray-900 cursor-pointer">
            Projects
          </Link>
          <a href="" className="mr-5 hover:text-gray-900 cursor-pointer">
            Resume
          </a>
          <Link href="/about" className="mr-0 md:mr-5 hover:text-gray-900 cursor-pointer">
            About
          </Link>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
        </button>
      </div>
    </header>
  );
}
