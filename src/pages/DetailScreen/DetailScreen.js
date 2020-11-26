import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import DetailBox from './components/DetailBox/DetailBox';
import DetailImage from './components/DetailImage/DetailImage';
import DetailFilled from './components/DetrailFilled/DetalFilled';
import axios from '../../core/axios.config';
import { BASE_URL } from '../../core/constants';

const DetailScreen = props  => {
    const [ pokemon, setPokemon ] = useState({});

    // console.log(props?.match?.params?.id)

    useEffect(( ) => {
            const id = props?.match?.params?.id
            axios.get(`pokemon/${id}`).then(({data}) => {
            console.log(data)
            setPokemon(data)
        });
    
    },[])


    const getCorrectProps = (statName) => {
        return pokemon?.stats?.find(item => item?.stat?.name === statName);   
    }

    return (
        <div>
            <Link to="/"><Button variant="outlined" color="secondary" style={{color:"#ffffff", padding:"5px"}}>VOLTAR</Button></Link>
            <DetailImage sprite={pokemon?.sprites?.other['official-artwork']?.front_default} />
            <div style={{fontFamily:"sans-serif", fontSize:"xx-large", fontWeight:"700", margin: "40px 0px -100px 698px", color: "#FFFFFF", textTransform:"capitalize"}}>
            {pokemon?.name}
            </div>
            <div className="filledStatus">
                <DetailFilled label="Hp:" value={getCorrectProps("hp")?.base_stat}/>
                <DetailFilled label="Ataque:" value={getCorrectProps("attack")?.base_stat}/>
                <DetailFilled label="Defesa:" value={getCorrectProps("defense")?.base_stat}/>
                <DetailFilled label="Velocidade:" value={getCorrectProps("speed")?.base_stat}/>
                <DetailFilled label="Ataque especial:" value={getCorrectProps("special-attack")?.base_stat}/>
                <DetailFilled label="Defesa especial:" value={getCorrectProps("special-defense")?.base_stat}/>
            </div>
            <div style={{fontFamily:"sans-serif",  margin: "200px 0px -100px 800px", backgroundColor:"#808080", color: "#FFFFFF", borderRadius:"20px", width:"300px", height:"130px"}}>
                <div style={{padding:"15px 15px 30px 25px"}}>
                    <DetailBox label="Altura:" value={pokemon?.height}/>  
                    <DetailBox label="Peso:" value={pokemon?.weight}/>
                </div> 
                <div style={{margin:"-116px 0px 0px 200px"}}>
                    <DetailBox label="Id:" value={pokemon?.id}/> 
                    <DetailBox label="Tipo:" value={pokemon?.types && pokemon?.types[0]?.type?.name || "default"} />
                </div>
            </div>
        </div>
    );
};

DetailScreen.propTypes = {
    
};

export default DetailScreen;