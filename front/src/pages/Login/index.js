import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api';
//css
import './styles.css'
import FadeIn from 'react-fade-in'
//Images
import logoImg from '../../assets/logo.png'
import banner from '../../assets/banner.jpg'


export default function Login() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try{
            const response = await api.post('sessions', { email, senha });

            localStorage.setItem('email', email);
            localStorage.setItem('senha', senha);
            localStorage.setItem('nome', response.data.nome);
            localStorage.setItem('perfil', response.data.perfil);

            history.push('/dashboard');

            console.log(response.data.nome, response.data.perfil);
        }catch(err){
            alert('Falha no Login, Tente Novamente!')
        }
    }


    return (
        <FadeIn>
            <div className="logon-container">
                <section className="form">
                    <img src={logoImg} alt="D'Avó" />
                    <form onSubmit={handleLogin}>
                        <h1>Faça seu Login</h1>
                        <input
                            placeholder="Insira seu email"
                            value={email}
                            type="email"
                            onChange={e => setEmail(e.target.value)} 
                            required/>
                        <input
                            placeholder="Insira sua senha" 
                            value={senha}
                            type="password"
                            onChange={e => setSenha(e.target.value)}
                            required/>

                        <button className="button" type="submit">
                            Entrar
                            </button>

                        <Link to="/esqueceu" className="back-link">
                            Esqueceu a senha?
                        </Link>
                    </form>
                </section>
                <img src={banner} className="img-login" alt="Banner D'Avó" />
            </div>
        </FadeIn>
    )
}
