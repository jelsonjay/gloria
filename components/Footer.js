import React from 'react'

const Footer = () => {
const hero = './images/hero-2.jpeg';
  return (
    <div>
     
    <section className="footer bg-img" style={{backgroundImage: `url(${hero})`}}>
        <div className="container">
            <div className="row">
                <div className="col-6 col-xs-12">
                    <h1>
                        Freshfood
                    </h1>
                    <br/>
                    <p>Email: example@mail.com</p>
                    <p>Phone: +00 123 456 789</p>
                    <p>Website: freshfood.com</p>
                </div>
                <div className="col-2 col-xs-12">
                    <h1>
                    About us
                    </h1>
                    <br/>
                    <p>
                    <a href="#">
                    Home
                    </a>
                    </p>
                    <p>
                    <a href="#">
                   About Us
                    </a>
                    </p>
                    <p>
                    <a href="#">
                    Services
                    </a>
                    </p>
                    <p>
                    <a href="#">
                    Contact
                    </a>
                    </p>

                    <p>
                        <a href="#">
                            Lorem ipsum
                        </a>
                    </p>
                </div>
                <div className="col-4 col-xs-12">
                    <h1>
                        Subscribe & media
                    </h1>
                  
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto aspernatur doloremque rerum nam
                        ullam obcaecati error asperiores temporibus quo eum eaque sed odio vitae accusantium, dolorem
                        nihil molestiae deserunt maxime!</p>
                    <div className="input-group">
                        <input type="text" placeholder="Enter your email" />
                        <button>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
  
    </div>
  )
}

export default Footer
