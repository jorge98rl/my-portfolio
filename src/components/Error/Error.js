import React from 'react'

const Error = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
            <h1 style={{color: 'red'}}>Página no encontrada</h1>
            <p style={{color: 'red'}}>Lo siento, la página que intentas acceder no existe en nuestra web</p>
        </div>
    )
}

export default Error