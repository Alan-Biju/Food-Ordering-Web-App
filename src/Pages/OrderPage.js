import React from 'react';
import styled from 'styled-components';
import MyOrder from '../Components/Home/MyOrder';

const OrderPage = () => {
	return (
		<StyledContainer>
			<MyOrder isMobile={'block'}/>
		</StyledContainer>
	);
};

export default OrderPage;
const StyledContainer = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	place-items: center;
`;
