import React from 'react'

const About = () => {

  return (
    <div>
    {/* <!-- SECION ABOUT --> */}
    <section className="about fullheight align-items-center" id="about">
    
    <div className="container">
      <div className="content">
      <h1>
      <span className="primary-color">A</span>bout
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
            </div>
        </div>

    </section>
    {/* <!-- END SECION ABOUT --> */}
  
    </div>
  )
}

export default About
