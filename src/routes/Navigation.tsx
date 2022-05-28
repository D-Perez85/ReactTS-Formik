import { BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import {FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage, RegisterPageII, FormikAbstraction, DynamicForm } from "../pages";
import logo from '../logo.svg';

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
            <li>
              <NavLink to="/formik-components" activeClassName="nav-active" exact>Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstraction" activeClassName="nav-active" exact>Formik Abstraction</NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-form" activeClassName="nav-active" exact>Dynamic Form</NavLink>
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
          <Route path="/formik-components">
              <FormikComponents/>
          </Route>
          <Route path="/formik-abstraction">
              <FormikAbstraction/>
          </Route>
          <Route path="/dynamic-form">
              <DynamicForm/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
