import { useState } from 'react'
export const WeatherApp = () => {


const [ciudad, setCiudad] = useState('')
const [dataClima, setdataClima] = useState(null)
  const handleCambioCiudad = (e) => {
   setCiudad(e.target.value)
}

  const handleSubmit = (e) => {
    e.preventDefault()
      if(ciudad.length > 0) fetchClima()
  }


   return (

      <div className="container">

      <h1>Aplicación del clima</h1>

     <form onSubmit={handleSubmit}>
       <input type="text" 
       value={ciudad}
       onChange={handleCambioCiudad}
       />
       <button type='submit'>Buscar</button>
      </form>

    
    </div>
  )
}

export default WeatherApp





    