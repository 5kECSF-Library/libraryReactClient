import { combineReducers } from 'redux'


import authReducer from '../features/auth/auth.reducer'
import {AuthState} from "../features/auth/auth.model";

import  itemReducer from "../features/Item/item.reducer"
import {ItemModel, ItemState} from "../features/Item/itemModel";

import  genresReducer from "../features/genres/genres.reducer"
import {GenresState} from "../features/genres/genresModel";
import {UserState} from "../features/users/users.models";
import  userReducer from "../features/users/user.reducer"



const rootReducer = combineReducers({

    auth:authReducer,
    items:itemReducer,
    genres:genresReducer,
    users:userReducer

})

export interface RootS{
    items:ItemState
    auth:AuthState
    genres:GenresState
    users:UserState

}

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer