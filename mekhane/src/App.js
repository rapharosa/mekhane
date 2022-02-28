import React, { Component } from 'react';
import FormularioCadastro from './components/FormulariCadastro';
import ListaDeNotas from "./components/ListaDeNotas"

class App extends Component {
  render(){
    return (
      <section>
        <FormularioCadastro/>
        <ListaDeNotas/>
      </section>
    );
  }
  
}

export default App;
