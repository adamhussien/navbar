import React, { useState } from 'react';
import './index.css';


function App() {
  const [open, setopen] = useState(false)
  const toggole = function(){
    setopen(!open)
  }
 return(
  <div>
    <Navbar ontoggle={toggole} open={open}/>
  </div>
 )
}

export default App;
function Navbar({ontoggle, open}){
  return (
    <div className='flex justify-between items-center p-[1rem]  m-[1rem]  '> 
       
       <div className='uppercase font-bold text-zinc-100 text-[1.6rem] '>adm</div>
       <ul className={`  flex justify-between items-center gap-4 navlinks ${open ? "active" : ""}`}>
         <i  className='uppercase text-[1.2rem] text-[#fff] font-bold hover:text-gray-500 transition ease-out'>home</i>
         <i  className='uppercase text-[1.2rem] text-[#fff] font-bold hover:text-gray-500 transition ease-out' >about</i>
         <i  className='uppercase text-[1.2rem] text-[#fff] font-bold hover:text-gray-500 transition ease-out'>service</i>
         <i className='uppercase text-[1.2rem] text-[#fff] font-bold hover:text-gray-500 transition ease-out' >contact</i>
       </ul>
       <div  className='uppercase text-[#ffff] text-[2rem] font-bold toggle' onClick={ontoggle}>{open ? "X" : '☰' }</div>
    </div>
   );
}








