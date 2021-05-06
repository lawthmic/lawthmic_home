import React from 'react';

const lawthmic_news = [
    {
        id: 1,
        name: '[구인]',
        title: '책편집자(인디자인/파트타임)',
        year: '2021. 5',
        status: '모집중'
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