//import { Button, Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

const Lista = () => {

    const [personagens, setPersonagem] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3003/dominios/read')
        .then(res => res.json())
        .then(data => setPersonagem(data))
    })
    

    return(
        <>
        <ul>
            {personagens.map((personagem) => <div key={personagem.nome}>{personagem.nome} - {personagem.raca} - {personagem.genero} - {personagem.classe}</div>)}
        </ul>
        </>
    )
}
export default Lista