import React from 'react'
import metros from "../assets/img/metros.jpg"
import promociones from "../assets/img/promociones.png"

const Benefits = () => {
    return (
        <div className='container container-flex benefits'>
            <h1 className='section-title'>Estos son algunos de nuestros beneficios</h1>
            <div className='benefit-item'>
                <img src={metros} />
                <div className='benefit-text'>
                    <h2>Metros</h2>
                    <p>Descubrí todas las opciones que tenés con tus Metros: Canjeá productos, experiencias, vales de compra ¡y mucho más!</p>
                    <a href=''>Conocé más</a>
                </div>

            </div>
            <div className='benefit-item'>
                <img src={promociones} />
                <div className='benefit-text'>
                    <h2>Promociones</h2>
                    <p>Con OCA tenés descuentos y beneficios todo el año, en cientos de comercios.</p>
                    <a href=''>Conocé más</a>
                </div>
            </div>
        </div>
    )
}

export default Benefits