import React from "react";
import logoSVG from "@/assets/images/TrustLogo.svg";
const Header = (): JSX.Element => {
  return (
    <header className="flex flex-row justify-around bg-black text-white py-3 align-baseline">
      <div>
        <img src={logoSVG} alt="trust logo" className="h-6" />
      </div>
      <ul className="flex flex-row gap-3">
        <li>ترست لاين</li>
        <li>لماذا ترست لاين؟</li>
        <li>آلية العمل</li>
        <li>تواصل معنا</li>
      </ul>
      <button className="rounded-full bg-white text-black px-3 py-1 text-sm">
        دخول
      </button>
      <div>ENG</div>
    </header>
  );
};

export default Header;
