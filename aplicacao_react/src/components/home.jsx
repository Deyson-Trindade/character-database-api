import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Home = () => {


    return (
        <div>
            <AppBar position="absolute" color="secondary">
                <Toolbar>
                    <Typography variant="subtitle1" color="initial">
                        <Link to="/lista">   lista de personagem   </Link>
                        <Link to="/cadastrarPersonagem">   Cadastre seu personagem   </Link>
                        <Link to="/lista">   lista de personagem   </Link>
                        <Link to="/login">   login   </Link>
                    </Typography>
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default Home