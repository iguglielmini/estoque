import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
//css
import './styles.css';
import FadeIn from 'react-fade-in';
//icons 
import { FiPlusCircle } from 'react-icons/fi'
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
//api
import api from '../../services/api';



function createData(name, categoria, preco, editar) {
    return { name, categoria, preco, editar };
}
const rows = [
    createData('Coca-Cola 3 Litros', 'Alimento', 'R$ 9,80'),
    createData('Arroz Bom biju 1kg', 'Alimento', 'R$ 3,80'),
];

export default function Promocao() {
    const [promocao, setPromocao] = useState([]);
   
    useEffect(() => {
        api.get('promocao').then(response =>{
            setPromocao(response.data);
        })
    })

    async function handleDeletePromocao(id){
        try{
            await api.delete(`promocao/${id}`)
            setPromocao(promocao.filter(promocao => promocao.id !== id));
        } catch(err) {
            alert('Erro ao deletar Promoção, Tente Novamente!');
        }
    }

    return (
        <div className="product-container">
            <FadeIn>
                <div className="title-product">
                    <h1>Promoção</h1>

                    <Link to="/novapromocao" className="button-adiconar">
                        <FiPlusCircle
                            size={16}
                            color="#fffff" />
                    Adicionar Promoção
                </Link>
                </div>
                <div className="tabela-dados">
                    <TableContainer component={Paper}>
                        <Table aria-label="caption table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Produto</strong></TableCell>
                                    <TableCell align="right"><strong>Categoria</strong></TableCell>
                                    <TableCell align="right"><strong>Preço</strong></TableCell>
                                    <TableCell align="right"><strong>Editar</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {promocao.map((promocao) => (
                                    <TableRow key={promocao.name}>
                                        <TableCell component="th" scope="row">
                                            {promocao.nome}
                                        </TableCell>
                                        <TableCell align="right">{promocao.categoria}</TableCell>
                                        <TableCell align="right">
                                            R$ {promocao.preco}
                                            </TableCell>
                                        <TableCell align="right">
                                            {/* <button className="btn-icons"><EditIcon /></button> */}
                                            <button 
                                            className="btn-icons"
                                            onClick={() => handleDeletePromocao(promocao.id)}>
                                                <DeleteForeverIcon />
                                                </button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </FadeIn>
        </div>

    )
}
