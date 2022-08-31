import React from "react";
import CloseIcon from "../../components/Icons/CloseIcon";
import NavListItem from "./NavListItem";

interface Props {
  show: boolean;
  close: React.Dispatch<{ type: string }>;
}

const MobileNav: React.FC<Props> = ({ show, close }) => {
  return (
    <div
      className={[
        "text-white text-xl fixed inset-0 bottom-auto bg-[#351D4F] bg-opacity-50 flex flex-col z-10 shadow-md backdrop-blur-lg pb-5 transition-[top] duration-1000",
        show ? "top-0" : "-top-full",
      ].join(" ")}
    >
      <button
        className="md:hidden nav_btn ml-8 mt-8 self-end"
        onClick={() => close({ type: "hide" })}
      >
        <CloseIcon className="w-6 h-6" />
      </button>

      <ul className="flex flex-col flex-nowrap items-center justify-around pb-5 gap-5 mt-3">
        <NavListItem close={() => close({ type: "hide" })}>
          ترست لاين
        </NavListItem>
        <NavListItem close={() => close({ type: "hide" })}>
          لماذا ترست لاين؟
        </NavListItem>
        <NavListItem close={() => close({ type: "hide" })}>
          آلية العمل
        </NavListItem>
        <NavListItem close={() => close({ type: "hide" })}>
          تواصل معنا
        </NavListItem>
      </ul>
    </div>
  );
};

export default MobileNav;
