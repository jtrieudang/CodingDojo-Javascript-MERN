import React from 'react';

const Forms = (props) =>{
    const{inputs, setInputs} = props;

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    };

    return(
        <form>
            <div className="form-group"> onSubmit={(e)=> e.preventDefault()}>
            <label htmlFor='firstName'>First Name:</label>
            <input onChange={onChange} type="text" name="firstName" />
            {inputs.firstName.length <2 ? "Your first name must be at least 2 characters." : ""} 
            </div>

            <div className="form-group">
            <label htmlFor='lastName'>Last Name:</label>
            <input onChange={onChange} type="text" name="lastName" />
            {inputs.lastName.length <2 ? "Your last name must be at least 2 characters." : ""} 
            </div>

            <div className="form-group">
            <label htmlFor='email'>Email:</label>
            <input onChange={onChange} type="text" name="email" />
            {inputs.email.length <5 ? "Your email must be at least 5 characters." : ""} 
            </div>

            <div className="form-group">
            <label htmlFor='password'>Password:</label>
            <input onChange={onChange} type="password" name="password" />
            {inputs.password.length <8 ? "Your password must be at least 8 characters." : ""} 
            </div>

            <div className="form-group">
            <label htmlFor='confirmPassword'>Confirm Password:</label>
            <input onChange={onChange} type="password" name="confirmPassword" />
            {inputs.confirmPassword.length <8 ? "Your password be at least 8 characters." : ""} 
            </div>
        </form>
    );
};

export default Forms