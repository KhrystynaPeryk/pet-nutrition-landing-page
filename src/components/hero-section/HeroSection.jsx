
import './HeroSection.css'
function HeroSection() {
    return (
        <section className="hero-section">
            <div className='hero-sub-section'>
                <h2>What makes us different<br />makes them stronger</h2>
            </div>

            <div className='hero-sub-section'>
                <div className="hero-features">
                    <div className="feature-box">
                        <div className="feature-box-img">
                            <img src="/food 1.png" alt="Real Food" />
                        </div>
                        <div>
                            <h3>Real Food</h3>
                            <p>Wholesome recipes for dogs with real<br/> meat and veggies.</p>
                        </div>
                    </div>

                    <div className="feature-box">
                        <div className="feature-box-img">
                            <img src="/pet-bowl 1.png" alt="Premium Ingredients" />
                        </div>
                        <div>
                            <h3>Premium Ingredient</h3>
                            <p>Elevating pet care with unmatched<br/> safety and quality.</p>
                        </div>
                    </div>
                </div>

                <div className="hero-features">
                    <img src="/bowl.png" alt="Bowl" />
                </div>

                <div className="hero-features">
                    <div className="feature-box">
                        <div className="feature-box-img">
                            <img src="/pet-food 1.png" alt="Made Fresh" />
                        </div>
                        <div>
                            <h3>Made Fresh</h3>
                            <p>We prioritize maintaining the integrity<br/> of whole foods and nutrition.</p>
                        </div>
                    </div>

                    <div className="feature-box">
                        <div className="feature-box-img">
                            <img src="/vet 1.png" alt="Vet Developed" />
                        </div>
                        <div>
                            <h3>Vet Developed</h3>
                            <p>We raise the bar for dog nutrition,<br/> surpassing industry expectations.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='hero-btn-section'>
                <button type="button">Get your dog's healthy meal today!</button>
                <img src="/payment.png" alt="Payment types" />    
            </div>
        </section>
    );
}

export default HeroSection;
