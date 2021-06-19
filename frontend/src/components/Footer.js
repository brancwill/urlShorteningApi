import React from 'react';
import Logo from '../assets/img/logo.svg'
import Facebook from '../assets/img/icon-facebook.svg'
import Twitter from '../assets/img/icon-twitter.svg'
import Pinterest from '../assets/img/icon-pinterest.svg'
import Instagram from '../assets/img/icon-instagram.svg'

function Footer() {
    return (
        <div className="Footer">
            <div className="FooterTop">
                <h2>Boost your links today</h2>
                <button type="Button">Get Started</button>
            </div>
            <div className="FooterBottom">
                <img src={Logo} alt="Shortly" />
                <div className="FooterList">
                    <p className="FooterTitle">Features</p>
                    <div>
                        <p>Link Shortening</p>
                        <p>Branded Links</p>
                        <p>Analytics</p>
                    </div>
                </div>
                <div className="FooterList">
                    <p className="FooterTitle">Resources</p>
                    <div>
                        <p>Blog</p>
                        <p>Developers</p>
                        <p>Support</p>
                    </div>
                </div>
                <div className="FooterList">
                    <p className="FooterTitle">Company</p>
                    <div>
                        <p>About</p>
                        <p>Our Team</p>
                        <p>Careers</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className="SocIcons">
                    <img src={Facebook} alt="Facebook" />
                    <img src={Twitter} alt="Twitter" />
                    <img src={Pinterest} alt="Pinterest" />
                    <img src={Instagram} alt="Instagram" />
                </div>
            </div>
        </div>
    );
}

export default Footer;