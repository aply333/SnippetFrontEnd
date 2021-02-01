import React from "react"
import {useForm} from "react-hook-form";

const SignUp = React.forwardRef(({ style, setLoginDetails,...rest }, ref) => {

    const styles = {
      ...style,
      background: 'white',
      width: "20rem",
      padding: 15,
      borderRadius: 4,
      border:"1px solid #407BC4",
      position: 'absolute',
      boxShadow: '0 3px 6px -2px rgba(0, 0, 0, 0.6)',
      marginLeft: "15%",
    };

    const {register,errors ,handleSubmit} = useForm()


    const  submiteHandler = (data) =>{
        if(data.password === data.SecondPassword){
            setLoginDetails(data)
        }
        else{
            console.log('ERR: Pass mismatch')
        }
    }

    return (
      <div {...rest} style={styles} ref={ref}>
        <h2>Create an Account</h2>
        <form
            style={{
                display: "flex",
                flexFlow: "column"
            }} 
            onSubmit={handleSubmit(submiteHandler)}
        >
            <label>Name:</label>
            <input
                className="formInput"
                placeholder="First, Last or Full"
                type="text"
                name="name"
                ref={register({required: true, maxLength: 26})}
            />
            {errors.multipleErrorInput?.type === "required" && (<p className="errorMessage">A name is required.</p>)}
            {errors.multipleErrorInput?.type === "maxLength" && (<p>Sorry, please Shorten.</p>)}
            <label>User Name:</label>
            <input
                className="formInput"
                placeholder="UserName"
                type="text"
                name="username"
                ref={register({required:true, maxLength:26})}
            />
    
            <label>Email:</label>
            <input
                className="formInput"
                placeholder="email"
                type="email"
                name="email"
                ref={register({required: true})}
            />
            <label>Password:</label>
            <input
                className="formInput"
                placeholder="password"
                type="password"
                name="password"
                ref={register({required: true})}
            />
            <input
                className="formInput"
                placeholder="password again"
                type="password"
                name="secondPassword"
                ref={register({required: true})}
            />
            <label>Terms:</label>
            <input
                name="didAgree"
                style={{marginBottom: "0.3rem"}}  
                type="checkbox"
                ref={register({required:true})}/>
            <button className="primaryButton">Register</button>
        </form>
      </div>
    );
  });

export default SignUp