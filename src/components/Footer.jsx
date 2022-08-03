import React from 'react'
import {AiFillFacebook, AiFillInstagram, AiFillYoutube} from "react-icons/ai"
const Footer = () => {
  return (
    <footer className='bg-indigo-800 pt-10'>
      <div className='container mx-auto'>
        <h2 className='text-white text-5xl'>Cosmo Cable</h2> {/*Logo*/}
        <div className='flex flex-col text-center gap-x-40 md:flex-row md:text-left'>
          <div className='w-1/4 mx-auto md:mx-0'>
            <div className='text-white text-sm mb-5'>
              <p className='font-bold text-base'>Direccion:</p>
              <p>
                Blas Corral #360 Sur CP 34000 Durango, Dgo.
                Responsable: Ing. Efraín Villalobos Corral
                ® Derechos reservados Cosmocable S.A. de C.V.
              </p>
            </div>
            <div>
              <p className='text-white font-bold'>Nosotros</p>
              <ul className='text-gray-400 text-sm'>
                <li>Acerca de Cosmocable</li>
                <li>Bolsa de Trabajo</li>
                <li>Ventas</li>
                <li>Canal 15</li>
                <li>Anunciantes</li>
              </ul>
            </div>
            <div className='my-5'>
              <p className='text-white font-bold'>TÉRMINOS LEGALES</p>
              <ul className='text-gray-400 text-sm'>
                <li>Carta de derechos mínimos de los usuarios de los servicios publicos de telecomunicaciones </li>
                <li>Código de prácticas comerciales</li>
                <li>Folio de registro de tarifas</li>
                <li>Lineamientos de telecomunicaciones (DOF)</li>
                <li>Lineamientos de servicio fijo (DOF)</li>
                <li>Contratación</li>
                <li>Cancelación</li>
                <li>Instalación</li>
                <li>Trámites</li>
              </ul>
            </div>
          </div>{/*Fin seccion lado izquirdo 1 */}

          <div>
            <div>
              <p className='text-white font-bold'>Sucursales</p>
              <h4 className='uppercase text-red-600'>Chihuahua</h4>
              <ul className='text-gray-400 text-sm'>
                <li>Aldama</li>
                <li>Guachochi</li>
                <li>La Junta</li>
                <li>Madera</li>
                <li>San Juanito</li>
                <li>Guerrero</li>
                <li>Jimenez</li>
                <li>Ojinaga</li>
                <li>Santa Bárbara</li>
              </ul>
            </div>
            <div>
              <h4 className='uppercase text-red-600'>durango</h4>
              <ul className='text-gray-400 text-sm'>
                <li>Canatlán</li>
                <li>Guadalupe Victoria</li>
                <li>Nuevo Ideal</li>
                <li>Villa Unión</li>
                <li>Rodeo</li>
                <li>Cuencame</li>
                <li>Nombre De Dios</li>
                <li>Fco. I Madero</li>
                <li>El Salto</li>
                <li>Santiago Papasquiaro</li>
                <li>Vicente Guerrero</li>
              </ul>
            </div>
            <div>
              <h4 className='uppercase text-red-600'>zacatecas</h4>
              <ul className='text-gray-400 text-sm'>
                <li>Chalchihuites</li>
              </ul>
            </div>
          </div>{/*Fin seccion izquierda 2 */}

          <div className='flex flex-col'>
            <div>
              <p className='text-white font-bold'>Servicios</p>
              <ul className='text-gray-400 text-sm'>
                  <li>Telefonía Fija</li>
                  <li>Tv por cable</li>
                  <li>Internet</li>
                  <li>Dudas y Soporte</li>
                  <li>Contrataciones</li>
                  <li>Pago de Servicios</li>
                  <li>Preguntas Frecuentes</li>
                </ul>
            </div>
            <div className='my-5'>
              <p className='text-white font-bold'>Formas de Pago</p>
              <ul className='text-gray-400 text-sm'>
                  <li>Visa</li>
                  <li>Master Card</li>
                  <li>Internet</li>
                  <li>Oxxo</li>
                  <li>Carnet</li>
                  <li>App Store</li>
                  <li>Google Play</li>
                </ul>
            </div>
            <div>
              <p className='text-white font-bold'>Otros</p>
              <ul className='text-gray-400 text-sm'>
                  <li>Ifetel</li>
                  <li>Grupo Garza Limón</li>
                  <li>Canal 15 Programación</li>
                  <li>Cosmocarrier</li>
                </ul>
            </div>
          </div>{/*Fin seccion derecha 1*/}

          <div className='flex flex-col text-white'>
            <div>
              <p className=' font-bold'>Contacto</p>
              <div className='flex gap-x-5'>
                <p className='mx-auto'>Gerencia <span className='block text-gray-400'>6181234567</span></p>
                <p className='mx-auto'>Ventas <span className='block text-gray-400'>6181234567</span></p>
              </div>
              <p className=''>atencion@cosmocable.mx</p>
              <div className='flex justify-center items-center gap-5 my-5 md:justify-start'>
                <AiFillFacebook size={30} />
                <AiFillInstagram size={30} />
                <AiFillYoutube size={30} />
              </div>
              <div>
                <p >Soporte / Ayuda <span className='block text-gray-400'>6181234567</span></p>
                <p >Whatsapp <span className='block text-gray-400'>6181234567</span></p>
                <p className='mt-5'>Bolsa de Trabajo</p>
                <p>Soporte Tecnico</p>
              </div>
            </div>
          </div>{/*Fin seccion derecha 2*/}

       
          





        </div>
      </div>{/*Fin container */}
      <div className='p-2 bg-indigo-900 mt-5 text-center text-white'>
        cosmocable.mx
      </div>
    </footer>
  )
}

export default Footer