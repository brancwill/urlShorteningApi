import React from 'react';

function Cards(props) {
    return (
        <div className="Card">
            <div className="CardCircle">
                <img className="CardImage" src={props.img} alt="" />
            </div>
            <div className="CardInfo">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div className="vl"></div>
            <div className="vl2"></div>
        </div>
    );
}

export default Cards;