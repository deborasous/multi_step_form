import React from "react";
import Form from "react-bootstrap/Form";

export const PersonalData = ({ formData, setFormData }) => {
  return (
    <div className="grid gap-2">
      <Form.Group>
        <Form.Label className="mb-0" htmlFor="input-name">
          Nome:
        </Form.Label>
        <Form.Control
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          type="text"
          id="input-name"
          placeholder="Digite o seu nome"
          name="nome"
        />
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Label className="mb-0" htmlFor="input-email">
          Email:
        </Form.Label>
        <Form.Control
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="email"
          id="input-email"
          placeholder="Digite o seu email"
          name="email"
        />
      </Form.Group>
    </div>
  );
};
