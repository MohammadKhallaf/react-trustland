import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}
const ServiceCard = ({
  title,
  description,
  icon,
}: ServiceCardProps): JSX.Element => {
  return (
    <div className="flex flex-row items-center shadow-lg p-5 divide-mainBlue divide-x-2">
      <div className="flex flex-col  justify-center items-center">
        <div>
          <img src={icon} alt="" className="w-6" />
        </div>
        <h5 className="font-boold">{title}</h5>
      </div>
      <div>{description}</div>
    </div>
  );
};

export default ServiceCard;
