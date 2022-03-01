import React, { Component } from "react";
import "./formulario.css";
class FormularioCadastro extends Component {
  constructor(props){
    super(props);
    this.empresa = "";
    this.equipamento = "";
    this.observacao = "";
  }

  _handleEmpresa(evento){
    this.empresa = evento.target.value
  }

  _handleEquipamento(evento){
    this.equipamento = evento.target.value
  }

  _handleObservacao(evento){
    this.observacao = evento.target.value
  }

  _criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.empresa, this.equipamento, this.observacao);
  }

  render() {
    return (
      <form className="formulario" onSubmit={this._criarNota.bind(this)}>
        <div className="item-formulario">
          <legend className="legenda">Empresa contratante</legend>
          <input type="text" placeholder="Empresa contratante" onChange={this._handleEmpresa.bind(this)} />
        </div>
        <div className="item-formulario">
          <legend className="legenda">Equipamento</legend>
          <input type="text" placeholder="Equipamento" onChange={this._handleEquipamento.bind(this)}/>
        </div>
        <div className="item-formulario">
          <legend className="legenda">Observações</legend>
          <textarea placeholder="Observações" onChange={this._handleObservacao.bind(this)}/>
        </div>
        <button className="botao">Criar nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
