import "./App.css";
import { useState, useRef } from "react";
import Nav from "./componets/Nav";
import "react-datepicker/dist/react-datepicker.css";
import Rooms from "./componets/Rooms";
import Services from "./componets/Services";
import Footer from "./componets/Footer";

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const roomsRef = useRef(null);

  
  const handleButtonClick = () => {
    setShowHeader(!showHeader);

    if (roomsRef.current) {
      roomsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Nav />
      <main className=" bg-dark  text-white">

        <header className="bg-dark ms-5 me-5 text-white text-center
         vh-100 d-flex justify-content-center
          align-content-center flex-column border-bottom
           border-warning p-5" id="fondo">
          {/* Resto del contenido del header */}
          <div className="bg-dark bg-opacity-75 m-5 border-1 border border-warning ">
            <div className="row justify-content-center bg-secundary">
              <div className="col-6 col-md-12 p-0 d-flex justify-content-center align-content-center w-auto ">
                <img src="./2.png" className="w-100 p-3 shad " alt="" />
              </div>
              <div className="col-md-6 col-sm-12 p-0 d-flex justify-content-center align-content-center w-auto ">
                <h1 className="display-4 logo d-flex justify-content-center align-content-center align-items-center text-warning m-0 w-100 p-3 ">
                  Ceferino Hotel
                </h1>
              </div>
            </div>
            <div className="col-sm-16 p-3">
              <p className=" logo text-black fs-5">
                Disfruta de unas vacaciones inolvidables en nuestro hotel de
                lujo.
              </p>
              <button
                type="button"
                className="btn btn-outline-secondary "
                id="boton"
                onClick={handleButtonClick}
              >
                Hacer Reserva!
              </button>
            </div>
          </div>
        </header>
        {/* Spacer para evitar que el contenido quede oculto detrás del header */}
        <div className="spacer-visible" ></div>
        {/**/}
        <div ref={roomsRef}>
          <Rooms className={showHeader ? "" : "room-list-hidden"} />
        </div>
        <Services />
        <Footer />
      </main>
    </>
  );
}

export default App;
