import React, { Component } from "react";
import "./formulario.css";
class FormularioCadastro extends Component {
  constructor(props){
    super(props);
    this.empresa = "";
    this.equipamento = "";
    this.observacao = "";
    this.solicitante = "";
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

  _handleSolicitante(evento){
    this.solicitante = evento.target.value
  }

  _handleMaquina(evento){
    this.maquina = evento.target.value
  }

  _handleData(evento){
    this.data = evento.target.value
  }

  _handleManutencao(evento){
    this.manutencao = evento.target.value
  }

  _criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.empresa, this.equipamento, this.observacao, this.solicitante, this.maquina,
      this.data, this.manutencao);
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
        <div>
          <input type="text" placeholder="Nome do solicitante" onChange={this._handleSolicitante.bind(this)}/>
        </div>
        <div>
          <legend>Maquina parada?</legend>
          <input type="radio" name="Maquina" value="Sim" onChange={this._handleMaquina.bind(this)}/>
          <label for="Maquina">Sim</label>
          <input type="radio" name="Maquina" value="Não" onChange={this._handleMaquina.bind(this)}/>
          <label for="Maquina">Não</label>
        </div>
        <div>
          <input type="date" onChange={this._handleData.bind(this)}/>
        </div>
        <div>
          <legend>Tipo de manutenção</legend>
          <input type="radio" name="manutencao" value="Preventiva" onChange={this._handleManutencao.bind(this)}/>
          <label for="manutencao">Preventiva</label>
          <input type="radio" name="manutencao" value="Preditiva" onChange={this._handleManutencao.bind(this)}/>
          <label for="manutencao">Preditiva</label>
          <input type="radio" name="manutencao" value="Corretiva" onChange={this._handleManutencao.bind(this)}/>
          <label for="manutencao">Corretiva</label>
        </div>
        <button className="botao">Criar nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
