import React, {useState} from 'react';

function LinkBox(props) {

    const [isClicked, setIsClicked] = useState(false)

    const handleClick = (number) => {
        setIsClicked(true)
        document.getElementById("CopyInput" + number).select()
        document.execCommand("copy")
    }

    return (
        <div className="LinkBox">
            <div className="OrigLink">
                <p>{props.OriginalLink}</p>
            </div>
            <div className="LinkContainer">
                <p className="ShortLink">{props.ShortLink}</p>
                {isClicked ? (<button style={{backgroundColor: '#3A3054'}} onClick={() => handleClick(props.number)} className="Clicked" type='button'>Copied</button>) : (<button onClick={() => handleClick(props.number)} className="notClicked" type='button'>Copy</button>)}
                <input readOnly style={{opacity: '0'}} type="text" id={"CopyInput" + props.number} value={props.ShortLink} />
            </div>
        </div>
    );
}

export default LinkBox;