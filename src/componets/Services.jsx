import { useState } from "react";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      name: "Resto Bar",
      description:
        "Disfruta de nuestro bar con deliciosos platos y servicio al cuarto.",
      image: "./bar.JPG",
    },
    {
      id: 2,
      name: "Recepción",
      description:
        "Recepción 24 horas, Cambio de divisas, Servicio de habitaciones, Asistencia en excursiones / Servicio de entradas",
      image: "./recepcion.jpg",
    },
    {
      id: 3,
      name: "Comedor",
      description: "Bar de aperitivos.",
      image: "./comedor.jfif",
    },
    {
      id: 4,
      name: "Recepción",
      description:
        "Recepción 24 horas, Cambio de divisas, Servicio de habitaciones, Asistencia en excursiones / Servicio de entradas",
      image: "./recepcion.jpg",
    },
    // Add more service data as needed
  ];

  const [showAllServices, setShowAllServices] = useState(false);
  const servicesToShow = showAllServices
    ? serviceData
    : serviceData.slice(0, 2);

  return (
    <>
      <section className="py-5 bg-gris">
        <div className="container ">
          <h2 className="text-center mb-4 w-100 text-dark logo">
            Servicios Exclusivos
          </h2>
          <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4">
            {servicesToShow.map((service) => (
              <div className="col p-0 ps-3" key={service.id}>
                <div className="card h-100 border-0 shadow">
                  <img
                    src={service.image}
                    className="card-img-top rounded-top"
                    alt={service.name}
                  />
                  <div className="card-body bg-white rounded-bottom">
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {serviceData.length > 3 && (
            <div className="d-flex justify-content-center mt-3 ">
              <button
                className="btn btn-primary "
                onClick={() => setShowAllServices(!showAllServices)}
              >
                {showAllServices ? "Ocultar" : "Ver más"}
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Services;
