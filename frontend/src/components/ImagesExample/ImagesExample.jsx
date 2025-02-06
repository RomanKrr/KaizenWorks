import img1 from "../../assets/photos/corvette.jpg"
import img2 from "../../assets/photos/ae86.jpg"
import img3 from "../../assets/photos/s15.jpg"
import img4 from "../../assets/photos/s14.jpg"
import img5 from "../../assets/photos/22.jpeg"

import "../ImagesExample/ImagesExample.css";

const ImagesExample = () => {
    return (
        <section>
            <div className="images_example_container">
                <div className="images_header">
                    <p>"Cars - that's all what do we have"</p>
                    <p>私たちが持っているのは車だけです</p>
                </div>
                <div className="images_container">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <p className="vertical">伝説を牽引する</p>
                    <p className="horizontal">雰囲気を生きる</p>
                </div>
                <div className="images_footer">
                    <p>Drive the legend. Live the vibe.</p>
                </div>
            </div>
        </section>
    )
}

export default ImagesExample