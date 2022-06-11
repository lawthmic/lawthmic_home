import React from 'react';

const lawthmic_news = [
    {
        id: 1,
        kind: '[집행]',
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
    },
    {
        id: 3,
        kind: '[행정]',
        date: '대법원 2022.5.13. 선고 2018두50147 판결',
        tag: '재산세·표준지·공시지가',
        content: '표준지의 소유자가 표준지에 관한 재산세부과처분의 취소를 구하면서 재산세 과세표준 산정의 기초가 되는 표준지공시지가의 위법성을 다투는 것은 원칙적으로 허용되지 않는다. 표준지공시지가를 다투기 위해서는 국토교통부장관에게 이의신청하거나 국토교통부장관을 상대로 공시지가결정의 취소를 구하는 행정심판이나 행정소송을 제기해야 한다.'
    },
    {
        id: 4,
        kind: '[민법]',
        date: '대법원 2022.4.14. 선고 2017다266177 판결',
        tag: '가등기담보·귀속정산·취득세',
        content: '가등기담보권자는 귀속정산 과정에서 담보목적물의 교환가치를 파악하기 위하여 쓴 감정평가비용 등을 실행비용으로서 청산금에서 공제할 수 있을 뿐, 청산의 결과로서 본등기를 마치기 위해 지출한 절차비용과 취득세 등은 스스로 부담해야 한다.'
    },
    {
        id: 5,
        kind: '[민법]',
        date: '대법원 2022.4.14. 선고 2019다292736,292743 판결',
        tag: '채무불이행·손해배상액의 예정·해제·해지·실효',
        content: '채무불이행으로 인한 전보배상에 관하여 손해배상액을 예정한 경우 채권자가 채무불이행을 이유로 계약을 해제하거나 해지하더라도 원칙적으로 손해배상액의 예정은 실효되지 않는다. 손해배상액의 예정이 계약의 유지를 전제하고 있다는 사정이 있는 경우 계약이 해제·해지되면 예외적으로 실효될 수 있다.'
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