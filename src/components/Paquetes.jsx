import React from 'react'
import {AiOutlineWifi, AiFillCloud} from "react-icons/ai"
import {BsTelephoneFill} from "react-icons/bs"

const Paquetes = () => {
  return (
    <section className='bg-indigo-800 pt-10 text-center text-white'>
        <div>
            <h2 className='text-5xl font-bold my-5'>Paquetes de internet</h2>
            <h3 className='text-3xl'>¡Complementa tus actividades!</h3>
        </div>
        <div className='flex flex-col justify-center items-center gap-10 my-10 md:flex-row'>
            <div className='bg-gray-50 rounded-2xl text-gray-800 w-72'>
                <AiOutlineWifi size={50} className="text-blue-800 mx-auto mt-5" />
                <h3 className='text-indigo-800 text-7xl font-bold'>10</h3>
                <h4 className='text-3xl font-bold'>Mbps</h4>
                <p>desd</p>
                <p className='font-bold text-xl mb-5 '>$399 <span className='font-normal'>x mes*</span></p>
            </div>
            <div className='bg-gray-50 rounded-2xl text-gray-800 w-72'>
                <AiOutlineWifi size={50} className="text-blue-800 mx-auto mt-5" />
                <h3 className='text-indigo-800 text-7xl font-bold'>30</h3>
                <h4 className='text-3xl font-bold'>Mbps</h4>
                <p>desd</p>
                <p className='font-bold text-xl mb-5 '>$499 <span className='font-normal'>x mes*</span></p>
            </div>
            <div className='bg-gray-50 rounded-2xl text-gray-800 w-72'>
                <AiOutlineWifi size={50} className="text-blue-800 mx-auto mt-5" />
                <h3 className='text-indigo-800 text-7xl font-bold'>50</h3>
                <h4 className='text-3xl font-bold'>Mbps</h4>
                <p>desd</p>
                <p className='font-bold text-xl mb-5 '>$599 <span className='font-normal'>x mes*</span></p>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-5 md:flex-row'>
            <div>
                <h3 className='text-yellow-300 text-3xl mb-2'>Conectados en tu casa, escuela y trabajo</h3>
                <p>Con un modem inalambrico 5G, asistencia telefónica, <span className='block'>instalación gratuita y descuento por pronto pago.</span> </p>
            </div>
            <button className='flex gap-5 bg-red-500 hover:bg-red-600 p-5 rounded-2xl text-2xl mb-5 md:mb-0'><BsTelephoneFill size={30} />Contratar Ahora*</button>
        </div>
        <div className='flex flex-col justify-center items-center gap-5 md:flex-row'>
            <AiFillCloud size={200} />
            <div>
                <p className='py-5 px-3 bg-white text-red-600 rounded-t-lg font-bold'>BONO $100xMES</p>
                <p className='py-5 px-3 bg-red-600 text-white rounded-b-lg font-bold'>PRONTO PAGO*</p>
                <p className='text-sm'>| Revisa tu fecha de corte</p>
            </div>
        </div>
    </section>
  )
}

export default Paquetes