import "../App.css";
const Nav = () => {
  return (
    <>
      <div className="">
        <nav className="navbar navbar-dark bg-dark fixed-top border-bottom border-warning">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="./logo.jpg"
                alt=""
                width="50"
                height="50"
                className="d-inline-block rounded-circle"
              />
              <span className="navbar-brand mb-0 h1 logo ps-2">
                CEFERINO HOTEL
              </span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
