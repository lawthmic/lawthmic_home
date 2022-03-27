import React from 'react';

const lawthmic_news = [
    {
        id: 1,
        kind: '[행사]',
        title: '2022년도 로드믹 정기총회',
        date: '2022년 4월 2일',
        etc: '본점 회의실'
    }
]


function News() {

    return (
        
        <ul class="MethodWrapper">
            {lawthmic_news.slice(0).reverse().map(news => (
                <li>{news.kind} {news.title}, {news.date}, {news.etc}</li>
            ))}
        </ul>
    );
}

export default News;