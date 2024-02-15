import { useState } from "react";
import "./App.css";
import { CheeseContext } from "./CheeseContext";
import { UserContextProvider } from "./UserContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemScreen from "./components/ItemScreen";

const cheeses = [
  {
    name: "bleu",
    photo:
      "https://parolesdefromagers.com/wp-content/uploads/2023/08/pate-persillee.png",
  },
  {
    name: "camembert",
    photo:
      "https://parolesdefromagers.com/wp-content/uploads/2023/08/pate-persillee.png",
    isAdmin: true,
  },
  {
    name: "gouda",
    photo:
      "https://parolesdefromagers.com/wp-content/uploads/2023/08/pate-persillee.png",
    isAdmin: true,
  },
  {
    name: "emmental",
    photo:
      "https://parolesdefromagers.com/wp-content/uploads/2023/08/pate-persillee.png",
  },
];

function App() {
  const [isSelected, setIsSelected] = useState(false);
  const value = { cheeses, isSelected };

  return (
    <CheeseContext.Provider value={value}>
      <UserContextProvider>
        <div>
          <Header />
          <ItemScreen cheeses={cheeses} />
        </div>
      </UserContextProvider>
      <Footer />
    </CheeseContext.Provider>
  );
}

export default App;
