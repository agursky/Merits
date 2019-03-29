import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Input from './Input';
import ListTodo from './ListTodo';
import Hello from './Hello';
import Goodbye from './Goodbye';
import SignUp from './SignUp';

class Todo extends Component {
    state = {
        todos: []
    }
    
    componentDidMount() {
        this.getTodos();
    }

    getTodos = () => {
        axios.get('/api/todos')
        .then(res => {
            if(res.data) {
                this.setState({
                    todos: res.data
                })
            }
        })
        .catch(err => console.log(err));
    }
    
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
                        </ul>
                    </div>
                <h1>My Todos</h1>
                <Input getTodos={this.getTodos}/>
                <Route path='/hello' component={Hello} />
                <Route path='/goodbye' component={Goodbye} />
                <Route path='/signup' component={SignUp} />
                </Router>
            <ListTodo todos={this.state.todos} deleteTodo={this.deleteTodo}/>
            </div>
        )
    }
}

export default Todo;