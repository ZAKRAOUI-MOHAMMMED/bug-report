import { createStore } from "redux";
import reducer from "./Reducer";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// const x = [
//   {
//     type: "bugAdded",
//     payload: {
//       description: "bug1",
//     },
//   },
// ];
// export default x;
