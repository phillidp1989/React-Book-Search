import React, {useContext} from "react";
import './style.css'
import { UserContext } from '../../Context/UserState';

function LoginContainer({ children }) {
  
  const { user, setUser } = useContext(UserContext)

  return (
    <div>
      <div className="container login-container">
        <div className="card">
          <div className="card-content">
            <h3>
              <i className="fab fa-google"></i>
              oogle Book Search <i className="fas fa-book"></i>
            </h3>
            <div className="section">
              <p className="lead">The home of all your favourite books</p>
            </div>
            <div className="divider"></div>
            <div className="section">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginContainer;
