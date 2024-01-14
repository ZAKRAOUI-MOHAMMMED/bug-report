import * as actions from "./typesActions";
// import * as actionsFun from "./Action";
const reducer = (state = { bugs: [] }, action) => {
  console.log("*********************new action************************");
  switch (action.type) {
    case actions.BUG_ADDED:
      return {
        ...state,

        bugs: [
          ...state.bugs,
          {
            id: action.payload.id,
            description: action.payload.description,
            resolved: action.payload.resolved,
          },
        ],
      };
    case actions.BUG_RESOLVED:
      const resolved =
        action.payload.resolved === "resolvedYes"
          ? "resolvedNo"
          : "resolvedYes";
      console.log("from reducer: ", action);
      const newBug = state.bugs.map((bug) => {
        if (bug.id === action.payload.id) {
          return {
            ...bug,
            resolved: resolved,
          };
        }
        console.log("from find bug: ", bug);
        return bug;
      });
      console.log("from find state: ", state);

      return {
        ...state,
        bugs: newBug,
      };
    default:
      return state;
  }
};
export default reducer;
