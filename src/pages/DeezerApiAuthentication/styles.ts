import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.div`
  z-index: 1;
  position: absolute;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => rgba(theme.colors.dark, 0.3)};
  backdrop-filter: blur(15px);
`;

export const LoginBox = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px 0;
  max-width: 400px;
  height: 300px;
  padding: 20px;
  color: ${({ theme }) => theme.colors.dark_alt};
  background: ${({ theme }) => theme.colors.light};
  border-radius: 10px;

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 16px;
    text-align: center;
  }
`;

export const DeezerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 5px;
  padding: 10px 20px;
  margin-top: 20px;
  border: 2px solid #ef5466;
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark_alt};
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${rgba('#ef5466', 0.2)};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
