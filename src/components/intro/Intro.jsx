import "./intro.css"
import MZ_headshot from "../../img/MZ_headshot.png"

const intro = () => {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="intro-intro">Hello, my name is</h2>
                    <h1 className="intro-name">Michael Zaar</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="intro-title-item">Web Development</div>
                            <div className="intro-title-item">Translation</div>
                            <div className="intro-title-item">Full Stack</div>
                            <div className="intro-title-item">Python</div>
                            <div className="intro-title-item">JS</div>
                        </div>
                    </div>
                    <p className="intro-description">
                        I am an aspiring full stack developer that is interested in web development, 
                        UX/UI and natural language processing.
                    </p>
                </div>
            </div>
            <div className="intro-right">
                <div className="intro-bg"></div>
                    <div className="intro-bg2"></div>
                <img src={MZ_headshot} alt="" className="intro-img" />
            </div>
        </div>
    )
}

export default intro
