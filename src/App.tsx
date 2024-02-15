import "./App.css";
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
  return (
    <>
      <UserContextProvider>
        <div>
          <Header />
          <ItemScreen cheeses={cheeses} />
        </div>
      </UserContextProvider>
      <Footer />
    </>
  );
}

export default App;
