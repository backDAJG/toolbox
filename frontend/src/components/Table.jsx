import { Table, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default () => {
  const { files } = useSelector((state) => state.files);
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
        <tbody>
          {files.map((file) => {
            return file.lines.map((line, index) => {
              return (
                <tr key={index}>
                  <td>{file.file}</td>
                  <td>{line.text}</td>
                  <td>{line.number}</td>
                  <td>{line.hex}</td>
                </tr>
              );
            });
          })}
        </tbody>
      </Table>
    </Container>
  );
};
