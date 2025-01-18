/* eslint-disable react/prop-types */

import { useLocation } from "react-router-dom";

import { useAtomValue } from "jotai";

import { themeAtom } from "../../../atoms/theme/store";

import ThemeToggler from "./ThemeToggler";

import hamburger from "../../../assets/generalAssets/hamburger.svg";
import hamburgerLight from "../../../assets/generalAssets/hamburgerLight.svg";

const Navbar = ({ sidebarToggle }) => {
  const location = useLocation();

  console.log(location);

  const theme = useAtomValue(themeAtom);

  return (
    <div className="flex flex-row justify-between items-center py-2 px-2 w-full">
      <button className="" onClick={sidebarToggle}>
        {location.pathname !== "/" && location.pathname !== "/login" && (
          <img
            src={theme === "light" ? hamburgerLight : hamburger}
            alt=""
            className="w-[35px]"
          />
        )}
      </button>
      <ThemeToggler />
    </div>
  );
};

export default Navbar;
