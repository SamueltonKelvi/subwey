import React from 'react';
import { Main } from './styles';
import { Global } from '../../styles/global';
import { Menu, Slide } from '../../components';

export default function Home() {
  return (
    <Main>
      <Global />
      <Menu />
      <div className="alert">
        <a href="#">Como o Subway está reagindo ao Coronavírus e cuidando da sua saúde nos restaurantes.</a>
      </div>
      <Slide />
      
    </Main>
  );
}