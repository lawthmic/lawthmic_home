import React from 'react';
import Image from '../components/Image';
import '../css/styles.css';


function Intro() {
    return (
        <div class="IntroWrapper">
            Lawthmic combines law and algorithm. We provide law-related content rooted in computer science, making it easily accessible and understandable for everyone.
            <Image url="lawyer-badge-800x533.png" />
        </div>
    );
}

export default Intro;