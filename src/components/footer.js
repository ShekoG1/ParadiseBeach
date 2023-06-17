import React from 'react'
import { Button } from './button'
import "./styles/footer.css";

function Footer() {

    var heart_svg = 
    <label htmlFor="checkbox">
          <svg id="heart-svg" viewBox="467 350 58 57" xmlns="http://www.w3.org/2000/svg">
            <g id="Group" fill="none" fillRule="evenodd" transform="translate(467 392)">
              <path id="heart" d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" fill="#AAB8C2"/>
              <circle id="main-circ" fill="#E2264D" opacity="0" cx="29.5" cy="29.5" r="1.5"/>
    
              <g id="grp7" opacity="0" transform="translate(7 6)">
                <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2"/>
                <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2"/>
              </g>
    
              <g id="grp6" opacity="0" transform="translate(0 28)">
                <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2"/>
                <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2"/>
              </g>
    
              <g id="grp3" opacity="0" transform="translate(52 28)">
                <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2"/>
                <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2"/>
              </g>
    
              <g id="grp2" opacity="0" transform="translate(44 6)">
                <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2"/>
                <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2"/>
              </g>
    
              <g id="grp5" opacity="0" transform="translate(14 50)">
                <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2"/>
                <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2"/>
              </g>
    
              <g id="grp4" opacity="0" transform="translate(35 50)">
                <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2"/>
                <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2"/>
              </g>
    
              <g id="grp1" opacity="0" transform="translate(24)">
                <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2"/>
                <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2"/>
              </g>
            </g>
          </svg>
        </label>

  return (
    <div className='footer-container'>
        <section className='footer'>
            
            <h6 id='thanks'>Thanks for visiting!</h6>
            <div className="footer-details">
                <div className='contact-detail'>
                    <h2>Contact Details</h2>
                    <ul>
                        <li><h4>Email Address:</h4>admin@enquiries.com</li>
                        <li><h4>Phone Number</h4>444-564-2235</li>

                        <li><h4>Street Address</h4>4544 Amaan Road<br/>Pasadena<br/>California<br/>50555</li>
                    </ul>
                </div>

                <div className='contact-form'>
                    <h3>Direct Message</h3>
                    <form>
                        <input className='footer-input' type='email' name='email' placeholder='Your Email'/>
                        <textarea className='footer-input' type='text' name='message' placeholder='Your Message'>

                        </textarea>

                        <Button buttonStyle='btn-outline'>Send</Button>
                    </form>
                </div>
            </div>
            <br/>
            <p className='footer-builtby'>Made with <input type="checkbox" className="checkbox" id="checkbox" />{heart_svg} by <a href="https://www.theshekharmaharaj.com">Shekhar Maharaj</a>
            </p>
        </section>
    </div>
  )
}

export default Footer