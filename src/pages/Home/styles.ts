import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px 0;

  width: 100%;
  min-height: calc(100vh - 115px);
  margin-left: -78px;
  color: ${({ theme }) => theme.colors.light};

  img {
    width: 285px;
    height: 290px;
    object-fit: cover;
    border-radius: 35px;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 35px;
    color: ${({ theme }) => theme.colors.alt};
  }

  h2 {
    font-size: 14px;
  }

  p:last-of-type {
    font-size: 14px;

    span + span::before {
      content: '•';
      margin: 0 5px;
    }
  }
`;
