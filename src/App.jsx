import React from "react";
import CardContainer from "./Components/CardContainer";
import { CardProvider } from "./Contexts/CardContext";
import { useState } from "react";
import Input from "./Components/Input";

const App = () => {
  // from here starting new logic
  const [inputValue, setInputValue] = useState("");

  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("this is the yellow card ");
  const [img, setImg] = useState(
    "https://images.pexels.com/photos/18255463/pexels-photo-18255463/free-photo-of-birds-on-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );


  const handleChange = (e) => {
    setInputValue(e.target.value);
    setTitle(e.target.value);
    setDiscription(e.target.value);
  };
  // card is being displayed form here
  const [cards, setCards] = useState([]);

  return (
    <CardProvider value={{}}>
      <div className="min-h-screen bg-gray-600 flex flex-col items-center justify-center">
        <h1 className="text-5xl">They Gray Color is APP Component</h1>
        <Input inputValue={inputValue} handleChange={handleChange} />
        <CardContainer title={title} discription={discription} img={img} />
      </div>
    </CardProvider>
  );
};

export default App;
