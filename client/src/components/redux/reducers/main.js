import { getProductsreducers } from "./Productsreducers";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  getProductsdata: getProductsreducers,
});

export default rootReducers;
