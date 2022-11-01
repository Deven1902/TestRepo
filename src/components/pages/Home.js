// import React from "react";
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';

// function Home() {
//     return(
//         <div>
               
//         </div>
//     )
// }

// export default Home 

import React from "react";
import Cards from "../Cards";
import SqrBox from "../SqrBox";
import Carousels from "../Carousels";
import Shop from "./Shop";

function Home() {
    return (
        <div>
            <Cards />
            <SqrBox /> 
            {/* <Shop/> */}
            <Carousels />
        </div>
    )
}
export default Home