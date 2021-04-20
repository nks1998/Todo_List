import { useState } from "react";
import "./styles.css";
import List from "./list";

export default function App() {
  const [ip, setip] = useState("");
  const [arr, setarr] = useState([]);
  const ipchang = (e) => {
    setip(e.target.value);
  };
  const updatearr = () => {
    setarr((prev) => {
      if (ip.length === 0) {
        return prev;
      } else {
        return [...prev, ip];
      }
    });
    setip("");
  };
  const deleteitem = (e) => {
    setarr((pre) => {
      return pre.filter((arr, index) => {
        return index !== e;
      });
    });
  };
  return (
    <div className="main">
      <div className="App">
        <h1 className="Heading">ToDo List</h1>
        <input className="input" type="text" value={ip} onChange={ipchang} />
        <button className="add" onClick={updatearr}>
          Add
        </button>
        <div className="ul-div">
          <ul>
            {arr.map((item, index) => {
              return (
                <List text={item} key={index} id={index} delete={deleteitem} />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
