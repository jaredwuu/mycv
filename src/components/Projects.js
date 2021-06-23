import React,{useState} from 'react'
import emailjs from 'emailjs-com'
import Popup from './Popup'
const Projects = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_0h03tlf', 'template_pqlx68j', e.target, 'user_KBeMbHteCAfFwwMDq6Ez9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="py-5">
            <div className="container border-2 px-20 py-10 center">
                <form className="contact-form" onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number" />
                    <div className="flex justify-between">
                        <div className="input-field w-1/2 pr-4">
                            <label>Name</label>
                            <input type="text" name="user_name" required />
                        </div>
                        <div className="input-field w-1/2">
                            <label>Email</label>
                            <input type="email" name="user_email" required />
                        </div>
                    </div>
                    <div className="input-field">
                        <label>Subject</label>
                        <input type="text" name="subject" />
                    </div>
                    <label className="text-2xl py-2">Message</label>
                    <textarea className='border-2 h-52' name="message" required/>
                    <div className="pt-5">
                        <button class="btn blue darken-2 waves-effect waves-light" type="submit" name="action">Submit
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </form>
                <div>
                    <input
                        type="button"
                        value="Send"
                        onClick={togglePopup}
                    />
                    {isOpen && <Popup
                        content={<>
                            <b>Design your Popup</b>
                            <button>Test button</button>
                        </>}
                        handleClose={togglePopup}
                    />}
                </div>
            </div>
        </div>
    );

}

export default Projects
