import "./contact.css"
import Phone from "../../img/telephone_1.png"
import Location from "../../img/location.png"
import Mail from "../../img/mail.png"
import Github from "../../img/github.png"
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_top0qwb",
                "template_tmthq87",
                formRef.current,
                "user_XsSo4tKqz8JrCcCpFWUow"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true)
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div className="c">
            <div className="c-bg">
                <div className="c-bg2"></div>
            </div>
            <div className="c-wrapper">

                <div className="c-left">
                    <h1 className="c-title">Contact Me</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                src={Phone}
                                alt=""
                                className="c-icon"
                            />
                            +47 984 11 506
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Mail}
                                alt=""
                                className="c-icon"
                            />
                            michael.sh.zaar@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Location}
                                alt=""
                                className="c-icon"
                            />
                            0772, Oslo
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Github}
                                alt=""
                                className="c-icon"
                            />
                            <a href="https://github.com/Msh-zaar">https://github.com/Msh-zaar</a>
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        If you're interested in working with me feel free to contact me with the form below!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && <div className="thanks">Your message was sent, thank you!</div>} 
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
