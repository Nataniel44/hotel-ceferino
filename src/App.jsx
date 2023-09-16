// Inside the App.js component
import "./App.css";
import { useState, useRef } from "react";
import Nav from "./componets/Nav";

import Services from "./componets/Services";
import Footer from "./componets/Footer";
import Rooms1 from "./componets/Rooms1";

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const roomsRef = useRef(null);

  const handleButtonClick = () => {
    setShowHeader(!showHeader);

    if (roomsRef.current) {
      roomsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const habitaciones = [
    {
      id: 1,
      name: "Habitacion Deluxe Con Cama Queen",
      description: "Amplia habitación.",
      image: "./habitaciondeluxe.jfif",
      price: 50000,
    },
    {
      id: 2,
      name: "Habitacion Triple Confort",
      description: "Suite lujosa con todas las comodidades.",
      image: "./tripleconfot.jfif",
      price: 50000,
    },
    {
      id: 3,
      name: "Habitacion Deluxe Con Cama Queen",
      description: "Amplia habitación.",
      image: "./habitaciondeluxe.jfif",
      price: 50000,
    },
    {
      id: 4,
      name: "Habitacion Triple Confort",
      description: "Suite lujosa con todas las comodidades.",
      image: "./tripleconfot.jfif",
      price: 50000,
    },

    // Add more room data as needed
  ];
  return (
    <>
      <Nav />
      <main className=" bg-gris  text-white">
        <header
          className="bg-gris text-white text-center
         vh-100 d-flex justify-content-center
          align-content-center flex-column border-bottom
           border-warning "
          id="fondo"
        >
          {/* Resto del contenido del header */}
          <div className="bg-dark bg-opacity-75 rounded p-3 ">
            <div className=" ">
              <img src="./2.png" className="img-fluid  p-1" alt="" />
            </div>
            <div className="shad ">
              <h1 className="text-warning logo m-0 shad">
                Ceferino <span className="text-warning"> Hotel</span>
              </h1>
            </div>

            <div className="col-12 ">
              <p className="text text-light fs-5">
                Disfruta de unas vacaciones inolvidables <br /> en nuestro
                <span className="text-warning"> Hotel de lujo.</span>
              </p>
              <button
                type="button"
                className="btn btn-outline-light text "
                id="boton"
                onClick={handleButtonClick}
              >
                Hacer Reserva!
              </button>
            </div>
          </div>
        </header>
        <section id="porque-elegirnos" className="porque-elegirnos">
          <div className="container text-center text-black  bg-opacity-75 rounded">
            <h2 className="text display-4">¿Por qué elegirnos?</h2>
            <div className="iconos-hotel">
              <div className="icono">
                <img src="./ubi.png" alt="Icono 1" />
                <p>Ubicación céntrica</p>
              </div>
              <div className="icono">
                <img src="./lujo.png" alt="Icono 2" />
                <p>Comodidades de lujo</p>
              </div>
              <div className="icono">
                <img src="./atencion.png" alt="Icono 3" />
                <p>Atención personalizada</p>
              </div>
            </div>
          </div>
        </section>

        <div className="d-flex justify-content-center align-content-center container">
          <div className="row p-2">
            <div ref={roomsRef} className="col-12 col-md-6 col-lg-4 py-5 pb-1">
              <Rooms1 habitaciones={habitaciones} />
            </div>

            {/* Spacer para evitar que el contenido quede oculto detrás del header */}
            {/**/}
            <div className="col-12 col-md-6 col-lg-8 ">
              <Services />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
