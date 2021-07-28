import React, { createContext, useContext, useState } from 'react';
const DataContext = createContext();
export const useData = () => {
	return useContext(DataContext);
};

const DataProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	//---------------------------------
	const value = {
		setCartItems,
		cartItems,
	};
	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
