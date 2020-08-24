import React, {useState}from 'react';
import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import Skillset from "./Skillset";
import Resume from "./Resume";
import Contact from "./Contact"
import Footer from "./Footer"
import Slider from "./Slider"





function App() {

  const [title, setTitle] = useState(["portfolio", "skillset", "resumé", "contact"])

  const [icons, setIcons] = useState(["public/github.png"])


  return (
    <div className="App">
      <Navbar />
      <Home icons={icons}/>
      <Slider title={title[0]} /> 
      <Skillset title={title[1]}  />
      <Resume title={title[2]}  />
      <Contact title={title[3]} />
      <Footer />
    </div>
  );
}

export default App;
