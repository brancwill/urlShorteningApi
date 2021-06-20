import React from 'react';

function Loading(props) {
    return (
        <div className="Loading" style={{display: props.style}}>
            <div className="lds-facebook"><div></div><div></div><div></div></div>
        </div>
    );
}

export default Loading;