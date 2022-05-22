import { createContext, useContext, useState } from "react";

const Context = createContext();

export function PriceProvider({ children }) {
	const [price, setprice] = useState();
	return (
		<Context.Provider value={[price, setprice]}>{children}</Context.Provider>
	);
}

export function usePriceContext() {
	return useContext(Context);
}
