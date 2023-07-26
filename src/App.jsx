import './App.css'
import Header from './componets/Header'

function App() {
  
  return (  
    <>
      
      <Header/>
      <div className="container">
      <main>
        <header className="py-5 bg-dark bg-gradient text-white text-center">
          <div className="container">
            <img src="src/2.png" alt="" />
            <h1 className="display-4 text">Ceferino Hotel</h1>
            <p className="lead text">
              Disfruta de unas vacaciones inolvidables en nuestro hotel de lujo
            </p>
          </div>
        </header>
        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-4">Nuestras Habitaciones</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {roomData.map((room) => (
                <div className="col" key={room.id}>
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
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
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

      </main>
      </div>

    </>
    
  )
}
const roomData = [
  {
    id: 1,
    name: 'Habitacion Deluxe Con Cama Queen',
    description: 'Amplia habitación.',
    image: 'src/habitaciondeluxe.jfif',
    price: 250,
  },
  {
    id: 2,
    name: 'Habitacion Triple Confort',
    description: 'Suite lujosa con todas las comodidades.',
    image: 'src/tripleconfot.jfif',
    price: 350,
  },
  // Add more room data as needed
];

// Sample data for services
const serviceData = [
  {
    id: 1,
    name: 'Resto Bar',
    description: 'Disfruta de nuestro bar con delisioso platos y servicio al cuarto.',
    image: 'src/bar.jpg',
  },
    {
      id: 2,
      name: 'Recepcion',
      description: 'Recepción 24, horas Cambio de divisas, Servicio de habitaciones, Asistencia en excursiones / Servicio de entradas',
      image: 'src/recepcion.jpg',
    },
  // Add more service data as needed
];
export default App
