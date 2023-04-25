import { createContext, useContext, useState } from "react";

export const actualStepContext = createContext();

//hook personalizado
export const useStep = () => {
  const context = useContext(actualStepContext);
  return context;
};

export const StepProvider = ({ children }) => {
  const [actualStep, setActualStep] = useState(0);

  const changeStep = (step, e) => {
    e.preventDefault();

    setActualStep(actualStep + step);
  };

  const contextValues = {
    actualStep,
    setActualStep,
    changeStep,
  };

  return (
    <actualStepContext.Provider value={contextValues}>
      {children}
    </actualStepContext.Provider>
  );
};
