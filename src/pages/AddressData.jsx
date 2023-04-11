import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export const AddressData = () => {
  return (
    <>
      <Form.Group controlId="formGridAddress1">
        <Form.Label>Logradouro: </Form.Label>
        <Form.Control placeholder="rua" type="text" />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridAddress2">
          <Form.Label>Nº: </Form.Label>
          <Form.Control placeholder="000" type="number" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridAddress3">
          <Form.Label>Complemento: </Form.Label>
          <Form.Control placeholder="complemento" type="text" />
        </Form.Group>
      </Row>
      <Form.Group controlId="formGridAddress4">
        <Form.Label>Bairro: </Form.Label>
        <Form.Control placeholder="bairro" type="text" />
      </Form.Group>
      <Form.Group controlId="formGridCity">
        <Form.Label>Cidade: </Form.Label>
        <Form.Control placeholder="cidade" type="text" />
      </Form.Group>
      <Form.Group controlId="formGridZip">
        <Form.Label>Cep: </Form.Label>
        <Form.Control placeholder="1000000" type="text" />
      </Form.Group>
      <Form.Group controlId="formGridState">
        <Form.Label>Estado: </Form.Label>
        <Form.Control placeholder="sp" type="text" />
      </Form.Group>
    </>
  );
};
