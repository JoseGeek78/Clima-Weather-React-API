const string = 'Esto es un texto'
const number = 123456
const array = ['curso React', 'Youtube', 4, 100]
const boolean = true
const funcion = () => 1+1
const objeto = { nombre: "curso JavaScript", duracion: 4 }
const fecha = new Date()


export const PrimerComponente = () => {
  return (
    <h1>{ JSON.stringify(fecha) }</h1>
  )
}
