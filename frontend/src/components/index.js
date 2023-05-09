import "bootstrap/dist/css/bootstrap.min.css";
import iron from "../img/iron.jpeg";
import dry from "../img/dry clean.jpeg";
import wash from "../img/washing-clothes.jpeg";
import img from "../img/logo.png";
import Entry from "./entry";
import "../App.css";
import Swiper from "./Swiper";
import { useState } from "react";

function Index(props) {
  const [loc, setLoc] = useState("");
  const [style, setStyle] = useState({});
  const [open, setOpen] = useState(false);
  const [type, setType] = useState();
  console.log(props.data);

  const newPage = (e) => {
    setType(e.target.name);
    setOpen(true);
    setStyle({
      filter: "blur(8px)",
    });
  };

  const FindMyLocation = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    const success = (position) => {
      console.log(position);
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const accuracy = position.coords.accuracy;

      const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

      fetch(geoApiUrl)
        .then((res) => res.json())
        .then((data) => {
          setLoc(data.city);
        });
    };

    const error = () => {
      setLoc("Unable to Get location");
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    FindMyLocation();
  };
  let count = 0;

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a href="#" className="navbar-brand mb-0 h1">
            <img
              className="d-line-block align-top"
              src={img}
              alt="logo"
              width="30"
              height="30"
            />
            WASHUP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButtonDark"
                >
                  <li>
                    <a href="#" className="dropdown-item">
                      Complete wash
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Iron
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Dryclean
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item active">
                <a href="#" className="nav-link">
                  Offers
                </a>
              </li>
            </ul>
          </div>
          <form className="d-flex">
            <input
              type="text"
              placeholder="search here"
              className="form-control me-2"
            />
            <button type="submit" className="btn btn-outline-primary">
              search
            </button>
          </form>
          <button
            type="button"
            style={{ margin: "0 0 0 15px" }}
            className="btn btn-outline-primary"
            onClick={() => (window.location.pathname = "/login")}
          >
            Log in
                  </button>
                  
                  <button
            type="button"
            style={{ margin: "0 0 0 15px" }}
            className="btn btn-outline-primary"
            onClick={() => (window.location.pathname = "/cart")}
          >
            Cart
          </button>
        </div>
      </nav>

      <Entry open={open} setOpen={setOpen} setStyle={setStyle} type={type} />
      <div style={style}>
        <div className="container">
          <Swiper />
        </div>

        <div className="container availability-form">
          <div className="row">
            <div className="col-lg-12 bg-white shadow p-4 rounded">
              <h5 className="mb-4">Book A Laundry</h5>
              <form>
                <div className="row align-items-end">
                  <div className="col-lg-3 mb-3">
                    <label
                      className="form-label"
                      style={{ fontWeight: "500 " }}
                    >
                      Current Location
                    </label>
                    <h1 className="status">{loc}</h1>
                    <button
                      type="submit"
                      className="find-state btn btn-outline-primary"
                      onClick={handleSubmit}
                    >
                      use current location
                    </button>
                  </div>
                  <div className="col-lg-3 mb-3">
                    <label
                      className="form-label"
                      style={{ fontWeight: "500 " }}
                    >
                      Select Laundry Location
                    </label>
                    <input type="text" className="form-control shadow-none" />
                  </div>

                  <div className="col-lg-2 mb-3">
                    <button type="submit" className="btn btn-outline-primary">
                      Request Service
                    </button>
                    <button
                      type="submit"
                      className="btn text-white shadow-none custom-bg"
                    >
                      Submit
                    </button>
                  </div>

                  <div className="col-lg-2 mb-3"></div>
                </div>
              </form>
            </div>
          </div>
          <br />
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-4">
              <div className="card">
                <img src={iron} className="card-img-top" alt="Iron" />
                <div className="card-body">
                  <h5 className="card-title">Iron</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aliquam quis temporibus amet quia fugit dicta eligendi
                    itaque? Alias, voluptate veniam. Corporis eum consequuntur
                    deserunt doloribus quasi id voluptatibus, labore officiis!
                  </p>
                  <button
                    type="button"
                    id="click-me"
                    className="btn btn-outline-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    name="iron"
                    onClick={newPage}
                  >
                    Add Details
                  </button>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <img src={dry} className="card-img-top" alt="Dryclean" />
                <div className="card-body">
                  <h5 className="card-title">Dryclean</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aliquam quis temporibus amet quia fugit dicta eligendi
                    itaque? Alias, voluptate veniam. Corporis eum consequuntur
                    deserunt doloribus quasi id voluptatibus, labore officiis!
                  </p>
                  <button
                    type="button"
                    id="click-me"
                    className="btn btn-outline-primary"
                    name="dry clean"
                    onClick={newPage}
                  >
                    Add Details
                  </button>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <img src={wash} className="card-img-top" alt="wash" />
                <div className="card-body">
                  <h5 className="card-title">wash</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aliquam quis temporibus amet quia fugit dicta eligendi
                    itaque? Alias, voluptate veniam. Corporis eum consequuntur
                    deserunt doloribus quasi id voluptatibus, labore officiis!
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    name="wash"
                    onClick={newPage}
                  >
                    Add Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
