import React, { useState, useEffect } from 'react'
import { Button, TextField, Select, FormControl, makeStyles, InputLabel, MenuItem, FormHelperText } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    FormControl: {
        margin: theme.spacing(1),
        minWidth: 200
    }
}));

function FormularioCadastro() {

    const [generos, setGeneros] = useState([])
    const [racas, setRacas] = useState([])
    const [classes, setClasses] = useState([])

    useEffect(() => {
        async function fetchData() {

            const resp = await fetch('http://localhost:3003/dominios')
            const body = await resp.json()
            setGeneros(body.generos.map(genero => <MenuItem value={genero.chave} key={genero.chave} >{genero.descricao}</MenuItem>))
            setRacas(body.racas.map(raca => <MenuItem value={raca.chave} key={raca.chave} >{raca.descricao}</MenuItem>))
            setClasses(body.classes.map(classe => <MenuItem value={classe.chave} key={classe.chave} >{classe.descricao}</MenuItem>))
        }

        fetchData()

    }, [])

  

const useStyle = useStyles()
const [race, setRace] = useState('')
const [gender, setGender] = useState('')
const [classe, setClasse] = useState('')
const [nome, setNome] = useState('')

function postData(){
    
    try{
        fetch('http://localhost:3003/dominios', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                race: race,
                gender: gender,
                classe: classe
            }
            )}).then( res => res.status(200).json()).then( res => console.log(res))
        } catch (erro){
            console.log(erro)
            
        }
    }
    
    
    
    return (
        <form onSubmit={e => {
            e.preventDefault()
            postData()
            
        }}>
            <TextField
                autoComplete="off"
                value={nome}
                onChange={e => setNome(e.target.value)}
                id="nome"
                label="Nome"
                size="small"
                margin="normal"
                fullWidth />
            <div className={useStyle.root}>
                <FormControl className={useStyle.FormControl}>
                    <InputLabel>Raça</InputLabel>
                    <Select
                        labelId="demo-raça"
                        id="demo-select"
                        value={race}
                        onChange={e => setRace(e.target.value)}>
                        {
                            racas
                        }
                        
                    </Select>
                    <FormHelperText>Escolha a raça do seu personagem</FormHelperText>
                </FormControl>
                <FormControl className={useStyle.FormControl}>
                    <InputLabel>Gênero</InputLabel>
                    <Select
                        labelId="demo-genero"
                        id="demo-select-2"
                        value={gender}
                        onChange={e => setGender(e.target.value)}>
                        {
                            generos
                        }
                    </Select>
                    <FormHelperText>Escolha o gênero do seu personagem</FormHelperText>
                </FormControl >

                <FormControl className={useStyle.FormControl}>
                    <InputLabel>Classe</InputLabel>
                    <Select
                        labelId="demo-classe"
                        id="demo-select-3"
                        value={classe}
                        onChange={e => setClasse(e.target.value)}>
                        {
                            classes
                        }
                    </Select>
                    <FormHelperText>Selecione a Classe do seu personagem</FormHelperText>
                </FormControl>

            </div>

            <Button type="submit" variant="contained" color="primary" size="medium">Salvar personagem</Button>
        </form>
    )
}

export default FormularioCadastro