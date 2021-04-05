import React from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/formularioCadastro';

import {Container} from '@material-ui/core'

function App() {
  return (
    <Container maxWidth="sm" component="article">
      <h1>Formulário de cadastro de personagem</h1>
      <FormularioCadastro onSubmit={onSubmitForm}/>
    </Container>
  );

  function onSubmitForm(data){
    console.log(data)
  }

}

export default App;
