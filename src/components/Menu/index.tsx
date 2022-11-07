import { NavLink } from 'react-router-dom';

import { ReactComponent as LogoImg } from '../../assets/logo.svg';
import { MagnifyingGlass, Play } from 'phosphor-react';

import { Container } from './styles';

export function Menu() {
  return (
    <Container>
      <LogoImg />
      <nav>
        <NavLink to="/">
          <Play weight="fill" />
        </NavLink>
        <NavLink to="/search">
          <MagnifyingGlass />
        </NavLink>
      </nav>
    </Container>
  );
}
