import React from 'react';

function header(props) {
    return (
        <header className="pageHeader">
            <ul className="ulHeader">
                <li><a href='#'>MyWeather</a></li>

                <li><a href='#' onClick={props.signOut}>SignOut</a></li>
            </ul>
            <div className="input-group mb-3">
                <input type="text" className="form-control" value = {props.title} onChange={(event) => props.titleChange(event)} placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" onClick={(event) => props.getWeather(event)} type="button">Button</button>
                    </div>
            </div>
        </header>
    )
}

export default header;
