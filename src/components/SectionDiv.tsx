import React from "react";

type Props = {
  className?: string;
  divClass?: string;
  id: string;
  children: React.ReactNode;
};

const SectionDiv = ({ children, className, id, divClass }: Props) => {
  return (
    <section className={`${className} py-5`} id={`section-${id}`}>
      <div className={["container-spacing", divClass].join(" ")}>
        {children}
      </div>
    </section>
  );
};

export default SectionDiv;
