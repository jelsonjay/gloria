import React from 'react'

const Contact = () => {
  return (
    <>
  <section className="about fullheight" id="contact">
    
    <div className="container-form">
     <div className='content'>
      <h1 className='align-items-center'>
      <span className="primary-color">C</span>ontact Us
      </h1>
      <div>
      <form name='contact' method='POST'>
      <div className='form-group'>
      <label htmlFor='name' id='name'>Name</label>
      <input type='text' id='name' name='name' />
      </div>
      <div className='form-group'>
      <label htmlFor='name' id='name'>Email</label>
      <input type='text' id='email' name='email' />
      </div>
      <div className='form-group'>
      <label htmlFor='name' id='name'>Subject</label>
      <input type='text' id='subject' name='subject' />
      </div>
      <div className='form-group'>
      <label htmlFor='message' id='message'>Message</label>
      <textarea id='message' cols='30' rows='5' name='message' />
      </div>
      <p>
      <button type='submit'>Send Enquiry</button>
      </p>
      </form>
     
      </div>
     </div>
      </div>

    </section>
    </>
  )
}

export default Contact
