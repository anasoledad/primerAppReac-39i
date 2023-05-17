import React from "react";

const Titulos = ({nuevoTitulo}) => {
    // console.log(nuevoTitulo)
  return (
    <div>
      <section className="text-center">
        <h1 className="display-4">Prueba de titulo principal</h1>
        <h2 className="display-6">{nuevoTitulo}</h2>
      </section>
    </div>
  );
};

export default Titulos;
