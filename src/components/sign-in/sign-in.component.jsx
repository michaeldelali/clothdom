import React from 'react';

import './sign-in.styles.scss';
import FormInput from  '../form-input/form-input.component';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
        }
    }

    handleSubmit=event=>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }

    handleChange = event => {
        const {name,value} = event.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Sign In using your Email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name ="email" 
                        value={this.state.email}
                        label = "email" 
                        required 
                        handleChange={this.handleChange} />
                    
                    <FormInput 
                        type="password" 
                        name ="password" 
                        value = {this.state.password}
                        label = 'password' 
                        required 
                        handleChange={this.handleChange} />

                    <input type="submit" value="Submit form"/>
                </form>
            </div>
        )
    }
}

export default SignIn;