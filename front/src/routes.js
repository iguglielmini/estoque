import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//Pages
import Login from './pages/Login'
import Product from './pages/Product'
import Promocao from './pages/Promocao'
import Usuarios from './pages/Usuarios'
import Dashboard from './pages/Dashboard'
import ProductAdd from './pages/ProductAdd'
import UsuarioAdd from './pages/UsuariosAdd'
import PromocaoAdd from './pages/PromocaoAdd'
import ForgetPassword from './pages/ForgetPassword'
//componente
import SideMenu from './component/SideMenu'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/* Área Externa */}
                <Route path="/" exact component={Login} />
                <Route path="/esqueceu" component={ForgetPassword} />

                {/* Área interna */}
                <div className="area-painel">
                    <SideMenu />
                    <Route path="/dashboard" component={Dashboard} />
                    {/* Produto */}
                    <Route path="/produtos" component={Product} />
                    <Route path="/novoproduto" component={ProductAdd}/>
                    {/* Promocao */}
                    <Route path="/promocao" component={Promocao} />
                    <Route path="/novapromocao" component={PromocaoAdd}/>
                    {/* Usuarios */}
                    <Route  path="/usuarios" component={Usuarios}/>
                    <Route  path="/novousuario" component={UsuarioAdd}/>

                </div>
            </Switch>
        </BrowserRouter>
    )
}
