import React, { useState } from "react";
import "./AddToDo.css";

const AddToDo = ({ onAddToDo }) => {
	const [enteredToDo, setEnteredToDo] = useState("");

	const toDoChangeHandler = event => {
		setEnteredToDo(event.target.value);
	};

	const addToDoHandler = () => {
		onAddToDo(enteredToDo);
		setEnteredToDo("");
	};

	return (
		<div className="new_task_wrapper">
			<input
				onChange={toDoChangeHandler}
				className="new_task_input"
				type="text"
				placeholder="Type a new todo item"
				value={enteredToDo}
			/>
			<button onClick={addToDoHandler} className="new_task_button">
				+ Add
			</button>
		</div>
	);
};

export default AddToDo;
