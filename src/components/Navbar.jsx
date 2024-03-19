// //exportacion por defecto
// const Navbar=()=>{
//     return <h1>Hola</h1>
// }

// export default Navbar //si uso este tipo de exportacion puedo exportar un solo elemento, no puedo tener mas de una export por defecto en un archivo

//exportacion nombrada

import "../styles/Navbar.css";
export const Navbar = () => {
  return (
    <div className="container">
      <h1>Navbar</h1>
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
};
