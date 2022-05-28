import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import "../styles/styles.css";
import {Modal} from "../hooks/useSwal";

/** Formik engloba ahora todo el Form -  Props y Schema de validacion pasan a ser internos del Formik
 *  Components: 
 *      - Form reemplaza al elemento html <form/>
 *      - Field reemplaza al elemento html <input/>
 *      - ErrorMessage reemplaza al elemento <span/>  
**/
export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>
      <Formik
          initialValues={{firstName: "", lastName: "", email: "", terms: false, jobType: ""}}
          onSubmit={(values, { resetForm }) => {
              resetForm(); 
              Modal(); 
          }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Max of characters must be 15")
            .required("Required field"),
          lastName: Yup.string()
            .max(15, "Max of characters must be 15")
            .required("Required field"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required field"),
          terms: Yup.boolean().oneOf([true], "You Must accept the conditions"),
          jobType: Yup.string()
              .notOneOf(["it-jr"], "Invalid option.")
              .required("Required field"),
        })}>
        {(formik) => ( 
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="text" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select">
              <option value="">Pick something</option>
              <option value="developer">Develper</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Jr.</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label>
              <Field name="terms" type="checkbox" />
              Terms and conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

