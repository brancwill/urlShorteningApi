import React, {useState} from "react"
import LinkBox from "./LinkBox"

const LinkShortener = () => {

    const [linkDisplay, setLinkDisplay] = useState('noDisplay')

    return(
        <div className="LinkShortener">
            <div className="LSBox">
                <div className="Input">
                    <input className="" type="text" id="shortener" placeholder="Shorten a link here..."/>
                    <button type='button' onClick="">Shorten It!</button>
                </div>
            </div>
            <div className={linkDisplay}>
                <LinkBox />
                <LinkBox />
                <LinkBox />
            </div>
        </div>
    )
}

export default LinkShortener