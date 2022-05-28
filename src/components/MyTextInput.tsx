import { ErrorMessage, useField } from "formik";

/*  useField es un Hook que recibe las Props y permite destructurarlas 
    Los componentes ahora implementan una interface (para tipar los argumentos que se van a recibir y mandar)   */

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: Props) => {
  const [field] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
