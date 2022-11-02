import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px 0;

  > svg {
    width: 34px;
  }

  nav {
    padding: 25px 15px;
    background-color: ${({ theme }) => theme.colors.dark_alt};
    border-radius: 32px;

    a {
      display: block;
      line-height: 0;

      & + a {
        margin-top: 30px;
      }

      &.active svg {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    svg {
      width: 22px;
      height: 22px;

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
