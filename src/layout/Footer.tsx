import React from "react";
import logoSVG from "@img/TrustLogo.svg";
import TwitterIcon from "@icon/twitter.svg";
import LinkedInIcon from "@icon/linkedin.svg";
const NavItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li>
      <a href="" className="hover:text-mainBlue">
        {children}
      </a>
    </li>
  );
};

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-black text-white">
      <div className=" container-spacing">
        <div className="border-t border-zinc-700 pt-5 flex flex-row justify-between gap-1">
          <div className="flex flex-col gap-3 flex-1 justify-between">
            <div className="w-[90px]">
              <img src={logoSVG} />
            </div>
            <div className="text-darkGray text-[0.7rem]">
              <p>واجهة الرياض -منطقة الأعمال, طريق المطار, الرياض 11564</p>
              <p>Trustline - جميع الحقوق محفوظة 2022</p>
            </div>
          </div>
          <nav className="flex-1">
            <ul className="space-y-1">
              <NavItem>للشركات</NavItem>
              <NavItem>للباحثين</NavItem>
              <NavItem>بيانات التواصل</NavItem>
              <NavItem>تواصل معنا</NavItem>
            </ul>
          </nav>
          <div className="flex flex-row self-start items-baseline gap-3">
            <div>
              <img src={LinkedInIcon} className="w-6 hover:text-mainBlue" />
            </div>
            <div>
              <img src={TwitterIcon} className="w-6 hover:text-mainBlue" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
