import  React, { useEffect, useState } from 'react'
import PokemonCard from './components/PokemonCard/PokemonCard'
import './ListScreen.css'
import {Link} from 'react-router-dom'
import axios from '../../core/axios.config'
import {BASE_URL} from '../../core/constants'
import Button from '@material-ui/core/Button'

const ListScreen = () => {
    const [ pokemonLists, setPokemonLists ] = useState({});
           console.log(pokemonLists)
    useEffect(( ) => {
        axios.get("pokemon").then(({data}) => {
            setPokemonLists(data)
        })
    }, [])

    const cards = pokemonLists?.results?.map( (  item, index ) => {
        const cloneUrl = item?.url;
      
        
        const uniqueURL = cloneUrl.replace(BASE_URL, "");
       
        return (
            <div> 
              <Link to={`/${uniqueURL}`}><PokemonCard nome={item?.name} url={item?.url} /></Link>
            </div>

        )
    });

    return (  
        <div>  
            <div className="ListScreen"> 
               {cards}
                <div className="Next_button"> 
                  <Button variant="outlined" color="secondary" style={{color:"#ffffff", margin: "0em 0em 0em 80em"}}> proximo </Button>
                </div>
                <div className="Back_button">
                <Button variant="outlined" color="secondary" style={{color:"#ffffff", margin: "-4em 80em 0em 0em"}}> anterior </Button>
                </div>
            </div>
        </div>
    );
};

export default ListScreen