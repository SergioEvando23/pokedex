import React from 'react';
import './PokemonImage.css';

const PokemonImage = ({sprite}) => {

    return (
        <div className="Balloncard">
            <img src={sprite} width="165" height="165" />       
            <div className="Ballonmine"></div>
        </div>
    );
};

PokemonImage.propTypes = {
    
};

export default PokemonImage;