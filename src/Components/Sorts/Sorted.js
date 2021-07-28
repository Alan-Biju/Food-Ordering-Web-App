import React, { useState } from 'react';
import styled from 'styled-components';
import { DropItem } from '../../Data/DropDownItem';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
const Sorted = () => {
	const [isDrop, setIsDrop] = useState(false);
	const [value, setValue] = useState('Select');
	const SetValue = (text) => {
		setValue(text);
		setIsDrop(false);
	};
	return (
		<Selection>
			<p>Sorted By:</p>
			<Choice onClick={() => setIsDrop(!isDrop)}>
				<p>{value}</p>{' '}
				<span>{isDrop ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
			</Choice>
			{isDrop && (
				<DropItems>
					{DropItem.map((Data) => {
						return (
							<Item key={Data.id} onClick={() => SetValue(Data.value)}>
								{Data.ItemName}
							</Item>
						);
					})}
				</DropItems>
			)}
		</Selection>
	);
};

export default Sorted;
export const Selection = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: flex-end;
	position: relative;
	p {
		color: #a7a7a7;
	}
`;
export const Choice = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 2px;
	width: 150px;
	height: 25px;
	background-color: #ffffff;
	border-radius: 5px;
	margin-left: 5px;
	font-size: 0.8rem;

	p {
		color: #252525;
	}
`;
export const DropItems = styled.div`
	position: absolute;
	top: 25px;
	right: 10px;
	width: 150px;
	background-color: #fcfcfc;
	height: 100px;
	color: #333333;
	padding: 5px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	font-size: 0.8rem;
	cursor: pointer;
	&::after {
		content: '';
		width: 10px;
		height: 10px;
		background-color: inherit;
		position: absolute;
		top: -3px;
		right: 2px;
		transform: rotate(45deg);
	}
`;
export const Item = styled.div`
	width: 100%;
	text-align: right;
background-color: #ffffff;
	padding: 5px;
	&:hover {
		background-color: #f1eded;
	}
`;
