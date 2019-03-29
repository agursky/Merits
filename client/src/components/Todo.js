import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Input from './Input';
import ListTodo from './ListTodo';
import Hello from './Hello';
import Goodbye from './Goodbye';
import SignUp from './SignUp';
import SignIn from './SignIn';

class Todo extends Component {
    state = {
        todos: [],
        users: []
    }
    
    componentDidMount() {
        this.getTodos();
//        this.getUsers();
    }

    getTodos = () => {
        axios.get('/api/todos')
        .then(res => {
            if(res.data) {
                console.log('todos');
                console.log(res.data);
                this.setState({
                    todos: res.data
                })
            }
        })
        .catch(err => console.log(err));
    }
    
//    getUsers = () => {
//        console.log('getting users');
//        axios.get('/api/user')
//        .then(res => {
//            if(res.data) {
////                this.setState({
////                    users: res.data
////                })
////                console.log(this.state.users);
//                console.log(res.data);
//            }
//        })
//        .catch(err => console.log(err));
//    }
    
    deleteTodo = (id) => {

    axios.delete(`/api/todos/${id}`)
      .then(res => {
        if(res.data){
          this.getTodos()
        }
      })
      .catch(err => console.log(err))
  }

    render() {
        let { todos } = this.state;
        return(
            <div>
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to='/hello'>Hello</Link>
                            </li>
                            <li>
                                <Link to='/goodbye'>Goodbye</Link>
                            </li>
                            <li>
                                <Link to='/signup'>Sign Up</Link>
                            </li>                            
                            <li>
                                <Link to='/login'>Log In</Link>
                            </li>
                        </ul>
                    </div>
                <h1>My Todos</h1>
                <Input getTodos={this.getTodos}/>
                <Route path='/hello' component={Hello} />
                <Route path='/goodbye' component={Goodbye} />
                <Route path='/signup' component={SignUp} />
                <Route path='/login' component={SignIn} />
                </Router>
            <ListTodo todos={this.state.todos} deleteTodo={this.deleteTodo}/>
            </div>
        )
    }
}

export default Todo;