import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:"250px",marginTop:'100px'}} className='mt-5 w-full bg-blue-400 text-white p-4'>
      <div className='flex justify-between p-4'>
        <div style={{width:"400px"}} className='intro'>
          <h5 className='text-xl font-bold'><i className='fa-solid fa-truck-fast me-2'></i>E-Cart</h5>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos iusto excepturi neque et voluptas odit, dolor, modi eaque unde qui corrupti voluptates hic, eligendi repellat. Minus quas nobis saepe perspiciatis?</p>
          <p>code lincsjjkjkdjjeuerhjefnh</p>
          <p>currenly v3.5.3.4</p>
        </div>
        <div className='flex flex-col'>
          <h5 className='text-xl font-bold'>Link</h5>
          <Link to={'/'} style={{textDecoration:'none' ,color:'white'}}>Landing page</Link>
          <Link to={'/home'} style={{textDecoration:'none' ,color:'white'}}>Home page</Link>
          <Link to={'/history'} style={{textDecoration:'none' ,color:'white'}}>History page</Link>

        </div>
        <div className='flex flex-col'>
          <h5 className='text-xl font-bold'>Guid</h5>
          <a href='http://react.dev' style={{textDecoration:'none',color:'white'}} target='_blank'>React</a>
        <a href='http://react.dev' style={{textDecoration:'none',color:'white'}} target='_blank'>Reactbootstrap </a>
        <a href='http://react.dev' style={{textDecoration:'none',color:'white'}} target='_blank'>React router</a>
        </div>
        <div className='flex flext-col'>
          <h5 className='text-xl font-bold'>Contact us</h5>
          <div className='flex'>
            <input type='text' placeholder='enter your email here' className='rounded p-1'/>
            <button className='btn btn-info ms-2'>
              <i className='fa-solid fa-arrow-right'></i>
            </button>

          </div>
          <div className='icons flex justify-between mt-3'>
            <a href='' style={{textDecoration:"none",color:'white'}} target='_blank'><i className='fa-brands fa-twitter'></i></a>
            <a href='' style={{textDecoration:"none",color:'white'}} target='_blank'><i className='fa-brands fa-facebook'></i></a>
            <a href='' style={{textDecoration:"none",color:'white'}} target='_blank'><i className='fa-brands fa-instagram'></i></a>
            <a href='' style={{textDecoration:"none",color:'white'}} target='_blank'><i className='fa-brands fa-linkedin'></i></a>
            <a href='' style={{textDecoration:"none",color:'white'}} target='_blank'><i className='fa-brands fa-github'></i></a>
            <a href='' style={{textDecoration:"none",color:'white'}} target='_blank'><i className='fa-brands fa-phone'></i></a>
          </div>
        </div>
      </div>
      <p className='text-center mt-3 text-white'> copyRight &copy; may 2025 batch,build with reactr.redux  </p>
    </div>
  )
}

export default Footer