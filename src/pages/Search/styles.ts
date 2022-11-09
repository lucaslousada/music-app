import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 115px);
  padding-top: 30px;

  h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.light};
  }
`;

export const SearchBar = styled.div`
  display: flex;
  gap: 0 22px;
  margin: 0 0 40px 27px;

  form {
    line-height: 0;
  }

  svg {
    color: rgba(255, 255, 255, 0.25);
    width: 16px;
    height: 16px;
  }

  input {
    background: transparent;
    border: none;
    font-size: 14px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.25);
    }

    &::-webkit-search-cancel-button {
      display: none;
    }
  }
`;

export const FoundSongs = styled.section`
  table {
    width: 100%;
    margin-top: 30px;
    border-collapse: separate;
    border-spacing: 0 15px;
    text-align: center;
    font-size: 12px;
    color: #fff;
  }

  tr {
    background-color: rgba(51, 55, 59, 0.37);
    backdrop-filter: blur(5px);

    &:hover {
      background-color: rgba(51, 55, 59, 0.67);

      td:nth-child(1) {
        p {
          display: none;
        }

        button {
          display: block;
        }
      }
    }
  }

  td {
    padding: 8px 11px;
  }

  td:nth-child(1) {
    width: 49px;
    font-size: 16px;
    font-weight: 700;

    button {
      display: none;
      line-height: 0;
    }
  }

  td:nth-child(2) {
    width: 39px;

    img {
      width: 39px;
      height: 39px;
      border-radius: 8.5px;
      object-fit: cover;
    }
  }

  td:nth-child(3) {
    width: 20%;

    p:first-of-type {
      font-weight: 700;
    }
  }

  td:first-of-type {
    padding-left: 22px;
    border-radius: 8px 0 0 8px;
  }

  td:last-of-type {
    padding-right: 30px;
    border-radius: 0 8px 8px 0;
  }
`;

export const NoSongFound = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px 0;
  flex-grow: 1;
`;
