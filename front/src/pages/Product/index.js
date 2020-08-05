import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import FadeIn from 'react-fade-in'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//css
import './styles.css'
//icons 
import { FiPlusCircle } from 'react-icons/fi'
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
//api
import api from '../../services/api';



export default function Product() {
    const [product, setProduct] = useState([]);
    const history = useHistory();

    useEffect(() => {
        api.get('product').then(response =>{
            setProduct(response.data);
        })
    })

    async function handleDeleteProduct(id) {
        try {
            await api.delete(`product/${id}`)
            setProduct(product.filter(product => product.id !== id));
            alert(`Seu produto foi deletado com Sucesso!`);
            history.push('/produtos');
        } catch (err) {
            alert('Erro ao deletar Produto, Tente Novamente!');
        }
    }




    return (
        <div className="product-container">
            <FadeIn>
                <div className="title-product">
                    <h1>Produtos</h1>

                    <Link to="/novoproduto" className="button-adiconar">
                        <FiPlusCircle
                            size={16}
                            color="#fffff" />
                    Adicionar Produto
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
                                {product.map((product) => (
                                    <TableRow key={product.name}>
                                        <TableCell component="th" scope="row">
                                            {product.nome}
                                        </TableCell>
                                        <TableCell align="right">
                                            {product.categoria}
                                        </TableCell>
                                        <TableCell align="right">
                                          R$  {product.preco}
                                        </TableCell>
                                        <TableCell align="right">
                                            {/* <button className="btn-icons"><EditIcon /></button> */}
                                            <button 
                                            className="btn-icons"
                                            onClick={() => handleDeleteProduct(product.id)}>
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
