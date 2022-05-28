import React from 'react'
import { Formik, Form } from 'formik';
import { MyTextInput } from '../components';
import formJson from '../data/custon-form.json';

export const DynamicForm = () => {
  return (
    <div>
        <h1> DynamicForm  </h1>
        <Formik initialValues={{
              firstName:  '', 
              lastName: ''
          }}
        onSubmit={(values)=>{
            console.log(values)
          }}>
            {(formik)=>(
                <Form>
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


