import { useEffect, useRef } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { selectCartItems } from "./redux/cart/selectors";
import { useAppSelector } from "./redux/hooks";

function App() {
	const cartItems = useAppSelector(selectCartItems);
	const isMounted = useRef<boolean>(false);

	useEffect(() => {
		if (isMounted.current) {
			localStorage.setItem("cart", JSON.stringify(cartItems));
		}

		isMounted.current = true;
	}, [cartItems]);

	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</div>
	);
}

export default App;
