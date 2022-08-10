import './Form.css'
import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'



const Form = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i5aas84', 'template_xik28cj', form.current, '0CsebndeGgMklEj1e')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  }

  return (
    <div className='form'>
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input name='name' type='text'></input>
            <label>Email</label>
            <input name='userEmail' type='email'></input>
            <label>Subject</label>
            <input type='text'></input>
            <label>Message</label>
            <textarea name='message' rows='6' placeholder='Type your message here'></textarea>
            <button type='submit' className='btn' value='send'>Submit</button>
        </form>
    </div>
  )
}

export default Form