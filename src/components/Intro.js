import React from 'react';
import Image from '../components/Image';
import '../css/styles.css';


function Intro() {
    return (
        <div class="IntroWrapper">
            <p class="IntroText">We provide unprecedented digital contents through the Convergence of Law and Science.</p>
            <Image url="lawthmic_ci.png" />
        </div>
    );
}

export default Intro;