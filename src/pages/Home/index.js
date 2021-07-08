import React from 'react';
import { Main } from './styles';
import { Global } from '../../styles/global';
import { Menu } from '../../components';

export default function Home() {
  const [menu, setMenu] = React.useState(false);

  return (
    <Main>
      <Global />
      <Menu />
    </Main>
  );
}