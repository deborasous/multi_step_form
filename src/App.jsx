import { PersonalData } from "./components/PersonalData";

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
      <PersonalData />
    </div>
  );
}

export default App;
