import React from 'react'
import pokemon from '../../../../__mocks__/pokemon'
import './PokemonCard.css'
import PokemonImage from '../PokemonImage/PokemonImage'

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
   // console.log("types", pokemon.moves.length)
    return (
        <div className="Pcard" style={{backgroundColor: defineColor(pokemon?.types[0]?.type?.name)}}>
            <div className="Nome">
               {nome}#{pokemon.order}
            </div>  
            <PokemonImage sprite={pokemon.sprites.other['official-artwork'].front_default}/>
        </div>
         
    );
};

export default PokemonCard