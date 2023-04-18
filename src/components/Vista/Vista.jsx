import './Vista.css'
import { useState } from 'react'

const Vista = () => {

    const [modoOscuro, setModoOscuro] = useState(false);

    const cambiarModo = () => {
        setModoOscuro(!modoOscuro);
    }

    const estilo = modoOscuro ? "oscuro" : "claro";

    return (
        <div className= {estilo}>
            
            <button onClick={ cambiarModo } > {modoOscuro ? "Claro" : "Oscuro"} </button>
            <h2>Componente Vista </h2>
            <p>Vestite con los colores de tu club. Sumate a la campaña "En Morón con la de Morón"</p>
        </div>
    )
}

export default Vista
