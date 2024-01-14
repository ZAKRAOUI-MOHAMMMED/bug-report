import React, { useEffect, useState } from "react";
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
    showList();
  }, [bugs]);

  const handleSubmit = (event) => {
    event.preventDefault();
    id >= 0 &&
      description !== "" &&
      dispatch(addBug(id, description, resolved));
  };

  const handleResolved = (e) => {
    setResolved(e.target.value);
  };

  const showList = () => {
    const x = bugs.map((element) => {
      //   console.log(element);
      return (
        <tr>
          <td>{element.id}</td>
          <td>{element.description}</td>
          <td
            style={{
              backgroundColor:
                element.resolved === "resolvedYes" ? "green" : "red",
            }}
          >
            {element.resolved === "resolvedYes" ? "resolved" : "not resolved"}
          </td>
          <td>
            <button
              onClick={() => {
                dispatch(bugResolved(element.id, element.resolved));
              }}
              style={{
                width: "100%",
                border: 0,
                backgroundColor:
                  element.resolved === "resolvedYes" ? "orange" : "cyan",
                fontSize: 25,
              }}
            >
              {element.resolved === "resolvedYes"
                ? "Mark as not resolved"
                : "Mark as resolved"}
            </button>
          </td>
        </tr>
      );
    });
    return x;
  };

  return (
    <div
      className="container"
      style={{
        fontSize: 25,
      }}
    >
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="id">id: </label>
        <input
          type="number"
          name="id"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br />
        <label htmlFor="description">description: </label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <label htmlFor="resolved">
          resolved:
          <input
            type="radio"
            name="resolved"
            id="resolvedYes"
            value="resolvedYes"
            onChange={handleResolved}
          />
          <label htmlFor="resolvedYes">yes</label>
          <input
            type="radio"
            name="resolved"
            id="resolvedNo"
            value="resolvedNo"
            onChange={handleResolved}
          />
          <label htmlFor="resolvedNo">no</label>
        </label>
        <br />
        <input type="submit" value="submit" />
      </form>
      <h3>Bug list</h3>
      <table border={1}>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Desctiption</th>
            <th>Resolved</th>
          </tr>
          {showList()}
        </tbody>
      </table>
    </div>
  );
}
