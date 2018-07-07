import React from 'react';
import './Card.css';

//create Card 

const Card = props => (
    <div className="card" onClick={props.cardClick}>
        <div className="img-container">
        <img alt={props.image} src={props.image} />
        </div>
    </div>
);

export default Card;
