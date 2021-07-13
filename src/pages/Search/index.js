import React from 'react';
import { Main, Aside } from './styles';
import { Global } from '../../styles/global';
import { Menu, Footer, Button } from '../../components';
import { IoLocateOutline, IoOptionsOutline } from 'react-icons/io5';
import { Colors } from '../../styles/colors';

import BannerMap from '../../assets/map.jpg';

export default function Search() {
  return (
    <Main>
      <Global />
      <Menu />
      <Aside>
        <section className="offers">
          <div className="search">
            <div className="content-input">
              <strong>
                <input placeholder="Your address, city, or postal code" />
                <label>Filtros</label>
                <IoOptionsOutline size={30} color={Colors.cls_gray} />
              </strong>
              <Button name="PESQUISAR" />
            </div>
            <div className="content-icon">
              <a href="#">
                <IoLocateOutline size={30} color={Colors.cls_green} />
                <span>Minhas localização</span>
              </a>
            </div>
          </div>
          <div className="map">
            <div className="map-btn">
              <input type="checkbox" />
              <span>Aberto agora</span>
              <Button name="APLICAR" />
            </div>
            <img src={BannerMap} alt="Mapa" />
          </div>
        </section>
      </Aside>
      <Footer />
    </Main>
  );
}