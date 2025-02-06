import main_logo from "../../assets/logos/main-logo (2).png"
import "../About/About.css"

const About = () => {
    return (
        <section>
            <div className="about" id="about-section">
                <img src={main_logo} alt="" />
                <div className="about_text">
                    All technical works, tuning, installation/creation of your own body kits, new rims and tires.
                    Our own shop - stickers, body kits, clothes, auto parts.<br />
                    That's all and everything else you can find here 👇
                </div>
                <div className="about_location">
                    <p>Location<br/>
                    位置
                    </p>
                    <div className="location">
                        Tokyo, Shibuya City, Sakura St. 11-23
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About