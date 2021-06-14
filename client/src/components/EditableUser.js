import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, getAllUsers} from "../redux/actions/userActions";
import {Button, Table} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const UsersListScreen = ({ history }) => {
    const dispatch = useDispatch()

    const usersList = useSelector(state => state.usersList)
    const { loading, users, error } = usersList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userDelete = useSelector(state => state.userDelete)
    const { success: successDelete } = userDelete

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(getAllUsers())
        } else {
            history.push('/login')
        }
    }, [dispatch, history, userInfo, successDelete])

    const deleteHandler = (id) => {
        if (window.confirm('Are you confirm'))
            dispatch(deleteUser(id))
    }
    return (
        <>
            <h2>Users</h2>
            <Table striped bordered hover responsive className="table-sm">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">ADMIN</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {users ? users.map(user => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                            <td>
                                {user.isAdmin ? <i className="fas fa-check" style={{color: 'green'}}></i>
                                    : <i className="fas fa-times" style={{color: 'red'}}></i>}
                            </td>
                            <td>
                                <NavLink to={`/admin/user/${user._id}/edit`}>
                                    <Button variant="light" className="btn-sm">
                                        <i className="fas fa-edit"></i>
                                    </Button>
                                </NavLink>
                                <Button variant="danger" className="btn-sm" onClick={() => deleteHandler(user._id)}>
                                    <i className="fas fa-trash"></i>
                                </Button>
                            </td>
                        </tr>
                    )) : ""}
                    </tbody>
            </Table>
        </>
    )
}

export default UsersListScreen
