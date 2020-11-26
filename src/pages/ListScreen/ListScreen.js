import  React, { useEffect, useState } from 'react'
import PokemonCard from './components/PokemonCard/PokemonCard'
import './ListScreen.css'
import {Link} from 'react-router-dom'
import axios from '../../core/axios.config'
import {BASE_URL} from '../../core/constants'
import Button from '@material-ui/core/Button'

const ListScreen = () => {
    const [ pokemonLists, setPokemonLists ] = useState({});
           
    useEffect(( ) => {
        axios.get("pokemon").then(({data}) => {
            setPokemonLists(data) 
        })
    }, [])

    //console.log(pokemonLists.results)
    const cards = pokemonLists?.results?.map( (  item, index ) => {
        const cloneUrl = item?.url;
        
        const uniqueURL = cloneUrl.replace(BASE_URL, "");
        console.log(uniqueURL)

        return (
            <div> 
              <Link to={`/${uniqueURL}`}><PokemonCard nome={item?.name} url={item?.url} /></Link>
              
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