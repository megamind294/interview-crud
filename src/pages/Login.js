import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../Assets/css/navbar.css"
import AuthContext from "../context/AuthContext";
import ToastContext from "../context/ToastContext";

const Login = () => {
  const { toast } = useContext(ToastContext);
  const { loginUser } = useContext(AuthContext);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!credentials.email || !credentials.password) {
      toast.error("please enter all the required fields!");
      return;
    }

    loginUser(credentials);
  };

  return (
    <>
      <h1 className="text-center pt-5">Login</h1>

      <div className="d-flex justify-content-center align-items-center pt-5">
        <form onSubmit={handleSubmit} className="card p-5 ">
          <div className="form-group">
            <label htmlFor="emailInput" className="form-label mt-4 label-tet">
              Email address
            </label>
            <input
              type="email"
              className="form-control "
              id="emailInput"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              placeholder="johndoe@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordInput" className="label-tet form-label mt-4">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="Enter Password"
              required
            />
          </div>
          <input type="submit" value="Login" className="btn btn-primary my-3" />
          <p className="label-tet">
            Don't have an account ? <Link to="/register">Create One</Link>
          </p>
        </form>
      </div>


    </>
  );
};

export default Login;
