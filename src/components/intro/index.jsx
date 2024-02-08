import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Intro = ({ data }) => {
    return (
        <div className="intro-section section overlay">
            <img
                src={data.backgroundImage}
                alt="intro"
                className="intro-section img"
            />
            <div className="container">
                <div className="row row-cols-lg-1 row-cols-1">
                    <div className="col align-self-center">
                        <div className="intro-content">
                            <span className="sub-title">{data.subTitle}</span>
                            <h2 className="title">{data.title}</h2>
                            <div className="desc">
                                <p>{data.desc}</p>
                            </div>
                            <Link
                                to={process.env.PUBLIC_URL + "/"}
                                className="intro-btn"
                            >
                                {data.buttonText}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Intro.propTypes = {
    data: PropTypes.object,
};

export default Intro;
