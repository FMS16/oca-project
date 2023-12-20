import React from 'react'
import logo from "../assets/img/logo-oca-footer.svg"
import ig from "../assets/img/instagram.svg"
import yt from "../assets/img/youtube.svg"
import fb from "../assets/img/facebook.svg"
import ln from "../assets/img/linkedin.svg"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='first-footer'>
                <div className='first-footer__item'>
                    <img src={logo} />
                </div>
                <div className='first-footer__item'>
                    <div className='first-footer__list'>
                        <span className='bold'>Productos</span>
                        <ul>
                            <li><a href=''>Tarjetas de crédito</a></li>
                            <li><a href=''>Cuenta OCA Blue</a></li>
                            <li><a href=''>Préstamos</a></li>
                            <li><a href=''>Seguros</a></li>
                            <li><a href=''>Tarjetas de regalo</a></li>
                        </ul>
                    </div>
                    <div className='first-footer__list'>
                        <div>
                            <span>Beneficios</span>
                            <ul>
                                <li><a href=''>Promociones</a></li>
                                <li><a href=''>Espectáculos</a></li>
                                <li><a href=''>Educación</a></li>
                            </ul>
                        </div>
                        <div>
                            <a className='bold' href=''>Metraje</a>
                            <div className='br'></div>
                            <span className='bold'>Servicios</span>
                            <div className='br'></div>
                            <ul>
                                <li><a href=''>Canales digitales</a></li>
                                <li><a href=''>Débitos automáticos</a></li>
                                <li><a href=''>Préstamos</a></li>
                                <li><a href=''>STM</a></li>
                                <li><a href=''>Pagá con tu app OCA</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='first-footer__list'>
                        <div>
                            <a className='bold' href=''>Seguridad digital</a>
                            <div className='br'></div>
                            <span className='bold'>Atención al cliente</span>
                            <div className='br'></div>
                            <ul>
                                <li><a href=''>Preguntas frecuentes</a></li>
                                <li><a href=''>Sucursales</a></li>
                                <li><a href=''>Contacto OCA SA</a></li>
                                <li><a href=''>Contacto OCA Dinero Electrónico SA</a></li>
                            </ul>
                            <a className='bold' href=''>Comercios</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='second-footer'>
                <div className='flex-container'>
                    <div className='second-footer__item'>
                        <h2>Casa Central</h2>
                        <p>Colonia 1426. Montevideo, Uruguay</p>
                    </div>
                    <div className='second-footer__item'>
                        <ul>
                            <li><a href=''>Protección de datos y documentación personal</a></li>
                            <li><a href=''>Factura electrónica</a></li>
                            <li><a href=''>Reclamos</a></li>
                        </ul>
                    </div>
                    <div className='second-footer__item'>
                        <span className='bold'>Atención al cliente</span>
                        <div className='br'></div>
                        <span>1730</span>
                        <div className='br'></div>
                        <span className='bold'>Whatsapp</span>
                        <div className='br'></div>
                        <span>098 331 730</span>
                        <div className='br'></div>
                    </div>
                    <div className='second-footer__item social-media__footer'>
                        <a href=''><img src={fb} /></a>
                        <a href=''><img src={yt} /></a>
                        <a href=''><img src={ig} /></a>
                        <a href=''><img src={ln} /></a>
                    </div>
                </div>
                <div className='nav-footer'>
                    <a href=''>Politica de privacidad</a>
                    <a href=''>Ética</a>
                    <a href=''>Código de buenas prácticas</a>
                    <a href=''>Informe anual de Gobierno Corporativo</a>
                </div>
                <span className='copyrights'>©2022 OCA S.A. Todos los derechos reservados. OCA S.A. comercializa OCA Blue que pertenece a OCA Dinero Electrónico S.A. empresa independiente de OCA S.A. y ambas reguladas por el BCU.</span>
            </div>
        </footer>
    )
}

export default Footer