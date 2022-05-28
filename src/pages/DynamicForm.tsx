import { Formik, Form } from 'formik';
import { MyTextInput } from '../components';
import formJson from '../data/custon-form.json';
import * as Yup from "yup";

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
    /* validation case format Email  */
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
            onSubmit={(values)=>{}}>
              
            {(formik)=>(
                <Form noValidate>
                    { formJson.map( ({ type, name, placeholder, label }) => {
                        return (
                            <MyTextInput 
                                key={name}
                                name={name} 
                                type={(type as any)} 
                                label={label} 
                                placeholder={placeholder}/>
                        )
                    })}
                         <button type='submit'> SUBMIT </button>
                </Form>
            )}
        </Formik>
    </div>
  )
}


