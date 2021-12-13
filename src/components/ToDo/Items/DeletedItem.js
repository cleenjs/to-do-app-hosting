import React from "react";
import { BiCircle } from "react-icons/bi";
import "../ToDoItems.css";

const DeletedItem = ({ list }) => {
	return (
		<>
			{list.length >= 1 ? (
				<ul className="task_list">
					{list.map(ls => (
						<li key={ls.id} className="deleted_task_list_item">
							<BiCircle />
							<input type="checkbox" className="sr_only" />
							<p className="task_list_text">
								{ls.id}. {ls.title}
							</p>
						</li>
					))}
				</ul>
			) : (
				<h3>Deleted list is empty...</h3>
			)}
		</>
	);
};
export default DeletedItem;
