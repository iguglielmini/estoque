import React from 'react'
import FadeIn from 'react-fade-in'
import { } from 'react-router-dom'
//css
import './styles.css'
//componente
import EstoqueStatus from '../../component/EstoqueStatus'
import HistoricoProdutos from '../../component/HistoricoProdutos'
import HistoricoPromocao from '../../component/HistoricoPromocao'


export default function Dashboard() {
  return (
    <>
      <FadeIn>
        <div className="estoque-status">
          <EstoqueStatus />
        </div>
        <div className="conteudo-historicos">
          <div className="mr2 ml3">
            <HistoricoProdutos />
          </div>
          <div className="mr2">
            <HistoricoPromocao />
          </div>
        </div>
      </FadeIn>
    </>
  )
}
