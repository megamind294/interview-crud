import { useContext } from "react";
import "../Assets/css/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ToastContext from "../context/ToastContext";

const Navbar = ({ title = "Interview Masters" }) => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const { toast } = useContext(ToastContext);

  return (
    <nav className="navbar navbar-expand-lg color-set ">
      <div className="container-fluid">
        <Link to="/" className="under">
          <a className="underline-re">{title}</a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ms-auto">
            {user ? (
              <>
                <div className="d-flex justify-content-center align-items-center">
                  <li className="nav-item">
                    <Link to="/mycontacts" className=" under" >
                      <a className="underline-re">All Contacts</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/create" className="under">
                      <a className="underline-re">Create</a>
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => {
                      setUser(null);
                      localStorage.clear();
                      toast.success("Logged out.");
                      navigate("/login", { replace: true });
                    }}
                  >
                    <button className="btn btn-danger">Logout</button>
                  </li>
              </div>
                </>

            ) : (
            <>
              <li className="nav-item">
                <Link to="/login" className="under">
                  <a className="underline-re">Login</a>
                </Link>
              </li>
              <li className="nav-item" >
                <Link to="/register" className="under">
                  <a className="underline-re">Register</a>
                </Link>
              </li>
            </>
            )}
          </ul>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
