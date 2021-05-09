import React from 'react';

const RandomFood = (props) => {
    return (
        <p>
            <h2>{props.title}</h2>
            <img src={props.img}/>
        </p>
    )
}

export default RandomFood;