import React from 'react';

import { Link } from 'react-router-dom';

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
              <Link to="/aboutus">Quem somos</Link>
              <Link id="current" to="/contact">
                Contate-nos
              </Link>
            </div>
          </Nav>
          <Slogan>
            <h1>Alguma ideia? Compartilhe conosco!</h1>
            <p>Nos envie um e-mail ou ligue.</p>
            <h1>Contatos:</h1>
            <p>
              <span> nexo.unifbv@oaehooo.br</span>{' '}
            </p>
            <p>
              <span>+99 (66) 4002-8922</span>{' '}
            </p>
          </Slogan>
        </Content>
      </Background>
    </Container>
  );
};

export default Home;
