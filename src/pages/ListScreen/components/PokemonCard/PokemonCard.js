import React from 'react'
import pokemon from '../../../../__mocks__/pokemon'
import './PokemonCard.css'

const PokemonCard = ({nome}) => {

    const defineColor = type => {   
        const colorTypes = {
            grass:'#abffab',
            fire: '#ff5555',
            water:'#00ffff',
            default: '#ba551a'
        };
        return colorTypes[type] || colorTypes ['default'];
}   

    return (
        <div className="Pcard" style={{backgroundColor: defineColor(pokemon.type)}}>
            <div className="Nome">
               {nome}#N°
            </div>  
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" width="180" height="180" margin="0" ></img>
         </div>
    );
};

export default PokemonCard