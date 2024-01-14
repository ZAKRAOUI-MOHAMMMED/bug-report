import React, { useEffect, useState } from "react";
// import store from "./Store";
import { addBug, bugResolved } from "./Action";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const [id, setId] = useState(0);
  const [description, setDescription] = useState("");
  const [resolved, setResolved] = useState("resolved");
  const bugs = useSelector((state) => state.bugs);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(bugs);
  }, [bugs]);

  const handleAddBug = () => {
    // const resolvedV = ()=>resolved==="true"?true:false
    dispatch(addBug(id, description, resolved));
  };

  const handleResolved = (event) => {
    console.log(event.target.value);
    event.target.value === "resolved"
      ? setResolved("resolved")
      : setResolved("notResolved");
    console.log(resolved);
  };

  const handleMarkResolved = (event) => {
    console.log(event.target.value);
    console.log("from App : ", event.target.value);
    dispatch(bugResolved(event.target.id, event.target.value));
  };

  return (
    <div>
      <h1>Bugs:</h1>

      <input
        type="number"
        value={id}
        placeholder="id"
        onChange={(e) => setId(e.target.value)}
      />

      <br />

      <input
        type="text"
        value={description}
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />

      <label htmlFor="resolved">
        Resolved:
        <input
          type="radio"
          name="resolved"
          id="resolvedYes"
          value="resolved"
          checked={resolved === "resolved"}
          onChange={handleResolved}
        />
        <label htmlFor="resolvedYes">yes</label>
        <input
          type="radio"
          name="resolved"
          id="resolvedNo"
          value="notResolved"
          checked={resolved !== "notResolved"}
          onChange={handleResolved}
        />
        <label htmlFor="resolvedNo">no</label>
      </label>

      <button onClick={handleAddBug}>Add Bug</button>

      <table border={1} style={{ textAlign: "center", minWidth: 400 }}>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Resolved</th>
          </tr>

          {bugs.map((bug, index) => (
            <tr key={index}>
              <td>{bug.id}</td>
              <td>{bug.description}</td>
              <td
                style={
                  bug.resolved
                    ? { backgroundColor: "green" }
                    : { backgroundColor: "red" }
                }
              >
                {bug.resolved ? "resolved" : "not resolved"}
              </td>
              <td>
                <button
                  onClick={handleMarkResolved}
                  id={bug.id}
                  value={bug.resolved}
                >
                  {bug.resolved ? "mark as unresolved" : "mark as resolved"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
