import { Formik, Form } from "formik";
import "../styles/styles.css";

const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstractation</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={() => {}}
      >
        {(formik) => <Form></Form>}
      </Formik>
    </div>
  );
};

export default FormikAbstraction;