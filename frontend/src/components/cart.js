import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { useState,useEffect } from "react";

function Cart() {
  const [user, setUser] = useState([]);

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

  let counter = 1;

  return (
    <div className="m-5">
      <h1 className="text-center">Your Cart</h1>
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
          return (
            <tbody key={key}>
              <tr>
                <td>{ counter}</td>
                <td>{val.type }</td>
                <td>{val.color }</td>
                <td>{val.category }</td>
              </tr>
            </tbody>
            );
            counter++;
        })}
      </Table>
    </div>
  );
}

export default Cart;
