import React, { useState } from "react";

export const ThanksMensage = ({ formData, setFormData }) => {
  const medias = [
    { id: 1, name: "Selecione" },
    { id: 2, name: "Instagram" },
    { id: 3, name: "Facebook" },
    { id: 4, name: "Linkedin" },
    { id: 5, name: "Outros" },
  ];

  return (
    <div>
      <p>Conte-nos: onde nos conheceu?</p>
      <select
        className="form-select"
        aria-label="Default select example"
        value={formData.media}
        onChange={(e) => setFormData({ ...formData, media: e.target.value })}
      >
        {medias.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
