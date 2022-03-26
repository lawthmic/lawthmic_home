import React from 'react';
import Image from '../components/Image';
import '../css/styles.css';


function Intro() {
    return (
        <div class="IntroWrapper">
            <p class="IntroText">We provide unprecedented content through the convergence of Law and Science.</p>
            <Image url="lawyer_badge-180x180.png" />
        </div>
    );
}

export default Intro;