
    // {} --> All Tag Attribute come from this object
    const heading = React.createElement("h1",
    {
        "id": "title",
    },
    "Namste Everyone!!");
    console.log(heading);
    //There is only one root ikn the react app 
    const root = ReactDOM.createRoot(document.getElementById("root"));

    //Passing a react element inside the root
    root.render(heading); // this is the line which inject the  Heading Element into our HTML page

