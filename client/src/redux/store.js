import {createStore , combineReducers , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {getProductReducer , getProductDetailsReducer} from './reducers/productReducer.js';
import { cartReducer } from './reducers/cartReducer.js';

const reducer = combineReducers({
    getProducts:getProductReducer,
    getProductDetails:getProductDetailsReducer,
    cart:cartReducer,
})


const middleware = [thunk];
 
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

const currentstate = store.getState();
console.log(currentstate);
export default store;