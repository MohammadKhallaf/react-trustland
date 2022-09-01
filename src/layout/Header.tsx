import React, { useReducer } from "react";
import logoSVG from "@img/TrustLogo.svg";
import HeroSection from "../containers/HeroSection";
import MenuIcon from "../components/Icons/MenuIcon";
import MobileNav from "./Navbar/MobileNav";
import NavListItem from "./Navbar/NavListItem";
const initialState = { show: false };
function reducer(state: any, action: any) {
  switch (action.type) {
    case "show":
      return { ...state, show: true };
    case "hide":
      return { ...state, show: false };
    default:
      throw new Error();
  }
}

const Header = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <header className="h-screen hero-bg">
      {/* Nav bar */}
      <div
        className="
      text-white lg:text-xl
      fixed left-0 right-0 z-10
      shadow-md backdrop-blur-sm bg-zinc-900 bg-opacity-20 "
      >
        <div className="container-spacing flex flex-row justify-between md:justify-around align-baseline  py-3 md:pt-5 md:pb-3  gap-8">
          <a href="" className="my-auto ">
            <img src={logoSVG} alt="trust logo" className="h-8" />
          </a>
          <ul className="hidden md:flex flex-row flex-1 whitespace-nowrap justify-center items-center gap-5 ">
            <NavListItem>ترست لاين</NavListItem>
            <NavListItem>لماذا ترست لاين؟</NavListItem>
            <NavListItem>آلية العمل</NavListItem>
            <NavListItem>تواصل معنا</NavListItem>
          </ul>

          <button className="hidden md:block rounded-full bg-white text-black px-3 py-1 text-sm">
            دخول
          </button>
          <div className="hidden md:block">ENG</div>
          <button
            className="md:hidden nav_btn"
            onClick={() => dispatch({ type: "show" })}
          >
            <MenuIcon className="w-8" />
          </button>
        </div>
      </div>
      <MobileNav show={state.show} close={() => dispatch({ type: "hide" })} />
      {/* Hero section */}
      <HeroSection />
    </header>
  );
};

export default Header;
