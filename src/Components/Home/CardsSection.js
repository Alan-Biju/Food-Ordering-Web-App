import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { FoodItems } from '../../Data/FoodItems';
import Sorted from '../Sorts/Sorted';
const CardsSection = () => {
	return (
		<StyledContainer>
			<SortedBox>
				<Sorted />
			</SortedBox>
			<CardsSectionConatiner>
				{FoodItems.length > 0 ? (
					FoodItems.map((Item) => {
						return <Card key={Item.id} Data={Item} />;
					})
				) : (
					<Image>
						<img src='Assets/ItemEmpty.svg' alt='Out of Food' />
					</Image>
				)}
			</CardsSectionConatiner>
		</StyledContainer>
	);
};

export default CardsSection;
const StyledContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;
const CardsSectionConatiner = styled.section`
	height: 100vh;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
	grid-gap: 10px;
	justify-content: center;
	padding: 10px;
	place-items: center;
	overflow-x: hidden;
	overflow-y: scroll;
`;
const SortedBox = styled.div`
	position: relative;
	width: 100%;
	height: 100px;
	display: flex;
	align-items: center;
	z-index: 5;
`;

const Image = styled.div`
	img {
		object-fit: contain;
		width: 250px;
	}
`;
