import React from "react"
import { BackTop } from 'antd';

const TableInstitute = () => {
    const style = {
        height: 40,
        width: 40,
        lineHeight: '40px',
        borderRadius: 4,
        backgroundColor: '#1088e9',
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
    };
    return (
        <div style={{overflow: "scroll", height: "80vh"}}>
            <iframe
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQtbQloNmibK_hmSL5dLpjhxTMaBWswkiQ34jZDshjViMuH7Q8sgzYHXpgh0R7bKw/pubhtml"
                className="iframe"/>
        </div>
    )
}

export default TableInstitute
