import styled, { keyframes } from 'styled-components';
import { transitions } from 'polished';

const hoverColor = keyframes`
    0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export const Container = styled.button`
  background: linear-gradient(to bottom right, indigo, purple, blue);
  height: 52px;
  border-radius: 40px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 300px;
  margin-top: 50px;
  font-size: 20px;
  background-size: 200% 200%;

  &:hover {
    animation: ${hoverColor} 2s;
  }

  -webkit-box-shadow: -7px 9px 21px -5px rgba(0, 0, 0, 0.91);
  -moz-box-shadow: -7px 9px 21px -5px rgba(0, 0, 0, 0.91);
  box-shadow: -7px 9px 21px -5px rgba(0, 0, 0, 0.91);
`;
