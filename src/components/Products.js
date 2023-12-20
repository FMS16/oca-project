import React from 'react'
import credit from "../assets/img/tarjetas-de-credito.png"
import blue from "../assets/img/cuenta-oca-blue.png"
import secure from "../assets/img/seguros.png"
import loans from "../assets/img/prestamos.png"


const Products = () => {
  return (
    <div className='container products container-flex'>
        <h1 className='section-title'>Nuestros productos</h1>
        <div className='product-item'>
            <img src={credit} />
            <h2>Tarjetas de crédito</h2>
            <p>Elegí una tarjeta internacional con importantes beneficios y el primer año gratis.</p>
            <a href=''>Conocé más</a>
        </div>
        <div className='product-item'>
            <img src={blue} />
            <h2>Cuenta OCA Blue</h2>
            <p>Una cuenta digital gratis, en pesos y en dólares, para mover tu dinero como vos quieras.</p>
            <a href=''>Conocé más</a>
        </div>
        <div className='product-item'>
            <img src={loans} />
            <h2>Préstamos</h2>
            <p>Llevá el efectivo que necesitás de forma segura y 100% online. Con aprobación inmediata y la tasa más conveniente.</p>
            <a href=''>Conocé más</a>
        </div>
        <div className='product-item'>
            <img src={secure} />
            <h2>Seguros</h2>
            <p>Contratá los seguros más convenientes por las empresas líderes del mercado.</p>
            <a href=''>Conocé más</a>
        </div>
    </div>
  )
}

export default Products