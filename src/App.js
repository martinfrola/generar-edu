import React from "react";
import Nav from "./components/Navigation";
import Header from "./components/Header";
import AllCursos from "./components/AllCursos";
import SobreNosotros from "./components/SobreNosotros";
import RandomMsg from "./components/RandomMsg";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <AllCursos />
      <SobreNosotros />
      <RandomMsg />
      <Footer />
    </div>
  );
}

export default App;
