import React from "react";  // getting it from node modules
import ReactDOM from "react-dom/client";
 /**
          Header 
             -Logo
             - Nav Items (Right Side)
             -cart
          Body
              -Search Bar
              -RestrorentCard
              -Image
              -Rating
              -Tags(cusines)

          Description
            -links
            -Copyrights
           **/

const Title = () => (
     <h1 id="title" key="h2">
        Food Villa
        </h1>
);

//composing Components
const HeaderComponent = () => {
  return (
    <div className="header">
    <Title />
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>Aout</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
    </div>
  );
};

 const AppLayout = () => {
       return {};
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);
root.render(<AppLayout />);

