import React, { useState } from 'react'
import pokemonLists from '../../__mocks__/pokemonLists'
import PokemonCard from './components/PokemonCard/PokemonCard'
import './ListScreen.css'

const ListScreen = () => {
    //console.log(pokemonLists.results)
    const cards = pokemonLists.results.map( (  item, index ) => {
       //console.log(pokemon);
        return (
            <div className="Card"> 
                <PokemonCard nome={item.name}></PokemonCard>
            </div>
        )
    });

    return ( 
        <div> 
        {cards}
        </div>
    );
};

export default ListScreen