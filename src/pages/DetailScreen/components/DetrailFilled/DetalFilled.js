import React from 'react'
import './DetailFilled.css'

const DetailFilled = ({label, value }) => {
        
    const setFilled = (percentage) => {
        const finalWidth = (percentage / 300) * 100;
        return `${finalWidth}%`;
    }

    return (
        <div style={{display: "table", margin:"80px 0px -100px 700px" }}>
            <div className="Menu">
                <p>{label}  </p>
            </div>
            <div className="container-detail-filled" >
                <div className="body"></div>
                <div className="fill" style={{width:setFilled(value)}}></div>
            </div>     
        </div>
        
    );
};
 DetailFilled.propTypes = {
    
};

export default DetailFilled;