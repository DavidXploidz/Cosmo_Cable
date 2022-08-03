import { useState } from "react"
import{AiFillFacebook, AiOutlineInstagram, AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import Sucursales from "./components/Sucursales"
import datosSliders from "../data.json"
import FormasPago from "./components/FormasPago"
import Canales from "./components/Canales"
import InternetAltaVelocidad from "./components/InternetAltaVelocidad"
import Cobertura from "./components/Cobertura"
import Paquetes from "./components/Paquetes"
import Footer from "./components/Footer"


function App() {

  const [index, setIndex] = useState(0)
  const {imagen, titulo, id, precio, parrafo1, parrafo2, parrafo3} = datosSliders.sliders[index]

  const checarPosicion = (numero) => {
    if(numero > datosSliders.sliders.length - 1){
      return 0
    }
    if(numero < 0){
      return datosSliders.sliders.length - 1
    }
    return numero
  }

  const handlePrev = () => {
    // console.log('Click en previous');
    setIndex((index) => {
      let newIndex = index - 1
      return checarPosicion(newIndex)
    })
  }

  const handleNext = () => {
      // console.log('Click en next');
    setIndex((index) => {
      let newIndex = index + 1
      return checarPosicion(newIndex)
    })
  }

  return (
    <main>
      <header className="py-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white">
        <div className="container flex flex-col items-center mx-auto md:flex-row md:justify-between">
          <h1 className="text-6xl font-bold">Cosmo <span className="font-normal"> Plus</span></h1>
          <nav>
            <ul className="flex flex-col items-center gap-x-10 gap-y-6 capitalize text-xl md:flex-row mt-10 md:mt-0">
              <li><a className="hover:text-yellow-400 transition-colors hover:cursor-pointer">Paquetes y servicios</a></li>
              <li><a className="hover:text-yellow-400 transition-colors hover:cursor-pointer">quiero contratar</a></li>
              <li><a className="hover:text-yellow-400 transition-colors hover:cursor-pointer text-sky-300">mi cuenta</a></li>
              <li><a className="transition-colors hover:cursor-pointer hover:bg-yellow-500 py-2 px-7 bg-yellow-300 rounded-md text-indigo-800">Pagar en linea</a></li>
              <div className="flex items-center gap-x-10">
                <AiFillFacebook size={35} />
                <AiOutlineInstagram size={35} />
              </div>
            </ul>
          </nav>
        </div>
      </header>

      <section className="slider relative text-white text-center">
        <AiOutlineArrowLeft size={40} className="absolute top-1/2 md:top-1/2 md:left-72 hover:text-gray-400 hover:cursor-pointer hover:transition-colors" onClick={handlePrev} />
        <div className="absolute top-10 left-0 right-0 md:top-1/3 ">
          <p className="text-5xl font-black text-center">{precio}</p>
          <p className="text-center font-semibold text-4xl">{parrafo1}</p>
          <h2 className="text-6xl md:text-9xl ">{titulo}</h2>
          <p className="text-5xl capitalize mt-2">{parrafo2}</p>
          <p className="text-5xl my-5">{parrafo3}</p>
        </div>
        <AiOutlineArrowRight size={40} className="absolute top-1/2 right-0 md:top-1/2 md:right-52 hover:text-gray-400 hover:cursor-pointer hover:transition-colors" onClick={handleNext}  />
        <style jsx="true">{  `
        .slider{
          height: 50rem;
          background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb( 0 0 0 / .7 )), url(${imagen});
          background-size: cover;
          background-position: 50%;
          background-repeat: no-repeat;
        }
        @media (min-width: 768px) {
          .slider{
            height: 85vh;
          }
        }
         
        `
        }
        </style>
      </section>
     
      <Sucursales />

      <FormasPago />

      <Canales /> 

      <InternetAltaVelocidad />

      <Cobertura />
     
      <Paquetes />

      <div className="py-10 container mx-auto flex flex-col justify-between items-center gap-5 text-center md:flex-row md:text-left ">
        <div>
          <h2 className="text-3xl">Sucursal de + + +</h2>
          <h3 className="text-6xl text-indigo-800 font-bold">Cada vez más cerca de ti!</h3>
          <h5 className="text-4xl font-semibold text-gray-400">Durango - Chichuahhua - Zacatecas</h5>
        </div>
        <div>
          <h2 className="text-5xl text-indigo-800">Disfruta los mejores <span className="block font-semibold">servicios para tu hogar</span> </h2>
        </div>
      </div>

      <Footer />
      
    </main>
  )
}

export default App
