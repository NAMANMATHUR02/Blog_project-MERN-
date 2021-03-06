import React, {useState,useEffect} from 'react';
import Navbar from './Navbar';
import axios from 'axios';

function Post() {
    const [post,setpost] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/posts')
        .then(res=>setpost(res.data))
        .catch(err=>console.log(err))
    })
    
    return (
        <div>
            <Navbar/>
            <h3 className="bg-primary text-center p-2">Hey!! check out the post</h3>
            {
                post.map((data,key)=>(
                    <div className='container'>
                    <h2>{data.title}</h2>
                    <span className='badge badge-dark p-2'>{data.auth}</span>
                    <h6 className='text-while mt-4'>{data.desc}</h6>
                    <hr style={{border:'1px dotted black'}} />
                    </div>
                ))
            }            
        </div>
    )
}

export default Post