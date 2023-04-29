import { useState } from "react";
import { AddressData } from "../components/AddressData";
import { PersonalData } from "../components/PersonalData";
import { ThanksMensage } from "../components/ThanksMensage";

function useForm() {
  const [pages, setPages] = useState(0);
  const Titles = ["Dados Pessoais", "Endereço", "Obrigado pelo seu cadastro "];
  const [formData, setFormData] = useState({
    email: "",
    nome: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
    complemento: "",
    media: "",
  });

  console.log(formData);

  const PagesDisplay = () => {
    if (pages === 0) {
      return <PersonalData formData={formData} setFormData={setFormData} />;
    } else if (pages === 1) {
      return <AddressData formData={formData} setFormData={setFormData} />;
    } else {
      return <ThanksMensage formData={formData} setFormData={setFormData} />;
    }
  };

  const submitForm = () => {
    if (pages === Titles.length - 1) {
      alert("Formulário enviado");
    } else {
      setPages((currPage) => currPage + 1);
    }
  };

  return { pages, setPages, Titles, PagesDisplay, submitForm };
}

export default useForm;
