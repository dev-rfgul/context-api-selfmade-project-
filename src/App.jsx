import React from "react";
import CardContainer from "./Components/CardContainer";
import { CardProvider } from "./Contexts/CardContext";
import { useState } from "react";
import Input from "./Components/Input";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  
  const [cards, setCards] = useState([
    {
      title: "Card 1",
      description: "The Yellow is card component",
      image:
        "https://images.pexels.com/photos/18255463/pexels-photo-18255463/free-photo-of-birds-on-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);

  return (
    <CardProvider value={{ cards }}>
      <div className="min-h-screen bg-gray-600 flex flex-col items-center justify-center">
        <h1 className="text-5xl">They Gray Color is APP Component</h1>
        <Input />
        <CardContainer />
      </div>
    </CardProvider>
  );
};

export default App;
