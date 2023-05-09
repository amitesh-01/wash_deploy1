import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../img/login-img.svg';
import { useState,useEffect } from 'react';

function Register() {
    const [data, setData] = useState({});
    const [user, setUser] = useState([]);

    useEffect(() => {
        const getUser = async () => {
            const response = await fetch('http://localhost:5000/show', {
                method: 'GET',
            });
            const result = await response.json();
            setUser(result);
        }
        getUser();
    }, []);
    

  const handler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.keys(data).length == 3) {
            if (data.password == data.cpassword) {
                let flag = true;
                user.map((val, key) => {
                    if (data.email == val.email) flag = false;
                })
                if (flag) {
                    const response = await fetch('http://localhost:5000/register', {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    const result = await response.json();
                    window.location.pathname = '/login';
                }
                else window.alert("Gand marao2");
            }
            else window.alert("Gand marao1");
        }
        else {
          window.alert("Gand marao");
        }
      }
  return (
    <div className="Register">
    <section className="d-flex flex-column min-vh-100 justify-content-center algin-items-center">
        <div className="container">
            <div className="row">
                <div className="col-md-10 mx-auto rounded shadow bg-white">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="m-5 text-center">
                                <h1>Register Here</h1>
                            </div>
                            <form className="m-5" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label " htmlFor="email" required >email</label>
                                    <input className="form-control" type="text" id="username" name="email" onChange={handler} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <input className="form-control" type="text" id="password" name="password" onChange={handler} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="confirmpassword">confirm Password</label>
                                    <input className="form-control" type="text" id="confirmpassword" name="cpassword" onChange={handler} required />
                                </div>
                                <div className="row mb-3">
                                    <div>
                                        <input type="submit" name="signupsubmit" className="form-control btn btn-outline-primary mt-4" />
                                    </div>
                                </div>
                                  </form>
                                  <div>
                                      <button onClick={()=>window.location.pathname='/login'} className="btn btn-outline-primary">Login</button>
                                      
                                      <button onClick={() => window.location.pathname = '/'} className="btn btn-outline-primary">Index</button>
                                </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <img src={img} alt="login" className="img-fluid p-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}

export default Register;
