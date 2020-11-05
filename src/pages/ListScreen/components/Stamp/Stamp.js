import React, { PropTypes } from 'react';
import './Stamp.css'

const Stamp = ({type, color})=> {
    return (
        <div className="type" style={{backgroundColor: color }}> 
            {type} 
        </div>
    );
};
Stamp.propTypes = {
    
};

export default Stamp;