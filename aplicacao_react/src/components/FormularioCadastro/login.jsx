import React, { useState } from 'react'
import { Button, Container, TextField, } from '@material-ui/core'

// 28/04/2021

function Login() {


    function consLog() {
        console.log(usuario, senha)
    }

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')


    return (

        <Container maxWidth="sm">
            <form onSubmit={e => {
                e.preventDefault()
                consLog()
            }}>
                <TextField
                    value={usuario}
                    onChange={e => setUsuario(e.target.value)}
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
                <Button type="submit" variant="contained" color="primary" size="medium">Cadastrar</Button>
            </form>
        </Container>


    )

}
export default Login