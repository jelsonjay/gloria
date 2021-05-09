import React from 'react'

 const Hero = () => {
  const hero = './images/hero.jpeg';
  return (
    <div>
    <section id="home" className="fullheight align-items-center bg-img bg-img-fixed"
        style={{backgroundImage: `url(${hero})`}}>
  
    <div className="slogan">
    <h1 className="align-items-center">
     Welcome to Gloriavd Health Care LTD 
    </h1>
    <p className="align-items-center">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </p>
    </div>
    </section>
    </div>
  )
}

export default Hero