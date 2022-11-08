import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Layout } from './components/Layout';
import { Menu } from './components/Menu';
import { Player } from './components/Player';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/defaultTheme';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <Menu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Layout>
      <Player />

      <GlobalStyle />
    </ThemeProvider>
  );
}
