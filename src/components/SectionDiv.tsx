import React from "react";

type Props = {
  className?: string;
  divClass?: string;
  id: string;
  children: React.ReactNode;
  dir?: "ltr" | "rtl";
};

const SectionDiv = ({ children, className, id, divClass, dir }: Props) => {
  return (
    <section
      className={`${className || ""} py-5`}
      id={`section-${id}`}
      dir={dir}
    >
      <div className={["container-spacing", divClass].join(" ")}>
        {children}
      </div>
    </section>
  );
};

export default SectionDiv;
