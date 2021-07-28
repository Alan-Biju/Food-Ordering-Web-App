import React from 'react';
import styled from 'styled-components';
import Item from '../Components/CheckOut/Item';
import { useData } from '../Context/DataProvider';

const CheckOut = () => {
    const { cartItems } = useData();
     let Amount = 0;
			cartItems.forEach((Data) => {
				Amount = Amount + Number(Data.Amount * Data.qty);
			});
	return (
		<StyledConatiner>
			<CartBox>
				<CartHeader>
					<h3>My Order</h3>
					<button>Confirm</button>
				</CartHeader>
				<Items>
					{cartItems.map((item) => {
						return <Item key={item.id} Data={item} />;
					})}
				</Items>
				<CartHeader>
					<h3>Total</h3>
					<h2>{Amount.toFixed(2)}$</h2>
				</CartHeader>
			</CartBox>
		</StyledConatiner>
	);
};

export default CheckOut;
const StyledConatiner = styled.div`
	width: 100%;
	min-height: 100vh;
	display: grid;
	place-items: center;
`;
const CartBox = styled.div`
	width: 100%;
	max-width: 700px;
	min-width: 300px;
	height: 500px;
	display: flex;
	align-items: center;
	flex-direction: column;
    justify-content: space-around;
	padding: 10px;
    
	@media (max-width: 550px) {
		min-height: 100vh;
	}
`;
const CartHeader = styled.div`
	padding: 10px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #ffffff;
	button {
		width: 150px;
		color: white;
		font-weight: 700;
		background-color: #71efa3;
		height: 30px;
		border-radius: 5px;
		outline: none;
		border: none;
		letter-spacing: 1px;
		text-decoration: none;
	}
`;
const Items = styled.div`
	width: 100%;
	max-height: 400px;
	margin-top: 10px;
	overflow-x: hidden;
	overflow-y: scroll;
	@media (max-width: 550px) {
		max-height: 100%;
	}
`;
