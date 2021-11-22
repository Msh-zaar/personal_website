import "./about.css"

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card bg"></div>
                    <div className="about-card bg2"></div>
                        <div className="about-card">
                            <img 
                            src="https://images.pexels.com/photos/8658962/pexels-photo-8658962.jpeg?cs=srgb&dl=pexels-tatyana-8658962.jpg&fm=jpg" 
                            alt="" 
                            className="about-img" 
                            />
                        </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">
                    About me
                </h1>
                <p className="about-description">
                    I studied linguistics and computer science at Oslo university and I am currently looking for new challenges!
                    My hobbies include: #1, #2 and #3 <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse deleniti similique amet nobis nesciunt, qui et suscipit. 
                    Pariatur, quia nobis reprehenderit omnis blanditiis asperiores, laborum, doloremque quam architecto vero explicabo. <br />
                    <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum iure odit dolor similique praesentium excepturi 
                    libero vitae eos quibusdam unde dolorem, quo aut a, nihil odio sapiente totam ratione eius?
                </p>
            </div>
        </div>
    )
}

export default About
