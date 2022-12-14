export const getProducts = async () => {
	const res = await fetch(process.env.REACT_APP_API_BASE_URL + "/products");
	console.log("raw response", res);
	const data = await res.json();
	console.log("clear response", data);
	return data;
};

export const getProductsByCategory = async (searchText) => {
	console.log("q:", searchText);
	const res = await fetch(
		process.env.REACT_APP_API_BASE_URL + "/products/category/" + searchText
	);
	console.log("raw response", res);
	const data = await res.json();
	console.log("clear response", data);
	return data;
};
