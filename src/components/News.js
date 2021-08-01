import React from 'react';

const lawthmic_news = [
    {
        id: 1,
        name: '[Call for Papers]',
        title: 'FIFTEENTH INTERNATIONAL WORKSHOP ON JURIS-INFORMATICS(JURISIN)',
        year: '2021',
        status: 'Deadline: August 31'
    },
    {
        id: 2,
        name: '[구인]',
        title: '책편집자(인디자인/재택근무)',
        year: '2021. 8',
        status: '모집중'
    },
    {
        id: 3,
        name: '[구독]',
        title: '프로그래밍 자료(raywenderlich.com)',
        year: '2021. 5',
        status: '1년간'
    }
    
]


function News() {

    return (
        
        <ul class="MethodWrapper">
            {lawthmic_news.map(news => (
                <li>{news.name} {news.title}, {news.year}, {news.status}</li>
            ))}
        </ul>
    );
}

export default News;