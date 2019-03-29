import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit(e) {
        e.preventDefault();
        axios.post('/api/user', {
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            console.log(response);
        })
    }
    
    render() {
        return(
            <div>
                <h4>Sign Up</h4>
                <form>
                    <label>
                    Username
                        <input type='text' name='username' value={this.state.username} onChange={this.handleChange}/>
                    </label>
                    <label>
                    Password
                        <input type='password'name='password' value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <label>
                    Confirm Password
                        <input type='password'name='confirmPassword' value={this.state.confirmPassword} onChange={this.handleChange}/>
                    </label>
                    <button type='submit' onClick={this.handleSubmit}>Sumbit</button>
            
                </form>
            </div>
        )
    }
}

export default SignUp;