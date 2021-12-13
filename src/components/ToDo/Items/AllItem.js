import React from "react";
import { BiCircle } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import "../ToDoItems.css";
const ToDoList = ({ list, setToDeleted, setToDone }) => {
	const deleteHandler = id => setToDeleted(id);
	const setDone = id => setToDone(id);

	return (
		<>
			{list.length >= 1 ? (
				<ul className="task_list">
					{list.map(ls => (
						<li key={ls.id} className="task_list_item">
							<BiCircle className="circle" onClick={() => setDone(ls.id)} />
							<input type="checkbox" className="sr_only" />
							<p className="task_list_text">
								{ls.id}. {ls.title}
							</p>
							<div
								className="task_list_cta"
								onClick={() => deleteHandler(ls.id)}
							>
								<p>
									<AiOutlineDelete />
									<span className="sr_only"></span>
								</p>
							</div>
						</li>
					))}
				</ul>
			) : (
				<h3>No more to do...</h3>
			)}
		</>
	);
};
export default ToDoList;
