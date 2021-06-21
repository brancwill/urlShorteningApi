import React, {useState} from "react"

import Logo from './assets/img/logo.svg'

const Navigation = () => {

    const [menuStatus, setMenuStatus] = useState('closed')

    const handleClick = () => {
        if (menuStatus === 'closed') {
            setMenuStatus('open')
        } else {
            setMenuStatus('closed')
        }
    }

    return(
        <div className="Navigation">
            <img className="Logo" src={Logo} alt="Shortly" />
            <div className="Hamburger" onClick={() => handleClick()}>
                <div className="Line"></div>
                <div className="Line"></div>
                <div className="Line"></div>
            </div>
            <div className={menuStatus}>
                <div className="mobileNavTop">
                    <a href='#'><h4>Features</h4></a>
                    <a href='#'><h4>Pricing</h4></a>
                    <a href='#'><h4>Resources</h4></a>
                </div>
                <div className="mobileNavBot">
                <a href='#'><h4>Login</h4></a>
                <a href='#'><h4 className="MobileSignUp">Sign Up</h4></a>
                </div>
            </div>
                <div className="desktopNav">
                    <a href='#'><h4>Features</h4></a>
                    <a href='#'><h4>Pricing</h4></a>
                    <a href='#'><h4>Resources</h4></a>
                </div>
                <div className="desktopNav">
                    <a href='#'><h4>Login</h4></a>
                    <a href='#'><h4 className="DesktopSignUp">Sign Up</h4></a>
                </div>
        </div>
    )
}

export default Navigation