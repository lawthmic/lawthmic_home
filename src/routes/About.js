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
      <hr color="#f0f0f0" />
      <br />
      <h4><i class="fas fa-bullhorn fa-lg"></i> 공지 사항</h4>
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