import { FormEvent, useState, useEffect } from "react";
import "../styles/styles.css";
import useForm from '../hooks/useForm';
import Swal from 'sweetalert2'

export const RegisterPageII = () => {
const [button, setButton] = useState(true); 

const {onChange, name, email, password1, password2, resetForm, isValidEmail } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: ""
});

const onSubmit = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault(); 
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Succesful Login',
        showConfirmButton: false,
        timer: 1500
    })
    resetForm(); 
}
useEffect(() => {
    if (name && email && password1 === password2) 
    {setButton(false);
        } else {
    setButton(true);
        }
    }, [name, email, password1, password2]);


    return (
        <div>
          <h1>Register Page II </h1>
          <form onSubmit={ onSubmit }>
          <h5>Name must contain more than 3 characters. 
            <br/>Email must have an email format 
            <br/> Password must contain more than 5 characters
            <br/> You must repeat the same password in both lockers
        </h5>
    <input 
        type="text"
        placeholder="Name"
        name="name"
        value={ name }
        onChange={ onChange }
        className={ `${ name.trim().length <= 0 && 'has-error' }` } />
    { name.trim().length <= 0 && <span>Required field</span> }
    { name.trim().length < 4 && name.trim().length > 0 && <span>Must be greater than 3 letters</span> }

    <input 
        type="email"
        placeholder="Email"
        name="email"
        value={ email }
        onChange={ onChange }
        className={ `${ !isValidEmail(email) && 'has-error' }` } />
        { !isValidEmail( email ) &&  <span>Type a valid email</span> }
   
    <input 
        type="password"
        placeholder="Password"
        name="password1"
        value={ password1 }
        onChange={ onChange }/>
    { password1.trim().length <= 0 && <span>Required field</span> }
    { password1.trim().length < 6 && password1.trim().length > 0 && <span>Must be greater than 5 letters</span> }
    
    <input 
        type="password"
        placeholder="Repeat Password"
        name="password2"
        value={ password2 }
        onChange={ onChange }/>
    { password2.trim().length <= 0 && <span>Required field</span> }
    { password2.trim().length > 0 && password1 !== password2 && <span>Both passwords must be equals</span> }
       
    <button type="submit" disabled={button} className={button ? "" : "validate"}> SUBMIT </button>
    </form>
</div>
    );
};