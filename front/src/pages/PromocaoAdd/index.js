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

//icons
import { FiArrowLeft } from 'react-icons/fi'
import AddIcon from '@material-ui/icons/Add';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
//api
import api from '../../services/api'



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
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



export default function PromocaoAdd() {
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [preco, setPreco] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [dataTermino, setDataTermino] = useState('');
    const [descricao, setDescricao] = useState('');
    const [img, setImg] = useState('');
    const usersId = '86dff541';
    const history = useHistory();

    async function handleCadastroPromocao(e) {
        e.preventDefault();
        const data = { nome, categoria, dataInicio, dataTermino, preco, descricao, img };

        try {
            await api.post('product', data, {
                headers: {
                    Authorization: usersId,
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
                <h1>Nova Promoção</h1>

                <Link to="/produtos" className="button-adiconar">
                    <FiArrowLeft
                        size={16}
                        color="#fffff" />
               Voltar para Promoção
            </Link>
            </div>
            <div className="inputs-new-product">
                <form onSubmit={handleCadastroPromocao}>
                    <div className="inputs-add">
                        <TextField
                            id="outlined-basic"
                            className="input-nome"
                            label="Nome Produto"
                            variant="outlined"
                            onChange={e => setNome(e.target.value)} />

                        <div className="dados-complete" style={{ marginBottom: 20 }}>
                            <TextField
                                id="outlined-basic date"
                                style={{ width: 205, paddingRight: 10 }}
                                label="Ínicio"
                                defaultValue="2020-04-17"
                                type="date"
                                onChange={e => setDataInicio(e.target.value)}
                                variant="outlined" />
                            <TextField
                                id="outlined-basic date"
                                style={{ width: 205 }}
                                label="Termíno"
                                defaultValue="2020-04-26"
                                type="date"
                                onChange={e => setDataTermino(e.target.value)}
                                variant="outlined" />
                        </div>
                        <div className="dados-complete">
                            <Autocomplete
                                id="combo-box-demo"
                                options={categoria}
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
                                onChange={e => setPreco(e.target.value)} />
                        </div>
                        <TextField
                            id="outlined-multiline-static"
                            style={{ width: 420, marginTop: 20 }}
                            label="Descrição do Produto"
                            multiline
                            rows={4}
                            onChange={e => setDescricao(e.target.value)}
                            variant="outlined"
                        />
                        <div style={{ marginTop: 20 }}>
                            <TextField
                                id="outlined-basic"
                                className="input-nome"
                                variant="outlined"
                                type="file"
                                onChange={e => setImg(e.target.value)}
                                style={{ width: 420 }} />

                        </div>
                    </div>
                </form>
                {/* 
                    <div className="card">
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        <AddShoppingCartIcon color="#ffffff" />
                                    </Avatar>
                                }
                                title="Nome do produto"
                                subheader="Preço: R$ 00,00"
                            />
                            <CardMedia
                                className={classes.media}
                                image=""
                                title="Produto"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p" style={{ marginBottom: 10 }}>
                                    <h3>Categoria:</h3>Alimento básico
                              </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" style={{ marginBottom: 10 }} className="date-promo">
                                    <div>
                                        <h3>Inicio:</h3>
                                        <p>17/04/2020</p>
                                    </div>
                                    <div>
                                        <h3>Termíno:</h3>
                                        <p>25/04/2020</p>
                                    </div>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <h3>Descrição:</h3>
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                              </Typography>
                            </CardContent>
                            <button className="button-adiconar button-card">
                                <AddIcon
                                    size={16}
                                    color="#fffff" />
                                Cadastrar Produto
                            </button>
                        </Card>
                    </div> */}
            </div>
        </FadeIn>
    </div>
)
}

const categoria = [
    { title: 'Alimento Básico' },
    { title: 'Eletrodoméstico' },
    { title: 'Eletrônicos' },
    { title: 'Limpeza' },
    { title: 'Açougue e Peixaria' },
    { title: 'Frescos e Refrigerados' },
    { title: 'Perfumaria' },
];