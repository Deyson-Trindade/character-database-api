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
    })


    useEffect(() => {
        const deletar = () => {
            fetch('http://localhost:3003/personagem', {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
                .then(res => res.text())
                .then(res => console.log(res))

        }
    })


    /*  useEffect(() => {
          fetch('http://localhost:3003/dominios/read', {
              method: 'DELETE'
          })
      })
      .then(req => req.json())
      .then(data => setPersonagem(data))
      */

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
                        <Button type="submit" variant="contained" color="primary" size="medium" onClick={deletar}>Deletar</Button>
                    </Container>
                </div>)}
            </Container>
        </>
    )
}
export default Lista