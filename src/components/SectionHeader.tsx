import React from "react";

interface Props {
  className?: string;
  children: string;
}

const SectionHeader = ({ className, children }: Props) => {
  return (
    <h3 className={`${className} font-bold text-3xl header__line`}>
      {children}
    </h3>
  );
};

export default SectionHeader;
