import React, { Component } from "react";
import CardNota from "../CardNota/";
import "./listadenotas.css";

class ListaDeNotas extends Component {
 
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota empresa={nota.empresa} equipamento={nota.equipamento} observacao={nota.observacao}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
