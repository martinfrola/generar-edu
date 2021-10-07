import React from 'react';
import Header from "./Header";
import AllCursos from "./AllCursos";
import SobreNosotros from "./SobreNosotros";
import RandomMsg from "./RandomMsg";

function Landing() {

    return ( 
        <React.Fragment>
            <Header />
            <AllCursos />
            <SobreNosotros />
            <RandomMsg />
        </React.Fragment>
     );
}

export default Landing;