import './HeroSection.css';

function FeatureBox({ imgSrc, title, children }) {
    return (
        <div className="feature-box">
        <div className="feature-box-img">
            <img src={imgSrc} alt={title} />
        </div>
        <div>
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
        </div>
    );
}

export default FeatureBox;