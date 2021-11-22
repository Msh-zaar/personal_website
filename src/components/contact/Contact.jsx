import "./contact.css"
import Phone from "../../img/telephone_1.png"
import Location from "../../img/location.png"
import Mail from "../../img/mail.png"

const Contact = () => { 
    return (
        <div className="c">
            <div className="c-bg">
                <div className="c-bg2"></div>
            </div>
                
                    <div className="c-wrapper">
                        <div className="c-right">
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
                                </div>
                        </div>
            </div>
        </div>
    )
}

export default Contact
