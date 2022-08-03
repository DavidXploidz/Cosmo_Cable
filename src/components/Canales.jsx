import React from 'react'
import familiaImg from "../assets/pexels-cottonbro-4009409.webp"
import llamadaImg from "../assets/pexels-andrea-piacquadio-3760263.webp"
const Canales = () => {
  return (
    <section className='grid content-center items-center md:grid-cols-2 '>
        <div className='grid content-center items-center text-center bg-slate-300 w-full h-96 '>
            <h3 className='text-5xl font-bold text-gray-700'>+100 canales de <span className='block capitalize '>entretenimiento</span> </h3>
            <h4 className='text-2xl font-normal text-gray-700'>+100 canales de <span className='block capitalize '>entretenimiento</span> </h4>
            <p className='text-xl my-2'>Los mejores Canales de televisión <span className='block'>y Navegación por Internet</span></p>
            <button className='mt-5 px-5 py-2 bg-indigo-800 hover:bg-indigo-900 text-white text-xl rounded-2xl mx-auto'>Ver Paquetes</button>  
        </div>
        <div >
            <img src={familiaImg} alt="imagen de familia" className='h-96 w-full' />
        </div>
        <div className='h-96'>
            <img src={llamadaImg} alt="imagen de llamadaImg" className='h-96 w-full' />
        </div>
        <div className='text-center grid content-center items-center bg-slate-300 w-full h-96 '>
            <div className='mx-auto'>
                <h3 className='text-5xl font-bold text-gray-700'>+Telefonia fija</h3>
                <h4 className='text-3xl font-normal text-gray-700 my-2'>Habla lo que quieras,<span className='block'>con quien quieras</span> </h4>
                <p className='w-1/2 mx-auto text-xl'>Llamadas a numeros fijos y celulares con nuestros paquetes de telefonía fija</p>
            </div>

            <button className=' mt-5 px-5 py-2 bg-red-500 text-white text-xl rounded-2xl mx-auto hover:bg-red-600'>Ver Paquetes</button> 
        </div>
        
    </section>
  )
}

export default Canales