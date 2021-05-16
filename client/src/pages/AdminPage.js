import React from "react"
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";

const AdminPage = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    return (
        <div>
            AdminPage
        </div>
    )
}

export default AdminPage
