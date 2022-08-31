import React from "react";

interface Props {
  children: React.ReactNode;
  close?: () => void;
}

const NavListItem = ({ children, close }: Props): JSX.Element => {
  return (
    <li onClick={close} className="hover:text-mainBlue">
      <a className="cursor-pointer">{children}</a>
    </li>
  );
};
export default NavListItem;
