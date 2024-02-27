// props --> Properties -->Passing some data into component

import  React from 'react';
import { restaurantList } from "../components/config.js"
import RestrauntCard from './RestrauntCard.js';
import { useState , useEffect} from 'react';
import Shimmer from  './Shimmer.js  '

// what  is state ?
// what is React hooks ? --> funnction
// What is useState? --


//
//e.g.:-> "uncle ji hotel" ---> it will filter ji from "uncle ji hotel"

function filterData(searchText, restaurants){
  const filterData = restaurants.filter((res) => 
        res.data.name
        .includes(searchText)
        );
        return filterData;
}


const Body = () => {
  // create a variable in JS
  // const searchTxt = "KFC";
  // const searchClick = false;
const [restaurants,setRestaurants] = useState([]);

// create a variable in React
const [searchText,setSearchInput] = useState(""); // to create state variable--> return the array of element
// console.log(restaurants);

// [] ==> empty dependancy array => once after render 
//  dep array [searchText] => once after initial render + everytime after render (my searchText changes);

useEffect(()=>{
  //API Call
   getRestraunts();
  console.log("Hello");
    },[searchText]);
async function getRestraunts(){
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.28844139999999&lng=77.993135999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      //it return
      const json = await data.json();
      console.log(json);
      // optional chaining
      setRestaurants(json?.data?.card[2]?.data?.data?.cards);
}
  
  // console.log("render");


  // Conditional Rendering
  //if restraunt is empty = >   Shimmer UI
  //if restraunt has data = >  Actual Data UI

return(restaurants.length===0)? <Shimmer/> : (

  <>
      <div className="-search-container">
       <input 
       type='text' 
       className='search-input' 
       placeholder='Search for a restraunt...'
       value={searchText}
       onChange={(e) => {
         // e.target.values --> whatever you write in input
         setSearchInput(e.target.value);
        }}
        />

       <button className="search-btn"
       onClick={() =>{ 
        // Need to filter the data (Restralist data)
        const data = filterData(searchText, restaurants); //Most important line EVER
        // searchText -->  search the searchText in list of restarent (restaurants)     
        // update the state -- > Restrarent deails {Next step}
        setRestaurants(data);
       }}>
        Search
        </button>
      </div>

      <div className="restraunt-list">
         {
           restaurants.map((res) => {
             return <RestrauntCard {...res.data}  key={res.data.id}/>;
            })
          }
    </div>
          </>
    );
  };
  
  
export default Body;