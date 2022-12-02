import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as LogoImg } from '../../assets/logo.svg';
import { ReactComponent as DeezerLogoImg } from '../../assets/logo-deezer.svg';

import { Container, LoginBox, DeezerButton } from './styles';

export function DeezerApiAuthentication() {
  const navigate = useNavigate();

  function isTheUserAuthenticated() {
    DZ.getLoginStatus(response => {
      response.authResponse?.accessToken && navigate('/play');
      console.log(response);
    });
  }

  function authenticateTheUser() {
    DZ.login(
      response => {
        if (response.authResponse?.accessToken) {
          navigate('/play');
          console.log(response);
        } else {
          console.log('usuario negou');
          console.log(response);
        }
      },
      // @ts-ignore
      { perms: 'basic_access,email' }
    );
  }

  useEffect(() => {
    isTheUserAuthenticated();
  }, []);

  return (
    <Container>
      <LoginBox>
        <LogoImg />
        <h1>Entrar</h1>
        <h2>Para continuar, faça login no Deezer e conceda as permissões.</h2>
        <DeezerButton type="button" onClick={() => authenticateTheUser()}>
          <DeezerLogoImg />
          <span>Entrar com Deezer</span>
        </DeezerButton>
      </LoginBox>
    </Container>
  );
}
