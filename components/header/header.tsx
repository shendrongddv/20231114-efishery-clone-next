import { ModeToggle } from "../mode-toggle";
import { SiteLogo } from "../site-logo";

export const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b px-4">
      <div className="container">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* SiteLogo */}
          <SiteLogo />

          {/* ModeToggle */}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
