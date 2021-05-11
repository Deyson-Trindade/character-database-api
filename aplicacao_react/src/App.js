import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import FormularioCadastro from './components/FormularioCadastro/formularioCadastro';
import CadastrarUsuario from './components/FormularioCadastro/cadastrarUsuario'
import Lista from './components/FormularioCadastro/lista'
import NavBar from './components/NavBar'
//import Home from '..components/Home'

import { Container } from '@material-ui/core'

function App() {
  return (
    <>
      <Container>
        <Router>
          <Route path="/">
            <NavBar />
          </Route>
          <Switch>
            <Route path="/lista" exact>
              <Lista />
            </Route>
            <Route path="/cadastrarPersonagem" exact>
              <FormularioCadastro />
            </Route>
            <Route path="/cadastrarUsuario" exact>
              <CadastrarUsuario />
            </Route>
          </Switch>
        </Router>
      </Container>
    </>
  );

}




export default App;