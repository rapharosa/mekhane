import React, { Component } from "react";

class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Titulo" />
        <textarea placeholder="Escreva a nota" />
        <button>Criar nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;