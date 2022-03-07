import React, { Component } from "react";
import "./formulario.css";
class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.empresa = "";
    this.equipamento = "";
    this.solicitante = "";
    this.maquina = "";
    this.data = "";
    this.manutencao = "";
    this.profissional = "";
    this.descricao = "";
    this.sintoma = "";
  }

  _handleEmpresa(evento) {
    this.empresa = evento.target.value;
  }

  _handleEquipamento(evento) {
    this.equipamento = evento.target.value;
  }

  _handleSolicitante(evento) {
    this.solicitante = evento.target.value;
  }

  _handleMaquina(evento) {
    this.maquina = evento.target.value;
  }

  _handleData(evento) {
    this.data = evento.target.value;
  }

  _handleManutencao(evento) {
    this.manutencao = evento.target.value;
  }

  _handleProfissional(evento) {
    this.profissional = evento.target.value;
  }

  _handleDescricao(evento) {
    this.descricao = evento.target.value;
  }

  _handleSintoma(evento) {
    this.sintoma = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(
      this.empresa,
      this.equipamento,
      this.solicitante,
      this.maquina,
      this.data,
      this.manutencao,
      this.profissional,
      this.descricao,
      this.sintoma
    );
  }

  render() {
    return (
      <form className="formulario" onSubmit={this._criarNota.bind(this)}>
        <div className="item-formulario">
          <legend className="legenda">Empresa contratante</legend>
          <input
            type="text"
            placeholder="Empresa contratante"
            onChange={this._handleEmpresa.bind(this)}
          />
        </div>

        <div className="item-formulario">
          <legend className="legenda">Equipamento</legend>
          <input
            type="text"
            placeholder="Equipamento"
            onChange={this._handleEquipamento.bind(this)}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Nome do solicitante"
            onChange={this._handleSolicitante.bind(this)}
          />
        </div>

        <div>
          <legend>Maquina parada?</legend>
          <input
            type="radio"
            name="Maquina"
            value="Sim"
            onChange={this._handleMaquina.bind(this)}
          />
          <label for="Maquina">Sim</label>
          <input
            type="radio"
            name="Maquina"
            value="Não"
            onChange={this._handleMaquina.bind(this)}
          />
          <label for="Maquina">Não</label>
        </div>

        <div>
          <input type="date" onChange={this._handleData.bind(this)} />
        </div>

        <div>
          <legend>Tipo de manutenção</legend>
          <input
            type="radio"
            name="manutencao"
            value="Preventiva"
            onChange={this._handleManutencao.bind(this)}
          />
          <label for="manutencao">Preventiva</label>
          <input
            type="radio"
            name="manutencao"
            value="Preditiva"
            onChange={this._handleManutencao.bind(this)}
          />
          <label for="manutencao">Preditiva</label>
          <input
            type="radio"
            name="manutencao"
            value="Corretiva"
            onChange={this._handleManutencao.bind(this)}
          />
          <label for="manutencao">Corretiva</label>
        </div>

        <div>
          <input
            type="text"
            placeholder="Nome do profissional"
            onChange={this._handleProfissional.bind(this)}
          />
          <textarea
            rows={5}
            placeholder="Descreva o que foi realizado"
            onChange={this._handleDescricao.bind(this)}
          />
        </div>

        <div>
          <h3>Sintoma do dano</h3>
          <input
            type="checkbox"
            name="sintoma"
            value="Vibração"
            onChange={this._handleSintoma.bind(this)}
          />
          <label for="sintoma">Vibração</label>

          <input
            type="checkbox"
            name="sintoma"
            value="Ruido excessivo"
            onChange={this._handleSintoma.bind(this)}
          />
          <label for="sintoma">Ruido excessivo</label>

          <input
            type="checkbox"
            name="sintoma"
            value="Travamento"
            onChange={this._handleSintoma.bind(this)}
          />
          <label for="sintoma">Travamento</label>

          <input
            type="checkbox"
            name="sintoma"
            value=""
            onChange={this._handleSintoma.bind(this)}
          />
          <label for="sintoma">Alta velocidade</label>

          <input
            type="checkbox"
            name="sintoma"
            value=""
            onChange={this._handleSintoma.bind(this)}
          />
          <label for="sintoma">Baixa velocidade</label>

          <input
            type="checkbox"
            name="sintoma"
            value=""
            onChange={this._handleSintoma.bind(this)}
          />
          <label for="sintoma">Alta temperarura</label>

          <input
            type="checkbox"
            name="sintoma"
            value=""
            onChange={this._handleSintoma.bind(this)}
          />
          <label for="sintoma">Baixa temperatura</label>

          <input
            type="checkbox"
            name="sintoma"
            value=""
            onChange={this._handleSintoma.bind(this)}
          />
          <label for="sintoma">Função intermitente</label>

          <input
            type="checkbox"
            name="sintoma"
            value=""
            onChange={this._handleSintoma.bind(this)}
          />
          <label for="sintoma">Produz fora do padrão</label>

          <input
            type="checkbox"
            name="sintoma"
            value=""
            onChange={this._handleSintoma.bind(this)}
          />
          <label for="sintoma">Equipamento parado</label>

          <input
            type="checkbox"
            name="sintoma"
            value=""
            onChange={this._handleSintoma.bind(this)}
          />
          <label for="sintoma">Inoperante</label>

          <input
            type="checkbox"
            name="sintoma"
            value=""
            onChange={this._handleSintoma.bind(this)}
          />
          <label for="sintoma">Quebrado</label>

          <input
            type="checkbox"
            name="sintoma"
            value=""
            onChange={this._handleSintoma.bind(this)}
          />
          <label for="sintoma">Sem segurança</label>
        </div>

        <button className="botao">Criar nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
