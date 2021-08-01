import React from 'react';

const lawthmic_news = [
    {
        id: 1,
        name: '[Call for Papers]',
        title: 'International Workshop on Mining and Learning in the Legal Domain(MLLD)',
        year: '2021',
        status: 'Deadline: September 3'
    },
    {
        id: 2,
        name: '[Call for Papers]',
        title: '15th International Workshop on JURIS-INFORMATICS(JURISIN)',
        year: '2021',
        status: 'Deadline: August 31'
    },
    {
        id: 3,
        name: '[구인]',
        title: '책편집자(인디자인/재택근무)',
        year: '2021. 8',
        status: '모집중'
    },
    {
        id: 4,
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