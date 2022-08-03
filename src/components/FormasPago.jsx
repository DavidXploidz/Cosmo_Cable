import React from 'react'
import visaImg from '../assets/visa.png'
import masterImg from '../assets/mastercard.png'
import carnerImg from '../assets/carnet.png'
import oxxoImg from '../assets/oxxo.png'
import appstore from '../assets/appstore.png'
import googleplay from '../assets/googleplay.png'


const FormasPago = () => {
  return (
    <section className='py-10'>
        <div className='container mx-auto text-center'>
            <h2 className='text-indigo-700 font-semibold text-6xl'>Formas <span className='font-normal'>de pago</span></h2>
            <div className='grid grid-cols-2 place-items-center gap-5 my-10 md:flex md:justify-center'>
                <img src={visaImg} alt="Imagen de visa" className='h-10' />
                <img src={masterImg} alt="Imagen de master" className='h-10' />
                <img src={carnerImg} alt="Imagen de carnerImg" className='h-10' />
                <img src={oxxoImg} alt="Imagen de oxxo" className='h-10' />
                <img src={appstore} alt="Imagen de appstore" className='h-10' />
                <img src={googleplay} alt="Imagen de googleplay" className='h-10' />
            </div>
            <p className='text-gray-600 w-1/2 text-xl mx-auto'>
                Puedes pagar en cualquier OXXO o descarga nuestra app, también con
                tarjeta de crédito accediendo a nuestro <span className='text-indigo-800 font-semibold'>sistema de pago en linea.</span> 
            </p>
            <button className='py-2 px-10 bg-red-500 text-white rounded-lg mt-10 text-xl hover:bg-red-600'>Pagar en linea</button>
        </div>
    </section>
  )
}

export default FormasPago