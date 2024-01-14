import * as actions from "./typesActions";

const addBug = (id = 0, description, resolved) => {
  return {
    type: actions.BUG_ADDED,
    payload: {
      id: id,
      description: description,
      resolved: resolved,
    },
  };
};

const bugResolved = (id, resolved) => {
  console.log("from action:", resolved);
  return {
    type: actions.BUG_RESOLVED,
    payload: {
      id: id,
      resolved: resolved,
    },
  };
};
export { addBug, bugResolved };
