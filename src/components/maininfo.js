import React from 'react';

function maininfo(props){
    return(
        <div className="mainInfo">
                    <div>
    <span className="town">{props.weather.title}</span>
    <span className="country">{props.weather.parent.title}</span>
                    </div>
                    <div className="tables">
                        <table>
                            <tbody>
                            <tr>
                                <td>Time</td>
    <td>{new Date(props.weather.time).toLocaleTimeString()}</td>

                            </tr>
                            
                            <tr>
                                <td>SunSet</td>
                                <td>{new Date(props.weather.sun_set).toLocaleTimeString()}</td>

                            </tr>
                            
                            <tr>
                                <td>SunRise</td>
                                <td>{new Date(props.weather.sun_rise).toLocaleTimeString()}</td>

                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
    )
}

export default maininfo; 