import React from 'react';
import './FilledStatus.css'

const FilldStatus = ({ value, label}) => {
        
    const setFilled = (percentage) => {
        const finalWidth = (percentage / 130) * 100;
        return `${finalWidth}%` ;
    }

    return (
        <div style={{display: "flex", margin:"10px 0px -40px 20px"}}>
            <p>{label}</p> 
            <div className="container-filled-status">
                <div className="body"></div>
                <div className="fill" style={{width:setFilled(value)}}></div>  
            </div>
        </div>
    );
};

FilldStatus.propTypes = {
    
};

export default FilldStatus;