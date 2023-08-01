const Services = () => {
  // Sample data for services
  const serviceData = [
    {
      id: 1,
      name: "Resto Bar",
      description:
        "Disfruta de nuestro bar con delisioso platos y servicio al cuarto.",
      image: "src/bar.jpg",
    },
    {
      id: 2,
      name: "Recepcion",
      description:
        "Recepción 24, horas Cambio de divisas, Servicio de habitaciones, Asistencia en excursiones / Servicio de entradas",
      image: "src/recepcion.jpg",
    },
    // Add more service data as needed
  ];
  return (
    <>
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Servicios Exclusivos</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {serviceData.map((service) => (
              <div className="col" key={service.id}>
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
        </div>
      </section>
    </>
  );
};

export default Services;
