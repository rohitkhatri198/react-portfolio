import "./App.css";
import About from "./components/about/about";
import Banner from "./components/banner/banner";
import Contact from "./components/contact/contact";
import Nav from "./components/nav/nav";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Banner />
        <About />
        <Contact/>
      </div>
    </div>
  );
}

export default App;
