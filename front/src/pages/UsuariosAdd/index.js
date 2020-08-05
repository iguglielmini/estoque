import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import FadeIn from 'react-fade-in'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

//css
import './styles.css'
//icons
import { FiArrowLeft } from 'react-icons/fi'
import AddIcon from '@material-ui/icons/Add';
import api from '../../services/api';



export default function UsuarioAdd() {
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [telefone, setTelefone] = useState();
    const [cpf, setCpf] = useState();
    const [senha, setSenha] = useState();
    const [filial, setFilial] = useState();
    const [perfil, setPerfil] = useState();
    const history = useHistory();

    async function handleCadastroUsuario(e) {
        e.preventDefault();

        const data = { nome, email, telefone, cpf, senha, filial, perfil };
        try {
            
            const response = await api.post('users', data);

            alert(`Seu usuário foi cadastrado!`);

            console.log('Teste aqui', data);
            history.push('/usuarios');
        } catch (err) {
            alert('Falha no cadastro de usuário! Tente Novamente!')
        }
    }
    return (
        <div className="product-container">
            <FadeIn>
                <div className="title-product">
                    <h1>Novo Usuário</h1>

                    <Link to="/usuarios" className="button-adiconar">
                        <FiArrowLeft
                            size={16}
                            color="#fffff" />
           Voltar para Usuários
        </Link>
                </div>
                <div className="inputs-new-user">

                    <form onSubmit={handleCadastroUsuario}>
                        <div className="inputs-add ">
                            <div className="dados-1">
                                <TextField
                                    id="outlined-basic"
                                    className="inputs-pessoais"
                                    label="Nome Completo"
                                    variant="outlined" 
                                    onChange={e => setNome(e.target.value)}
                                    />
                                <TextField
                                    id="outlined-basic"
                                    className="inputs-pessoais"
                                    label="Email"
                                    variant="outlined"
                                    onChange={e => setEmail(e.target.value)} 
                                    />
                                <TextField
                                    id="outlined-basic"
                                    className="inputs-pessoais"
                                    type="number"
                                    label="Telefone"
                                    variant="outlined" 
                                    onChange={e => setTelefone(e.target.value)} />
                                <TextField
                                    id="outlined-basic"
                                    className="inputs-pessoais"
                                    type="number"
                                    label="CPF"
                                    variant="outlined" 
                                    onChange={e => setCpf(e.target.value)} />
                            </div>
                            <div className="dados-1">
                                <Autocomplete
                                    id="combo-box-demo"
                                    className="inputs-pessoais"
                                    options={filialDados}
                                    onChange={(event, value) => setFilial(value.title)}
                                    getOptionLabel={(option) => option.title}
                                    renderInput={(params) => <TextField {...params} label="Filial" variant="outlined"/>}
                                />
                                <Autocomplete
                                    id="combo-box-demo"
                                    className="inputs-pessoais"
                                    options={perfilDados}
                                    onChange={(event, value) => setPerfil(value.title)}
                                    getOptionLabel={(option) => option.title}
                                    renderInput={(params) => <TextField {...params} label="Perfil" variant="outlined" 
                                    onChange={e => setPerfil(e.target.value)}/>}
                                />
                                <TextField
                                    id="outlined-basic"
                                    className="inputs-pessoais"
                                    type="text"
                                    label="Senha"
                                    variant="outlined" 
                                    onChange={e => setSenha(e.target.value)}/>
                            </div>




                            <button className="button-adiconar button-cad-user"
                                type="submit">
                                <AddIcon
                                    size={16}
                                    color="#fffff" />
                                Cadastrar Usuário
                            </button>
                        </div>
                    </form>
                </div>
            </FadeIn>
        </div>
    )
}
const perfilDados = [
    { title: 'Administrador' },
    { title: 'Gerente' },
    { title: 'Atendente' },
];
const filialDados = [
    { title: 'Sede' },
    { title: 'Filial 01' },
    { title: 'Filial 02' },
];