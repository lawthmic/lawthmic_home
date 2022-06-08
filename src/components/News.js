import React from 'react';

const lawthmic_news = [
    {
        id: 1,
        kind: '[민사집행]',
        date: '대법원 2022.3.17. 선고 2019다226975 판결',
        tag: '가압류취소·집행정지·국가배상',
        content: '가압류취소에 대한 즉시항고가 받아들여져 잘못된 가압류취소를 취소하고 다시 가압류등기가 촉탁되었는데, 채권자가 따로 집행정지를 신청하지 않아 그 사이 부동산이 제3자에게 이전됨으로써 위 촉탁이 각하되었더라도 처음의 잘못된 가압류취소를 이유로 국가배상을 구할 수는 없다.'
    },
    {
        id: 2,
        kind: '[형사]',
        date: '대법원 2022.5.13. 선고 2020도15642 판결',
        tag: '명예훼손·이혼',
        content: '"마을제사에 남편과 이혼한 사람이 참석해서 안좋다" 또는 "이혼했다는 사람이 왜 마을제사에 왔는지 모르겠다"고 말한 것만으로는, 마을제사 참여에 관한 의견표현에 지나지 않아 명예훼손죄에서 요구하는 사실의 적시에 해당하지 않는다.'
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