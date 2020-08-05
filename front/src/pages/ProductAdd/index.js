import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import FadeIn from 'react-fade-in'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

//css
import './styles.css'
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
//image
import produtosImage from '../../assets/produtos.png'
//icons
import { FiArrowLeft } from 'react-icons/fi'
import AddIcon from '@material-ui/icons/Add';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
//api
import api from '../../services/api'


const useStyles = makeStyles((theme) => ({
    root: {
        width: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: green[500],
    },
}));



export default function ProductAdd() {
    const classes = useStyles();
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');
    const [img, setImg] = useState('');
    const usersId = '86dff541';
    const history = useHistory();

    async function handleNewProduct(e) {
        e.preventDefault();
        const data = new FormData();

        data.append('nome', nome);
        data.append('categoria', categoria);
        data.append('preco', preco);
        data.append('descricao', descricao);
        data.append('file', img);

        try {
            await api.post('product', data, {
                headers: {
                    Authorization: usersId,
                    'Content-Type': 'multipart/form-data',
                }
            })
            history.push('/produtos');
        } catch (err) {
            alert('Não foi possivel cadastrar o novo Produto!')
        }
    }



    return (
        <div className="product-container">
            <FadeIn>
                <div className="title-product">
                    <h1>Novo Produtos</h1>

                    <Link to="/produtos" className="button-adiconar">
                        <FiArrowLeft
                            size={16}
                            color="#fffff" />
               Voltar para Produtos
            </Link>
                </div>
                <div className="inputs-new-product">
                    <form onSubmit={handleNewProduct}>
                        <div className="inputs-add">
                            <TextField
                                id="outlined-basic"
                                className="input-nome"
                                label="Nome Produto"
                                variant="outlined"
                                onChange={({ target }) => setNome(target.value)}
                            />
                            <div className="dados-complete">
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={categoriaDados}
                                    getOptionLabel={(option) => option.title}
                                    onChange={(event, value) => setCategoria(value.title)}
                                    style={{ width: 310, paddingRight: 10 }}
                                    renderInput={(params) => <TextField {...params} label="Categoria" variant="outlined" />}
                                />
                                <TextField
                                    id="outlined-basic"
                                    style={{ width: 100 }}
                                    label="Preço"
                                    variant="outlined"
                                    onChange={({ target }) => setPreco(target.value)} />
                            </div>
                            <TextField
                                id="outlined-multiline-static"
                                style={{ width: 420, marginTop: 20 }}
                                label="Descrição do Produto"
                                multiline
                                rows={4}
                                variant="outlined"
                                onChange={({ target }) => setDescricao(target.value)}
                            />
                            <div style={{ marginTop: 20 }}>
                                <TextField
                                    id="outlined-basic"
                                    className="input-nome"
                                    variant="outlined"
                                    type="file"
                                    onChange={({ target }) => setImg(target.files[0])}
                                    style={{ width: 420 }} />

                            </div>
                        </div>
                        <button
                            className="button-adiconar button-card"
                            type="submit">
                            <AddIcon
                                size={16}
                                color="#fffff" />
                                Cadastrar Produto
                            </button>
                    </form>
                    {/* <div className="card">
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        <AddShoppingCartIcon color="#ffffff" />
                                    </Avatar>
                                }
                                title={nome}
                                subheader="Preço: R$ {preco}"
                            />
                            <CardMedia
                                className={classes.media}
                                image=""
                                title="Produto"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p" style={{ marginBottom: 10 }}>
                                    <h3>Categoria:</h3>{categoria}
                              </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" style={{width: 350}}>
                                    <h3>Descrição:</h3>
                                    {descricao}
                              </Typography>
                            </CardContent>
                        </Card>
                    </div> */}
                </div>
            </FadeIn>
        </div>
    )
}

const categoriaDados = [
    { title: 'Alimento Básico' },
    { title: 'Eletrodoméstico' },
    { title: 'Eletrônicos' },
    { title: 'Limpeza' },
    { title: 'Açougue e Peixaria' },
    { title: 'Frescos e Refrigerados' },
    { title: 'Perfumaria' },
];