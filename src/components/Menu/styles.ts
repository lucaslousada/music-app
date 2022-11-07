import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: max-content;
  gap: 40px 0;
  padding: 20px 0 0 0;

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
