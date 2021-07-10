import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducers/index';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist'


const configureStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}

export const store = configureStore()
export const persistor = persistStore(store)

