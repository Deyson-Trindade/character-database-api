import { Container, Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'



const Lista = () => {
    const [personagens, setPersonagem] = useState([])

    useEffect(() => {
        fetch('http://localhost:3003/dominios/personagem', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setPersonagem(data))
    }, [JSON.stringify(personagens)])



    const deletar = (id) => {
        fetch(`http://localhost:3003/dominios/personagem/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then( () => setPersonagem(personagens.filter(e => e.ID !== id)))

    }

    /*const atualizar = () => {
        fetch(`http://localhost:3003/dominios/personagem/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            }
        })
    }*/


    


    return (
        <>
            <Container>
                {personagens.map((personagem) => <div key=
                    {personagem.nome}>
                    {personagem.nome} -
                    {personagem.raca} -
                    {personagem.genero} -
                    {personagem.classe}
                    <Container maxWidth="sm">
                        <Button type="submit" variant="contained" color="primary" size="medium">Alterar</Button>
                        <Button type="submit" variant="contained" color="primary" size="medium" onClick={() => deletar(personagem.ID)}>Deletar</Button>
                    </Container>
                </div>)}
            </Container>
        </>
    )
}
export default Lista