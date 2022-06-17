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
        content: '채무불이행으로 인한 전보배상에 관하여 손해배상액을 예정한 경우 채권자가 채무불이행을 이유로 계약을 해제하거나 해지하더라도 원칙적으로 손해배상액의 예정은 실효되지 않는다. 예외적으로 손해배상액의 예정이 계약의 유지를 전제로 하고 있는 경우 계약의 해제·해지와 함께 실효될 수 있을 뿐이다.'
    },
    {
        id: 6,
        kind: '[민법]',
        date: '대법원 2022.4.14. 선고 2020다240021 판결',
        tag: '이혼·감독의무·미성년자·비양육친',
        content: '이혼으로 인하여 부모 중 1명이 친권자 및 양육자로 지정된 경우 그렇지 않은 부모(비양육친)가 미성년자의 부모라는 사정만으로는 원칙적으로 미성년 자녀에 대한 보호·감독의무를 부담하지 않는다.'
    },
    {
        id: 7,
        kind: '[민법]',
        date: '대법원 2022.4.14. 선고 2020다254228,254235 판결',
        tag: '지상물매수청구권·임대인',
        content: '국유 토지의 관리를 위탁받은 회사와 사용·수익계약을 체결하여 그 토지 위에 건물을 신축했더라도 계약기간 만료 후 토지 소유자가 아닌 위 회사를 상대로 지상물매수청구권을 행사할 수는 없다.'
    },
    {
        id: 8,
        kind: '[민법]',
        date: '대법원 2022.4.14. 선고 2020다268760 판결',
        tag: '지연손해금·시효중단·이행기의 정함이 없는 채무',
        content: '금전채무의 지연손해금채무는 이행기의 정함이 없는 채무이므로 판결이 확정된 채권자가 시효중단을 위한 신소를 제기하면서 확정판결에 따른 원금과 함께 원금에 대한 확정 지연손해금 및 이에 대한 지연손해금을 청구하는 경우, 채무자는 확정 지연손해금에 대하여도 이행청구를 받은 다음 날부터 지연손해금을 별도로 지급해야 한다.'
    },
    {
        id: 9,
        kind: '[민사집행]',
        date: '대법원 2022.6.9. 선고 2021다270494 판결',
        tag: '지역주택조합·분담금·압류',
        content: '지역주택조합이 조합원의 분담금을 신탁회사 명의 계좌로만 납부하도록 하여 그 변제 수령권한이 없는 경우 조합원은 조합의 분담금 직접 지급 청구를 거절할 수 있음은 물론 분담금 채권을 압류한 조합의 채권자에 대하여도 대항할 수 있다.'
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