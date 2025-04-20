import ThemeToggle from "./theme-toggle";
import NavigationLinks from "./nav-links";

export default function Header() {
  return (
    <header className="sticky top-0 z-auto flex w-full items-center justify-between p-2 backdrop-blur-md">
      <NavigationLinks />
      <ThemeToggle />
    </header>
  );
}
