import { useState } from 'react'

export const WeatherApp = () => {

  const urlBase = 'https://api.openweathermap.org/data/3.0/onecall'
  


const [ciudad, setCiudad] = useState('')
const [dataClima, setDataClima] = useState(null)
  const handleCambioCiudad = (e) => {
   setCiudad(e.target.value)
}

  const handleSubmit = (e) => {
    e.preventDefault()
      if(ciudad.length > 0) fetchClima()
  }

  const fetchClima = async () => {
    try{
      
      const response = await fetch(`${urlBase}?lat=${40.4568}&lon=${-3.4796}&appid=${b4db614ba49fa5f7573dd1a0c0eb3ce8}`)
      const data = await response.json()
      setDataClima(data)
    }catch(error){
      console.error('Ocurrió el siguiente problema: ', error)
    }
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

export default WeatherApp;





    