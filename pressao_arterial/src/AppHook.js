import { useState } from "react"

const AppHook = () => {
    const [sistolica, setSistolica] = useState('')
    const [diastolica, setDiastolica] = useState('')
    const [resultado, setResultado] = useState('')

    const verificarPressao = () => {
        let resultadoPressao = ""
        if (sistolica < 130 && diastolica < 85) {
            resultadoPressao = "Normal."
            } else if (sistolica < 140 && diastolica < 90){
            resultadoPressao = "Normal - Limítrofe."
            } else if (sistolica < 160 && diastolica < 100){
            resultadoPressao = "Hipertensão Leve."
            } else if (sistolica < 180 && diastolica < 110){
            resultadoPressao = "Hipertensão Moderada."
            } else {
            resultadoPressao = "Hipertensão Grave."
            }
        resultadoPressao = "Seu diagnóstico é: " + resultadoPressao
        setResultado(resultadoPressao)

    }

    return(
        <div>

            <h1> Controle de Pressão Arterial</h1>

            Pressão Sistólica: <br/>
            <input type="number"
            onChange={(event) => setSistolica(event.target.value)}/> <br/> <br/>

            Pressão diastólica: <br/>
            <input type="number" 
            onChange={(event) => setDiastolica(event.target.value)}/> <br/> <br/>

            <input type="button" onClick={() => verificarPressao()} value = "Verificar" />

            <br/> <br/>

            {resultado}

        </div>
    )
}

export default AppHook;