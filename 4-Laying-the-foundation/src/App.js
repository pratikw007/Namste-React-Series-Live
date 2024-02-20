import React from "react"; // getting it from node modules
import ReactDOM from "react-dom/client";
// Default import
// import Header from "./components/Header"
// Name Import
// import {Title} from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";

// res --- Restrarent

/**
          Header 
             -Logo
             - Nav Items (Right Side)
             -cart
          Body
              -Search Bar
              -Restraunt Card (Many Cart)
              -Image
              -Rating
              -Tags(cusines)

          Footer
            -links
            -Copyrights
           **/
// Javascript Object (Like API)

// this is our functional Component Resrtaunt
//This is known as  Config Driven UI



const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeaderComponent />);
root.render(<AppLayout />);
