import React, {Component} from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { signInWithGooge } from '../firebase/firebase.utils';

import './sign-in.scss';

class Signin extends Component {
    state = {
        email: '',
        password: ''
    }


    handleSubmit = event => {
        event.preventDefault();
    }

    handleChange = event => {
        const {name,value} = event.target;
        this.setState({ [name] : value});
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" label="Email" handleChange={this.handleChange} value={this.state.email} required />
                    <FormInput type="password" name="password" label="Password" handleChange={this.handleChange} value={this.state.password} required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGooge} isSignInWithGoogle>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}


export default Signin

