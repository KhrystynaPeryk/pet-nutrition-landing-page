
import './App.css'
import HeroSection from "./components/hero-section/HeroSection";
import NutritionSection from "./components/nutrition-section/NutritionSection";
import HealthSection from "./components/health-section/HealthSection";
import PrebioticsSection from "./components/prebiotics-section/PrebioticsSection";

function App() {

  return (
    <div className="App">
      <HeroSection />
      <NutritionSection />
      <HealthSection />
      <PrebioticsSection />
    </div>
  )
}

export default App
