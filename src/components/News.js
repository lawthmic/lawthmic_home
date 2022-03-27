import React from 'react';

const lawthmic_news = [
    {
        id: 1,
        name: '[행사]',
        title: '로드믹 사업계획 발표',
        year: '2022년 4월 2일',
        status: '본점 회의실'
    }
]


function News() {

    return (
        
        <ul class="MethodWrapper">
            {lawthmic_news.slice(0).reverse().map(news => (
                <li>{news.name} {news.title}, {news.year}, {news.status}</li>
            ))}
        </ul>
    );
}

export default News;