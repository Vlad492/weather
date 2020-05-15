import React from 'react';
import MainInfo from './maininfo';
import Cards from './cards';

function article(props) {
    return (
        <article className="mainArticle">
            <div className="mainContent">
                <MainInfo weather={props.weather}/>
                    <Cards weather={props.weather} />
                </div>

        </article>
    )
}

export default article;