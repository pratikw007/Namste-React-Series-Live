// props --> Properties -->Passing some data into component



import  React from 'react';
import { restaurantList } from "../components/config.js"
import RestrauntCard from './RestrauntCard.js';
import { useState } from 'react';

// what  is state ?
// what is React hooks ? --> funnction
// What is useState? --


const Body = () => {
  // create a variable in JS
  // const searchTxt = "KFC";
  // const searchClick = false;
const [restaurants,setRestaurants] = useState(restaurantList);

  // create a variable in React
   const [searchInput,setSearchText] = useState("Search"); // to create state variable--> return the array of element
    return (
      <>
      <div className="-search-container">
       <input 
       type='text' 
       className='search-input' 
       placeholder='Search for a restraunt...'
       value={searchInput}
       onChange={(e) => {
        // e.target.values --> whatever you write in input
        setSearchText(e.target.value);
       }}
       />


       <button className='search-btn'
       onClick={() =>{ 
        // Need to filter the data (Restralist data)
        // filterData();
       }}
       >Search</button>
      </div>

      <div className="restraunt-list">
         {
           restaurantList.map((res) => {
             return <RestrauntCard {...res.data}  key={res.data.id}/>;
            })
          }
    </div>
          </>
    );
  };
  
  
export  default Body;