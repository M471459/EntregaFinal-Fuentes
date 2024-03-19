import Footer from "./Footer.jsx"

function App() {
  let nombre="Matias"
  
  const sumar=()=>{
    console.log(5+2)
  }
  return <div>
      <h2>Hola {nombre}</h2>
      <button onClick={sumar}>Sumar</button>
      <Footer />
  </div>
}

export default App
