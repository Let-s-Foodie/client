import React from 'react';
import RandomFood from './RandomFood';

const RandomFoods = (props) => {
    
    return (
        <ul>
            {props.foods.map((food)=> (
                
                <RandomFood 
                    // key = {food.key}
                    // title ={food.item}
                      key = {food.id}
                     title ={food.title}
                />
            ))}
        </ul>
    );
};


export default RandomFoods;