import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import FormularioCadastro from './components/FormularioCadastro/formularioCadastro';
import Login from './components/FormularioCadastro/login'
import Lista from './components/FormularioCadastro/lista'
import Home from './components/home'

import { Container } from '@material-ui/core'

function App() {
  return (
    <>
      <Container>
        <Router>
            <Switch>
              <Route path="/lista" exact>
                <Lista />
              </Route>
              <Route path="/cadastrarPersonagem" exact>
                <FormularioCadastro />
              </Route>
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
        </Router>
      </Container>
    </>
  );

}




export default App;