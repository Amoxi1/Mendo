import { createStore } from "redux";

import TEST from "../reducers";
export default () => {
  const store = createStore(
    TEST,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
