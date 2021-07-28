import React from 'react';
import styled from 'styled-components';
import CardsSection from '../Components/Home/CardsSection';
import MyOrder from '../Components/Home/MyOrder';

const Home = () => {
	return (
		<HomeConatiner>
			<CardsSection />
			<MyOrder />
		</HomeConatiner>
	);
};

export default Home;
const HomeConatiner = styled.main`
	width: 100%;
	height: 100vh;
	display: flex;
	overflow: hidden;
`;
