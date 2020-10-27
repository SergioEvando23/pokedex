import React from 'react'
import pokemonLists from '../../__mocks__/pokemonLists'
import PokemonCard from './components/PokemonCard/PokemonCard'
import './ListScreen.css'

const ListScreen = () => {
    //console.log(pokemonLists.results)
    const cards = pokemonLists.results.map( ( pokemon, index ) => {
        
       console.log(pokemon.name);
        
        return (
            <div className="Card"> 
                <PokemonCard nome={pokemon.name}></PokemonCard>
            </div>
        )
    });

    return ( 
        <div> 
           ListScreen
        {cards}
        </div>
    )
}

export default ListScreen