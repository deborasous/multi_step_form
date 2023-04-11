import React from "react";

export const ThanksMensage = () => {
  return (
    <div>
      <h1>Obrigado pelo seu cadastro</h1>
      <p>Conte-nos: onde nos conheceu?</p>
      <select class="form-select" aria-label="Default select example">
        <option selected>Selecione</option>
        <option value="Instagram">Instagram</option>
        <option value="Facebook">Facebook</option>
        <option value="Linkedin">Linkedin</option>
        <option value="Outros">Outros</option>
      </select>
    </div>
  );
};
