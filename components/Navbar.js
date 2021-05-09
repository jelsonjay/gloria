import React from 'react'

const Navbar = () => {
  return (
    <>
    {/* <!-- TOP NAVIGATION --> */}
    <div className="nav">
        <div className="menu-wrap">
            <a href="#home">
                <div className="logo">
            <img src="images/logo.png" alt="Logo" width='120' height='100'/>
                </div>
            </a>
            <div className="menu h-xs">
                <a href="#home">
                    <div className="menu-item active">
                        Home
                    </div>
                </a>
                <a href="#about">
                    <div className="menu-item">
                        About Us
                    </div>
                </a>
                <a href="#food-menu-section">
                    <div className="menu-item">
                    Services
                    </div>
                </a>
                <a href="#contact">
                    <div className="menu-item">
                    Contact
                    </div>
                </a>
            </div>
            <div className="right-menu">
                <div className="cart-btn">
                    <i className='bx bx-cart-alt'></i>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- END TOP NAVIGATION --> */}
    </>
  )
}

export default Navbar