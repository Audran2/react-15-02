import "./App.css";
import { UserContext } from "./UserContext";
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

const value = {
  user: {
    name: "Raymond",
    isAdmin: false,
  },
};

function App() {
  return (
    <UserContext.Provider value={value}>
      <div>
        <Header />
        <ItemScreen cheeses={cheeses} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
