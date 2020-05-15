import React from 'react';
import Card from './card';

function cards(props){
    return (
        <div className="cards">
                 {props.weather.consolidated_weather.map((elem, index)=><Card weather={props.weather.consolidated_weather[index]} key= {index}/>)}
            
 </div>
    )

}

export default cards;