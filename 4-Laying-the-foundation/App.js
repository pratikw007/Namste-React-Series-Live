import React from "react";  // getting it from node modules
import ReactDOM from "react-dom/client";


// <div class="header">
//     <ul>
//         <li>Home</li>
//         <li>About Us</li>
//         <li>Contact  Us</li>
//     </ul>
// </div>


    
    //React.createElement => Object => HTML(DOM) 

// const container = React.createElement(
//     "div", 
//     {
//         id: "container", 
//         Hello : "world", 
//     },
//     [React.createElement(
//         "h1", 
//         {
//             id: "title",
//             key: "h1",
//         },
//         "Heading 1 for parcel" 
//         ) , 
//         React.createElement("ul",{},        
//             [React.createElement(
//                 "li",
//                 {},
//                 "About us"
//             ),React.createElement("ul",{},        
//             [React.createElement(
//                 "li",
//                 {},
//                 "Contact Us"
//             ),React.createElement("ul",{},        
//             [React.createElement(
//                 "li",
//                 {},
//                 "Home"
//             )]) 
// ]

// )

// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//Passing the react element inside the root

//async defer 
root.render(container);