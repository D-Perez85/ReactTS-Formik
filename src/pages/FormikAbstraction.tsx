import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyCheckbox, MyTextInput, MySelect } from '../components/index'
import { Modal } from "../hooks/useSwal";
import "../styles/styles.css";

/**  Este Formik importa los components, a los cuales se les pasan Props (ej <MytextInput/>) **/
export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>
      <Formik
        initialValues={{firstName: "", lastName: "", email: "", terms: false, jobType: ""}}
        onSubmit={(values, {resetForm}) => {
              Modal(); 
              resetForm(); 
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
            <MyTextInput label="First Name" name="firstName" placeholder="Damian"/>
            <MyTextInput label="Last Name" name="lastName" placeholder="Perez"/>
            <MyTextInput label="Email Address" name="email" placeholder="user@google.com" type="email"/>
            <MySelect label="Job Type" name="jobType">
                <option value="">Pick something</option>
                <option value="developer">Develper</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-jr">IT Jr.</option>
            </MySelect>
            <MyCheckbox label="Termns & Conditions" name="terms" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};