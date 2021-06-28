import React from 'react';


function UnilateralCrime() {
    return (
        <div>

            <table>
            <tr>
                <th></th>
                <th>2019년</th>
                <th>2018년</th>
                <th>2017년</th>
            </tr>
            <tr>
                <td>전체범죄 건수</td>
                <td>1,342,854</td>
                <td>1,328,609</td>
                <td>1,413,717</td>
            </tr>
            <tr>
                <td>단독범죄 건수</td>
                <td>1,220,325</td>
                <td>1,206,049</td>
                <td>1,284,499</td>
            </tr>
            <tr>
                <td>단독범죄 비율(%)</td>
                <td>90.8</td>
                <td>90.8</td>
                <td>90.9</td>
            </tr>
 
            </table>

            <h6>출처: 경찰청(경찰청범죄통계)</h6>

        </div>
    );
    
}

export default UnilateralCrime;