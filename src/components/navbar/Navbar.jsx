import "./Navbar.sass";

import { FaMoon, FaSun } from "react-icons/fa";

import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav>
      <h2>Where in the world?</h2>
      <button className="toggle-theme" onClick={toggleTheme}>
        {theme === "Dark Mode" ? <FaMoon /> : <FaSun />} {theme}
      </button>
    </nav>
  );
};

export default Navbar;
