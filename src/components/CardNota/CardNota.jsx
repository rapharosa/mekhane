import React, { Component } from "react";
import "./cardnota.css";
class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota-cabecalho">
          <p className="card-nota_titulo">Empresa contratante: {this.props.empresa}</p>
        </header>
        <p className="card-nota_texto">
          Equipamento: {this.props.equipamento} <br />
        </p>
        <br />
        <p className="card-nota_texto">Solicitante: {this.props.solicitante}</p>
        <br />
        <p className="card-nota_texto">Maquina parada? {this.props.maquina}</p>
        <br />
        <p className="card-nota_texto">Data: {this.props.data}</p>
        <br />
        <p className="card-nota_texto">Tipo de manutenção: {this.props.manutencao}</p>
        <br />
        <p className="card-nota_texto">Nome do profissional: {this.props.profissional}</p>
        <br />
        <p className="card-nota_texto">Descrição da atividade: {this.props.descricao}</p>
        <br />
        <p className="card-nota_texto">Sintoma do dano: {this.props.sintoma}</p>
      </section>
    );
  }
}

export default CardNota;
