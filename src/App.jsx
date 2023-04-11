import Form from "react-bootstrap/Form";
import { PersonalData } from "./pages/PersonalData";
import { AddressData } from "./pages/AddressData";
import { ThanksMensage } from "./components/ThanksMensage";

function App() {
  return (
    <div className="App container m-auto pt-lg-5 w-75">
      <div className="text-center">
        <h1>Cadastre-se gratuitamente!</h1>
        <p>
          Faça o seu cadastro para ter acesso a todos os recursos da nossa
          plataforma
        </p>
      </div>
      <Form>
        <PersonalData />
        <AddressData />
        <ThanksMensage />
      </Form>
    </div>
  );
}

export default App;
