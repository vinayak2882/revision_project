import { legacy_createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import productReducer from './Reducer'
const rootReducer = combineReducers({ecommerceData: productReducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTSION_COMPOSE__ || compose;

export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);


