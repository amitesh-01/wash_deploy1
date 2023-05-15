import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { useState,useEffect } from "react";
import cart_banner from "../img/cart_bannerr.png"
import "../App.css";
function Cart() {
  const [user, setUser] = useState([]);
  let count = 0;

  const name = JSON.parse(localStorage.getItem('username'));

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("http://localhost:5000/cart", {
        method: "GET",
      });
      const result = await response.json();
      setUser(result);
    };
    getUser();
  }, []);

  return (
    
    < div className = "m-5" >

      <img src={cart_banner} className="card-img-top m-3 p-3" height={500} width={300} id="cart_ban"/>
      {/* <h1 className="text-center">Your Cart</h1> */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>Type</th>
            <th>Color</th>
            <th>Category</th>
          </tr>
        </thead>
        {
          user.map((val, key) => {
            if (val.name == name) {
              count++;
              return (
                <tbody key={key}>
                  <tr>
                    <td>{count}</td>
                    <td>{val.type}</td>
                    <td>{val.color}</td>
                    <td>{val.category}</td>
                  </tr>
                </tbody>
              );
            }
        })}
      </Table>
      { count ?
        <button className="btn btn-outline-success">Proceed</button>
        : <h1>Empty </h1>
      }
    </div >
  );
}

export default Cart;
