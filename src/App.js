import "./App.css";
import Bahu from "./components/Bahu";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
import bahu9 from "./assets/bahu9.jpg";
import bahu8 from "./assets/bahu8.jpg";
import bahu7 from "./assets/bahu7.jpg"; 

const navBarLinks = [
  {url: "#", title: "Home"},
  {url: "#", title: "E-Shop"},
  {url: "#", title: "O mě"}
];

function App() {
  return (
    <div className="App">
      <Navbar navBarLinks={navBarLinks}/>
      <Bahu imageSrc={bahu9}/>
      <Slider imageSrc={bahu8} title={"Objevte kouzlo nekonečna"} subtitle={"Expecto Patronuuuum!"}/>
      <Slider imageSrc={bahu7} title={"Co to máš za hábit?"} subtitle={"Jsi nějaká Hermiona?!"} flipped={true}/>
    </div>
  );
};

export default App;
