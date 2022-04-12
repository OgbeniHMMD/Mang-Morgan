import Link from "next/link";
import { useState } from "react";
import NavigationDrawer from "./NavigationDrawer";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

export default function TopNavigationBar() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <header className="z-50">
      <nav className="bg-black/50 text-primary w-full z-50 fixed will-change-scroll ">
        <div className="container flex mx-auto p-4 gap-8 justify-between items-center">
          <Link href="/">
            <a>
              <img src="/logo-dark.svg" className="h-8 w-auto" />
            </a>
          </Link>

          <button
            onClick={() => setShowDrawer(!showDrawer)}
            className="bg-primary rounded flex font-medium text-black text-sm py-2 px-4 gap-2 items-center focus:outline-none "
          >
            <div>{showDrawer ? "COSE " : "MENU "}</div>
            {showDrawer ? (
              <XIcon className="h-4 w-4" />
            ) : (
              <MenuIcon className="h-4 w-4" />
            )}
          </button>
        </div>
      </nav>

      {showDrawer && <NavigationDrawer />}
    </header>
  );
}
