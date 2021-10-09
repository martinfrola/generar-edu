import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Navigation";
import Landing from "./components/Landing";
import Contacto from "./components/Contacto";
import MisCursos from "./components/MisCursos";
import Footer from "./components/Footer";
import GoTopBtn from "./components/GoTopBtn";
import Login from "./components/Login";
import EmailVerification from "./components/EmailVerification";
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
          <Route path="/emailverification" component={EmailVerification} />
        </Switch>
        <Footer />
      </BrowserRouter>
      <GoTopBtn />
    </React.Fragment>
  );
}

export default App;
