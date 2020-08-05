import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
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
import api from '../../services/api';


function createData(name, perfil, email, filial, editar) {
    return { name, perfil, email, filial, editar };
}
// const rows = [
//     createData('Administrador', 'ADM', 'adm@davo.com.br', 'SEDE'),
//     createData('Raimundo Nonato', 'Gerente', 'raimundononato@davo.com.br', 'Filial 01'),
//     createData('Nelson Rodrigues', 'Atendente', 'nelsonrodrigues@davo.com.br', 'Filial 02'),
//     createData('José Rodrigues', 'Atendente', 'nelsonrodrigues@davo.com.br', 'Filial 02'),
//     createData('Junior Oliveira', 'Atendente', 'nelsonrodrigues@davo.com.br', 'Filial 01'),
// ];

export default function Usuarios() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        api.get('users').then(response =>{
            setUsers(response.data)
        });
    })

    async function handleDeleteUsers(id){
        try{
            await api.delete(`users/${id}`)
            setUsers(users.filter(users => users.id !== id))
        }catch(err){
            alert('Erro ao deletar usuário, Tente novamente!');
        }
    }

    return (
        <div className="product-container">
            <FadeIn>
                <div className="title-product">
                    <h1>Usuários</h1>

                    <Link to="/novousuario" className="button-adiconar">
                        <FiPlusCircle
                            size={16}
                            color="#fffff" />
                Adicionar Usuário
            </Link>
                </div>
                <div className="tabela-dados">
                    <TableContainer component={Paper}>
                        <Table aria-label="caption table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Usuários</strong></TableCell>
                                    <TableCell align="center"><strong>Perfil</strong></TableCell>
                                    <TableCell align="center"><strong>Email</strong></TableCell>
                                    <TableCell align="center"><strong>Filial</strong></TableCell>
                                    <TableCell align="right"><strong>Editar</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((users) => (
                                    <TableRow key={users.name}>
                                        <TableCell component="th" scope="row">
                                            {users.nome}
                                        </TableCell>
                                        <TableCell align="center">{users.perfil}</TableCell>
                                        <TableCell align="center">{users.email}</TableCell>
                                        <TableCell align="center">{users.filial}</TableCell>
                                        <TableCell align="right">
                                            {/* <button className="btn-icons"><EditIcon /></button> */}
                                            <button 
                                            className="btn-icons"
                                            onClick={() => handleDeleteUsers(users.id)}
                                            >
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
