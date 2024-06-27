import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="max-w-sm rounded bg-yellow-300 overflow-hidden shadow-lg m-4">
      <img className="w-full" src={image} alt="Card image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
