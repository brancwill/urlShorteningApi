import React from 'react';
import Cards from './components/Cards'
import LinkShortener from './components/LinkShortener';

import Circle1 from './assets/img/icon-brand-recognition.svg';
import Circle2 from './assets/img/icon-detailed-records.svg'
import Circle3 from './assets/img/icon-fully-customizable.svg'

function About() {
    return (
        <div className="About">
            <LinkShortener />
            <div className="TopInfo">
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <Cards img={Circle1} title="Brand Recognition" description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content." />
            <Cards img={Circle2} title="Detailed Records" description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions." />
            <Cards img={Circle3} title="Fully Customizable" description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement." />
        </div>
    );
}

export default About;