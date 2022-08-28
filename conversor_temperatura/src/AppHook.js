import { useState } from "react"

const AppHook = () => {
    const [temperatura, setTemperatura] = useState('');
    const [opcao, setOpcao] = useState('');
    const [resultado, setResultado] = useState('');

    const converterTemperatura = () => {
        let temperaturaConvertida;
        let tipoTemperatura = "";
    
        if(opcao === "C"){
          temperaturaConvertida = (temperatura - 32) / 1.8;
          tipoTemperatura = " ºC";
        } else {
          temperaturaConvertida = (temperatura * 1.8) + 32;
          tipoTemperatura = " ºF";
        }
        setResultado("A temperatura é de " + temperaturaConvertida + tipoTemperatura);
      }

    return(
        <div>

          <h1> Conversor de temperatura</h1>

          Informe a temperatura: <br/>
          <input type="number" 
          onChange={(event) => setTemperatura(event.target.value)}/>

          <input type="radio" value = "F"
                  checked={opcao === "F" || opcao === ''} 
                  onChange={(event) => setOpcao(event.target.value)}/> Fahrenheint ºF

          <input type="radio" name="opcao" value = "C" 
                  checked={opcao === "C"} 
                  onChange={(event) => setOpcao(event.target.value)}/> Celsius ºC

          <br/> <br/>

          <input type="button" onClick={() => converterTemperatura()} value = "Converter" />

          <br/> <br/>

          {resultado}

        </div>
    )
}

export default AppHook;