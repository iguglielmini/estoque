import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
//css
import './styles.css'
//Icons
import InfoIcon from '@material-ui/icons/Info';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

//Api
import api from '../../services/api'

export default function EstoqueStatus() {
    const [product, setProduct] = useState([]);
    const [promocao, setPromocao] = useState([]);


    useEffect(() =>{
        api.get('product').then(response =>{
             setProduct( response.data.length);
            console.log('Product Headers', response.data.length)
        })
        api.get('promocao').then(response =>{
            setPromocao(response.data.length);
            console.log('Promocao Header', response.data.length);
        })
    })



    return (
        <div className="estoque-dados">
            <div className="container-estoque">
                <Paper>
                    <div className="conteudo-paper-estoque">
                        <div className="conteudo-estoque-dados">
                            <h3>Produtos Cadastrado</h3>
                            <h1>{product}</h1>
                        </div>
                        <div className="icon-color-1">
                            <BusinessCenterIcon
                                className="icons-ajustes" />
                        </div>
                    </div>
                    <hr />
                    <Link
                        to="/produtos"
                        className="btn-saiba-mais">
                        <InfoIcon />
                        Saiba mais
                    </Link>
                </Paper>
            </div>

            <div className="container-estoque">
                <Paper>
                    <div className="conteudo-paper-estoque">
                        <div className="conteudo-estoque-dados">
                            <h3>Promoções Cadastrada</h3>
                            <h1>{promocao}</h1>
                        </div>
                        <div className="icon-color-1">
                            <AddShoppingCartIcon
                                className="icons-ajustes" 
                                style={{paddingTop: 4}}/>
                        </div>
                    </div>
                    <hr />
                    <Link
                        to="/promocao"
                        className="btn-saiba-mais">
                        <InfoIcon />
                        Saiba mais
                    </Link>
                </Paper>
            </div>


            <div className="container-estoque">
                <Paper>
                    <div className="conteudo-paper-estoque">
                        <div className="conteudo-estoque-dados">
                            <h3>Promoções Ativas</h3>
                            <h1>{promocao}</h1>
                        </div>
                        <div className="icon-color-1">
                            <AddShoppingCartIcon
                                className="icons-ajustes" 
                                style={{paddingTop: 4}}/>
                        </div>
                    </div>
                    <hr />
                    <Link
                        to="/promocao"
                        className="btn-saiba-mais">
                        <InfoIcon />
                        Saiba mais
                    </Link>
                </Paper>
            </div>
        </div>
    )
}
