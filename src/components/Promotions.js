import React from 'react'
import study from "../assets/img/beneficio-educacion.png";
import foreign from "../assets/img/3-cuotas-en el exterior.svg"
import macromercado from "../assets/img/beneficio-macromercado.png"

const Promotions = () => {
    return (
        <div className='container container-flex promotions'>
            <h1 className='section-title'>Descubrí nuestras promociones destacadas</h1>
            <div className='promotion-item'>
                <img src={study} />
                <div className='benefit-text'>
                    <h2>Estudiá y desarrollate como profesional</h2>
                    <p>Accedé a beneficios en las mejores instituciones educativas.</p>
                    <a href=''>Conocé más</a>
                </div>
            </div>
            <div className='promotion-item'>
                <img src={foreign} />
                <div className='benefit-text'>
                    <h2>3 cuotas en el exterior</h2>
                    <p>Comprá en el exterior con tu OCA en 3 cuotas.</p>
                    <a href=''>Conocé más</a>
                </div>
            </div>
            <div className='promotion-item'>
                <img src={macromercado} />
                <div className='benefit-text'>
                    <h2>Macromercado</h2>
                    <p>Accedé a la mejor escala de precios del Macro.</p>
                    <a href=''>Conocé más</a>
                </div>
            </div>
        </div>
    )
}

export default Promotions