import React, { useState } from "react";
import "./AddToDo.css";

const AddToDo = ({ onAddToDo }) => {
  const [enteredToDo, setEnteredToDo] = useState("");
  const [disabled, setDisabled] = useState(false);

  const toDoChangeHandler = (event) => {
    setEnteredToDo(event.target.value);
  };

  const addToDoHandler = () => {
    if (enteredToDo.length < 3) {
      setDisabled(true);
    } else {
      setDisabled(false);
      onAddToDo(enteredToDo);
      setEnteredToDo("");
    }
  };

  return (
    <>
      <div className="new_task_wrapper">
        <input
          onChange={toDoChangeHandler}
          className="new_task_input"
          type="text"
          placeholder="Type a new todo item"
          value={enteredToDo}
        />
        <button onClick={addToDoHandler} className="new_task_button">
          + Add {disabled}
        </button>
      </div>
      {disabled && (
        <p className="error">Input value must be at last 3 character!</p>
      )}
    </>
  );
};

export default AddToDo;
