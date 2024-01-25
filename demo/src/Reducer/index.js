
import { combineReducers } from 'redux'
import CrudReducer from './CrudReducer'

const root = combineReducers({
    Crud : CrudReducer
})

export default root