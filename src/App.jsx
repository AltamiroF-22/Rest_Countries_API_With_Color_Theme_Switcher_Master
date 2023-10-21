import { Outlet } from "react-router-dom";
import './main.sass'
import Navbar from "./components/navbar/Navbar";

import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme === "Light Mode" ? "light-theme" : ""}`}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
