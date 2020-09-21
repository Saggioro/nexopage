import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/Nexo.png';

import { Container, Content, Background, Nav, Slogan } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Background>
        <Content>
          <Nav>
            <img src={logoImg} height={90} alt="nexo" />
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
            <p>Nos envie um e-mail ou deixe o seu contato.</p>
            <h1>Contatos:</h1>
            <p>
              <span> nexo.unifbv@oaehooo.br</span>{' '}
            </p>
            <form action="submit" method="get">
              <h3>Deixe aqui o seu contato</h3>
              <input type="text" id="fname" name="fname" />
              <input type="text" id="lname" name="lname" />
              <button type="submit">Enviar</button>
            </form>
          </Slogan>
        </Content>
      </Background>
    </Container>
  );
};

export default Home;
