import "../App.css";
import { useEffect, useState } from "react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="">
        <nav
          id="navbar"
          className={`navbar navbar-dark fixed-top ${
            scrolled ? "scrolled" : ""
          }`}
        >
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
