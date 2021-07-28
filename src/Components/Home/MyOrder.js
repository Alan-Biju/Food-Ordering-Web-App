import React from 'react';
import styled from 'styled-components';
import { useData } from '../../Context/DataProvider';
import Item from './Item';
import { useHistory } from 'react-router-dom';
const MyOrder = ({ isMobile }) => {
	const { cartItems, setCartItems } = useData();
	const history = useHistory();
	let Amount = 0;
	cartItems.forEach((Data) => {
		Amount = Amount + Number(Data.Amount * Data.qty);
	});
	const isAllowedHandler = () => {
		history.push('/checkOut');
	};
	return (
		<OrderHolder View={isMobile}>
			<Header>
				<h1>My Order</h1>
				<p onClick={() => setCartItems([])}>All Clear</p>
			</Header>
			<ItemsHolder>
				{cartItems && cartItems.length > 0 ? (
					cartItems.map((Data) => {
						return <Item key={Data.id} Data={Data} />;
					})
				) : (
					<Image>
						<img src='Assets/cart.svg' alt='empty' />
					</Image>
				)}
			</ItemsHolder>
			<DragAndDrop>
				<h1>Drag and Drop</h1>
			</DragAndDrop>
			<TotalHolder>
				<p>Total</p>
				<h1>${Amount.toFixed(2)}</h1>
			</TotalHolder>
			<Button
				disabled={cartItems.length > 0 ? false : true}
				onClick={isAllowedHandler}>
				Checkout
			</Button>
		</OrderHolder>
	);
};
export const OrderHolder = styled.div`
	width: 100%;
	max-width: ${({ View }) => (View === 'block' ? '500px' : '320px')};
	min-width: 230px;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
	padding-top: 70px;
	padding-bottom: 50px;
	@media (max-width: 500px) {
		display: ${({ View }) => (View === 'block' ? 'flex' : 'none')};
	}
`;
const Header = styled.div`
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	letter-spacing: 1px;
	h1 {
		font-size: 1.5rem;
	}
	p {
		font-size: 0.8rem;
		font-weight: 500;
		color: #71efa3;
		cursor: pointer;
	}
`;
const ItemsHolder = styled.div`
	max-height: 200px;
	min-height: 200px;
	width: 90%;
	overflow-y: scroll;
`;

const TotalHolder = styled.div`
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	h1 {
		font-size: 1rem;
		font-weight: 700;
	}
	p {
		font-size: 0.9rem;
		font-weight: 600;
	}
`;
const Button = styled.button`
	width: 90%;
	color: white;
	font-weight: 700;
	background-color: #71efa3;
	height: 30px;
	border-radius: 20px;
	outline: none;
	border: none;
	letter-spacing: 1px;
	text-decoration: none;
	display: grid;
	place-items: center;
	cursor: pointer;
	transition-duration: 0.5s;
	&:disabled {
		filter: grayscale(1);
	}
`;
const DragAndDrop = styled.div`
	width: 90%;
	height: 40px;
	border: 2px dotted #71efa3;
	display: grid;
	place-content: center;
	h1 {
		font-size: 0.8rem;
		color: #71efa3;
	}
`;
const Image = styled.div`
	display: grid;
	place-items: center;
	img {
		width: 130px;
		object-fit: contain;
	}
`;
export default MyOrder;
