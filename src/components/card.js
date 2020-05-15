import React from 'react';

function card(props){
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    const weekNames = [ "Sunday","Monday", "Tuesday","Wednesday","Thursday", "Friday", "Saturday"]
const img = [
    'Snow',
    'Sleet', 
    'Hail', 
    'Thunderstorm', 
    'Heavy Rain',
    'Light Rain',
    'Showers',
    'Heavy Cloud',
    'Light Cloud',
    'Clear'
]
const img2 = ['sn','sl','h','t','hr','lr','s','hc','lc','c']
var weather;
   img.forEach((elem, i)=> {
   if (img[i] == props.weather.weather_state_name){
    weather = img2[i]
    }})
    
    function getDate(){
      

        let date = (Date.now()-Date.parse(props.weather.applicable_date))/86400000
        if (date > 0) return 'Today'
        else if ((date < 0) && (date > -1)) return 'Tomorrow'
        else if ((date < 0) && (date < -1)) return weekNames[new Date(props.weather.applicable_date).getDay()]  +", "+ new Date(props.weather.applicable_date).getDate().toLocaleString()  +" "+  monthNames[new Date(props.weather.applicable_date).getMonth()]
    }

return(
    <div className="card">
        <h2 className="date">{getDate()}</h2>
        <img src={`https://www.metaweather.com/static/img/weather/${weather}.svg`}></img>
        <p className="weather">{props.weather.weather_state_name}</p>
        <p className="minT">Min: {parseFloat(props.weather.min_temp).toFixed(1)} °C</p>
<p className="maxT">Max: {parseFloat(props.weather.max_temp).toFixed(1)}  °C</p>
        <p className="wind"></p>
        <p>Humidity:</p>
        <p className="humidity">{parseFloat(props.weather.humidity)}</p>
        <p>Visibility:</p>
        <p className="vsibility"> {parseFloat(props.weather.visibility).toFixed(2)} M</p>
        <p>Pressure:</p>
        <p className="pressure">{parseFloat(props.weather.air_pressure.toFixed(2))}</p>
        <p>Confidence:</p>
        <p className="confidence">{parseFloat(props.weather.predictability)}</p>
    </div>
)
}


export default card;