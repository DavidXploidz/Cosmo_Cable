import React from 'react'
import coheteImg from "../assets/cohete.png"
import {BsTelephoneFill} from "react-icons/bs"

const InternetAltaVelocidad = () => {
  return (
    <section className='h-2/3 py-16 bg-gradient-to-r from-blue-500 to-red-500 text-white'>
        <div className='flex justify-center items-center '>
            <div className='flex flex-col items-center gap-x-10 md:flex-row'>
                <div>
                    <h3 className='text-5xl font-bold'>+ Internet de <span className='block capitalize'>alta velocidad</span></h3>
                    <p className='text-2xl'>*Revisa ciudades disponibles</p>
                </div>
               
                <img src={coheteImg} alt="Imagen de cohete" className='h-72' />
            </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-x-10 my-10 md:flex-row'>
            <button className='flex gap-5 bg-indigo-700 hover:bg-indigo-800 p-5 rounded-2xl text-2xl mb-5 md:mb-0'><BsTelephoneFill size={30} />Contratar Ahora*</button>
            <p className='text-2xl'>Conectados en tu casa, <span className='block'>para tu escuela o trabajo</span></p>
        </div>
        <div className='flex'>
            <p className='mx-auto text-center'>Complementa tus actividades diarias con un modem inalambrico 5G, <span className='block'>asistencia telefónica, instalación gratuita y descuento por pronto pago.</span> </p>
        </div>
      
    </section>
  )
}

export default InternetAltaVelocidad