import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
return (
<div className='homeWrapper w-full h-full bg-slate-100'>
    <div className='px-44 py-20 pb-1'>
        <div>

            <Link to="/dashboard" className='home-btn-container'>
                <div className='home-btn'>Assignment</div>
                <span></span>
            </Link>
        </div>
        <h1 className='text-white -400 font-130 home-header'>UI Developer <br /> Assignment</h1>
        <div className='org-name text-white'>
            <p>Company</p>
            <p>Juspay Technologies Private Limited</p>
        </div>
    </div>
</div>
)
}

export default Home;