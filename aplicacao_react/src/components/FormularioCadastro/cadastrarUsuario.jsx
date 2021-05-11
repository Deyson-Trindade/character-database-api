import React, { useState } from 'react'
import { Button, Container, TextField, } from '@material-ui/core'

// 28/04/2021

function CadastrarUsuario() {

    const [user, setUser] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')


    function postUsuario() {
        console.log({ user, senha, email })
        try {
            fetch('http://localhost:3003/usuario', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user,
                    email,
                    senha
                })
            }).then(res => res.json()).then(res => console.log(res))

        } catch (erro) {

            console.log('fudeu aconteceu o erro: ' + erro)

        }

    }



    return (

        <Container maxWidth="sm">
            <form onSubmit={e => {
                e.preventDefault()
                postUsuario()
            }}>
                <TextField
                    value={user}
                    onChange={e => setUser(e.target.value)}
                    autoComplete="off"
                    id="user"
                    label="Usuário"
                    type="text"
                    size="small"
                    margin="normal"
                    required
                />
                <TextField
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    autoComplete="off"
                    id="email"
                    label="email"
                    type="email"
                    size="small"
                    margin="normal"
                    required
                    fullWidth />
                <TextField
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    autoComplete="off"
                    id="senha"
                    label="senha"
                    type="password"
                    size="small"
                    margin="normal"
                    required
                />
                <br />
                <br />
                <br />

                <Button type="submit" variant="contained" color="primary" size="medium">Cadastrar</Button>
            </form>
        </Container>


    )

}
export default CadastrarUsuario