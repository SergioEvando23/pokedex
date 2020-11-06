import React from 'react';
import './DetailImage.css'

const DetailImage = ({sprite}) => {
    return (
        <div className="superSprite">
            <div className="holograma">
                <img src="https://joinnet.net.br/wp-content/uploads/2020/07/Holograma.png" width="320" height="320" ></img>
           </div>
           <div className="Sprite">
                <img src={sprite} width="400" height="400" margin="0"></img>  
           </div>
          
           
         </div>
    );
};

DetailImage.propTypes = {
    
};

export default DetailImage;