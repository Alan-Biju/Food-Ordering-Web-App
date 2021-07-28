import React, { useState } from 'react';
import styled from 'styled-components';
import { FaStar, FaHeart, FaRegHeart } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';
import { useData } from '../../Context/DataProvider';
const Card = ({ Data }) => {
	const { setCartItems, cartItems } = useData();
	const [isLike, setIsLike] = useState(false);
	const LikeChange = () => {
		setIsLike(!isLike);
	};
	const isHere = cartItems.some((data) => {
		return data.id === Data.id;
	});
	const cartHandler = () => {
		if (!isHere) {
			setCartItems((prev) => [...prev, Data]);
		}
	};
	
	return (
		<CardBox
			Poster={Data.Image}
			onClick={ cartHandler }
			Check={isHere}>
			<CardHeader>
				<Rating>
					<FaStar />
					<span>{Data.rating}</span>
				</Rating>
				<Heart>
					{isLike ? (
						<FaHeart onClick={LikeChange} />
					) : (
						<FaRegHeart onClick={LikeChange} />
					)}
				</Heart>
			</CardHeader>

			<CardFooter>
				<NameTag>
					<Name>{Data.Name}</Name>
					<Quantities>{Data.Quantities}</Quantities>
				</NameTag>
				<Rate>
					{`$${Data.Amount}`}
					{isHere && <Checked />}
				</Rate>
			</CardFooter>
		</CardBox>
	);
};

export default Card;
const CardBox = styled.div`
	cursor: pointer;
	width: 200px;
	height: 200px;
	border-radius: 10px;
	padding: 5px;
	background-image: url(${(prop) => prop.Poster});
	filter: grayscale(${({ Check }) => Check ?0.7 : 0});
	background-position: center;
	background-size: 140px;
	background-repeat: no-repeat;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
	background-color: #fdfcfd;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	border: 2px solid ${({ Check }) => (Check ? '#71EFA3' : '#ffffff')};
`;
const Checked = styled(MdDone)`
	color: #5dc486;
	font-size: 1.2rem;
`;
const CardHeader = styled.div`
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const Rating = styled.div`
	width: 40px;
	height: 25px;
	font-size: 0.6rem;
	color: yellow;
	background-color: #333333;
	border-radius: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	span {
		color: #f6f6f6;
		padding-left: 3px;
	}
`;
const Heart = styled.div`
	color: #f8485e;
	background-color: #ffffff;
	border-radius: 50%;
	width: 30px;
	height: 30px;
	display: grid;
	place-items: center;
`;
const CardFooter = styled.div`
	width: 100%;
	padding-left: 10px;
`;
const NameTag = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
`;
const Name = styled.h6`
	font-size: 0.9rem;
	font-weight: 400;
	text-transform: capitalize;
`;
const Quantities = styled.div`
	font-family: 'Raleway', sans-serif;
	color: #969696;
	font-size: 0.6rem;
	background-color: #ffffff;
	border-radius: 10px;
	width: 45px;
	display: grid;
	place-items: center;
	font-weight: 600;
	margin-left: 5px;
`;
const Rate = styled.h3`
	font-size: 0.9rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
