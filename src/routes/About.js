import React from 'react';
import Title from '../components/Title';
import Intro from '../components/Intro';
import NameCard from '../components/NameCard';
import News from '../components/News';
import FootNote from '../components/FootNote';


function About() {
  return (

    <div>
      <Title text="Welcome to LAWTHMIC"/>
      <Intro />
      {/*<NameCard />*/}
      <hr color="#f0f0f0" />
      <br />
      <h4><i class="fas fa-bullhorn fa-lg"></i> 최신 판례</h4>
      <News />
      <br />
      <br />
      <hr color="#f0f0f0" />
      <FootNote />
      <br />
      <br />
      <br />
    </div>

  );
}

export default About;