
import OptionEstado from './OptionEstado'


const Sucursales = () => {


  return (
    <section className=' p-5 bg-indigo-800'>
        <div className='container mx-auto flex flex-col items-center gap-x-10 md:flex-row'>
            <h2 className='text-white text-2xl mb-5 md:mb-0'>Tu puerta al entretenimiento</h2>
            <form className='flex flex-col gap-x-10 gap-y-5 md:flex-row'>
                <OptionEstado />
            
                <input type="submit" value="Ver Sucursal" className='bg-yellow-400 px-5 py-2 rounded-md text-indigo-800 font-semibold transition-colors hover:cursor-pointer hover:bg-yellow-500' />
            </form>
        </div>
     
    </section>
  )
}

export default Sucursales