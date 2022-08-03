import React from 'react'
import durangoImg from "../assets/durango.png"
import chihuahuaImg from "../assets/chihuahua.png"
import zacatecasImg from "../assets/zacatecas.png"

const Cobertura = () => {
  return (
    <section className='grid md:grid-cols-2'>
        <div className='text-center py-10 grid place-content-center my-10'>
            <h2 className='text-5xl text-slate-600 mb-10'>Cobertura</h2>
            <div className='flex flex-col items-center md:flex-row gap-5'>
                <div>
                    <img src={chihuahuaImg} alt="Imagen de Durango" className='h-36' />
                    <h3 className='text-2xl text-slate-700 font-bold'>Chihuahua</h3>
                    <p className='text-xl'>9 ciudades</p>
                </div>
                <div>
                    <img src={durangoImg} alt="Imagen de Durango" className='h-36' />
                    <h3 className='text-2xl text-slate-700 font-bold'>Durango</h3>
                    <p className='text-xl'>11 ciudades</p>
                </div>
                <div>
                    <img src={zacatecasImg} alt="Imagen de Durango" className='h-36' />
                    <h3 className='text-2xl text-slate-700 font-bold'>Zacatecas</h3>
                    <p className='text-xl'>1 ciudades</p>
                </div>
            </div>
        </div>
        <div className='text-center py-10 grid place-content-center  bg-gray-200'>
            <h2 className='text-5xl text-indigo-800 mb-10 font-bold'>Estamos en <span className='block'>3 estados</span></h2>
            <div>
                <h3 className='text-3xl text-gray-600 mb-10'>Revisa nuestra cobertura somos <span className='block'>una empresa en crecimiento</span></h3>
                <p className='text-xl '>Revisa nuestras sucursales disponibles y ¡contrata ya!</p>
                <button className='bg-indigo-800 p-5 rounded-2xl text-white text-xl my-10'>Ciudades Disponibles</button>
                <p>*Los precios y paquetes pueden variar según la ciudad</p>
            </div>
        </div>
    </section>
  )
}

export default Cobertura