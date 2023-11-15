import { SiteLogo } from "../site-logo";
import { MenuToggle } from "./menu-toggle";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-black bg-opacity-50">
      <div className="container p-4">
        <div className="flex items-center justify-between gap-4">
          {/* SiteLogo */}
          <SiteLogo />

          {/* Nav */}

          {/* LanguageSwitcher */}
          <MenuToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
