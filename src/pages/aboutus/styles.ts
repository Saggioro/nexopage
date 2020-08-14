import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import contentBg from '../../assets/contentBg.png';

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
      color: ${shade(0.2, '#f0e68c')};
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
    margin-top: 70px;
    max-width: 350px;
  }
  h1 {
    font-size: 40px;
  }
  a {
    text-decoration: none;
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
