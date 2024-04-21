export const TiposVeiculo = {
    GASOLINA: 1,
    GASOLEO: 2,
    ELETRICO: 3,
    HIBRIDO: 4
  };

export const AgendamentoServico = {
  FILADEESPERA: 1,
  PROGRAMADO: 2
};

export const EstadoServico = {
  PROGRAMADO: 1,
  NAFILA: 2, // ???
  ADECORRER: 3,
  PARADO: 4,
  REALIZADO: 5
};

const TipoMotor = {
  1: "Gasolina",
  2: "Gasóleo",
  3: "Elétrico",
  4: "Híbrido"
}

export function getTipoVeiculoString(value) {
    return TipoMotor[value]
};

