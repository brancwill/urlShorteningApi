import React, {useState} from "react"
import LinkBox from "./LinkBox"
import Loading from "./Loading";

const LinkShortener = () => {

    const [linkList, setLinkList] = useState([]);
    const [isLink, setIsLink] = useState('isLink')
    const [passedLink, setPassedLink] = useState('');
    const [loading, setLoading] = useState(false)
    const [isLoading, setisLoading] = useState('none')

    const handleChange = (e) => {
        if (isLink === 'isNotLink') {
            setIsLink('isLink')
        }
        setPassedLink(e.target.value)
    }

    const handleClick = async (link) => {
        const url = new RegExp(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)
        if (url.test(link)) {
            setisLoading('block')
        const rawLink = 'https://api.shrtco.de/v2/shorten?url=' + link;
        await fetch(rawLink, {
            method: 'GET',
            mode: 'cors'
        })  
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                else {
                    console.log("Res not OK!")
                }
            })
            .then(data => {
                setLinkList( arr => [...arr, data])
            })
            .then(
                setLoading(false)
            )
        setLoading(true)
        }
        else {
            setIsLink('isNotLink')
        }
    }

    return(
        <div className="LinkShortener">
            <div className="LSBox">
                <div className="Input">
                    <input className={isLink} value={passedLink} onChange={handleChange} type="url" id="shortener" placeholder="Shorten a link here..."/>
                    {isLink === 'isLink' ? (<span></span>) : (<p className="NotLink">Please add a link</p>)}
                    <button id="LSButton" type='button' onClick={() => handleClick(passedLink)}>Shorten It!</button>
                </div>
            </div>
            <div className="LinkList">
                {}
                {loading ? (linkList.map((link, index) => (
                    <LinkBox key={index} number={index} OriginalLink={link.result.original_link} ShortLink={link.result.full_short_link}/>
                ))) : (<Loading style={isLoading}/>)}
            </div>
        </div>
    )
}

export default LinkShortener