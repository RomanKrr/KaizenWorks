import banner_image from "../../assets/photos/banner.png"
import "../Banner/Banner.css";
import banner_logo from "../../assets/logos/dragon-logo.png"

const Banner = () => {
    return (
        <section>
            <div className="banner">
                <img className="banner-img" src={banner_image} alt="" />
                <p className="st left">Power of style</p>
                <div className="txt">
                    カイゼンワークス
                </div>
                <p className="st right">"The best style decision that you can imagine."</p>
            </div>
            <div className="banner_text">
                <p>
                    We are your gateway to the world of Japanese car culture.
                    Bringing your car to life with custom tuning that's all about style, precision, and personality.
                </p>
                <img src={banner_logo} alt="dragon" className="bg-dragon" />
            </div>
        </section>
    )
}

export default Banner