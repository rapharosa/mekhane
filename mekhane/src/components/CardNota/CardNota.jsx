import React, { Component } from "react";
import "./cardnota.css";
class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota-cabecalho">
          <h3 className="card-nota_titulo">{this.props.empresa}</h3>
        </header>
        <p className="card-nota_texto">{this.props.equipamento} <br/></p>
        <p className="card-nota_texto">{this.props.observacao}</p>
      </section>
    );
  }
}

export default CardNota;
