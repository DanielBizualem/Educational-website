import React from 'react'
import './Contact.css'
import message_icon from '../../asset/msg-icon.png'
import mail_icon from '../../asset/mail-icon.png'
import phone_icon from '../../asset/phone-icon.png'
import location_icon from '../../asset/location-icon.png'
import white_arrow from '../../asset/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "383bcf22-b5b7-4e34-abe7-cea0df19a466");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a Message <img src={message_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. 
                Your feedback,questions, and suggestions are important to us as we strive to 
                provide exceptional service to our  university community.</p>
                <ul>
                    <li> <img src={mail_icon} alt="" />danielbizualem4@gmail.com</li>
                    <li> <img src={phone_icon} alt="" />+251-989-95-78-54</li>
                    <li> <img src={location_icon} alt="" />Nekemte, Oromia, Ethiopia</li>
                </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name:</label>
                <input type="text" name='name' placeholder='Enter Your name' required/>
                <label>Your Phone:</label>
                <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required/>
                <label>Write Your Message:</label>
                <textarea name="message" rows="6" placeholder='Enter Your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact