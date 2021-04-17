import React from 'react';
import Title from '../components/Title';
import Intro from '../components/Intro';
import NameCard from '../components/NameCard';
import News from '../components/News';


function About() {
  return (

    <div>
      <Title text="안녕하세요 로드믹입니다"/>
      <Intro />
      <NameCard />
      <h3><i class="fas fa-bullhorn fa-lg"></i> 공지 사항</h3>
      <News />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>

  );
}

export default About;