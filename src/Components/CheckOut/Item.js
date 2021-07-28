import React from 'react';
import styled from 'styled-components';

const Item = ({ Data }) => {
   
	return (
		<ItemBox>
			<DetailsBox>
				<Image>
					<img src={Data.Image} alt='Food' />
				</Image>
				<Details>
					<h3>{Data.Name}</h3>
					<p>{Data.Details}</p>
				</Details>
			</DetailsBox>
			<Rate>
				<Qty>{Data.qty}X</Qty>
				<Amount>{Data.Amount}$</Amount>
			</Rate>
		</ItemBox>
	);
};

export default Item;
const ItemBox = styled.div`
	height: 90px;
	width: 100%;
	display: flex;
	align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    @media(max-width:550px){
        min-height: 150px;
    }
`;
const DetailsBox = styled.div`
	display: flex;
	align-items: center;
	width: 80%;
`;
const Image = styled.div`
	max-width: 100px;
	min-width: 100px;
	height: 100%;
	img {
		width: 100%;
		object-fit: contain;
	}
`;
const Details = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	height: 100%;
	h3 {
		font-size: 1rem;
		margin-bottom: 5px;
		@media (max-width: 550px) {
			font-size: 0.8rem;
		}
	}
	p {
		font-size: 0.6rem;
		letter-spacing: 1px;
		font-weight: 600;
		color: #3333339b;
		@media (max-width: 550px) {
			font-size: 0.5rem;
		}
	}
`;
const Rate = styled.div`
	width: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    h1{
        font-size: 1rem;
    }
`;
const Qty = styled.h1``;
const Amount = styled.h1``;
