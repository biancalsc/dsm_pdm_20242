export interface ResultadoLoteria {
    acumulado: boolean;
    concursoEspecial: boolean;
    dataApuracao: string;
    dataPorExtenso: string;
    dataProximoConcurso: string;
    dezenas: string[];
    numeroDoConcurso: number;
    quantidadeGanhadores: number;
    tipoPublicacao: number;
    tipoJogo: string;
    valorEstimadoProximoConcurso: number;
    valorPremio: number;
}

export interface LoteriasResult {
    megasena: ResultadoLoteria;
    timemania: ResultadoLoteria;
    quina: ResultadoLoteria;
}

export interface LoteriaContextProps {
    resultados: {
        megasena?: ResultadoLoteriaSimplificado;
        timemania?: ResultadoLoteriaSimplificado;
        quina?: ResultadoLoteriaSimplificado;
    };
    loading: boolean;
    error: string | null;
}

export interface ResultadoLoteriaSimplificado {
    dezenas: string[];
    dataPorExtenso: string;
}
