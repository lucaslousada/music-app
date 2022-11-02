import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Layout } from './components/Layout';
import { Menu } from './components/Menu';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/defaultTheme';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <Menu />

        <Routes>
          <Route path="/" element={<Navigate replace to="/reproduction" />} />
          <Route path="/reproduction" element={<div>Play</div>} />
          <Route path="/search" element={<div>Search</div>} />
        </Routes>
      </Layout>

      <GlobalStyle />
    </ThemeProvider>
  );
}
