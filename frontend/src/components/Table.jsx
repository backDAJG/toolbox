import { Table, Container } from 'react-bootstrap';

export default () => {
  return (
    <Container>
      <Table style={{ marginTop: 30 }} striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
      </Table>
    </Container>
  );
};
