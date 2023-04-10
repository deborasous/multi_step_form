import React from "react";
import Form from "react-bootstrap/Form";

export const PersonalData = () => {
  return (
    <Form className="mb-3">
      <Form.Group>
        <Form.Label htmlFor="input-name">Nome: </Form.Label>
        <Form.Control
          type="text"
          id="input-name"
          placeholder="Digite o seu nome"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="input-email">Email: </Form.Label>
        <Form.Control
          type="email"
          id="input-email"
          placeholder="Digite o seu email"
        />
      </Form.Group>
    </Form>
  );
};
