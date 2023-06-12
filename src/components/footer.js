import React from 'react'
import { Button } from './button'
import "./styles/footer.css";

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-builtby'>
            <p className='footer-builtby-heading'>Made with &#xf004; by <a href="https://www.theshekharmaharaj.com">Shekhar Maharaj</a>
            </p>
            <h2>Contact Us</h2>
            <h3>Contact Details</h3>
            <ul>
                <li>admin@enquiries.com</li>
                <li>444-564-2235</li>

                <li>4544 Amaan Road<br/>Pasadena<br/>California<br/>50555</li>
            </ul>
            <span>OR</span>
            <div className='input areas'>
                <h3>Direct Message</h3>
                <form>
                    <input className='footer-input' type='email' name='email' placeholder='Your Email'/>
                    <input className='footer-input' type='text' name='message' placeholder='Your Message'/>

                    <Button buttonStyle='btn-outline'>Send</Button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Footer