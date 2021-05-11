import React from 'react'
import { Link as LinkDom} from 'react-router-dom'
import { AppBar, Toolbar, Typography, Link as LinkMat, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    header: {
        backgroundColor: "#5F9EA0",
        color: "black",
        boxShadow: "0px 0p 0px 0px"
    }
})


const NavBar = () => {

    const classes = useStyles()

    return (
        <div>
            <AppBar position="sticky" className={classes.header} >
                <Toolbar>
                    <Typography variant="h2">
                        <LinkDom to="/lista"><LinkMat color="textPrimary" component="button">lista de personagem</LinkMat></LinkDom>
                        <LinkDom to="/cadastrarPersonagem"><LinkMat color="textPrimary" component="button">Cadastrar personagem</LinkMat> </LinkDom>
                        <LinkDom to="/cadastrarUsuario"><LinkMat color="textPrimary" component="button">cadastrar usuário</LinkMat></LinkDom>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Typography variant="h5"> Bem vindo à página inicial do meu projeto. </Typography>
        </div>
    )
}

export default NavBar