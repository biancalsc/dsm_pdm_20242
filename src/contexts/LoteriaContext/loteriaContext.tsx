import React, { createContext, useEffect, useState, ReactNode } from "react";
import LoteriaService from "../../services/LoteriaService";
import { ResultadoLoteriaSimplificado } from "../../types";

export const LoteriaContext = createContext<LoteriaContextProps | undefined>(
  undefined
);

export interface LoteriaContextProps {
  resultados: {
    megasena?: ResultadoLoteriaSimplificado;
    timemania?: ResultadoLoteriaSimplificado;
    quina?: ResultadoLoteriaSimplificado;
  };
  loading: boolean;
  error: string | null;
}

export const LoteriaProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [resultados, setResultados] = useState<{
    megasena?: ResultadoLoteriaSimplificado;
    timemania?: ResultadoLoteriaSimplificado;
    quina?: ResultadoLoteriaSimplificado;
  }>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const megasena = await LoteriaService.getLoteriaResults("megasena");
        const timemania = await LoteriaService.getLoteriaResults("timemania");
        const quina = await LoteriaService.getLoteriaResults("quina");

        setResultados({ megasena, timemania, quina });
      } catch (err) {
        setError("Error fetching results.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  return (
    <LoteriaContext.Provider value={{ resultados, loading, error }}>
      {children}
    </LoteriaContext.Provider>
  );
};