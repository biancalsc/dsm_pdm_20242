import axios from "axios";
import { LoteriasResult, ResultadoLoteriaSimplificado } from "../../types/index";

class LoteriaService {
  private static apiUrl =
    "https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados";

  public static async getLoteriaResults(
    type: "megasena" | "timemania" | "quina"
  ): Promise<ResultadoLoteriaSimplificado> {
    try {
      const response = await axios.get<LoteriasResult>(this.apiUrl);
      const result = response.data[type];

      if (!result) {
        throw new Error(`No results found for ${type}`);
      }

      return {
        dezenas: result.dezenas,
        dataPorExtenso: result.dataPorExtenso,
      };
    } catch (error) {
      console.error(`Error fetching results for ${type}:`, error);
      throw error;
    }
  }
}

(async () => {
  try {
    const megaSenaResult = await LoteriaService.getLoteriaResults("megasena");
    const timemaniaResult = await LoteriaService.getLoteriaResults("timemania");
    const quinaResult = await LoteriaService.getLoteriaResults("quina");
  } catch (error) {
    console.error("Error fetching results:", error);
  }
})();

export default LoteriaService;