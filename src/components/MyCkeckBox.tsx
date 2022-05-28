import { ErrorMessage, useField } from "formik";

/*  useField es un Hook que recibe las Props y permite destructurarlas 
    Los componentes ahora implementan una interface (para tipar los argumentos que se van a recibir y mandar)   */

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const MyCheckbox = ({ label, ...props }: Props) => {
  const [field] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
