import React from 'react'
import NavbarM from './NavbarM';
import background from '../image/background.jpg';
function Home() {
    return (
        <div style={{ backgroundImage: `url(${background})`,backgroundRepeat:'no-repeat' , backgroundSize: 'cover'}}>
        <div>
        <NavbarM/>
        <div className="homepage">
            <p>WELCOME EVERYONE</p>
            <h1>Create Your Own Beautiful Blog</h1>
            <h5 style={{color: "red"}}>To access our blog site you must be Login Yourself</h5>
        </div>
        <div className="dics">
        <h4 style={{color: "green"}}>WHAT IS A BLOG ?</h4>
        <p>A blog is an online diary or journal located on a website. The content of a blog typically includes text, pictures, videos, animated GIFs and even scans from old physical offline diaries or journals and other hard copy documents. Since a blog can exist merely for personal use, sharing information with an exclusive group or to engage the public, a blog owner can set their blog for private or public access.</p>
        </div>
        </div>
        </div>
    )
}

export default Home;
