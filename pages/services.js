import React from 'react'

const Services = () => {
  const hero = './images/hero-3.jpeg';
  return (
    <div>
    {/* <!-- SECION ABOUT --> */}
    
    <section className="align-items-center bg-img bg-img-fixed" id="food-menu-section"
    style={{backgroundImage: `url(${hero})`}}>
    <div className="container">
        <div className="content">
        <h1>
        <span className="primary-color">S</span>ervices
        </h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias aliquam eveniet, iure
                    praesentium dicta ex dolorum inventore itaque minus repudiandae, odio provident? Velit architecto
                    natus expedita non? Odio, dolorum.
                </p>
                <div className="food-category">
                    <div className="zoom play-on-scroll">
                        <button className="active" data-food-type="all">
                            All food
                        </button>
                    </div>
                    <div className="zoom play-on-scroll delay-2">
                        <button data-food-type="salad">
                            Salad
                        </button>
                    </div>
                    <div className="zoom play-on-scroll delay-4">
                        <button data-food-type="lorem">
                            Lorem
                        </button>
                    </div>
                    <div className="zoom play-on-scroll delay-6">
                        <button data-food-type="ipsum">
                            Ipsum
                        </button>
                    </div>
                    <div className="zoom play-on-scroll delay-8">
                        <button data-food-type="dolor">
                            Dolor
                        </button>
                    </div>
                </div>

                <div className="food-item-wrap all">
                    <div className="food-item salad-type">
                        <div className="item-wrap bottom-up play-on-scroll">
                            <div className="item-img">
                                <div className="img-holder bg-img"
                              style={{backgroundImage: `url(${hero})`}}
                                    
                                    >

                                      
                                    </div>
                            </div>
                            <div className="item-info">
                                <div>
                                    <h3>
                                        Lorem ipsum
                                    </h3>
                                    <span>
                                        120$
                                    </span>
                                </div>
                                <div className="cart-btn">
                                    <i className="bx bx-cart-alt"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="food-item lorem-type">
                        <div className="item-wrap bottom-up play-on-scroll">
                            <div className="item-img">
                                <div className="img-holder bg-img"
                                    style={{backgroundImage: `url(${hero})`}}></div>
                            </div>
                            <div className="item-info">
                                <div>
                                    <h3>
                                        Lorem ipsum
                                    </h3>
                                    <span>
                                        120$
                                    </span>
                                </div>
                                <div className="cart-btn">
                                    <i className='bx bx-cart-alt'></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="food-item ipsum-type">
                        <div className="item-wrap bottom-up play-on-scroll">
                            <div className="item-img">
                                <div className="img-holder bg-img"
                                    style={{backgroundImage: `url(${hero})`}}>
                                </div>
                            </div>
                            <div className="item-info">
                                <div>
                                    <h3>
                                        Lorem ipsum
                                    </h3>
                                    <span>
                                        120$
                                    </span>
                                </div>
                                <div className="cart-btn">
                                    <i className='bx bx-cart-alt'></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="food-item lorem-type">
                        <div className="item-wrap bottom-up play-on-scroll">
                            <div className="item-img">
                                <div className="img-holder bg-img"
                                    style={{backgroundImage: `url(${hero})`}}></div>
                            </div>
                            <div className="item-info">
                                <div>
                                    <h3>
                                        Lorem ipsum
                                    </h3>
                                    <span>
                                        120$
                                    </span>
                                </div>
                                <div className="cart-btn">
                                    <i className='bx bx-cart-alt'></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="food-item dolor-type">
                        <div className="item-wrap bottom-up play-on-scroll">
                            <div className="item-img">
                                <div className="img-holder bg-img"
                                    style={{backgroundImage: `url(${hero})`}}>

                                    </div>
                            </div>

                        </div>
                    </div>

                    <div className="food-item salad-type">
                        <div className="item-wrap bottom-up play-on-scroll">
                          <div className="item-img">
                            <div className="img-holder bg-img"
                            style={{backgroundImage: `url(${hero})`}}>

                            </div>
                            </div>

                        </div>
                    </div>

                    <div className="food-item lorem-type">
                        <div className="item-wrap bottom-up play-on-scroll">
                            <div className="item-img">
                                <div className="img-holder bg-img"

                                    >
                                      
                                    </div>
                            </div>

                        </div>
                    </div>

                    <div className="food-item dolor-type">
                        <div className="item-wrap bottom-up play-on-scroll">
                            <div className="item-img">
                                <div className="img-holder bg-img"
                                    
                                    
                                    >
                                      
                                    </div>
                            </div>
                            <div className="item-info">
                                <div>
                                    <h3>
                                        Lorem ipsum
                                    </h3>
                                    <span>
                                        120$
                                    </span>
                                </div>
                                <div className="cart-btn">
                                    <i className='bx bx-cart-alt'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- END SECION SERVICES --> */}
  
    </div>
  )
}

export default Services
