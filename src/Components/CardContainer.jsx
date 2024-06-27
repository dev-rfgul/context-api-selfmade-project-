import React from "react";

import Card from "./Card";

const CardContainer = () => {
  

  const cards = [
    {
      title: "Card 1",
      description: "The Yellow is card component",
      image: "https://images.pexels.com/photos/18255463/pexels-photo-18255463/free-photo-of-birds-on-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div className="bg-green-500 flex  flex-wrap justify-center">
      <h1 className="text-2xl text-center justify-center flex flex-col  ">
        The Green color is the Card Component
      </h1>

      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default CardContainer;
