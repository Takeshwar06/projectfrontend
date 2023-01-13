import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import foodContext from './context/foods/foodContext'
import Fooditem from './Fooditem';
import CircleFood from './CircleFood';
import { host } from '../utils/APIRoutes';
import { useState } from 'react';
export default function Home() {
  let foodCount = 0;
  const [currentUser,setCurrentUser]=useState(undefined);
  const { foods, showAllFoods } = useContext(foodContext);

  useEffect(() => {
       // generate UserId in localStorage with condition 
       if(!localStorage.getItem("UserId")){
         localStorage.setItem("UserId",Math.ceil(Math.random()*1000000000+(9999999999-1000000000)))
       }
       
       showAllFoods();     
  },[]) 

  return (
    <>
      <div id="showFood">
        <h2 className="center">Eat! What makes you Happy 😊</h2>

        <div id="allFoods">
             {foods.map((food)=>{
             food.foodAvailable&&foodCount++;
             return <>
                 {foodCount<15&&food.foodAvailable&&<CircleFood key={food._id} food={food}/>}
              </>
             })}
        </div>
      </div>
       <hr></hr>
       <hr></hr>
      <div id="allDish" className='mx-3'>
        {foods.map((food) => {
          return (
            <>
              {food.foodAvailable && <Fooditem key={food._id} food={food} />}
            </>
          )
        })}
      </div>
    </>

  )
}
