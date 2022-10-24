import {  FerramentasDeDetalhe } from "../../shared/components"

import { LayoutBaseDePagina } from "../../shared/layouts"
import { Relatorios } from "../relatorios/Relatorios"


export const Dashboard = () => {
    function handleSubmit(data){
        console.log(data)
      }
    return (
        <LayoutBaseDePagina
            titulo='Página inicial'
            barraDeFerramentas={(
                <FerramentasDeDetalhe mostrarBotaoSalvarEFechar/>
            )}
        >
            <Relatorios />
        </LayoutBaseDePagina>
    )
}