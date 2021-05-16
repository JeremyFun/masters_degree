import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";

import {
    userDeleteReducer,
    userDetailsReducer,
    userLoginReducer,
    userRegisterReducer,
    usersListReducer,
    userUpdateProfileReducer,
    userUpdateReducer
} from "./redux/reducers/userReducers";

const reducers = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    usersList: usersListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null



const initialState = {
    userLogin: {userInfo: userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
