import React from 'react';
import './Card.css';

//create Card 

const Card = props => (
    <div className="card" onClick={props.cardClick}>
        <div className="img-container">
        <img alt={props.image.replace(".png","")} src={require("../../images/"+props.image)} />
        </div>
    </div>
);

export default Card;
