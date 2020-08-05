import React from 'react'
import FadeIn from 'react-fade-in'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
//css
import './styles.css'
//Images
import logoImg from '../../assets/logo.png'

export default function ForgetPassword() {
    return (
        <div className="forget-container">
            <FadeIn>
                <div className="content">
                    <section>
                        <img src={logoImg} alt="D'Avó" />
                        <h1>Esqueceu a senha?</h1>
                        <p>Ops... Tentou entrar e esqueceu a senha?</p>
                        <Link to="/" className="back-link">
                            <FiArrowLeft size={16} color="#E02041" />
                Ir para Login
            </Link>
                    </section>
                    <form>
                        <input
                            placeholder="Insira seu email" />

                        <button className="button">Resgatar</button>
                    </form>
                </div>
            </FadeIn>
        </div>
    )
}
