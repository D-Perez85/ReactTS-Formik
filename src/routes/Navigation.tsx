import { BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import logo from '../logo.svg';
import {FormikBasicPage} from "../pages/FormikBasicPage";
import FormikYupPage from "../pages/FormikYupPage";
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
            <li>
              <NavLink to="/formik-basic" activeClassName="nav-active" exact>Formik Basic Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" activeClassName="nav-active" exact>Formik Yup</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
        <Route path="/register">
            <RegisterPage/>
          </Route>
          <Route path="/register2">
            <RegisterPageII/>
          </Route>    
          <Route path="/formik-basic">
          <FormikBasicPage/>
          </Route>     
          <Route path="/formik-yup">
          <FormikYupPage/>
          </Route>    
        </Switch>
      </div>
    </Router>
  );
}
