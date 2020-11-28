import  React, { useEffect, useState } from 'react'
import PokemonCard from './components/PokemonCard/PokemonCard'
import './ListScreen.css'
import {Link} from 'react-router-dom'
import axios from '../../core/axios.config'
import {BASE_URL} from '../../core/constants'
import Button from '@material-ui/core/Button'

const ListScreen = () => {
    const [ pokemonLists, setPokemonLists ] = useState({});
    const [ url, setUrl ] = useState("pokemon");

    useEffect(( ) => {
        axios.get(url).then(({data}) => {
            setPokemonLists(data)
        })
    }, [url])

    const onProximo = () => {
        setUrl(pokemonLists?.next)
    }

    const onAnterior = () => {
        setUrl(pokemonLists?.previous)
    }

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
        <div className="list-screen">  
            <div className="list-screen__container-cards" > 
               {cards}
            </div>
            <div className="list-screen__footer">
                <div className="list-screen__footer__back-button">
                    { pokemonLists?.previous !== null && <Button onClick={onAnterior} variant="outlined" color="secondary" > anterior </Button>}
                </div>
                <div className="list-screen__footer__next-button"> 
                    { pokemonLists?.next !== null && <Button onClick={onProximo} variant="outlined" color="secondary" > proximo </Button>}
                </div>
            </div>
        </div>
    );
};

export default ListScreen