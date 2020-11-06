import React, { PropTypes } from 'react';
import DetailImage from './components/DetailImage/DetailImage'
import pokemon from './../../__mocks__/pokemon'
import './DetailScreen.css'

const DetailScreen = props => {
    return (
        <div>
            <div className="name"> 
                {pokemon?.name}
            </div>
            <DetailImage sprite={pokemon?.sprites?.other['official-artwork']?.front_default} />
        </div>
    );
};

DetailScreen.propTypes = {
    
};

export default DetailScreen;