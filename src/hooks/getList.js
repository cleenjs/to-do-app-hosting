const getList = (list, status) => {
	return list.filter(e => e.status == status);
};

export default getList;
