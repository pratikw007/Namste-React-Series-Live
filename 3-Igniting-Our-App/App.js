const heading = React.createElement(
    "h1", // create first argument as the tag 
    {
        id: "title", //the second Argument is the Attribute in html
    },
    "Heading 1" // the third argument is Childern
);

const heading2 = React.createElement(
    "h2",
    {
        id: "title",
     },
     "Heading 1"    
);

const container = React.createElement(
    "div", // Tag Name
    {
        id: "container", // HTML attribute
        Hello : "Bhai", //Not just Attribute it's Props in React
    },
    ["heading1","heading2"]
);


console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//Passing the react element inside the root

//async defer 
root.render(container);