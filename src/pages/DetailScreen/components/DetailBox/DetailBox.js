import React, { PropTypes } from 'react';

const DetailBox = ({label, value}) => {
    return (
        <div>
            <div style={{fontSize:"x-large"}}>{label}</div> 
            <div style={{fontSize:"small"}}>{value}</div> 
        </div>
    );
};

DetailBox.propTypes = {
};

export default DetailBox;