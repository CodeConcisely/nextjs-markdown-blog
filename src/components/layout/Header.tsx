import Link from 'next/link';

export default function Header() {
  return (
    <header className="mt-2 mb-5">
      <div className="flex justify-between items-center max-w-3xl mx-auto px-5">
        <p className="text-2xl font-extrabold">
          <Link href="/">
            <a title="Go to homepage" aria-label="Go to homepage">
              My Blog
            </a>
          </Link>
        </p>
        <nav>
          <Link href="/">
            <a className="text-blue-600 hover:text-blue-400">Posts</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
