import { MagnifyingGlass, Play } from 'phosphor-react';

import { Container, FoundSongs, NoSongFound, SearchBar } from './styles';

export function Search() {
  return (
    <Container>
      <SearchBar>
        <MagnifyingGlass />
        <form>
          <input
            type="search"
            name="search"
            placeholder="O que você quer ouvir?"
          />
        </form>
      </SearchBar>

      <FoundSongs>
        <h1>Músicas relacionadas</h1>

        <table>
          <tbody>
            <tr>
              <td>
                <p>1</p>
                <button type="button">
                  <Play weight="fill" />
                </button>
              </td>
              <td>
                <img
                  src="https://images.unsplash.com/photo-1570936100858-56eb3a5f5ae1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
                  alt="Capa da música"
                />
              </td>
              <td>
                <p>Let me love you</p>
                <p>Single</p>
              </td>
              <td>Album</td>
              <td>4:17</td>
            </tr>
          </tbody>
        </table>
      </FoundSongs>
    </Container>
  );
}
