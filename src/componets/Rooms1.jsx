import PropTypes from "prop-types"; // Importa PropTypes
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Room1 = ({ habitaciones }) => {
  // Estado para almacenar la fecha de inicio y finalización
  const [fechaInicio, setFechaInicio] = useState(null);
  const [fechaFin, setFechaFin] = useState(null);

  // Función para manejar el cambio de fecha de inicio
  const handleFechaInicioSeleccionada = (date) => {
    setFechaInicio(date);
  };

  // Función para manejar el cambio de fecha de finalización
  const handleFechaFinSeleccionada = (date) => {
    setFechaFin(date);
  };
  // Estado para almacenar la habitación seleccionada

  // Función para manejar el clic en el botón "Reservar" y redirigir al usuario a WhatsApp con la habitación seleccionada
  const reservarHabitacion = (habitacion) => {
    if (habitacion && fechaInicio && fechaFin) {
      const fechaInicioFormateada = formatDate(fechaInicio);
      const fechaFinFormateada = formatDate(fechaFin);
      const mensaje = `¡Hola! Quiero reservar la habitación "${habitacion.name}" desde el día ${fechaInicioFormateada} hasta el día ${fechaFinFormateada} por $${habitacion.price} / noche.`;
      const numeroWhatsapp = "3755538503"; // Reemplaza con tu número de WhatsApp
      const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(
        mensaje
      )}`;
      window.open(urlWhatsapp);
    }
  };

  const formatDate = (date) => {
    const formattedDate = date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return formattedDate;
  };

  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <ol className="carousel-indicators justify-content-center m-0">
        {habitaciones.map((_, index) => (
          <li
            key={index}
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
          ></li>
        ))}
      </ol>
      <h2 className="text-center mb-4 w-100 text-dark logo">Habitaciones</h2>
      <div className="carousel-inner">
        {habitaciones.map((habitacion, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            data-bs-interval="10000"
          >
            {/* Código de la carta de la habitación */}
            <div className="card border-0 shadow pb-4">
              <img
                src={habitacion.image}
                className="card-img-top rounded-top "
                alt={habitacion.name}
              />

              <div className="card-body bg-light rounded-bottom p-1">
                <h5 className="card-title">{habitacion.name}</h5>
                <p className="card-text">{habitacion.description}</p>
                <p className="card-text fw-bold">${habitacion.price} / noche</p>
                <div className="col-12 d-flex flex-column align-items-center">
                  {/* DatePicker para seleccionar la fecha de inicio */}
                  <DatePicker
                    selected={fechaInicio}
                    onChange={handleFechaInicioSeleccionada}
                    dateFormat="dd/MM/yyyy"
                    className="mb-2 btn btn-outline-dark  w-100"
                    placeholderText="Fecha de inicio"
                    minDate={new Date()} // Impide seleccionar fechas anteriores a la fecha actual
                    readOnly
                  />

                  {/* DatePicker para seleccionar la fecha de finalización */}
                  <DatePicker
                    selected={fechaFin}
                    onChange={handleFechaFinSeleccionada}
                    className="mb-2 btn btn-outline-dark  w-100"
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Fecha de finalización"
                    minDate={fechaInicio} // Impide seleccionar fechas anteriores a la fecha de inicio
                    readOnly
                  />

                  {/* Botón de reserva */}
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => reservarHabitacion(habitacion)} // Llamamos a la función y pasamos la habitación seleccionada
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev "
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon bg-dark rounded"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon bg-dark rounded "
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};

Room1.propTypes = {
  habitaciones: PropTypes.arrayOf(
    PropTypes.shape({
      imagen: PropTypes.string.isRequired,
      titulo: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Room1;
