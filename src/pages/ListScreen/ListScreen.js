import  React, { useEffect, useState } from 'react'
import PokemonCard from './components/PokemonCard/PokemonCard'
import './ListScreen.css'
import {Link} from 'react-router-dom'
import axios from '../../core/axios.config'

const ListScreen = () => {
    const [ pokemonLists, setPokemonLists ] = useState({});
           

    useEffect(( ) => {
        axios.get("pokemon").then(({data}) => {
            setPokemonLists(data) 
        })
    }, [])

    //console.log(pokemonLists.results)
    const cards = pokemonLists?.results?.map( (  item, index ) => {
       //console.log(pokemon);
        return (
            <div> 
              <Link to="/moreInfo"><PokemonCard nome={item?.name} url={item?.url} /></Link>
            </div>
        )
    });

    return ( 
        <div className="ListScreen"> 
        {cards}
        </div>
    );
};

export default ListScreen