import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Navigation";
import Landing from "./components/Landing";
import Contacto from "./components/Contacto";
import MisCursos from "./components/MisCursos";
import Footer from "./components/Footer";
import GoTopBtn from "./components/GoTopBtn";
import Login from "./components/Login";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/miscursos" component={MisCursos} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </BrowserRouter>
      <GoTopBtn />
    </React.Fragment>
  );
}

export default App;
