import './NutritionSection.css'

const NutritionSection = () => {
    return (
        <section className="nutrition-section">
            <div className="nutrition-text">
                <h2 className='app-h2'>Nutrition is the foundation for
                    <br/> 
                    longer, healthier lives in dogs.
                </h2>
                <p className='app-p'>
                    Invest in your dog's future with our scientifically formulated superfood-powered supplements. 
                    Give them the nutrition they deserve and watch them thrive with vitality, energy, and the joy of a longer, healthier life.
                </p>
                <h4><strong>Key Points:</strong></h4>
                <ul className="key-points">
                    <li>
                        <div className='key-points-percent'>97%</div>
                        <p className='app-p'>Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor.</p>
                    </li>

                    <li>
                        <div className='key-points-percent'>84%</div>
                        <p className='app-p'>Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption.</p>
                    </li>

                    <li>
                        <div className='key-points-percent'>92%</div>
                        <p className='app-p'>Our dog food's high protein and fat digestibility contribute to ideal stool quality.</p>
                    </li>
                </ul>

                <div className="nutrition-section-btn">
                    <button type="button">Give your furry friend the gift of wholesome nutrition</button>
                </div>
            </div>
        
            <div className="nutrition-image">
                <img src="/Dog.png" alt="Happy dog with product" />
            </div>
        </section>
    );
}

export default NutritionSection