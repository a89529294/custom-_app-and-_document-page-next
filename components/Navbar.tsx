import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "./themeContext";
function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 25,
      }}>
      <div>My Website</div>
      <div>
        <Link href="/">Home </Link>
        <Link href="/about">About </Link>
        <Link href="/contacts">Contacts </Link>
        <button onClick={toggleTheme}>
          Set {theme === "dark" ? "light" : "dark"} theme
        </button>
      </div>
    </div>
  );
}
export default Navbar;
