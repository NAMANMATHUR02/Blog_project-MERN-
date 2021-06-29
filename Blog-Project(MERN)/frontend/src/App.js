import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Post from './components/Post';
import Addpost from './components/AddPost';


function App() {
  return (
    <Router>
    <Switch>
     <Route exact path='/' component={Home}></Route>
      <Route exact path='/About' component={About}></Route>
      <Route exact path='/login' component={Login} ></Route>
      <Route exact path='/register' component={Register} ></Route>
      <Route exact path='/posts' component={Post} ></Route>
      <Route exact path='/add-post' component={Addpost} ></Route>
    </Switch>
    </Router>
  );
}


export default App;
