import React, { PropTypes } from 'react';
import './PokemonImage.css';
import pokemon from '../../../../__mocks__/pokemon';
import { LinearProgress } from '@material-ui/core';

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

    //console.log(pokemon.stats)

    return (
        <div className="Balloncard">
            <img src={sprite} width="180" height="180" margin="0" ></img>
            <div className="type" style={{backgroundColor: defineColor(pokemon?.types[0]?.type?.name)}}> 
                {pokemon?.types[0]?.type?.name} 
            </div>        
            <div className="Ballonmine"></div>
            <div className="barra" >
                Atk: <progress max="100" value={pokemon?.stats[1]?.base_stat}> </progress>
                Def: <progress max="100" value={pokemon?.stats[2]?.base_stat}> </progress>
            </div>
        </div>
    );
};

PokemonImage.propTypes = {
    
};

export default PokemonImage;