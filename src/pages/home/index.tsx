import React from 'react';

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
              <Link id="current" to="/">
                Início
              </Link>
              <Link to="/aboutus">Quem somos</Link>
              <Link to="/contact">Contate-nos</Link>
            </div>
          </Nav>
          <Slogan>
            <h1>Unimos sua empresa a tecnologia!</h1>
            <p>
              Criamos soluções inteligentes em software para alavancar o seu
              negócio!
            </p>
            <Link to="/aboutus">
              <Button> Saiba mais!</Button>
            </Link>
          </Slogan>
        </Content>
      </Background>
    </Container>
  );
};

export default Home;
