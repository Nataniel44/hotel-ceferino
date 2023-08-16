import './App.css'
import Nav from './componets/Header';


function App() {
  
  return (  
    <>
      
      <Nav/>
      <main className='bg-dark text-light vh-100 '>
        
      </main>
      
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
