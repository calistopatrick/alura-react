import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => { 
    //JSX
const placeholderModificada = `${props.placeholder}...`   

//let valor = 'Patrick Calisto'

const [valor, setValor] =  useState('')

const aoDigitado = (evento) =>{
    setValor(evento.target.value)
    console.log(valor)
}

return(
    <div className="campo-texto">
    <label>{props.label}</label>
    <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
    </div>
)
}

export default CampoTexto