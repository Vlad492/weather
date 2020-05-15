import React from 'react';
import Header from './header';
import Article from './article';

function body(props){
    return (
        <div>
        <Header signOut = {props.signOut} title = {props.title} titleChange={props.titleChange} getWeather = {props.getWeather}/>
        <Article weather={props.weather}/>
        </div>
    )
}

export default body;