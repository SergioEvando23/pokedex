import React from 'react';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const Error404 = props => {
    return (
        <div style={{color:"#ffffff", textAlign:"center",  border: "2px solid #ffffff", width: "250px", marginLeft: "500px", padding: "4px"}}>
            <p> ERROR 404! </p>
                RETUNR TO <Link to="/">
                <Button variant="contained" style={{padding:"2px"}}>HOME</Button>
                </Link>
        </div>
    );
};

Error404.propTypes = {
    
};

export default Error404;