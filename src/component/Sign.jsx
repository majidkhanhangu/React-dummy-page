import React from 'react'
import './Sign.css'

function Sign() {
  return (
    <div className='Sign-up-div mt-8'>
    <div className="sign-up-inner mt-10">
<h1 className='text-black text-5xl text-center mt-12'>Sign up to Our Newsletter</h1>
<p className='text-black text-center text-2xl mt-12'>Be the first to receive exciting updates, exclusive promotions, and valuable travel tips from our team of experts.</p>
<div className="sign-up-form flex justify-center items-center gap-60 mt-10">
<div className="input-1 items-center mt-12">
<input className='input-1' type='text' placeholder='Yourname'></input>
</div>
<div className="input-2 mt-12">
<input className='input-2' type='text' placeholder='Password'></input>
</div>

</div>
    </div>
<div className="button-div w-2/5 mx-auto text-center justify-center items-center rounded-lg bg-red-600 mt-16">
<button className='inspire-button text-white border-white'>Inspire Me</button>
    </div>
</div>

  )
}

export default Sign
