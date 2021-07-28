import React, {  useState } from 'react';
import styled from 'styled-components';
import { useData } from '../../Context/DataProvider';

const Item = ({ Data }) => {
	const [isCount, setIsCount] = useState(1);
	const { setCartItems, cartItems } = useData();
	const exist = cartItems.find((x) => x.id === Data.id);
	const removeCartItems = () => {
		const NewItems = cartItems.filter((Item) => {
			return Item.id !== Data.id;
		});
		setCartItems(NewItems);
	};
	const addHandler = () => {
		 setIsCount((prev) => prev + 1);
		setCartItems(
			cartItems.map((x) =>
				x.id === Data.id ? { ...exist, qty: exist.qty + 1 } : x,
			),
		);
	};
	const removeHandler = () => {
		isCount > 1 && setIsCount((prev) => prev - 1);
		isCount > 1 &&
			 setCartItems(
				cartItems.map((x) =>
					x.id === Data.id ? { ...exist, qty: exist.qty - 1 } : x,
				),
			);
	};
	return (
		<Items>
			<img src={Data.Image} alt='Foods' />
			<h1>{Data.Name}</h1>
			<Options>
				<h1 onClick={removeHandler}>-</h1>
				<h1>{isCount < 0 ? '0' : isCount}</h1>
				<h1 onClick={addHandler}>+</h1>
			</Options>
			<p>${(Data.Amount * Data.qty).toFixed(2)}</p>
			<p onClick={removeCartItems}>X</p>
		</Items>
	);
};
const Items = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 50px;
	border-radius: 10px;
	margin: 10px auto;
	background: #ffffff;
	img {
		width: 30px;
		height: 30px;
	}
	h1 {
		font-size: 0.6rem;
		text-transform: capitalize;
		width: 110px;
	}
	p {
		font-weight: 600;
		font-size: 0.7rem;
		cursor: pointer;
	}
`;
const Options = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 45px;
	height: 20px;
	border: #71efa3 solid 1px;
	border-radius: 20px;
	padding: 5px;
	h1 {
		font-weight: 600;
		cursor: pointer;
	}
`;
export default Item;
