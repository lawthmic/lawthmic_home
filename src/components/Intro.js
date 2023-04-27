import React from 'react';
import Image from '../components/Image';
import '../css/styles.css';


function Intro() {
    return (
        <div class="IntroWrapper">
            <p class="IntroText">Lawthmic is a combination of law and algorithm. Law refers to both the laws of nature and the laws of society. We provide law contents based on computer science so that anyone can easily understand.</p>
            <Image url="lawyer-badge-800x533.png" />
        </div>
    );
}

export default Intro;