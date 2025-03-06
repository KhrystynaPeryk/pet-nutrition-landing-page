import './PrebioticsSection.css'

const PrebioticsSection = () => {
    return (
        <section className="prebiotics-section">
        
            <div className="prebiotics-content">
                <h2>
                    Prebiotics nourish the
                    <br />
                    beneficial gut bacteria,
                    <br />
                    supporting digestive health
                </h2>
                <p>
                    Our dog food formula contains carefully selected prebiotics that work in harmony with the gut microbiota, 
                    providing the necessary nutrients for the growth and maintenance of beneficial bacteria, ultimately supporting digestive health.
                </p>
            </div>

            <div className="prebiotics-image">
                <img src="/meal.png" alt="Close-up of kibble" />
            </div>
        </section>
    )
}

export default PrebioticsSection