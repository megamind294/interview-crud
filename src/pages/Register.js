import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../Assets/css/navbar.css"
import AuthContext from "../context/AuthContext";
import ToastContext from "../context/ToastContext";

const Register = () => {
  const { toast } = useContext(ToastContext);
  const { registerUser } = useContext(AuthContext);

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !credentials.email ||
      !credentials.password ||
      !credentials.confirmPassword
    ) {
      toast.error("please enter all the required fields!");
      return;
    }

    if (credentials.password !== credentials.confirmPassword) {
      toast.error("password do not match!");
      return;
    }

    const userData = { ...credentials, confirmPassword: undefined };
    registerUser(userData);
  };

  return (
    <>
      <h1 className="text-center pt-5">Create Account</h1>

      <div className="d-flex justify-content-center align-items-center pt-5" >
        <form onSubmit={handleSubmit} className="card p-5 bg-light-subtle">
          <div class="form-group">
            <label for="nameInput" class="form-label mt-4 label-tet ">
              Your Name
            </label>
            <input
              type="text"
              class="form-control"
              id="nameInput"
              name="name"
              value={credentials.name}
              onChange={handleInputChange}
              placeholder="John Doe"
              required
            />
          </div>
          <div class="form-group">
            <label for="emailInput" class="form-label mt-4 label-tet">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="emailInput"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              placeholder="johndoe@example.com"
              required
            />
          </div>
          <div class="form-group">
            <label for="passwordInput" class="form-label mt-4 label-tet">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="passwordInput"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="Enter Password"
              required
            />
          </div>
          <div class="form-group">
            <label for="confirmPassword" class="form-label mt-4 label-tet">
              Confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={credentials.confirmPassword}
              onChange={handleInputChange}
              placeholder="Enter Password"
              required
            />
          </div>
          <input
            type="submit"
            value="Register"
            className="btn btn-primary my-3"
          />
          <p className="label-tet">
            Already have an account ? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>


    </>
  );
};

export default Register;
