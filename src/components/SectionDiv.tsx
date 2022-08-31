import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const SectionDiv = ({ children, className }: Props) => {
  return (
    <section className={`${className} py-5`}>
      <div className="container-spacing">{children}</div>
    </section>
  );
};

export default SectionDiv;
