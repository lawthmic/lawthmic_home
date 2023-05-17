import React from 'react';
import Image from '../components/Image';
import '../css/styles.css';


function Intro() {
    return (
        <div class="IntroWrapper">
            <p class="IntroText">Hello World. We provide legal content based on computer science, making it easily accessible and understandable for everyone.</p>
            <Image url="lawyer-badge-800x533.png" />
        </div>
    );
}

export default Intro;