import React from 'react';
import Image from '../components/Image';
import '../css/styles.css';


function Intro() {
    return (
        <div class="IntroWrapper">
            <p class="IntroText">In the era of 4th Industrial Revolution we provide unprecedented digital contents through the convergence of Law and Engineering.</p>
            <Image url="lawthmic_ci.png" caption="LAWTHMIC=LAW+algoriTHMIC" />
        </div>
    );
}

export default Intro;