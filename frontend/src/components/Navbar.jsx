import { Container, Navbar } from 'react-bootstrap';

export default () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand style={{ color: 'white' }}>React Test App</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
