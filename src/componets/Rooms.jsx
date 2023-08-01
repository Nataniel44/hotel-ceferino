import { useState, useRef } from "react";
import DatePicker from "react-datepicker";
const roomData = [
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

  // Add more room data as needed
];

const Rooms = () => {
  // Referencia a la sección de habitaciones
  const habitacionesSectionRef = useRef(null);

  // Estado para almacenar la fecha de inicio y finalización
  const [fechaInicio, setFechaInicio] = useState(null);
  const [fechaFin, setFechaFin] = useState(null);
  const [habitacionSeleccionada, setHabitacionSeleccionada] = useState(null);

  // Función para manejar el cambio de habitación seleccionada
  const handleHabitacionSeleccionada = (event) => {
    const roomId =
      event.target.value !== "null" ? parseInt(event.target.value) : null;

    // Verificamos si se seleccionó "Todas las habitaciones" (el valor es null)
    const selectedRoom =
      roomId !== null ? roomData.find((room) => room.id === roomId) : null;

    // Actualizamos el estado según corresponda
    setHabitacionSeleccionada(selectedRoom);
  };

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
    <>
      <section className="py-4" ref={habitacionesSectionRef}>
        <div className="container">
          <h2 className="text-center mb-4">Nuestras Habitaciones</h2>
          {/* Agregamos un menú desplegable para seleccionar la habitación */}
          <div className="row mb-4">
            <div className="col">
              <div className="form-group">
                <label htmlFor="habitacionSelect">
                  Selecciona una habitación:
                </label>
                <select
                  id="habitacionSelect"
                  className="form-control"
                  value={
                    habitacionSeleccionada ? habitacionSeleccionada.id : "null"
                  }
                  onChange={handleHabitacionSeleccionada}
                >
                  <option value="null">-- Todas las habitaciones --</option>
                  {roomData.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          {/* Fin del menú desplegable */}

          {/* Mostramos las tarjetas de todas las habitaciones si no hay una habitación seleccionada */}
          {habitacionSeleccionada === null ? (
            <div className="row">
              {roomData.map((room) => (
                <div className="col-6" key={room.id}>
                  {/* Código de la carta de la habitación */}
                  <div className="card h-100 border-0 shadow">
                    <img
                      src={room.image}
                      className="card-img-top rounded-top"
                      alt={room.name}
                    />
                    <div className="card-body bg-light rounded-bottom">
                      <h5 className="card-title">{room.name}</h5>
                      <p className="card-text">{room.description}</p>
                      <p className="card-text fw-bold">${room.price} / noche</p>
                      <div className="row">
                        <div className="col-12 d-flex flex-column align-items-center">
                          {/* DatePicker para seleccionar la fecha de inicio */}
                          <DatePicker
                            selected={fechaInicio}
                            onChange={handleFechaInicioSeleccionada}
                            dateFormat="dd/MM/yyyy"
                            className="mb-3 btn btn-outline-secondary text-primary"
                            placeholderText="Fecha de inicio"
                            minDate={new Date()} // Impide seleccionar fechas anteriores a la fecha actual
                          />

                          {/* DatePicker para seleccionar la fecha de finalización */}
                          <DatePicker
                            selected={fechaFin}
                            onChange={handleFechaFinSeleccionada}
                            className="mb-3 btn btn-dark"
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Fecha de finalización"
                            minDate={fechaInicio} // Impide seleccionar fechas anteriores a la fecha de inicio
                          />

                          {/* Botón de reserva */}
                          <button
                            className="btn btn-primary"
                            onClick={() => reservarHabitacion(room)} // Llamamos a la función y pasamos la habitación seleccionada
                          >
                            Reservar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Fin de la carta de la habitación */}
                </div>
              ))}
            </div>
          ) : (
            // Mostramos solo la tarjeta de la habitación seleccionada
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col" key={habitacionSeleccionada.id}>
                {/* Código de la carta de la habitación seleccionada */}
                <div className="card h-100 border-0 shadow">
                  <img
                    src={habitacionSeleccionada.image}
                    className="card-img-top rounded-top"
                    alt={habitacionSeleccionada.name}
                  />
                  <div className="card-body bg-light rounded-bottom">
                    <h5 className="card-title">
                      {habitacionSeleccionada.name}
                    </h5>
                    <p className="card-text">
                      {habitacionSeleccionada.description}
                    </p>
                    <p className="card-text fw-bold">
                      ${habitacionSeleccionada.price} / noche
                    </p>
                    <div className="row">
                      <div className="col-12 d-flex flex-column align-items-center">
                        {/* DatePicker para seleccionar la fecha de inicio */}
                        <DatePicker
                          selected={fechaInicio}
                          onChange={handleFechaInicioSeleccionada}
                          dateFormat="dd/MM/yyyy"
                          className="mb-3 btn btn-outline-secondary text-primary"
                          placeholderText="Fecha de inicio"
                          minDate={new Date()} // Impide seleccionar fechas anteriores a la fecha actual
                        />

                        {/* DatePicker para seleccionar la fecha de finalización */}
                        <DatePicker
                          selected={fechaFin}
                          onChange={handleFechaFinSeleccionada}
                          className="mb-3 btn btn-dark"
                          dateFormat="dd/MM/yyyy"
                          placeholderText="Fecha de finalización"
                          minDate={fechaInicio} // Impide seleccionar fechas anteriores a la fecha de inicio
                        />
                        {/* ... (Código de DatePicker y botón de reserva) */}

                        {/* Botón de reserva */}
                        <button
                          className="btn btn-primary"
                          onClick={() =>
                            reservarHabitacion(habitacionSeleccionada)
                          } // Llamamos a la función y pasamos la habitación seleccionada
                        >
                          Reservar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Fin de la carta de la habitación seleccionada */}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Rooms;
