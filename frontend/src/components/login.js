import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../img/login-img.svg';
import { useEffect,useState } from 'react';

function Login(props) {
    const [data, setData] = useState([]);
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
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(data).length == 2) {
                let flag = false;
                user.map((val, key) => {
                    if (data.email === val.email) {
                        if (data.password === val.password) {
                            props.setData({ 1: 2 });
                            console.log(props.data)
                            flag = true;
                        }
                    }
                })
                if (flag) {
                    window.location.pathname = '/';
                }
                else window.alert("Gand marao1");
        }
        else {
          window.alert("Gand marao");
        }
      }
  return (
    <div className="Login">
    <section className="d-flex flex-column min-vh-100 justify-content-center algin-items-center">
        <div className="container">
            <div className="row">
                <div className="col-md-10 mx-auto rounded shadow bg-white">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="m-5 text-center">
                                <h1>Welcome</h1>
                            </div>
                            <form className="m-5" method="post" action="/login" id="signupForm" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="email">Username</label>
                                    <input className="form-control" name="email" type="text" id="username" onChange={handler} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <input className="form-control" name="password" type="text" id="password" onChange={handler}  />
                                </div>
                                <div className="row mb-3">
                                    <div className="col-6">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="remember-me" />
                                            <label 
                                            className="form-check-label" htmlFor="remember-me">Remember Me</label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="txt-end">
                                            <a href="#">Forgot Password</a>
                                        </div>
                                    </div>
                                    <div>
                                        <input type="submit" name="submit" className="form-control btn btn-outline-primary mt-4" />
                                    </div>
                                </div>
                                  </form>
                                  <div>
                                      <button onClick={()=>window.location.pathname='/register'} className="btn btn-outline-primary">Register</button>
                                      
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

export default Login;
