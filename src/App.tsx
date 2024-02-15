import "./App.css";
import Header from "./components/Header";
import ItemScreen from "./components/ItemScreen";

const cheeses = [
  {
    name: "bleu",
    photo:
      "https://www.fromagerie-alexandre.com/wp-content/uploads/2016/08/Bleu-dAuvergne-fromage-de-vache-fromagerie-alexandre-halles-de-Pau.jpeg",
  },
  {
    name: "camembert",
    photo:
      "https://www.fromagerie-alexandre.com/wp-content/uploads/2016/08/Bleu-dAuvergne-fromage-de-vache-fromagerie-alexandre-halles-de-Pau.jpeg",
    isAdmin: true,
  },
  {
    name: "gouda",
    photo:
      "https://www.fromagerie-alexandre.com/wp-content/uploads/2016/08/Bleu-dAuvergne-fromage-de-vache-fromagerie-alexandre-halles-de-Pau.jpeg",
    isAdmin: true,
  },
  {
    name: "emmental",
    photo:
      "https://www.fromagerie-alexandre.com/wp-content/uploads/2016/08/Bleu-dAuvergne-fromage-de-vache-fromagerie-alexandre-halles-de-Pau.jpeg",
  },
];

function App() {
  return (
    <>
      <div>
        <Header />
        <ItemScreen cheeses={cheeses} />
      </div>
    </>
  );
}

export default App;
