import React from 'react';
import { Main, Aside, Footer } from './styles';
import { Global } from '../../styles/global';
import { Menu, Slide, CardOffers } from '../../components';

import CardOne from '../../assets/card_01.jpg';
import CardTwo from '../../assets/card_02.jpg';
import CardTree from '../../assets/card_03.jpg';
import Subway from '../../assets/subway.jpg';

export default function Home() {

  const handleDelivery = () => { };

  const handleOffers = () => { };

  const handleNetWork = () => { };

  return (
    <Main>
      <Global />
      <Menu />
      <div className="alert">
        <a href="#">Como o Subway está reagindo ao Coronavírus e cuidando da sua saúde nos restaurantes.</a>
      </div>
      <Slide />
      <Aside>
        <section className="offers">
          <CardOffers
            image={CardOne}
            title="Delivery"
            description="Bateu aquela fome? Peça pelo Delivery"
            onClick={handleDelivery}
          />
          <CardOffers
            image={CardTwo}
            title="Promoções"
            description="Conheça nossas promoções"
            onClick={handleOffers}
          />
          <CardOffers
            image={CardTree}
            title="Redes Sociais"
            description="Quer novidades e as melhores promoções? Siga a gente nas redes sociais"
            onClick={handleNetWork}
          />
        </section>
        <section className="franchises">
          <div id="logo">
            <img src={Subway} alt="Subway logo" />
          </div>
          <div>
            <h3>SEJA DONO DE UMA FRANQUIA</h3>
            <h5>INSCREVA-SE HOJE</h5>
            <br />
            <p>Junte-se à equipe vendedora e assuma o controle de seu futuro com os restaurantes SUBWAY </p>
            <br />
            <ul>
              <li><a href="#">Tudo sobre franquia</a></li>
              <li><a href="#">Envie localizações ótimas</a></li>
              <li><a href="#">Oportunidades no mundo todo</a></li>
            </ul>
            <br />
            <button>Candidatar-se a proprietário</button>
          </div>
        </section>
      </Aside>
      <Footer>
        <section className="footer-top">
          <ul>
            <strong>Gestão</strong>
            <li><a href="#">Subway Partners</a></li>
            <li><a href="#">Carreiras</a></li>
          </ul>
          <ul>
            <strong>Social</strong>
            <li><a href="#">Curta-nos no Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Foursquare</a></li>
            <li><a href="#">Youtube</a></li>
            <li><a href="#">TikTok</a></li>
          </ul>
          <ul>
            <strong>Gestão de perfil</strong>
            <li><a href="#">Entre em contato conosco</a></li>
          </ul>
          <ul>
            <strong>Jurídico</strong>
            <li><a href="#">Declaração de privacidade</a></li>
            <li><a href="#">Termos de uso</a></li>
          </ul>
          <ul>
            <strong>Acessibilidade</strong>
            <li><a href="#">Adobe PDF Reader</a></li>
            <li><a href="#">Adobe Flash Plugin</a></li>
          </ul>
        </section>
        <section className="footer-bottom">
          <strong>SUBWAY® é uma marca registrada da Subway IP LLC.</strong>
          <strong>© 2021 Subway IP LLC.</strong>
          <strong>Todos os direitos reservados.</strong>
          <a href="#">Configurações de cookies</a>
        </section>
      </Footer>
    </Main>
  );
}