import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skill from "./components/Skill";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Skill />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
