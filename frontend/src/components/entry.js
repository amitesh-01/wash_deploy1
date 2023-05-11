import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "../App.css";
import { useState, useEffect } from "react";

function Entry(props) {
  const [data, setData] = useState({
    'type': props.type,
    'name': props.name,
    'color': '',
    'category': '',
    'detail':'',
  });

  useEffect(() => {
    setData({
      'type': props.type,
    'name': props.name,
    'color': '',
    'category': '',
    'detail':'',
    });
  }, [props.type,props.name]);

  const handler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      const response = await fetch("http://localhost:5000/cart", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setData({
        'type': props.type,
      'name': props.name,
      'color': '',
      'category': '',
      'detail':'',
      });
      const result = await response.json();
  };

  return (
    <motion.div
      animate={{ opacity: props.open ? 1 : 0 }}
      className={props.open ? "Example" : "Example1"}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Add details of item
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                props.setOpen(false);
                props.setStyle({});
              }}
            ></button>
          </div>
          <div className="modal-body">
            <form id="cart" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label for="cloth-color" className="col-form-label">
                  Color of Your Cloth:
                </label>
                <input
                  type="text"
                  className="form-control shadow"
                  id="cloth-color"
                  name="color"
                  value={data.color}
                  onChange={handler}
                  required
                />
              </div>
              <div className="mb-3">
                <label for="select-service" className="col-form-label">
                  Category:
                </label>
                <input
                  type="text"
                  className="form-control shadow"
                  id="select-service"
                  name="category"
                  value={data.category}
                  onChange={handler}
                  required
                />
              </div>
              <div className="mb-3">
                <label for="message-text" className="col-form-label">
                  Anything extra we need to know
                </label>
                <textarea
                  className="form-control shadow"
                  id="message-text"
                  name="detail"
                  onChange={handler}
                  value={data.detail}
                ></textarea>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <input
                  type="submit"
                  className="btn btn-primary m-3"
                  name="Send message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/*

    return (
        <>
    <div classNameName={props.modal} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div classNameName="modal-dialog">
                        <div classNameName="modal-content">
                        <div classNameName="modal-header">
                        <h1 classNameName="modal-title fs-5" id="exampleModalLabel">Add details of item</h1>
                        <button type="button" classNameName="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div classNameName="modal-body">
                        <form method="post" action="/cart" id="cart">
                        <div classNameName="mb-3">
                        <label htmlFor="cloth-color" classNameName="col-form-label">Color of Your Cloth:</label>
                        <input type="text" classNameName="form-control" id="cloth-color" name="color" required />
                        </div>
                        <div classNameName="mb-3">
                            <label htmlFor="select-service" classNameName="col-form-label">Category:</label>
                            <input type="text" classNameName="form-control" id="select-service" name="category" required />
                        </div>
                        <div classNameName="mb-3">
                        <label htmlFor="message-text" classNameName="col-form-label">Anything extra we need to know</label>
                        <textarea classNameName="form-control" id="message-text" name="detail"></textarea>
                        </div>
                        </form>
                        </div>
                        <div classNameName="modal-footer">
                        <button type="button" classNameName="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <input type="submit" classNameName="btn btn-primary" name="Send message" /> 
                        </div>
                        </div>
                        </div>
            </div>
            </>
  );
}
*/
export default Entry;
