import React from 'react';
import styled from 'styled-components';
import { BiFoodMenu, BiCart } from 'react-icons/bi';
import { useData } from '../../Context/DataProvider';
import { Link } from 'react-router-dom';
const SideBar = () => {
	const { cartItems } = useData();
	return (
		<StyledConatiner>
			<MenuItems>
				<Items to='/'>
					<BiFoodMenu /> <p>Menu</p>
				</Items>
				<Items to='/Order'>
					<BiCart /> <p>Cart</p>
					<span>{cartItems.length}</span>
				</Items>
			</MenuItems>
		</StyledConatiner>
	);
};

export default SideBar;
const StyledConatiner = styled.section`
	background-color: #71efa3;
	width: 100%;
	max-width: 220px;
	min-width: 200px;
	height: 100vh;
	transition: all 0.4s ease;
	@media (max-width: 870px) {
		max-width: 50px;
		min-width: 50px;
		min-height: 100%;
	}
`;
const MenuItems = styled.div`
	width: 100%;
	padding: 10px;
	display: flex;
	align-items: center;
	flex-direction: column;
`;
const Items = styled(Link)`
	width: 90%;
	height: 30px;
	display: flex;
	align-items: center;
	background-color: #f6f6f6;
	font-size: 0.7rem;
	padding-left: 15px;
	color: #50cb93;
	border-radius: 15px;
	cursor: pointer;
	position: relative;
	margin: 5px 0;
	text-decoration: none;
	@media (max-width: 870px) {
		width: 40px;
		height: 40px;
		padding-left: 0;
		justify-content: center;
		border-radius: 5px;
		font-size: 1rem;
	}
	&::after {
		content: '';
		position: absolute;
		top: 43%;
		right: 15px;
		background-color: #71efa3;
		width: 5px;
		height: 5px;
		border-radius: 50%;
		@media (max-width: 870px) {
			display: none;
		}
	}
	p {
		text-transform: uppercase;
		font-weight: 600;
		padding-left: 10px;
		@media (max-width: 870px) {
			display: none;
		}
	}
	span {
		position: absolute;
		right: 30px;
		width: 20px;
		height: 20px;
		color: #ffffff;
		font-weight: bold;
		display: grid;
		place-items: center;
		background-color: #38be6e;
		border-radius: 50%;
		@media (max-width: 870px) {
			width: 10px;
			height: 10px;
			right: 4px;
			top: 5px;
			font-size: 0.5rem;
		}
	}
`;
