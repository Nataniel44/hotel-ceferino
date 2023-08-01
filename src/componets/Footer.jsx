
const Footer = () => {
  return (
    <>
    <footer className="bg-dark text-white py-3">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <p>
                  &copy; {new Date().getFullYear()} Ceferino Hotel. Todos los
                  derechos reservados.
                </p>
                <a
                  href="https://wa.me/3755390616"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-whatsapp fa-lg text-white p-1"></i>
                </a>
                <a
                  href="https://www.instagram.com/top_one_burgers/"
                  target="_blank "
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram fa-lg text-white p-1"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer