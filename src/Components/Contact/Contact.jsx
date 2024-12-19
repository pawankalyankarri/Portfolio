import './contact.css';
import { LocationOn, Mail, Phone } from '@mui/icons-material';
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "83bdcd77-edad-4891-b1c9-4a5a66313eb0");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
      };
    return(
        <div id='contact' className='contact'>
            <div className='contact-title'>
                <h1>GET IN TOUCH</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <p className='mail'><Mail/> pawankalyankarri22@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <p><Phone/>  7658946235</p>
                        </div>
                        <div className="contact-detail">
                            <p><LocationOn/>  AP, INDIA</p>
                        </div>
                    </div>
                </div>
                <h4 >Send your opinion</h4>
                <form onSubmit={onSubmit} className='contact-right' >
                    <label htmlFor='name' >Your Name</label>
                    <input type='text' id='name' placeholder='Enter your Name' name='name'/>
                    <label htmlFor='email' >Your Email</label>
                    <input type='email' id='email' placeholder='Enter your email' name='email'/>
                    <label  htmlFor='message' >Write your message here</label>
                    <textarea name='message' id='message' rows='5' placeholder='Enter your Message here'></textarea>
                    <button type='submit' className='contact-submit' >Submit</button>

                </form>
            </div>
        </div>
    )
}
export default Contact;