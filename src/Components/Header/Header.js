import React, { useEffect, useState } from 'react';
import './Header.css';

const Home = () => {
 const [offSetY, setOffSetY] = useState(0);
 const handleScroll = () => setOffSetY(window.scrollY);

 

 console.log(offSetY)
  useEffect(() => {
    if(offSetY >= 1200) return
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    // gowon batng / milonga / stint ultra expanded
          <div className='header'>
            <h1 className='software-text' style={{transform: `translateY(${offSetY * 1}px)`}}>SOFTWARE</h1>
            <h1 className='title' style={{transform: `translateY(${offSetY * 1.5}px)`}}>Hi, I am Sean Siganoff.</h1>
            <h4 className='engineer-text' style={{transform: `translateY(-${offSetY * 0 }px)`}}> Engineer</h4>
          </div>

  )
}

export default Home