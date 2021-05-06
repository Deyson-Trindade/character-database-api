import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import FormularioCadastro from './components/FormularioCadastro/formularioCadastro';
import Login from './components/FormularioCadastro/login'
import Lista from './components/FormularioCadastro/lista'

import { Container } from '@material-ui/core'

function App() {
  return (
    <>
      <Container>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/lista">lista de personagem</Link>
                </li>
                <li>
                  <Link to="/cadastrarPersonagem">Cadastre seu personagem</Link>
                </li>
                <li>
                  <Link to="/login">login</Link>
                </li>
              </ul>
            </nav>
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
            </Switch>
          </div>
        </Router>
      </Container>
    </>
  );

}




export default App;