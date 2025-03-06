import './HealthSection.css'
const HealthSection = () => {
    return (
        <section className="health-section">
            <div className="health-image">
                <img src="/dogs.png" alt="Two dogs with product" />
            </div>
            <div className="health-content">
                <h2>
                    Improve overall
                    <br />
                    gastrointestinal health for
                    <br />
                    better nutrient absorption
                </h2>
                <p>
                    Through rigorous scientific studies and consultations with veterinarians, we have created a breakthrough formula exclusively tailored to combat the health challenges prevalent in dogs. 
                    A staggering 91% of our customers have reported significant improvements in their dogs' health after incorporating our product into their diet.
                </p>
            </div>
        </section>
    )
}

export default HealthSection