import { FormikErrors, useFormik } from "formik";
import { Modal } from '../hooks/useSwal';
import "../styles/styles.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!firstName) { 
      errors.firstName = "Required field";
    } else if (firstName.length >= 10 || firstName.length <= 2) {
      errors.firstName = "Must be between 4 and 10 characters or less";
    }

    if (!lastName) {
      errors.lastName = "Required field";
    } else if (lastName.length >= 25 || lastName.length <= 2) {
      errors.lastName = "Must be between 4 and 25 characters or less";
    }

    if (!email) {
      errors.email = "Required field";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };
  
  const { handleChange, values, handleSubmit, errors, touched, handleBlur, resetForm } = useFormik({
      initialValues: { firstName: "", lastName: "", email: ""},
      onSubmit: (values) => { resetForm(); Modal()},
      validate});

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" onBlur={handleBlur} onChange={handleChange} value={values.firstName} />
        {touched.firstName && errors.firstName && ( <span>{errors.firstName}</span> )}
        
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" onBlur={handleBlur} onChange={handleChange} value={values.lastName} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" onBlur={ handleBlur } onChange={handleChange} value={values.email} />
        {touched.email && errors.email && <span>{errors.email}</span>}
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikBasicPage;
