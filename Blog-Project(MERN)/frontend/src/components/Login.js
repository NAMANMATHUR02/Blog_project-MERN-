import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import NavbarM from './NavbarM';
// import About from './About';

function Login() {
  const [email,setemail]=useState('');
  const [pass,setpass]=useState('');
  const [msg,setmsg]=useState('');
  const history=useHistory()

  function LoginCheck(e){
    e.preventDefault()
    let data ={   
    email:email,
    password:pass
  }
  axios.post('http://localhost:3000/login',data)
  .then(resp=>{
    if(resp.data=="1"){
    setmsg("Sucesful login")
    history.push('/posts')}
    else if(resp.data=="0")
    setmsg("Invaild Credentials")
    else
    setmsg("no user founded! click on register")
  })
  .catch(err=>console.log(err));
}
    return (
      <React.Fragment>
      <NavbarM/>
        <div className = 'container'> 
        <h2 className='m-5 text-center'>Login </h2>
        <form onSubmit={(e)=>LoginCheck(e)} className='col-md-5 mx-auto'>
        <h5 className='p-3 text-center'>{msg}</h5>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" value={email} className="form-control" onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter email" required/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" value={pass} className="form-control" onChange={(e)=>{setpass(e.target.value)}} placeholder="Password" required/>
  </div>
  <button type="submit" className="btn btn-primary mb-5">Submit</button>
  
</form>
<Link to = '/register' style={{textDecoration:'none'}} className="text-center mt-5"><h5>Not a member? Register Here</h5></Link>
</div>
</React.Fragment>    )
}

export default Login;
