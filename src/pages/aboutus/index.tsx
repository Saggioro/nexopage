import React, { useCallback, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import logoImg from '../../assets/Sem Título-7.png';

import { Container, Content, Background, Nav, Slogan } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Background>
        <Content>
          <Nav>
            <img src={logoImg} alt="nexo" />
            <div>
              <Link to="/">Início</Link>
              <Link id="current" to="/aboutus">
                Quem somos
              </Link>
              <Link to="/contact">Contate-nos</Link>
            </div>
          </Nav>
          <Slogan>
            <h1>Somos entusiastas da tecnologia!</h1>
            <p>
              Estamos sempre procurando o que há de mais inovador para oferecer!
            </p>
            <Link to="/contact">
              <Button>Fale com a gente!</Button>
            </Link>
          </Slogan>
        </Content>
      </Background>
    </Container>
  );
};

export default Home;
