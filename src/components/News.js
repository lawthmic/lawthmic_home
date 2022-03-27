import React from 'react';

const lawthmic_news = [
    {
        id: 6,
        name: '[학회]',
        title: '15th International Workshop on Juris-informatics(JURISIN 2021)',
        year: 'November 14-15',
        status: ''
    },
    {
        id: 5,
        name: '[정보]',
        title: 'International Association for AI and Law',
        year: '공식 유튜브 채널',
        status: 'https://www.youtube.com/channel/UC-nPeKR_Ey5EDrUAFr_4mEg'
    },
    {
        id: 4,
        name: '[저널]',
        title: 'Journal of Artificial Intelligence and Law',
        year: 'Springer',
        status: 'SCIE·SSCI·SCOPUS'
    },
    {
        id: 3,
        name: '[정보]',
        title: 'CodeX (computational law)',
        year: 'Stanford Univ.',
        status: ''
    },
    {
        id: 2,
        name: '[구독]',
        title: '프로그래밍 학습(raywenderlich)',
        year: '2021. 5',
        status: '1년간'
    },
    {
        id: 1,
        name: '[구독]',
        title: '영작문 도구(grammarly)',
        year: '2021. 9',
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