import { useState } from "react"

const AppHook = () => {
    const [subOpcao, setSubOpcao] = useState('');
    const [notaValor, setNotaValor] = useState('');
    const [resultado, setResultado] = useState('');
    const [descricaoTipoNota, setDescricaoTipoNota] = useState('')

    const calcularNotaSub = () => {
        let resultadoNota = subOpcao === 'G1' ?
            21 - (notaValor * 2) :
            (21 - notaValor) / 2

        resultadoNota = "Sua nota na sub, deverá ser: " + resultadoNota;
        setResultado(resultadoNota);

    }

    return(
        <div>

            <h1>Calculadora Nota de Sub</h1>

            <label>
                <input type="radio" value="G1" checked={subOpcao === 'G1' || subOpcao === ''}
                onChange={(event) => setDescricaoTipoNota(event.target.value) + setSubOpcao(event.target.value)} /> Sub G1
            </label>

            <label>
                <input type="radio" value="G2" checked={subOpcao === 'G2'}
                onChange={(event) => setDescricaoTipoNota(event.target.value) + setSubOpcao(event.target.value)} /> Sub G2
            </label>

            <br /><br />
            Nota {descricaoTipoNota}: <br />
            <input type="number"
            onChange={(event) => setNotaValor(event.target.value)} />

            <br />
            <input type="button" value="Calcular" 
            onClick={() => calcularNotaSub()} />

            <br />

            {resultado}

        </div>
    )
}

export default AppHook;