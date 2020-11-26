import React from 'react';
import './Stamp.css'

const Stamp = ({type, color})=> {
    return (
        <div className="type" style={{backgroundColor: color, textTransform: "uppercase" }}> 
            {type} 
        </div>
    );
};
Stamp.propTypes = {
    
};

export default Stamp;