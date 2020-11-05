import React from 'react';
import './FilledStatus.css'

const FilldStatus = ({children}) => {
    const element = document.getElementById('fill');
        
    const setFilled = (value) => {
        const finalWidth = (value / 130) * 100;
        element.style.width = `${finalWidth}%` ;
    }

    return (
        <div id="container">
            
            <div id="body"></div>
            <div id="fill"></div>
            {children} 
        </div>
    );
};

FilldStatus.propTypes = {
    
};

export default FilldStatus;