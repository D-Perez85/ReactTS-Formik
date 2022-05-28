import { ErrorMessage, useField } from "formik";

/*  useField es un Hook que recibe las Props y permite destructurarlas 
    Los componentes ahora implementan una interface (para tipar los argumentos que se van a recibir y mandar)   */

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any;
}

export const MySelect = ({ label, ...props }: Props) => {
  const [field] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
