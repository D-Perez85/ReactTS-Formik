import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import "../styles/styles.css";
import Swal from 'sweetalert2'


export const RegisterPage = () => {
  const [button, setButton] = useState(true); 
  const [registerData, setRegisterData] = useState({ name: "", email: "", password1: "", password2: ""});
  const { name, email, password1, password2} = registerData;
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
            setRegisterData(prev=>({...prev, [event.target.name]: event.target.value})); 
        };

const onSubmit = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault(); 
    setRegisterData({ name: "", email: "", password1: "", password2: ""})
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Succesful Login',
        showConfirmButton: false,
        timer: 1500
      })
}

    useEffect(() => {
            if (name.length > 3 && email.length > 3 
                && password1 !== "password" && password1.includes(".")
                && password2 === password1)
            {setButton(false);
                } else {
            setButton(true);
                }
            }, [name, email, password1, password2]);
    return (
        <div>
          <h1>Register Page</h1>
          <form onSubmit={  onSubmit }>
              <h5>Name and Email must contain more than 3 characters. 
                  <br/> Password must be different of "password"
                  <br/>Password must must contain at least one "." 
                  <br/> You must repeat the same password in both lockers
              </h5>
            <input
              type="text"
              name='name'
              placeholder="Name"
              value={name}
              onChange={(ev)=>onChange(ev)}/>
           <input
              type="email"
              name='email'
              placeholder="Email"
              value={email}
              onChange={onChange}/>
            <input
              type="password"
              name='password1'
              placeholder="Password"
              value={password1}
              onChange={onChange}/>
            <input
              type="password"
              name='password2'
              placeholder="Repeat Password"
              value={password2}
              onChange={onChange}/>
            <button type="submit" disabled={button} className={button ? "" : "validate"}>SUBMIT</button>
          </form>
        </div>
      );
    };