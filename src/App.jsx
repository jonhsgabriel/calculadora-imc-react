import React, { useState } from 'react';
import Formulario from './components/Formulario/Formulario';
import Resultado from './components/Resultado/Resultado';
import Classificacao from './components/Classificacao/Classificacao';

function App() {
  const [imc, setImc] = useState(null);

  const calcularIMC = (altura, peso) => {
    if (!altura || !peso) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setImc(imcCalculado.toFixed(2));
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <Formulario calcularIMC={calcularIMC} />
      {imc && (
        <>
          <Resultado imc={imc} />
          <Classificacao classificacao={getClassificacaoIMC(imc)} />
        </>
      )}
    </div>
  );
}

const getClassificacaoIMC = (imc) => {
  if (imc < 18.5) return 'Abaixo do peso';
  if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
  if (imc >= 25 && imc < 29.9) return 'Sobrepeso';
  if (imc >= 30 && imc < 34.9) return 'Obesidade Grau I';
  if (imc >= 35 && imc < 39.9) return 'Obesidade Grau II';
  return 'Obesidade Grau III';
};

export default App;
