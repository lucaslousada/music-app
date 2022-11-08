import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <img
        src="https://images.unsplash.com/photo-1570936100858-56eb3a5f5ae1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
        alt="Capa da música"
      />
      <h1>Gimme Shelter</h1>
      <h2>The Rolling Stones</h2>
      <p>
        <span>525 curtidas</span>
        <span>2016</span>
        <span>2:49min</span>
      </p>
    </Container>
  );
}
