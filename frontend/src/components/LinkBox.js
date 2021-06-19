import React from 'react';

function LinkBox(props) {
    return (
        <div className="LinkBox">
            <h4 className="OrigLink">{props.OrigLink}</h4>
            <div className="LinkContainer">
                <h4 className="ShortLink">{props.ShortLink}</h4>
                <button type='button'>Copy</button>
            </div>
        </div>
    );
}

export default LinkBox;