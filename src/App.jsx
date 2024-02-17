import React, { useState } from "react";
import useLocalStorage from "use-local-storage";

import "./App.css";
import { Toggle } from "./components/Toggle/Toggle";
import Heading from "./components/Heading/Heading";
import Item from "./components/Item/Item";

let data = [
  // {
  //   id: 1,
  //   title: "I am done with react",
  // },
  // {
  //   id: 2,
  //   title: "I know about react what your question?",
  // },
  // {
  //   id: 3,
  //   title: "got it",
  // },
];

export const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  const [list, setList] = useState(data);
  const [newElementTitle, setNewElementTitle] = useState("");

  const addEleIntoList = () => {
    // Find the maximum id in the current list
    const maxId = Math.max(...list.map(item => item.id));

    // Calculate the next id
    const nextId = maxId + 1;

    // Create the new element with the calculated id
    let newEle = {
      id: nextId,
      title: newElementTitle,
    };

    // Update the list state
    setList([...list, newEle]);

    // Clear the input field
    setNewElementTitle("");
  };

  const deleteEle = (x) => {
    setList(list.filter((e) => e.id !== x));
  };

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />

      <div className="main">
        <h1 className="title">Todo List</h1>
        <Heading title={"My First App With Hadi"} para={"This React app utilizes functional components and React hooks, with darkMode and todos state variables managed using the useState hook, facilitating dynamic dark mode toggling and a todo list."} />
        <input
          className="input_field"
          type="text"
          placeholder="Enter title"
          value={newElementTitle}
          onChange={(e) => setNewElementTitle(e.target.value)}
        />
        <button className="add_button" onClick={addEleIntoList}>
          Add
        </button>

        {list.map((x, index) => (
          <React.Fragment key={index}>
            <Item title={x.title} removeEle={() => deleteEle(x.id)} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
