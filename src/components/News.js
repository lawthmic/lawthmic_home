import React from 'react';

const lawthmic_news = [
    {
        id: 1,
        kind: '[판례]',
        title: '법원이 가압류취소결정을 한 후 항고심 법원이 채권자의 즉시항고를 받아들여 잘못된 가압류취소결정을 취소하고 다시 가압류등기를 촉탁하였는데, 채권자가 따로 집행정지를 신청하지 않아 그 사이 부동산이 제3자에게 이전됨으로써 위 촉탁이 각하된 경우 잘못된 가압류취소결정을 이유로 국가배상을 구할 수 있는 것은 아니다.',
        date: '대법원 2022.3.17. 선고 2019다226975 판결',
        etc: '민사집행'
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