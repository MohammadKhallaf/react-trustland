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
    <div className="flex flex-row items-center shadow-lg p-5 rounded-2xl bg-lightGray">
      <div className="flex flex-col justify-center items-center border-l-2 border-l-mainBlue pl-3">
        <div>
          <img src={icon} alt="" className="w-6" />
        </div>
        <h5 className="font-bold text-center text-mainBlue">{title}</h5>
      </div>

      <div className="pr-3 text-darkGray">{description}</div>
    </div>
  );
};

export default ServiceCard;
