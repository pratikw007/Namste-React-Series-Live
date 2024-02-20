// props --> Properties -->Passing some data into component
// import { restaurantList } from "./components/config.js";
import  React from 'react';
import { restaurantList } from "../components/config.js"
import RestrauntCard from './RestrauntCard.js';
const Body = () => {
    return (
      <div className="restraunt-list">
         {
          restaurantList.map((res) => {
            return <RestrauntCard {...res.data}  key={res.data.id}/>;
          })
         }
    </div>
    );
  };
  
  
export  default Body;