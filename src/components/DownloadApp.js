import React from 'react'
import qr from "../assets/img/qr-code.svg"
import "../assets/styles/style.css"

const DownloadApp = () => {
  return (
    <div className='download-app'>
        <div className='item'>
            <h1>Somos OCA</h1>
            <h2>La empresa de servicios finacieros que simplifica tu día a día.</h2>
            <h3>Escaneá el código y descargá la app.</h3>
        </div>
        <div className='item'>
            <p><img src={qr} /></p>
        </div>
    </div>
  )
}

export default DownloadApp