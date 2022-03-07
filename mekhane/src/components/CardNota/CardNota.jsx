import React, { Component } from "react";
import "./cardnota.css";
class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota-cabecalho">
          <h3 className="card-nota_titulo">{this.props.empresa}</h3>
        </header>
        <p className="card-nota_texto">
          {this.props.equipamento} <br />
        </p>
        <br />
        <p className="card-nota_texto">{this.props.solicitante}</p>
        <br />
        <p className="card-nota_texto">{this.props.maquina}</p>
        <br />
        <p className="card-nota_texto">{this.props.data}</p>
        <br />
        <p className="card-nota_texto">{this.props.manutencao}</p>
        <br />
        <p className="card-nota_texto">{this.props.profissional}</p>
        <br />
        <p className="card-nota_texto">{this.props.descricao}</p>
        <br />
      </section>
    );
  }
}

export default CardNota;
