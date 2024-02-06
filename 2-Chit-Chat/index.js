//Arrow Function Revision
//Which data structure for storing the Memory? -->Memory Heap

function x(){
    const a =10;
    console.log();
}

var xyz = 30;

x(); //fuctional execution context is created


// Anonymous function
// var x  = function () {
//     console.log("I'm an anonymous");
// }

// console.log(x); //[Function: x]


// How to Create Arrow Function 
// In ES6 Arrow function comes in Picture


function Ram(){
    return -1;
}

const fn = () =>{
    console.log("RAM");
}

// console.log(fn);


// ----------------------------------------------

// console.log(this); //gives window object-> it is globle object will give to the browser

const obj = {
    fn: function (){
        console.log(this);
    },
    fn2 : () => {
        console.log(this);
    },
};

// obj.fn(); //obj 
// obj.fn2(); // window
// Output of both are same because both have same this -> global object i.e Window Object


// function fun(){
//     console.log(this); //window object 
// }
// fun();


//
const person = {
    name:"Rama",
};
const person2 = {
    name:"Sita",
};

function x(){
    console.log(this);
}

x();
x.call(this); // Window
x.call(person); // {name: 'Rama'}
x.call(person2); // {name: 'Sita'}

