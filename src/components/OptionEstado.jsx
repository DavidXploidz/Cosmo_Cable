import datosEstados from "../../data.json"
import { useState } from "react"

const OptionEstado = () => {

    const [estadoSeleccionado, setEstadoSeleccionado] = useState('');
    const [mostrar, setMostrar] = useState(false);

    

  return (
    <>
        <select className='rounded-md px-10 py-2' id='estados' onChange={e => setEstadoSeleccionado(e.target.value) } >
            <option value="" >Estado</option>
            {datosEstados.estados.map(estado => {
                const {nombre, id, sucursales} = estado;

                return(
                    <option key={id} value={estado.nombre}> {nombre}  </option>
                )
  
            })}
        </select>
        <select id="sucursales" className='rounded-md px-10 py-2' >
            <option value="">Sucursal</option>
            {datosEstados.estados.map(estado => {
                const {nombre, id, sucursales} = estado;
                let datos;

                if(estadoSeleccionado === nombre){
                    datos = sucursales.map(sucursal => (
                        <option key={sucursal}>{sucursal}</option>
                    )); 
                }
                return (
                    datos
                )
            })} 
        </select>
       
    </>
  )
}

export default OptionEstado