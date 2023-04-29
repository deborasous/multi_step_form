import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa";
import { MdFrontHand } from "react-icons/md";
import useForm from "./hook/FormHook";

export const App = () => {
  const { pages, setPages, Titles, PagesDisplay, submitForm } = useForm();

  return (
    <div className="container-sm py-4 px-5 w-75">
      <div className="progressbar display-6 mb-3 text-secondary">
        {pages == 0 && <BsFillPersonVcardFill />}
        {pages == 1 && <FaAddressCard />}
        {pages == 2 && <MdFrontHand />}
      </div>
      <div>
        <div className="header">
          <h1 className="text-primary mb-5">{Titles[pages]}</h1>
        </div>
        <div className="steps">{PagesDisplay()}</div>
        <div className="buttons mt-4">
          <button
            className="me-3 btn btn-primary rounded-2 text-white py-2 px-4 border-0 hover"
            disabled={pages == 0}
            onClick={() => setPages((currPage) => currPage - 1)}
          >
            Voltar
          </button>
          <button
            className="btn btn-primary rounded-2 text-white py-2 px-4 border-0 hover"
            onClick={() => submitForm()}
          >
            {pages === Titles.length - 1 ? "Enviar" : "Próximo"}
          </button>
        </div>
      </div>
    </div>
  );
};
