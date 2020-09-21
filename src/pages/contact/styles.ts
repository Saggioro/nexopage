import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import contentBg from '../../assets/contentBg.png';

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
export const Container = styled.div`
  height: 100vh;
  min-width: 900px;
  padding: 3%;
  display: flex;
`;

export const Content = styled.div`
  padding: 30px 60px;
  display: flex;
  height: 100%;
  flex-direction: column;

  align-items: flex-start;

  /* ocupado todo o espaço possível*/
`;

export const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  a {
    & + a {
      margin-left: 30px;
    }
    border: none;
    background: none;
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }
  #current {
    color: #f0e68c;
    &:hover {
      color: ${shade(0.2, '#F0E68C')};
    }
  }
`;
const appearFromLeft = keyframes`
    from{
        opacity: 0;
        transform: translateX(-50px);
    }
    to{
        opacity: 1;
        transform: translateX(0);
    }
`;

export const Slogan = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${appearFromLeft} 1s;

  p {
    margin-top: 20px;
    max-width: 350px;
  }
  h1 {
    margin-top: 20px;
    font-size: 40px;
  }
  a {
    text-decoration: none;
  }
  span {
    color: #f0e68c;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 300px;

    h3 {
      margin-top: 15px;
    }

    input {
      margin-top: 10px;
      height: 36px;
      border-radius: 10px;
      border: 0;
      padding: 0 10px;
      color: #fff;
      width: 300px;
      margin-top: 4px;
      font-size: 20px;

      -webkit-box-shadow: -7px 9px 21px -5px rgba(0, 0, 0, 0.91);
      -moz-box-shadow: -7px 9px 21px -5px rgba(0, 0, 0, 0.91);
      box-shadow: -7px 9px 21px -5px rgba(0, 0, 0, 0.91);
    }

    button {
      background: linear-gradient(to bottom right, indigo, purple, blue);
      height: 36px;
      border-radius: 10px;
      border: 0;
      padding: 0 10px;
      color: #fff;
      width: 300px;
      margin-top: 4px;
      font-size: 20px;
      background-size: 200% 200%;

      &:hover {
        animation: ${hoverColor} 2s;
      }

      -webkit-box-shadow: -7px 9px 21px -5px rgba(0, 0, 0, 0.91);
      -moz-box-shadow: -7px 9px 21px -5px rgba(0, 0, 0, 0.91);
      box-shadow: -7px 9px 21px -5px rgba(0, 0, 0, 0.91);
    }
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: url(${contentBg}) no-repeat;
  background-size: cover;

  border-radius: 10px;
  -webkit-box-shadow: -7px 9px 21px -5px rgba(0, 0, 0, 0.91);
  -moz-box-shadow: -7px 9px 21px -5px rgba(0, 0, 0, 0.91);
  box-shadow: -7px 9px 21px -5px rgba(0, 0, 0, 0.91);
`;
