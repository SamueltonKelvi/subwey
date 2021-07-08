import React from 'react';
import { Main, Aside } from './styles';
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
          <h5></h5>
          <h3></h3>
          <img src={Subway} alt="Subway logo"/>
          <p>Junte-se à equipe vendedora e assuma o controle de seu futuro com os restaurantes SUBWAY </p>
          <ul>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <button>Cadastra</button>
          </ul>
        </section>
      </Aside>
    </Main>
  );
}