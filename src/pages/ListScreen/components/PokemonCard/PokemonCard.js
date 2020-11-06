import React from 'react'
import pokemon from '../../../../__mocks__/pokemon'
import './PokemonCard.css'
import PokemonImage from '../PokemonImage/PokemonImage'
import Stamp from './../Stamp/Stamp'
import FilledStatus from './../FilledStatus/FilledStatus'



const PokemonCard = ({nome}) => {
    const defineColor = type => {   
        const colorTypes = {
            grass:'#32CD32',
            fire: '#ff5555',
            water:'#4682B4',
            default: '#ba551a'
        };
        return colorTypes[type] || colorTypes ['default'];
    }   

    const defaultColor = defineColor(pokemon?.types[0]?.type?.name);

    const getCorrectProps = (statName) => {
      return pokemon.stats.find(item => item.stat.name === statName);   
    }
    
    return (
        <div className="Pcard" style={{backgroundColor: defaultColor}}>
            <div className="Nome" style={{textAlign:'center' }}>
               {nome}#{pokemon?.order}
            </div>  
            <PokemonImage sprite={pokemon?.sprites?.other['official-artwork']?.front_default}/>
            <Stamp type={pokemon?.types[0]?.type?.name} color={defaultColor}/>
            <FilledStatus label="Atk:" value={getCorrectProps("attack").base_stat}/>
            <FilledStatus label="Def:" value={getCorrectProps("defense").base_stat}/>
        </div>
         
    );
};

export default PokemonCard