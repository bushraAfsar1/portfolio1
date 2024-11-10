import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-slate-600 text-white  py-4">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;