import React from 'react';
import '../css/styles.css';


const lawthmic_info = [
        '주식회사 로드믹',
        '울산 남구 문수로409번길 23, 205동 801호',
        '대표이사 이주연',
        '사업자등록번호 716-81-00614'
]

function FootNote() {
    return (
        
        <ul class="FootText">
            {lawthmic_info.map(info => (
                <li>{info}</li>
            ))}
        </ul>
    );
}

export default FootNote;