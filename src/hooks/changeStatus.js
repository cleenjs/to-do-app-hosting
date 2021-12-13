const changeStatus = (list, id, status) => {
	const elementsIndex = list.findIndex(element => element.id == id);
	let newArray = [...list];
	newArray[elementsIndex] = {
		...newArray[elementsIndex],
		status: status,
	};
	return newArray;
};

export default changeStatus;
