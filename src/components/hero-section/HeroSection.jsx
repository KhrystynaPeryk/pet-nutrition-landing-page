import './HeroSection.css';
import FeatureBox from './FeatureBox';

function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-sub-section">
                <h2>What makes us different<br />makes them stronger</h2>
            </div>

            <div className="hero-sub-section">
                <div className="hero-features">
                    <FeatureBox imgSrc="/food 1.png" title="Real Food">
                        Wholesome recipes for dogs with real<br /> meat and veggies.
                    </FeatureBox>

                    <FeatureBox imgSrc="/pet-bowl 1.png" title="Premium Ingredient">
                        Elevating pet care with unmatched<br /> safety and quality.
                    </FeatureBox>
                </div>

                <div className="hero-features">
                    <img src="/bowl.png" alt="Bowl" />
                </div>

                <div className="hero-features">
                    <FeatureBox imgSrc="/pet-food 1.png" title="Made Fresh">
                        We prioritize maintaining the integrity<br /> of whole foods and nutrition.
                    </FeatureBox>

                    <FeatureBox imgSrc="/vet 1.png" title="Vet Developed">
                        We raise the bar for dog nutrition,<br /> surpassing industry expectations.
                    </FeatureBox>
                </div>
            </div>

            <div className="hero-btn-section">
                <button type="button">Get your dog's healthy meal today!</button>
                <img src="/payment.png" alt="Payment types" />
            </div>
        </section>
    );
}

export default HeroSection;
