import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import {Modal} from "../hooks/useSwal";

export const FormikYupPage = () => {
  /**  getFieldProps permite un componente mas limpio de Props - 
       ej onChange, onBlur y value vienen de Formik ahora  
  */ 
  const { handleSubmit, errors, touched, resetForm, getFieldProps } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
      Modal(); 
      resetForm(); 
    },
    //La validacion se hace ahora con un Schema de Yup - 
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Max of characters must be 15")
        .required("Required field"),
      lastName: Yup.string()
        .max(15, "Max of characters must be 15")
        .required("Required field"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required field"),
    }),
  });
  return (
    <div>
      <h1>Formik Yup</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...getFieldProps("firstName")} />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps("lastName")} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email Address</label>
        <input type="email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default FormikYupPage;
