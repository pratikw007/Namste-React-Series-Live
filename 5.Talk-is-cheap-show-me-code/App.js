import React from "react";  // getting it from node modules
import ReactDOM from "react-dom/client";


// this is Actual React Code 
// const heading = React.createElement(
//     "h1",
//     {
//         id: "title",
//         key:"h2",     
//     },
//     "React is working"
// );


// JSX  - JavaScript XML 
// Facebook Developer Develop JSX
const heading1 =(
     <h1 id="title" key="h2">
        Namste React
        </h1>
)

//React Component
// Functional Component -- New
//  ---> Nothing but the Javascript Function. (Normal Function)
 const HeaderComponent = () => {
       return( 
       <div>
         {heading1}
         {/* We can do mathematical Operation in that just link Console */}
         {2+1}  
         <h1>Hello Pratik</h1>
         <h2>Ram</h2>
         </div>
)
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);
root.render(<HeaderComponent />);

