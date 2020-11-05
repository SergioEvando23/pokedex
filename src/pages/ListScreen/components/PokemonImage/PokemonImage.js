import React, { PropTypes } from 'react';
import './PokemonImage.css';

const PokemonImage = ({sprite}) => {

    return (
        <div className="Balloncard">
            <img src={sprite} width="150" height="150" margin="0" ></img>        
            <div className="Ballonmine"></div>
        </div>
    );
};

PokemonImage.propTypes = {
    
};

export default PokemonImage;