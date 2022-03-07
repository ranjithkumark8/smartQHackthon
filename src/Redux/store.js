import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { dataReducer } from "./reducer";

let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(dataReducer, enhancer);
export default store;
