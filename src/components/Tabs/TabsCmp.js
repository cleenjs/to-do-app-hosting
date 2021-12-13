import React, { useState } from "react";

//Components
import AllItems from "../ToDo/Items/AllItem";
import DeletedItems from "../ToDo/Items/DeletedItem";
import DoneItems from "../ToDo/Items/DoneItem";
import Main from "../shared/Main";
import AddToDo from "../ToDo/AddToDo";
import Header from "../Header/Header";
import Description from "../Description/Description";
import todoList from "../../data/data.json";

// Custom Hooks
import changeStatus from "../../hooks/changeStatus";
import getList from "../../hooks/getList";

//Packages
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// CSS
import "./TabsCmp.css";

const TabsCmp = () => {
	const [data, setData] = useState(todoList);

	const addToDoHandler = toDo => {
		setData(prevUsersList => {
			return [
				...prevUsersList,
				{ title: toDo, id: Math.random().toFixed(3), status: 0 },
			];
		});
	};

	const setToDeleted = id => {
		const result = changeStatus(data, id, 2);
		setData(result);
	};

	const setToDone = id => {
		const result = changeStatus(data, id, 1);
		setData(result);
	};

	const setBackToAll = id => {
		const result = changeStatus(data, id, 0);
		setData(result);
	};

	const filteredNew = getList(data, 0);
	const filteredDone = getList(data, 1);
	const filteredDeleted = getList(data, 2);

	return (
		<Main>
			<Header />
			<Description />
			<AddToDo onAddToDo={addToDoHandler} />

			<Tabs>
				<TabList>
					<Tab>All ({filteredNew.length})</Tab>
					<Tab>Done ({filteredDone.length})</Tab>
					<Tab>Deleted ({filteredDeleted.length})</Tab>
				</TabList>

				<TabPanel>
					<AllItems
						setToDone={setToDone}
						setToDeleted={setToDeleted}
						list={filteredNew}
					/>
				</TabPanel>
				<TabPanel>
					<DoneItems setToAll={setBackToAll} list={filteredDone} />
				</TabPanel>
				<TabPanel>
					<DeletedItems list={filteredDeleted} />
				</TabPanel>
			</Tabs>
		</Main>
	);
};

export default TabsCmp;
