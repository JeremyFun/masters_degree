import React, {useEffect} from "react"
import { BackTop } from 'antd';
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

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

    const history = useHistory()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo, loading, error} = userLogin

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        }
    }, [history, userInfo])

    return (
        <div style={{overflow: "scroll", height: "80vh"}}>
            <iframe
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQtbQloNmibK_hmSL5dLpjhxTMaBWswkiQ34jZDshjViMuH7Q8sgzYHXpgh0R7bKw/pubhtml"
                className="iframe"/>
        </div>
    )
}

export default TableInstitute
