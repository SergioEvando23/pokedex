import React, { useEffect, useState } from 'react'
import './PokemonCard.css'
import PokemonImage from '../PokemonImage/PokemonImage'
import Stamp from './../Stamp/Stamp'
import FilledStatus from './../FilledStatus/FilledStatus'
import axios from '../../../../core/axios.config'
import {BASE_URL} from '../../../../core/constants'



const PokemonCard = ({nome, url}) => {
     const [ pokemon, setPokemon ] = useState({});

    useEffect(( ) => {
        const uniqueURL = url.replace(BASE_URL, "");
        axios.get(uniqueURL).then(({data}) => {
            setPokemon(data) 
        })
    
    }, [])

    const defineColor = type => {   
        const colorTypes = {
            grass:'#32CD32',
            fire: '#ff5555',
            water:'#4682B4',
            bug:'#AD8F2F',
            normal: '#808059',
            default: '#ba551a'
        };
        return colorTypes[type] || colorTypes ['default'];
    }   

    const defaultColor = defineColor(pokemon?.types && pokemon?.types[0]?.type?.name || "default");

    const getCorrectProps = (statName) => {
      return pokemon?.stats?.find(item => item?.stat?.name === statName);   
    }
    
    return (
        <div className="Pcard" style={{backgroundColor: defaultColor}}>
            <div className="Nome" style={{textAlign:'center', textTransform: "capitalize"}}>
               {nome}#{pokemon?.order}

            </div>  
            <PokemonImage sprite={pokemon?.sprites?.other['official-artwork']?.front_default}/>
            <Stamp type={pokemon?.types && pokemon?.types[0]?.type?.name} color={defaultColor}/>
            <FilledStatus label="Atk:" value={getCorrectProps("attack")?.base_stat || 0}/>
            <FilledStatus label="Def:" value={getCorrectProps("defense")?.base_stat || 0}/>
        </div>
         
    );
};

export default PokemonCard