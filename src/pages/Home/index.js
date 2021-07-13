import React from 'react';
import { Main, Aside } from './styles';
import { Global } from '../../styles/global';
import { Menu, Slide, CardOffers, Footer } from '../../components';

import CardOne from '../../assets/card_01.jpg';
import CardTwo from '../../assets/card_02.jpg';
import CardTree from '../../assets/card_03.jpg';
import Subway from '../../assets/subway.jpg';

export default function Home() {
  const [cookies, setCookies] = React.useState(false);

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
      <Footer cookies={cookies} setCookies={setCookies} />
    </Main>
  );
}