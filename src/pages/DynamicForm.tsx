import { Formik, Form } from 'formik';
import { MyTextInput, MySelect, MyCheckbox } from '../components';
import formJson from '../data/custon-form.json';
import * as Yup from "yup";
import { Modal } from '../hooks/useSwal';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
  
  if (!input.validations) continue;

  /* The validations are now based on Props - You must define a Schema using Yup.String method  */
  let schema = Yup.string();

  for (const rule of input.validations) {
  /* if the validations exists (Json), the same are asigned in the const Schema */
    if (rule.type === "required") {
      schema = schema.required("Required field");
    }
  /* if the object doesn't contains the values (Json), the setting of params (minLength) by default is done here  */
    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 2,
        `Min of characters must be  ${(rule as any).value || 2}`
      );
    }
    /* validation case maxLength  */
    if (rule.type === "maxLength") {
      schema = schema.max(
        (rule as any).value || 12,
        `Max of characters must be ${(rule as any).value || 12}`
      );
    }
    /* validation case Email format */
    if (rule.type === "email") {
      schema = schema.email(`Invalid format`);
    }
  }
  requiredFields[input.name] = schema;
}

/** validationSchema contains an object of type Yup, who define all the type of dynamic validations  
    That kinds of validations are used like props  */
const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
        <h1> DynamicForm  </h1>
        <Formik         
            initialValues={initialValues}
            validationSchema={validationSchema}
                onSubmit={(values, {resetForm})=>{
                  Modal();
                  resetForm();  
                }}>   
      {(formik) => (
      /* Add of conditional rendering based in JSON document - The page will render only the values provides in that doc
         If one format is not admitted by validationSchema, the render will be return an error by console   */ 
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}/>
                  );
                } else if (type === "select") {
                  return (
                    <MySelect key={name} label={label} name={name}>
                    <option value="">Select an option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              } else if (type === "checkbox") {
                return <MyCheckbox key={name} label={label} name={name}/>;
              }
              throw new Error(`Type: ${type}, its not supported`);
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
        </Formik>
    </div>
  )
}


