import React from 'react';
import styled, { keyframes } from 'styled-components';

const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;
	transition: opacity 0.3s ease-in-out;
	z-index: 100;
	
	opacity: ${props => props.active ? "1" : "0"};
	pointer-events: ${props => props.active ? "all" : "none"};
	`;

const rotate = keyframes`
	from { transform: rotate(0deg); }
	to {  transform: rotate(360deg); }
`;
const Spinner = styled.div`
	width: 50px;
	height: 50px;
    border: 4px solid #FAFAFA;
    border-radius: 25px;
    border-top: none;
    border-bottom: none;
    animation: ${rotate} 2s linear infinite;
`;
const Loading = ({loading}) => (
    <Background active={loading}>
        <Spinner/>
    </Background>
);

export default Loading;
