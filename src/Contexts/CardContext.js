import { createContext, useContext } from "react";

export const CardContext = createContext({
  cards: [
    {
      title: "",
      description: "",
      image: "",
    },
  ],
});

export const useCardContext = () => {
  return useContext(CardContext);
};
export const CardProvider = CardContext.Provider;
