import { useState } from 'react';
import './form.css'
import {Link} from 'react-router-dom'
export function FormComp2() {
  return (
    <>
    <div>
        <meter value="0" min="1" max="4"/>
    </div>
    <div className='main-container'>
      <h3>Create</h3>
      <h5>Step 1</h5>
      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="email" placeholder="Email" className="input" />
        <input type="password" placeholder="Password" className="input" />
        <input type="password" placeholder="Confirm Password" className="input" />
        <div className='btn-card'>
        <Link to="/page1" className='btn'>Next</Link>
        </div>
      </form>
    </div>
    </>
  );
}


export function ChildForm1() {
  return (
    <>
    <div>
        <meter value="1" min="0" max="2"/>
    </div>
    <div className='main-container'>
      <h4>Social Profile</h4>
      <h5>Step 2</h5>
      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="email" placeholder="Twitter" className="input" />
        <input type="password" placeholder="Facebook" className="input" />
        <input type="password" placeholder="Instagram" className="input" />
        <div className='btn-card'>
        <Link to="/" className='btn'>Previous</Link>
        <Link to="/page2" className='btn'>Next</Link>
        </div>
      </form>
    </div>
    </>
  );
}
export function ChildForm2() {
    const [submit,setSubmit]=useState(false);
  return (
    <>
    <div>
        <meter value="4" min="1" max="4"/>
    </div>
    <div className="main-container">
      <h3>Personal Detail</h3>
      <h5>Step 3</h5>
      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="email" placeholder="Email" className="input" />
        <input type="password" placeholder="Password" className="input" />
        <input type="password" placeholder="Password" className="input" />
        <textarea placeholder='Comment'></textarea>
        <div className='btn-card'>
        <Link to="/page1" className='btn'>Previous</Link>
        <button className='btn' onClick={()=>setSubmit(true)}>Submit</button>
        </div>
      </form>
    </div>
    {submit && <h3 style={{color:'white'}}>Your form is submitted</h3>}
    </>
  );
}