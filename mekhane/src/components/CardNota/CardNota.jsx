import React, { Component } from "react";
import "./cardnota.css";
class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota-cabecalho">
          <h3 className="card-nota_titulo">Titulo</h3>
        </header>
        <p className="card-nota_texto">Escreva sua Nota</p>
      </section>
    );
  }
}

export default CardNota;
