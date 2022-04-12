import Link from "next/link";

export default function TopNavigationBar() {
  return (
    <nav className="bg-black/50 text-primary w-full fixed">
      <div className="container flex mx-auto p-4 gap-8 justify-between items-center">
        <Link href="/">
          <a>
            <img src="/logo-dark.svg" className="h-8 w-auto" />
          </a>
        </Link>

        <button className="bg-primary rounded font-medium text-black text-sm py-2 px-4">
          MENU
        </button>
      </div>
    </nav>
  );
}
