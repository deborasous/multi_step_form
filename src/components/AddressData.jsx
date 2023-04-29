import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export const AddressData = ({ formData, setFormData }) => {
  return (
    <div className="">
      <Row className="mb-3 input-group">
        <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label>Logradouro: </Form.Label>
          <Form.Control
            value={formData.logradouro}
            onChange={(e) =>
              setFormData({ ...formData, logradouro: e.target.value })
            }
            placeholder="rua"
            type="text"
            name="street"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridAddress2">
          <Form.Label>Nº: </Form.Label>
          <Form.Control
            value={formData.numero}
            onChange={(e) =>
              setFormData({ ...formData, numero: e.target.value })
            }
            placeholder="000"
            type="number"
            name="number"
          />
        </Form.Group>
      </Row>
      <Row className="mb-3 input-group">
        <Form.Group className="col-5" controlId="formGridAddress4">
          <Form.Label>Bairro: </Form.Label>
          <Form.Control
            value={formData.bairro}
            onChange={(e) =>
              setFormData({ ...formData, bairro: e.target.value })
            }
            placeholder="bairro"
            type="text"
            name="district"
          />
        </Form.Group>
        <Form.Group className="col-5" controlId="formGridCity">
          <Form.Label>Cidade: </Form.Label>
          <Form.Control
            value={formData.cidade}
            onChange={(e) =>
              setFormData({ ...formData, cidade: e.target.value })
            }
            placeholder="cidade"
            type="text"
            name="city"
          />
        </Form.Group>
        <Form.Group className="col-2" controlId="formGridState">
          <Form.Label>Estado: </Form.Label>
          <Form.Control
            value={formData.estado}
            onChange={(e) =>
              setFormData({ ...formData, estado: e.target.value })
            }
            placeholder="sp"
            type="text"
            name="uf"
          />
        </Form.Group>
      </Row>
      <Row className="mb-3 input-group">
        <Form.Group className="col-3" controlId="formGridZip">
          <Form.Label>Cep: </Form.Label>
          <Form.Control
            value={formData.cep}
            onChange={(e) => setFormData({ ...formData, cep: e.target.value })}
            placeholder="1000000"
            type="text"
            name="cep"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridAddress3">
          <Form.Label>Complemento: </Form.Label>
          <Form.Control
            value={formData.complemento}
            onChange={(e) =>
              setFormData({ ...formData, complemento: e.target.value })
            }
            placeholder="complemento"
            type="text"
            name="complement"
          />
        </Form.Group>
      </Row>
    </div>
  );
};
