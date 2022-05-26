import { BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import logo from '../logo.svg';
import { RegisterPage } from "../pages/RegisterPage";
import { RegisterPageII } from "../pages/RegisterPageII";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/register2" activeClassName="nav-active" exact>Register Page II</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
        <Route path="/register">
            <RegisterPage/>
          </Route>
          <Route>
            <RegisterPageII/>
          </Route>          
        </Switch>
      </div>
    </Router>
  );
}
