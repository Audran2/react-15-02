import { useState } from "react";
import "./App.css";
import { User, UserContext } from "./UserContext";
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

// const value = {
//   user: null,
//   // {
//   //   name: "Raymond",
//   //   isAdmin: false,
//   // },
// };

function App() {
  const [user, setUser] = useState<User | null>(null);

  const login = () => {
    setUser({
      name: "Raymond",
      isAdmin: true,
    });
  };

  const value = { user, login };

  return (
    <>
      <UserContext.Provider value={value}>
        <div>
          <Header />
          <ItemScreen cheeses={cheeses} />
        </div>
      </UserContext.Provider>
      <Footer />
    </>
  );
}

export default App;
