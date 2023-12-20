import React from 'react'
import logo from "../assets/img/logo-OCA-internas.svg"
import "../assets/styles/style.css"

const Header = () => {
  return (
    <header className='header'>
        <div className='nav'>
            <img src={logo} />
            <ul className='nav-menu'>
                <li><a href=''>Productos</a></li>
                <li><a href=''>Beneficios</a></li>
                <li><a href=''>Metraje</a></li>
                <li><a href=''>Servicios</a></li>
                <li><a href=''>Seguridad digital</a></li>
                <li><a href=''>Atención al cliente</a></li>
                <li><a href=''>Comercios</a></li>
            </ul>
        </div>
        <button className='btn-header btn-blue'>Ingresar a Mi Cuenta</button>
    </header>
  )
}

export default Header