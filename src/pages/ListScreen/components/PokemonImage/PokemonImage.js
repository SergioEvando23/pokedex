import React, { PropTypes } from 'react';
import './PokemonImage.css';
import pokemon from '../../../../__mocks__/pokemon';

const PokemonImage = ({sprite}) => {
    const defineColor = type => {   
        const colorTypes = {
            grass:'#95f2af',
            fire: '#ff5555',
            water:'#00ffff',
            default: '#ba551a'
        };
        return colorTypes[type] || colorTypes ['default'];
    }  
    return (
        <div className="Bgcard">
            <img src={sprite} width="180" height="180" margin="0" ></img>
            <div className="type" style={{backgroundColor: defineColor(pokemon?.types[0]?.type?.name)}}> 
                {pokemon?.types[0]?.type?.name} 
            </div>        
            <div className="Bgmine"></div>
            <dvi> 

            </dvi>

    
        </div>
    );
};

PokemonImage.propTypes = {
    
};

export default PokemonImage;