import { combineReducers } from 'redux';
import itemData from './itemReducer';
import userReducer from './userReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedUserReducer = persistReducer(persistConfig, userReducer)

export const rootReducer = combineReducers({
    itemData,
    user:persistedUserReducer
});
