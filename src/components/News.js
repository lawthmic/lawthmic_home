import React from 'react';

const lawthmic_news = [
    {
        id: 1,
        kind: '[민사집행]',
        date: '대법원 2022.3.17. 선고 2019다226975 판결',
        tag: '가압류취소·집행정지·국가배상',
        content: '가압류취소에 대해 항고심이 채권자의 즉시항고를 받아들여 잘못된 가압류취소를 취소하고 다시 가압류등기를 촉탁하였는데, 채권자가 따로 집행정지를 신청하지 않아 그 사이 부동산이 제3자에게 이전됨으로써 위 촉탁이 각하된 경우 처음의 잘못된 가압류취소를 이유로 국가배상을 구할 수 있는 것은 아니다.'
    }
]


function News() {

    return (
        
        <ul class="MethodWrapper">
            {lawthmic_news.slice(0).reverse().map(news => (
                <li>{news.kind} {news.date}, <i>{news.tag}</i> <p>{news.content}</p></li>
            ))}
        </ul>
    );
}

export default News;